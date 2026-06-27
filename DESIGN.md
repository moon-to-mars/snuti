# DESIGN.md

Kids in Flow 웹앱(UI 프로토타입)의 디자인 시스템 가이드.
"Luminous Flow" — 낙관적이지만 차분한, 노란색을 액션의 신호로 쓰는 모던 미니멀.
구현 시 이 토큰을 기준으로 한다. (외부 연결 없이 화면만 구현)

## 브랜드 & 톤

- "Kids in Flow"의 발랄함을 부모·교육자를 위한 **정제된 전문성**으로 옮긴 시스템.
- 원색 난잡함을 버리고 **모던 미니멀 + 촉각적 포인트**. 낙관적이되 신뢰감 있게.
- 넓은 여백과 절제된 색 사용으로 "공기감"과 "신뢰"를 연출.
- 보조 시각 노이즈를 걷어내고 **노랑을 액션·진행의 등대**로 강조.

### 디자인 원칙
- **여백 우선**: 정보를 빽빽이 채우지 않고 "정보의 섬"을 만든다.
- **절제된 색**: 노랑은 액션 전용. 빨강/파랑은 의미(경고/정보)로만 소량 사용.
- **가벼운 깊이**: 무거운 그림자 대신 톤 레이어링과 아주 옅은 그림자.

## 색상 토큰

Tailwind를 쓴다면 아래 값을 `theme.extend.colors`에 등록한다.

### 표면 / 배경
| 토큰 | 값 | 용도 |
|------|------|------|
| surface / background | `#fbf9f8` | 기본 배경(따뜻한 오프화이트) |
| surface-dim | `#dbdad9` | 가라앉은 표면 |
| surface-container-lowest | `#ffffff` | 카드(순백) |
| surface-container-low | `#f5f3f3` | 옅은 컨테이너 |
| surface-container | `#efeded` | |
| surface-container-high | `#e9e8e7` | |
| surface-container-highest | `#e4e2e2` | |
| surface-variant | `#e4e2e2` | 보조 표면 |

### 텍스트
| 토큰 | 값 | 용도 |
|------|------|------|
| on-surface | `#1b1c1c` | 본문·제목(근접 블랙) |
| on-surface-variant | `#4f4634` | 보조 텍스트 |
| outline | `#817661` | 테두리 |
| outline-variant | `#d2c5ad` | 옅은 테두리 |

### 액션 / 강조
| 토큰 | 값 | 용도 |
|------|------|------|
| primary | `#785a00` | 노랑 위 텍스트, 진한 강조 |
| primary-container | `#ffc83d` | **핵심 노랑** — 버튼·진행바·활성 상태 |
| on-primary-container | `#715400` | 노랑 버튼 위 텍스트(딥 옐로/브라운) |
| inverse-primary | `#f5bf34` | |
| secondary | `#5f5e5e` | 중립 보조 |
| secondary-container | `#e2dfde` | 보조 칩·표면 |
| tertiary-container | `#d0d0cb` | |
| error | `#ba1a1a` | 경고 |
| error-container | `#ffdad6` | 경고 배경 |
| inverse-surface | `#303031` | 어두운 버튼 배경("Resume Journey" 등) |
| inverse-on-surface | `#f2f0f0` | 어두운 버튼 위 텍스트 |

### 핵심 색 요약
- **Primary Yellow `#FFC83D`**: 시스템의 영혼. 주요 버튼·진행 지표·활성 상태에만.
- **Near-black `#1A1A1A`**: 텍스트·구조 요소. 최대 가독성과 프리미엄감.
- **오프화이트 `#FBF9F8`**: 순백보다 덜 임상적인 따뜻한 배경.
- **빨강/파랑**: 오직 의미(오류·정보)로만, 저채도·작게. 노랑과 경쟁 금지.

## 타이포그래피

헤드라인은 **Hanken Grotesk**, 본문·UI는 **Inter**. `index.html`에서 Google Fonts 로드.

| 토큰 | 폰트 | 크기 | 굵기 | 행간 | 자간 |
|------|------|------|------|------|------|
| headline-lg | Hanken Grotesk | 48px | 800 | 56px | -0.02em |
| headline-md | Hanken Grotesk | 32px | 700 | 40px | -0.01em |
| headline-sm | Hanken Grotesk | 24px | 700 | 32px | |
| headline-lg-mobile | Hanken Grotesk | 32px | 800 | 40px | |
| body-lg | Inter | 18px | 400 | 28px | |
| body-md | Inter | 16px | 400 | 24px | |
| label-bold | Inter | 14px | 600 | 20px | |
| label-sm | Inter | 12px | 500 | 16px | |

- **극단적 위계**: 헤드라인은 크고 좁은 자간으로 "포스터" 느낌, 본문은 차분하게.
- 본문 18px 선호 → 공기감 유지, 인지 부하 감소.
- 라벨(섹션 헤더 "ACTIVITY CONTEXT" 등)은 **대문자 + 넓은 자간**으로 본문과 구분.

## 레이아웃 & 간격

- 모든 간격은 **8px 배수**. 요소는 가깝게(8/16px) 묶고, 묶음끼리는 넓게(32/48px+) 띄워 "섬"을 만든다.
- 데스크톱 12컬럼 / 64px 마진 / 섹션 간 80px+. 모바일 4컬럼 / 16px 마진.
- 컨테이너 최대폭 1280px.

```
spacing: { unit: 8px, container-max: 1280px, gutter: 24px,
           margin-mobile: 16px, margin-desktop: 64px, section-gap: 80px }
```

> 프로토타입은 모바일 폭(약 390px) 단일 화면 기준으로 먼저 구현한다(목업이 전부 모바일).

## 모서리 둥글기

| 토큰 | 값 | 용도 |
|------|------|------|
| sm | 0.25rem | |
| DEFAULT | 0.5rem | 기본 |
| md | 0.75rem | |
| lg | 1rem | 버튼·입력 |
| xl | 1.5rem | 카드·큰 컨테이너 |
| full | 9999px | 아바타·상태 점·칩 |

- 큰 카드/컨테이너는 `xl`, 버튼·입력은 `lg`.
- 원형은 아바타와 상태 점에 사용해 로고의 원형 모티프와 연결.

## 깊이 & 입체

무거운 그림자 대신 **톤 레이어링 + 옅은 깊이**.

- 대부분 콘텐츠는 오프화이트 배경 위. 카드는 살짝 밝은 화이트 또는 1px 옅은 테두리(`#e6e6e6`).
- 입체가 필요할 때(모달·주요 버튼)만 **부드러운 단일 앰비언트 그림자**: `0px 10px 30px rgba(0,0,0,0.04)`.
- 호버 시 살짝 위로 뜨고(-Y) 그림자 spread 약간 증가 → 촉각 피드백.

## 컴포넌트

- **버튼(주)**: 솔리드 노랑 + 검정 텍스트, `rounded-lg`. (예: "Save Observation", "Start Quest")
- **버튼(보조)**: 고스트형, 검정 테두리. (예: "Cancel", "Export PDF")
- **버튼(강조 다크)**: 검정 배경 + 흰 텍스트. 노랑 카드 위 주요 동선에 사용. (예: "Resume Journey")
- **입력**: 오프화이트 배경 + 1px 옅은 테두리. 포커스 시 테두리는 **검정**으로(노랑은 액션 전용이라 사용 안 함).
- **카드**: 테두리 없이 아주 옅은 앰비언트 그림자, `rounded-xl`.
- **진행바**: fill은 노랑, track은 배경의 뮤트 버전. (포커스 스코어, 미션 진행률)
- **도넛 진행 링**: 완료율(80% 등) 노랑 링 + 큰 숫자 중앙 정렬.
- **칩**: 작은 알약형 `rounded-xl` 태그. 카테고리·상태("Milestone", "Observation", "Action Item", "Optimal", "Up").
- **내비게이션**: 극단적 단순함. 활성 탭은 노랑 알약 배경 + 진한 텍스트, 비활성은 아이콘+라벨만.

### 화면별 반복 요소 (목업 기준)
- **상단 바**: 좌측 원형 아바타 + "Kids in Flow", 우측 "7 🔥" 스트릭 칩(연한 회색 알약).
- **하단 탭바**: Dashboard / Quests / Observe / Reports 4개. 활성 탭은 노랑 배경 알약.
- **선택 카드(라디오형)**: Help Level(None/Some/A lot)처럼 아이콘+제목+부제 카드를 세로로 쌓고, 선택 시 강조.
- **슬라이더**: Focus Level(Distracted ↔ Deep Flow)처럼 양 끝 라벨 + 눈금.
- **데이터 카드**: 큰 숫자(84/100), 추세 라벨("Optimal", "+12%"), 막대 그래프(활성 막대만 노랑, 나머지 회색).

## 이미지 / 에셋

일러스트는 `img/` 폴더에 둔다. 컴포넌트에서 상대경로로 참조.

```
img/
  avatar-child.png     # 상단 캐릭터 아바타(화면마다 다른 컷 가능)
  illust-book.png      # 퀘스트 수행 화면 펼친 책 일러스트
  mascot-cloud.png     # (사용 시) 분석 화면 캐릭터
```

> 목업의 책 이미지처럼 사진/3D 렌더형 에셋은 카드 안에 `rounded-xl`로 배치하고, 배경 톤(연녹색 등)을 그대로 살린다. 실제 파일명은 넣는 에셋에 맞게 조정하고, 경로 상수는 한 곳(`src/data` 또는 `src/utils`)에 모은다.

## 화면 목록 (참고)

목업 5종에 대응한다. (한국어 UI 기준, 라벨은 영문 병기)
1. **Dashboard(홈)** — "Hi, Sarah." 인사, Today's Focus Score(84/100, 진행바, Optimal), Active Quest 노랑 카드("Resume Journey" 다크 버튼), Record Observation / Weekly Reports / Growth Library 진입 카드.
2. **Quests(퀘스트 수행)** — "CURRENT QUEST" 라벨, 큰 제목("책 1페이지 읽기"), 책 일러스트 카드, Progress 진행바(0/1 page), "Finished!" 노랑 버튼.
3. **Observe(관찰 기록)** — "New Observation", Activity Context 입력, Help Level(None/Some/A lot 선택 카드), Focus Level 슬라이더(Distracted↔Deep Flow), Observations & Notes textarea, "Save Observation"(노랑)/"Cancel"(고스트).
4. **Reports(리포트)** — "Patient Progress Report", 대상 이름(Leo Harrison), Export PDF / Share 버튼, Quest Completion 도넛(80%), 세부 지표(Emotional Regulation 12/15 등), Behavioral Trends 막대 그래프(Focus/Impulsivity), Clinical Observations 카드 리스트(Milestone/Observation/Action Item 칩, +New Entry).
5. **Analysis(분석 완료)** — "Lvl 2 Expertise" 배지, "Analysis Complete", Focus Deepened(+12%)·Memory Recall(Up) 지표 카드, Recommended Next 다크 카드("Start Quest" 노랑 버튼), Biometric Flow Sync 막대(Week/Month 토글, 활성 막대 노랑), Morning Window 팁 카드.