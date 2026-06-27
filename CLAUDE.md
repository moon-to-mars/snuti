# CLAUDE.md

이 파일은 Claude Code가 이 저장소에서 작업할 때 참고하는 가이드입니다.

## 프로젝트 개요

PTBM(Parent Training in Behavior Management) 기반 유아 ADHD 행동 교정 웹앱의 **UI 프로토타입**입니다.
**화면(보이는 것)만** 만듭니다. 백엔드, DB, AI API, 인증 등 외부 연결은 하지 않습니다.
모든 데이터는 프론트엔드 내 목업(mock)·로컬 상태로만 다룹니다.

### 핵심 흐름 (화면상으로 표현할 것)
처방(의사) → AI 퀘스트 생성 → 아이 수행 → 부모 관찰·기록 → AI 최적화 → 데이터화 → 다시 진료

### 사용자 역할 (3종)
- **부모(Parent)**: 퀘스트 확인, 아이 관찰 결과 객관식 입력, 진행 상황 열람
- **아이(Child)**: 퀘스트·미션 수행 화면
- **의사(Clinician)**: 누적 리포트 검토 화면

## 기술 스택

- **언어**: TypeScript 5.8 (strict 모드)
- **프레임워크**: Vite 6 + React 19
- **스타일**: Tailwind CSS v4 (`@tailwindcss/vite` 플러그인)
- **린터**: ESLint 9 (typescript-eslint, react-hooks, react-refresh)
- **데이터**: 목업 데이터 + 컴포넌트 로컬 상태(useState 등)만 사용. 외부 통신 없음.

## 명령어

```bash
npm run dev          # 개발 서버
npm run build        # 프로덕션 빌드
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit (타입 검사)
```

작업 완료 전 반드시 `npm run typecheck`와 `npm run lint`를 통과시킬 것.

## 디렉터리 구조

```
src/
  pages/ (or app/)     # 라우트·화면
  components/          # 재사용 UI 컴포넌트
  features/            # 화면별 묶음 (dashboard, quest, observation, report)
  data/               # 목업 데이터 (mock quests, children, reports 등)
  types/              # 공유 타입 정의
  hooks/              # 커스텀 훅
  utils/              # 순수 유틸 함수
```

## 주요 화면 (프로토타입 범위)

1. **부모 대시보드** — 오늘의 퀘스트, 아이 진행 상황, 주간 트렌드
2. **퀘스트 수행 화면** — 아이가 미션 실행, 부모가 결과를 객관식으로 입력
3. **AI 최적화 결과** — "다음 퀘스트는 이렇게 조정됩니다" + 조정 이유 (목업 텍스트로 표시)
4. **의사용 리포트** — 누적 기록 요약, 데이터 뷰

### 퀘스트 트랙 (기능 방향 분리)
- **집중력 트랙**: 짧은 몰입 미션 (예: 책 한 페이지 읽기 → 다음 단계 유도)
- **행동 교정 트랙**: PTBM 핵심(긍정적 강화·구조화·일관된 훈육)을 퀘스트화
- **부모 보조 트랙**: 부모 역할을 일부 대행하는 안내 미션

## 도메인 핵심 타입 (참고)

실제 정의는 `src/types/`에 두고, 변경 시 이 메모도 함께 갱신할 것.
프로토타입에서는 아래 타입의 목업 객체를 `src/data/`에 두고 화면에 표시한다.

```ts
type QuestTrack = 'focus' | 'behavior' | 'parent_support';

interface Quest {
  id: string;
  childId: string;
  track: QuestTrack;
  title: string;
  instruction: string;      // 아이 눈높이 지시문
  difficulty: number;       // 1~5
}

interface Observation {
  questId: string;
  childId: string;
  parentInputs: Record<string, string>;  // 객관식 응답
  completed: boolean;
}

interface OptimizationResult {
  childId: string;
  nextQuest: Quest;
  rationale: string;        // 조정 이유 (화면에 설명 텍스트로 표시)
}
```

## 프로토타입 규칙

- **외부 연결 금지**: API 호출, fetch, DB, 인증, AI SDK를 추가하지 말 것. 전부 목업으로 처리.
- "AI 생성/최적화" 결과는 미리 작성한 목업 데이터·텍스트로 화면에 보여주기만 한다.
- 상태는 컴포넌트 로컬 상태로 충분. 전역 상태관리 라이브러리는 꼭 필요할 때만.
- 데이터는 `src/data/`의 목업에서 가져온다. 하드코딩 값은 가급적 이 폴더로 모은다.

## 코드 컨벤션

- TypeScript `strict: true`. `any` 사용 금지 (불가피하면 `unknown` + 좁히기).
- 함수형·선언형 우선. 컴포넌트는 작게 분리.
- 이름은 도메인 용어를 따른다: Quest, Observation, Optimization, Clinician.
- 커밋 전 typecheck·lint 통과 필수.