import type { OptimizationResult } from '../types'

export const mockOptimizations: OptimizationResult[] = [
  {
    id: 'opt-1',
    childId: 'child-1',
    previousQuestId: 'q-focus-1',
    nextQuest: {
      id: 'q-focus-3',
      childId: 'child-1',
      track: 'focus',
      title: '책 두 페이지 읽기',
      instruction: '오늘은 2페이지에 도전해봐요! 읽고 나서 가장 기억에 남는 부분을 이야기해줘요.',
      difficulty: 3,
    },
    rationale: '지난 미션에서 집중력이 크게 향상되었어요. 난이도를 2에서 3으로 올려 더 긴 집중 시간을 연습합니다. 방해 행동이 줄어들고 있으므로 자립 수행을 강화하는 방향으로 조정했어요.',
    date: '2026-06-22',
  },
  {
    id: 'opt-2',
    childId: 'child-1',
    previousQuestId: 'q-behavior-1',
    nextQuest: {
      id: 'q-behavior-4',
      childId: 'child-1',
      track: 'behavior',
      title: '식사 중 대화 나누기',
      instruction: '밥 먹으면서 오늘 있었던 일 한 가지를 이야기해봐요. 자리를 지키면서 이야기할 수 있어요!',
      difficulty: 3,
    },
    rationale: '자리 지키기가 안정되었어요. 이제 식사 시간을 긍정적인 사회적 상호작용으로 연결하는 단계입니다. 행동 유지와 언어 발달을 함께 자극하는 미션으로 전환해요.',
    date: '2026-06-23',
  },
]
