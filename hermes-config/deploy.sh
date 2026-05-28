#!/bin/bash
# Hermes Agent 설정 배포 스크립트 (Mac/Linux)
# 실행: chmod +x hermes-config/deploy.sh && ./hermes-config/deploy.sh

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
HERMES_HOME="$HOME/.hermes"
SKILLS_DEST="$HERMES_HOME/skills"
SKILLS_SRC="$SCRIPT_DIR/skills"

echo "=== AI CEO OS → Hermes 배포 ==="
echo "Hermes 홈: $HERMES_HOME"

# Hermes 설치 확인
if [ ! -d "$HERMES_HOME" ]; then
    echo ""
    echo "[오류] ~/.hermes 디렉토리가 없습니다."
    echo "먼저 Hermes를 설치해주세요:"
    echo "  curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash"
    exit 1
fi

# 1. SOUL.md 배포
cp "$SCRIPT_DIR/SOUL.md" "$HERMES_HOME/SOUL.md"
echo "[OK] SOUL.md"

# 2. 스킬 배포
mkdir -p "$SKILLS_DEST"
for category_dir in "$SKILLS_SRC"/*/; do
    category=$(basename "$category_dir")
    for skill_dir in "$category_dir"*/; do
        skill=$(basename "$skill_dir")
        mkdir -p "$SKILLS_DEST/$category/$skill"
        cp "$skill_dir/SKILL.md" "$SKILLS_DEST/$category/$skill/SKILL.md"
        echo "[OK] 스킬: $category/$skill"
    done
done

echo ""
echo "=== 배포 완료 ==="
echo "다음 단계:"
echo "  1. hermes model     — LLM 프로바이더 선택 (Claude 권장)"
echo "  2. hermes           — 채팅 시작"
echo "  3. /reels-script    — 릴스 대본 생성 테스트"
