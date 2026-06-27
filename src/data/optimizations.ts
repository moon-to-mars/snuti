import type { OptimizationResult } from '../types'

export const mockOptimizations: OptimizationResult[] = [
  {
    id: 'opt-1',
    childId: 'child-1',
    previousQuestId: 'q-focus-1',
    nextQuest: {
      id: 'q-focus-2',
      childId: 'child-1',
      track: 'focus',
      title: '코믹스 3개 패널 살펴보기',
      childPrompt: '그림 이야기 3컷을 보고 무슨 내용인지 말해봐요!',
      instruction: '새로운 시각적 방식으로 스토리의 핵심 맥락을 파악해보세요. 그림을 보며 이야기 순서를 맞춰봐요.',
      encouragement: '그림만 봐도 이야기가 보이지? 대단한데!',
      difficulty: 3,
      durationMin: 10,
    },
    rationale: '준호의 학습 패턴을 분석해보니 "비주얼 코믹스" 방식이 가장 효과적이었어! 코믹스 형태의 퀘스트에서 집중도와 정답률이 더 높게 나타났어요.',
    metrics: [
      { label: '집중도', value: '+12%' },
      { label: '기억력',  value: '↑' },
      { label: '피로도',  value: '낮음' },
    ],
    date: '2023-10-25',
  },
]
