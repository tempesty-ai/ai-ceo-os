# 레퍼런스 계정 — AI 인사이트

> 콘텐츠 기획 시 벤치마킹 대상 계정 목록
> Playwright 분석 결과는 이 파일에 누적. 스크린샷 → `screenshots/` 폴더

---

## 계정 목록

| 계정명 | URL | 팔로워 | 참고 포인트 |
|:---|:---|:---|:---|
| 4reels.pro | https://www.instagram.com/4reels.pro/ | 10.9만 | "How to make this:" 썸네일, PROMPT CTA, 결과 먼저 구조 |
| kevkevkiwi | https://www.instagram.com/kevkevkiwi/ | — | 영상/릴스 |
| prompts.ig | https://www.instagram.com/prompts.ig/ | — | AI 프롬프트 |
| claye.ai | https://www.instagram.com/claye.ai/ | — | AI |
| withgeorgy | https://www.instagram.com/withgeorgy/ | — | 영상 크리에이터 |
| keanu.visuals | https://www.instagram.com/keanu.visuals/ | — | 영상 |
| filatov.design | https://www.instagram.com/filatov.design/ | — | UX/AI |
| hancybox | https://www.instagram.com/hancybox/ | — | 크리에이티브 |  |

---

## 분석 메모

### @eng_khairallah1 (분석일: 2026-04-25)
원본: 소셜 포스팅 — 프롬프트 엔지니어링 마스터 가이드 (영어/한국어)

**후킹 패턴**: E. 인지부조화 ("같은 AI, 다른 결과")
**구조**: 레벨별 심화 (기초→고급, Level 1→4)
**핵심 공식**: 6요소(역할/맥락/작업/형식/제약/기준) + 체인 방식 + 자기교정
**가져갈 것**: ❌/✅ 직접 비교, "초보 1~2개 vs 고수 6개" 대비, 자기교정 루프
**버릴 것**: B2B SaaS 예시, XML 태그 설명, Level 4 시스템 레벨
**산출물**: `outputs/2026/04/25/[캐러셀]_프롬프트_고수_vs_초보_차이.md`

---

### @4reels.pro (분석일: 2026-04-19)
스크린샷: `screenshots/4reels.pro_20260419.png`

**계정 현황**
- 팔로워 10.9만 / 게시물 176 / 누적 3,000만+ 조회
- 100% 릴스, 수익화: REVIEWS / PROMPTS / COURSE 하이라이트 3종

**최근 게시물 후보 (✅) / 보류 (⬜)**

| # | 내용 | 후킹 패턴 | CTA | 적합도 |
|:--|:---|:---|:---|:---:|
| 1 | WING FAIL TUTORIAL — AI 비행기 날개 | A. 실패형 | PROMPT | ⬜ |
| 2 | Prompt? 🤔 질문형 | E. 인지부조화 | — | ⬜ |
| 3 | How to make this: Time Freeze video | B. 결과먼저 | PROMPT | ✅ |
| 4 | 길거리 + 아침 루틴 | F. 일상형 | — | ⬜ |
| 5 | Old photo → 4K 업스케일 | B. 숫자/결과 | PROMPT | ✅ |
| 6 | Morning routine | F. 일상형 | — | ⬜ |
| 7 | "This effect is all over the feed" CapCut | C. 사회적낙오 | PRO | ✅ |
| 9 | How to make this skin mask with AI | B. 결과먼저 | PROMPT | ✅ |
| 11 | Cinematic sneaker ad from one photo | B. 결과먼저 | PROMPT | ✅ |
| 12 | GTA 6 scene FREE in 30 seconds ★ | B. 무료+즉시 | Prompt | ✅ |

**공통 패턴 (가져갈 것)**
- "Comment PROMPT" → DM 자료 전달 CTA
- 결과 먼저, 방법 나중 구조
- "FREE + N초" 조합 (손실회피 + 즉시성)

**버릴 것**
- 패션/라이프스타일 → 우리 포지셔닝 불일치
- 영어 콘텐츠 구조는 가져오되 문장은 한국어로 재작성
