# DESIGN.md — 에이나우 부트캠프 디자인 시스템

> **Claude-inspired 디자인** — Warm Terracotta Accent + Clean Editorial Layout
> AI 서비스 / 부트캠프 수강생 프로젝트에 최적화된 디자인 가이드.
> 이 파일을 Claude Code에 주면 일관된 UI를 자동 생성합니다.

---

## 🎨 디자인 철학

| 원칙 | 설명 |
|:---|:---|
| **Warm & Intellectual** | 차갑지 않고 따뜻한 전문가 톤 — Claude 브랜드 정체성 |
| **Editorial First** | 텍스트와 타이포그래피가 주인공 — 여백을 아끼지 말 것 |
| **Calm Confidence** | 불필요한 애니메이션/효과 최소화 — 차분하게 신뢰감 전달 |
| **Accessible by Default** | 다크/라이트 모두 WCAG AA 대비비 충족 |

---

## 🎨 컬러 팔레트

### 라이트 테마 (기본 — Claude 스타일)

```css
/* 배경 */
--bg-primary:    #F5F0EB;   /* 따뜻한 오프화이트 (크림) */
--bg-secondary:  #EDE8E1;   /* 카드/섹션 배경 */
--bg-elevated:   #FFFFFF;   /* 모달/드롭다운 */
--bg-surface:    #FAF7F4;   /* 인풋 필드 배경 */

/* 텍스트 */
--text-primary:  #1A1410;   /* 메인 텍스트 (따뜻한 블랙) */
--text-secondary:#5E5D59;   /* 보조 텍스트 (올리브 그레이 — 갈색 아닌 올리브 계열) */
--text-muted:    #87867F;   /* 비활성 / 플레이스홀더 */
--text-inverse:  #FAF7F4;   /* 다크 배경 위 텍스트 */

/* 테두리 */
--border:        #D9D0C4;   /* 기본 테두리 */
--border-strong: #B8ACA0;   /* 강조 테두리 */

/* 액센트 — Warm Terracotta */
--accent:        #C96442;   /* 메인 테라코타 */
--accent-hover:  #B5572E;   /* 호버 (더 진하게) */
--accent-light:  #F0D4C8;   /* 라이트 틴트 (뱃지/하이라이트) */
--accent-subtle: #F7EAE4;   /* 매우 연한 배경 */

/* 시맨틱 */
--success:       #2D7D4E;   /* 성공 (따뜻한 그린) */
--success-bg:    #E8F5EE;
--warning:       #B8840A;   /* 경고 (황금빛) */
--warning-bg:    #FEF5DC;
--error:         #C0392B;   /* 에러 */
--error-bg:      #FDEAEA;
--info:          #2B6CB0;   /* 정보 */
--info-bg:       #EBF4FF;
```

### 다크 테마 (옵션)

```css
--bg-primary:    #1C1714;   /* 따뜻한 다크 */
--bg-secondary:  #252018;   /* 카드 배경 */
--bg-elevated:   #2E2820;   /* 모달 */
--bg-surface:    #312B22;   /* 인풋 */

--text-primary:  #F5EFE6;   /* 크림 화이트 */
--text-secondary:#C4B49E;
--text-muted:    #8A7A69;

--border:        #3D352A;
--border-strong: #56493B;

--accent:        #E07A55;   /* 다크모드 테라코타는 살짝 밝게 */
--accent-hover:  #C96442;
--accent-light:  #4A2E20;
```

---

## 📝 타이포그래피

### 폰트 패밀리

```css
/* 제목 — Editorial 분위기 */
--font-display: "Tiempos Headline", "Georgia", "Noto Serif KR", serif;

/* 본문 — 가독성 최우선 */
--font-sans: "Pretendard", "Inter", -apple-system, BlinkMacSystemFont, sans-serif;

/* 코드 */
--font-mono: "JetBrains Mono", "Fira Code", "Consolas", monospace;
```

> **한국어 콘텐츠 비중이 높으면**: `--font-display`도 Pretendard 사용 가능.
> Editorial 무드를 살리고 싶을 때만 Serif 적용.

### 타입 스케일

| 역할 | 크기 | 두께 | 줄간격 | 자간 |
|:---|:---:|:---:|:---:|:---:|
| **Display (히어로 H1)** | 56px | 500 | 1.1 | -0.03em |
| **H1** | 40px | 500 | 1.2 | -0.02em |
| **H2** | 28px | 500 | 1.3 | -0.01em |
| **H3** | 22px | 500 | 1.4 | 0 |
| **H4** | 18px | 500 | 1.4 | 0 |
| **Body Large** | 18px | 400 | 1.7 | 0 |
| **Body** | 16px | 400 | 1.7 | 0 |
| **Body Small** | 14px | 400 | 1.6 | 0 |
| **Caption** | 13px | 400 | 1.5 | 0.01em |
| **Label** | 12px | 500 | 1.4 | 0.06em (대문자) |

---

## 📐 레이아웃

### 간격 시스템 (4px base)

```css
--space-1:  4px
--space-2:  8px
--space-3:  12px
--space-4:  16px
--space-5:  20px
--space-6:  24px
--space-8:  32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
--space-20: 80px
--space-24: 96px
```

### 컨테이너

```css
/* 콘텐츠 너비 */
--container-sm:   640px;   /* 블로그/아티클 */
--container-md:   768px;   /* 채팅/폼 인터페이스 */
--container-lg:  1024px;   /* 대시보드 */
--container-xl:  1200px;   /* 랜딩/마케팅 */

/* 사이드 패딩 */
--page-padding-mobile:  16px;
--page-padding-tablet:  32px;
--page-padding-desktop: 48px;
```

### 브레이크포인트

```css
sm:  640px    /* 모바일 가로 */
md:  768px    /* 태블릿 */
lg:  1024px   /* 데스크탑 작은 */
xl:  1280px   /* 데스크탑 */
2xl: 1536px   /* 와이드 */
```

### 그리드

- **기본**: 12컬럼 (데스크탑) → 4컬럼 (모바일)
- **카드 그리드**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **사이드바 레이아웃**: `grid-cols-[280px_1fr]` (사이드바 고정)

---

## 🏔 깊이(Elevation) 시스템

| 레벨 | 처리 방식 | 사용처 |
|:---|:---|:---|
| **Flat (0)** | 섀도우 없음, 테두리 없음 | 페이지 배경, 인라인 텍스트 |
| **Contained (1)** | `1px solid var(--border)` | 기본 카드, 섹션 구분 |
| **Ring (2)** | `0px 0px 0px 1px` 링 섀도우 | 버튼 호버/포커스, 인터랙티브 카드 |
| **Whisper (3)** | `rgba(26,20,16,0.05) 0px 4px 24px` | 피처 카드, 모달, 드롭다운 |
| **Inset (4)** | `inset 0px 0px 0px 1px` (15% opacity) | 버튼 누름(active) 상태 |

> **핵심 원칙**: 깊이는 `box-shadow` 크기로 표현하지 않는다. Ring 섀도우(테두리처럼 보이는 섀도우)와 배경색 전환으로 표현한다.

```css
/* Ring 섀도우 변수 */
--shadow-ring:    0px 0px 0px 1px var(--border-strong);
--shadow-whisper: rgba(26, 20, 16, 0.05) 0px 4px 24px;
--shadow-inset:   inset 0px 0px 0px 1px rgba(26, 20, 16, 0.15);
```

---

## 🎁 컴포넌트 스타일

### 버튼

```css
/* Primary */
.btn-primary {
  background: var(--accent);
  color: var(--text-inverse);
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.01em;
  transition: background 0.15s ease, transform 0.1s ease;
  border: none;
}
.btn-primary:hover  { background: var(--accent-hover); box-shadow: var(--shadow-ring); }
.btn-primary:active { transform: scale(0.98); box-shadow: var(--shadow-inset); }

/* Secondary (Ghost) */
.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-strong);
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 15px;
}
.btn-secondary:hover { background: var(--bg-secondary); box-shadow: var(--shadow-ring); }

/* Accent Subtle (CTA 보조) */
.btn-accent-subtle {
  background: var(--accent-subtle);
  color: var(--accent);
  border: 1px solid var(--accent-light);
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
}
```

### 카드

```css
/* Standard Card */
.card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(26, 20, 16, 0.06);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.card:hover {
  box-shadow: var(--shadow-whisper), var(--shadow-ring);
  transform: translateY(-2px);
}

/* Feature Card (액센트 왼쪽 바) */
.card-feature {
  border-left: 3px solid var(--accent);
  padding-left: 20px;
}
```

### 입력 필드

```css
.input {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 15px;
  font-family: var(--font-sans);
  color: var(--text-primary);
  width: 100%;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
.input::placeholder { color: var(--text-muted); }
.input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-subtle);
}
```

### 뱃지 / 태그

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.02em;
}
.badge-accent   { background: var(--accent-light);  color: var(--accent-hover); }
.badge-success  { background: var(--success-bg);    color: var(--success); }
.badge-warning  { background: var(--warning-bg);    color: var(--warning); }
.badge-error    { background: var(--error-bg);      color: var(--error); }
.badge-neutral  { background: var(--bg-secondary);  color: var(--text-secondary); }
```

### AI 채팅 말풍선 (Claude API 프로젝트용)

```css
/* 사용자 */
.bubble-user {
  background: var(--accent);
  color: white;
  border-radius: 18px 18px 4px 18px;
  padding: 12px 16px;
  max-width: 75%;
  align-self: flex-end;
}

/* AI */
.bubble-ai {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  color: var(--text-primary);
  border-radius: 18px 18px 18px 4px;
  padding: 12px 16px;
  max-width: 75%;
  align-self: flex-start;
}

/* AI 응답 중 (스트리밍) */
.bubble-ai-loading::after {
  content: "▋";
  animation: blink 0.8s infinite;
}
```

### 구분선

```css
.divider {
  border: none;
  border-top: 1px solid var(--border);
  margin: var(--space-6) 0;
}

/* Editorial 분위기 — 텍스트 포함 구분선 */
.divider-label {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--text-muted);
  font-size: 13px;
}
.divider-label::before,
.divider-label::after {
  content: "";
  flex: 1;
  border-top: 1px solid var(--border);
}
```

---

## 🎬 모션

### 원칙: Calm & Purposeful
- 시선을 빼앗는 움직임 금지 — 목적 있는 전환만
- 최대 애니메이션 길이: **300ms**
- Easing 기본: `ease` (sharp in, smooth out)

```css
/* 빠른 인터랙션 (버튼, 호버) */
--transition-fast:   0.1s ease;

/* 일반 전환 (패널, 카드) */
--transition-base:   0.2s ease;

/* 페이지/모달 전환 */
--transition-slow:   0.3s ease;
```

### 페이지 진입 애니메이션

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-enter {
  animation: fadeInUp 0.3s ease forwards;
}

/* 스태거 (리스트 아이템) */
.stagger-item:nth-child(1) { animation-delay: 0.05s; }
.stagger-item:nth-child(2) { animation-delay: 0.10s; }
.stagger-item:nth-child(3) { animation-delay: 0.15s; }
```

---

## 🖼 이미지 & 아이콘

### 아이콘
- **라이브러리**: `lucide-react` (기본) — 선 굵기 `strokeWidth={1.5}`
- **크기 기준**: 16px (캡션), 20px (기본), 24px (강조)
- 이모지 아이콘 UI에 사용 금지 (문서/마케팅 자료는 허용)

### 이미지 비율 (next/image 기준)

```
히어로 배너:    16:9  (1280×720)
카드 썸네일:     4:3  (800×600)
아바타 (사용자): 1:1  (크기 무관, border-radius: 50%)
OG 이미지:     1200×630
```

---

## 🌗 테마 토글

**라이트가 기본**, 다크는 옵션.

```tsx
// Tailwind + Next.js 기준
// tailwind.config: darkMode: 'class'

<html className={theme === 'dark' ? 'dark' : ''}>
```

```tsx
// CSS variables 전환
:root        { /* 라이트 변수 */ }
:root.dark   { /* 다크 변수 (위 다크 섹션 값으로 교체) */ }
```

---

## 🚫 디자인 금지사항

| ❌ 금지 | 이유 |
|:---|:---|
| 그라디언트 배경 남용 | Editorial 톤 파괴 |
| 밝은 순수 블루(`#0000FF` 계열) 액센트 | 테라코타 팔레트와 충돌 |
| 5개 이상 컬러 동시 사용 | 시각적 혼잡 |
| 500ms 초과 애니메이션 | 답답함 / AI 체감 느림 |
| 그림자 과다 중첩 | 납작해 보임 |
| Sans-serif 아닌 폰트로 Body | 가독성 저하 |
| `git add -A`처럼 `.env` 커밋 | 보안 사고 (이건 코드 규칙이지만 같이 기억할 것) |

---

## 💡 Tailwind 커스텀 컬러 설정

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#C96442',
          hover:   '#B5572E',
          light:   '#F0D4C8',
          subtle:  '#F7EAE4',
        },
        bg: {
          primary:   '#F5F0EB',
          secondary: '#EDE8E1',
          elevated:  '#FFFFFF',
          surface:   '#FAF7F4',
        },
        ink: {
          primary:   '#1A1410',
          secondary: '#5C4E3D',
          muted:     '#9C8E7E',
        },
      },
      fontFamily: {
        sans:    ['Pretendard', 'Inter', 'sans-serif'],
        display: ['Tiempos Headline', 'Georgia', 'serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
}
```

---

## 💡 AI에게 이 DESIGN.md 활용시키기

```
이 프로젝트의 DESIGN.md를 읽고 아래 UI를 만들어줘.

요구사항:
- 컬러: --accent (테라코타) + --bg-primary (크림) 중심
- 타이포: H1 + Body Large만 (계층 단순화)
- 버튼: btn-primary 스타일 1개
- 카드: standard card 스타일
- 모바일 반응형 (md 브레이크포인트 기준)
- 애니메이션: fadeInUp 진입 효과

만드는 것: [히어로 섹션 / 카드 리스트 / 채팅 UI 등 여기 명시]
```

→ Claude Code가 자동으로 **Warm Editorial 일관된 UI** 생성.

---

## 🔗 참고 레퍼런스

| 출처 | 적용 |
|:---|:---|
| **Claude (Anthropic)** | 전체 컬러 철학, Warm Terracotta 액센트 |
| **getdesign.md/claude** | DESIGN.md 포맷 원본 |
| **Stripe** | 타이포 계층, 카드 그림자 |
| **Linear** | 간격 시스템, 미니멀 컴포넌트 |
| **VoltAgent/awesome-design-md** | 다른 66+ 브랜드 템플릿 참고 |

---

## 📝 커스터마이징 체크리스트

- [ ] `--accent` 컬러를 내 브랜드 컬러로 교체했는가?
- [ ] Pretendard 폰트 로드 확인 (`<link>` 또는 `next/font`)
- [ ] `tailwind.config.js`에 커스텀 컬러 추가했는가?
- [ ] 라이트/다크 기본값 선택 (`darkMode: 'class'`)
- [ ] CSS 변수를 `globals.css`의 `:root`에 붙여넣었는가?
- [ ] AI 채팅 기능 있으면 bubble 컴포넌트 적용했는가?
