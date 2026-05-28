# Hermes Agent 설정 배포 스크립트
# 실행: hermes-config\ 디렉토리에서 .\deploy.ps1

$ProjectRoot = Split-Path $PSScriptRoot -Parent
$HermesHome = Join-Path $env:USERPROFILE ".hermes"
$SkillsDest = Join-Path $HermesHome "skills"
$SkillsSrc  = Join-Path $PSScriptRoot "skills"

Write-Host "=== AI CEO OS → Hermes 배포 ===" -ForegroundColor Cyan
Write-Host "프로젝트: $ProjectRoot"
Write-Host "Hermes 홈: $HermesHome"

# Hermes 설치 확인
if (-not (Test-Path $HermesHome)) {
    Write-Host ""
    Write-Host "[오류] ~/.hermes 디렉토리가 없습니다." -ForegroundColor Red
    Write-Host "먼저 Hermes를 설치해주세요:"
    Write-Host "  iex (irm https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1)"
    exit 1
}

# 1. SOUL.md 배포
$SoulSrc  = Join-Path $PSScriptRoot "SOUL.md"
$SoulDest = Join-Path $HermesHome "SOUL.md"
if (Test-Path $SoulSrc) {
    Copy-Item $SoulSrc $SoulDest -Force
    Write-Host "[OK] SOUL.md → $SoulDest" -ForegroundColor Green
}

# 2. 스킬 배포
if (-not (Test-Path $SkillsDest)) {
    New-Item -ItemType Directory -Path $SkillsDest | Out-Null
}

$SkillCategories = Get-ChildItem $SkillsSrc -Directory
foreach ($category in $SkillCategories) {
    $CatDest = Join-Path $SkillsDest $category.Name
    if (-not (Test-Path $CatDest)) {
        New-Item -ItemType Directory -Path $CatDest | Out-Null
    }
    $Skills = Get-ChildItem $category.FullName -Directory
    foreach ($skill in $Skills) {
        $SkillDest = Join-Path $CatDest $skill.Name
        if (-not (Test-Path $SkillDest)) {
            New-Item -ItemType Directory -Path $SkillDest | Out-Null
        }
        $SkillMd = Join-Path $skill.FullName "SKILL.md"
        if (Test-Path $SkillMd) {
            Copy-Item $SkillMd (Join-Path $SkillDest "SKILL.md") -Force
            Write-Host "[OK] 스킬: $($category.Name)/$($skill.Name)" -ForegroundColor Green
        }
    }
}

# 3. 완료
Write-Host ""
Write-Host "=== 배포 완료 ===" -ForegroundColor Cyan
Write-Host "다음 단계:"
Write-Host "  1. hermes model     — LLM 프로바이더 선택 (Claude 권장)"
Write-Host "  2. hermes           — 채팅 시작"
Write-Host "  3. /reels-script    — 릴스 대본 생성 테스트"
Write-Host "  4. hermes gateway   — 텔레그램/디스코드 연결 (선택)"
