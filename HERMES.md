# HERMES.md — AI CEO OS (Hermes Agent 설정)

> Hermes Agent가 이 프로젝트에서 실행될 때 참고하는 설정입니다.
> 전체 맥락은 CLAUDE.md를 함께 참고하세요.

---

## 스킬 목록 (hermes skills list로 확인 가능)

| 스킬 | 트리거 | 설명 |
|:---|:---|:---|
| `reels-script` | "릴스 써줘", "릴스 대본" | AI 인스타그램 릴스 대본 풀파이프라인 |
| `content-batch` | "이번 주 콘텐츠", "배치 생성" | 화요일 주간 콘텐츠 3개 일괄 생성 |
| `weekly-start` | "주간 시작", "월요일 루틴" | 레퍼런스 스캔 → 이번 주 방향 결정 |
| `weekly-review` | "주간 리뷰", "금요일 리뷰" | KPI 체크 → 회고 → 다음 주 방향 |
| `ref-analyze` | "레퍼런스 분석 [URL]" | 릴스 URL 분석 → 우리 버전 대본 생성 |

## 메모리 & 세션

- 중요 결정사항은 세션 후 자동으로 메모리에 저장됩니다
- 이전 세션 맥락이 필요하면: `tasks/session_handoff.md` 참고

## 텔레그램/디스코드 게이트웨이

게이트웨이 설정 후 이 명령어들이 메시지로 트리거됩니다:
- `/reels-script [주제]` — 릴스 대본 즉시 생성
- `/weekly-start` — 주간 시작 루틴 실행
- `/ref-analyze [URL]` — 레퍼런스 분석

## 작업 디렉토리

모든 산출물은 `outputs/{연도}/{월}/{일}/` 경로에 저장됩니다.

## Zero-Inference Rule

조회수, 전환율, 팔로워 증가 추이 등 직접 계산 금지.
데이터가 없으면 "데이터가 필요합니다"로 답할 것.
