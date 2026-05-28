---
name: weekly-start
description: 월요일 주간 시작 루틴 — 레퍼런스 계정 스캔 → 이번 주 콘텐츠 3개 방향 결정
version: 1.0.0
metadata:
  hermes:
    tags: [instagram, weekly, planning, reference, korean]
    category: ai-ceo-os
---

# /start:weekly-start — 월요일 주간 시작 루틴

> 매주 월요일 실행. 레퍼런스 분석 → 이번 주 콘텐츠 방향 결정까지 한 번에.

## 실행 순서

### Phase 1: 레퍼런스 계정 스캔 (브라우저 도구 필요)

> `knowledge/references/ref-ai-insight.md` + `knowledge/references/ref-ai-parenting.md` 에서 계정 목록 읽어서 순서대로 실행

각 계정마다:
1. 브라우저로 계정 프로필 열기 + 스크린샷 캡처
2. 최근 7일 이내 신규 게시물 목록 추출
3. 조회수/좋아요 많은 게시물 상위 3개 식별
4. 각 게시물 간단 정리:

```
| 게시물 | 유형 | 후킹 패턴 | 참고 포인트 | 컨텐츠 적합도 |
|:---|:---|:---|:---|:---|
| [썸네일] | 릴스/캐러셀 | A~F 패턴 | 우리가 쓸 수 있는 것 | ✅후보 / ⬜보류 |
```

> ✅후보 = 우리 포지셔닝(현직 엔지니어·실전 AI)과 구조 재활용 가능
> ⬜보류 = 주제/포맷이 우리와 맞지 않거나 판단 불명확
> 적합도 최종 판단은 CEO.

---

### Phase 2: Knowledge 업데이트

5. 발견한 신규 패턴 → `knowledge/references/` 해당 파일 분석 메모에 추가
6. `knowledge/strategy-references/` 내 파일 훑기 — 새로 적용할 패턴 메모
7. `tasks/lessons.md` 읽기 — 지난 실수 재확인

---

### Phase 3: 이번 주 방향 결정

8. Phase 1 후보 목록 기반으로 이번 주 콘텐츠 3개 주제 확정 (월/수/금)
   - **비율**: AI+인사이트 50% / AI+육아 50%
   - 주 3회: 인사이트 2개 + 육아 1개 (격주로 균형 조정)
9. 각 주제별 포맷 결정 (릴스/캐러셀)
10. 이번 주 CTA 전략 결정 (저장/댓글/팔로우 중 우선순위)
11. `tasks/todo.md` 업데이트

---

## 산출물

| 항목 | 내용 |
|:---|:---|
| 레퍼런스 스캔 결과 | 계정별 신규/고성과 게시물 리스트 |
| 적합도 분류 | ✅후보 / ⬜보류 |
| AI+인사이트 주제 | 2개 (요일 지정) |
| AI+육아 주제 | 1개 (요일 지정) |
| 트렌드 키워드 | 3개 |
| 이번 주 CTA 우선순위 | 1개 |

스크린샷 저장: `knowledge/references/screenshots/{계정명}_{날짜}.png`
분석 메모 저장: `knowledge/references/ref-ai-insight.md` 또는 `ref-ai-parenting.md` 누적 추가
