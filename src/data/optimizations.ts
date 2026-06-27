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
      title: 'The Garden of Logic',
      instruction: '정원에서 반복되는 패턴 3개를 찾아봐요. 사진을 찍거나 그려도 좋아요.',
      difficulty: 3,
      durationMin: 15,
    },
    rationale: 'Flow states are stabilizing. We analyzed the last 72 hours of activity to optimize the learning trajectory.',
    metrics: [
      { label: 'Focus Deepened', value: '+12%' },
      { label: 'Memory Recall', value: 'Up' },
    ],
    date: '2023-10-25',
  },
]
