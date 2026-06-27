# 프로토타입 체크리스트

PTBM 기반 유아 ADHD 행동 교정 웹앱 — **UI 프로토타입(화면만)** 진행 체크리스트.
외부 연결(API·DB·인증·AI) 없이 목업 데이터로만 구성한다.

## 0.5 디자인 시스템 (DESIGN.md 반영)
- [x] Quicksand 폰트 로드 (Google Fonts → index.html)
- [x] Tailwind 커스텀 컬러 토큰 등록 (surface, primary, secondary, tertiary 등)
- [x] 전체 배경색 → 따뜻한 종이색 `#fff8f0`
- [x] 헤더: 캐릭터 아바타 + 로고 + 스트릭 칩 (🔥 5일 연속)
- [x] 하단 탭바: HOME / QUESTS / OBSERVE / AI HELP / REPORT
- [x] QuestCard → 유기적 모서리 + 물리적 레이어(오프셋 배경) 깊이 표현
- [x] 버튼 → 큼직한 알약형, bottom-heavy 보더 스타일
- [x] 말풍선 컴포넌트 (AI 멘트·육아 팁용)
- [x] 관찰 폼 → 3문항(도움 수준 4지 / 집중도 예·아니오 / 멜트다운 없음·약간·심함)
- [x] 부모 홈: 도넛형 완료율 + 육아 팁 카드
- [x] AI 최적화: Level 변화 + 구름 캐릭터 말풍선

## 0. 프로젝트 셋업
- [x] 프레임워크 확정 (예: Vite + React) 후 CLAUDE.md 기술 스택 섹션 갱신
- [x] TypeScript `strict: true` 설정 확인
- [x] ESLint + 포매터 설정
- [x] 스타일 도구 설정 (예: Tailwind)
- [x] `npm run dev` / `build` / `lint` / `typecheck` 동작 확인
- [x] 디렉터리 골격 생성 (`pages` `components` `features` `data` `types` `hooks` `utils`)

## 1. 타입 & 목업 데이터
- [x] `src/types/`에 `Quest` `Observation` `OptimizationResult` `QuestTrack` 정의
- [x] 아이(Child) 페르소나 목업 (연령·ADHD 유형·양육 환경 다양하게 몇 개)
- [x] 퀘스트 목업 — 3개 트랙(focus / behavior / parent_support) 각각 포함
- [x] 관찰(Observation) 기록 목업 (객관식 응답 예시)
- [x] AI 최적화 결과 목업 (nextQuest + rationale 텍스트)
- [x] 의사 리포트용 누적 데이터 목업 (주간 트렌드 등)
- [x] 하드코딩 값은 가급적 `src/data/`로 모음

## 2. 공통 컴포넌트 & 레이아웃
- [x] 역할 전환 UI (부모 / 아이 / 의사 — 데모용 토글이나 메뉴)
- [x] 공통 레이아웃·네비게이션
- [x] 퀘스트 카드 컴포넌트 (트랙별 시각 구분)
- [x] 진행률·트렌드 표시 컴포넌트 (그래프나 바)
- [x] 객관식 입력 컴포넌트

## 3. 화면 — 부모 대시보드
- [x] 오늘의 퀘스트 목록
- [x] 아이 진행 상황 요약
- [x] 주간 트렌드 시각화
- [x] 퀘스트 수행 화면으로 진입 동선

## 4. 화면 — 퀘스트 수행
- [x] 아이용 미션 표시 (눈높이 지시문)
- [x] 미션 실행/완료 상태 표현
- [x] 부모 관찰 결과 객관식 입력 폼
- [x] 입력 후 다음 단계(최적화 결과)로 연결

## 5. 화면 — AI 최적화 결과
- [x] "다음 퀘스트는 이렇게 조정됩니다" 제시 (목업)
- [x] 조정 이유(rationale) 설명 텍스트 표시
- [x] 이전 퀘스트 → 다음 퀘스트 변화 비교 뷰

## 6. 화면 — 의사용 리포트
- [x] 누적 기록 요약 뷰
- [x] 데이터 뷰 (표·차트 등)
- [x] 기간/아이별 필터 (목업 수준)

## 7. 퀘스트 트랙 표현 확인
- [x] 집중력 트랙 — 짧은 몰입 미션 예시 1개 이상
- [x] 행동 교정 트랙 — 긍정적 강화·구조화·일관된 훈육 미션 예시
- [x] 부모 보조 트랙 — 부모 역할 대행 안내 미션 예시
- [x] 트랙별 시각적 구분이 직관적인지 확인

## 8. 마감 점검
- [x] 외부 통신(fetch·API·DB·AI SDK) 코드가 없음을 재확인
- [x] `any` 미사용 확인
- [x] `npm run typecheck` 통과
- [x] `npm run lint` 통과
- [x] 주요 화면 4종이 빈 데이터·긴 텍스트에서도 깨지지 않는지 확인
- [x] 반응형(모바일/데스크톱) 기본 동작 확인