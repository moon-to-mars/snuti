import type { Observation } from '../types'

export const mockObservations: Observation[] = [
  {
    id: 'obs-1',
    questId: 'q-focus-1',
    childId: 'child-1',
    parentInputs: {
      q1: '꽤 잘 했어요',
      q2: '조금 있었어요',
      q3: '약간 도움 필요',
    },
    completed: true,
    date: '2026-06-21',
  },
  {
    id: 'obs-2',
    questId: 'q-behavior-1',
    childId: 'child-1',
    parentInputs: {
      q1: '절반 정도 했어요',
      q2: '가끔 있었어요',
      q3: '거의 스스로',
    },
    completed: true,
    date: '2026-06-22',
  },
  {
    id: 'obs-3',
    questId: 'q-parent-1',
    childId: 'child-1',
    parentInputs: {
      q1: '아주 잘 했어요',
      q2: '전혀 없었어요',
      q3: '완전히 스스로',
    },
    completed: true,
    date: '2026-06-23',
  },
  {
    id: 'obs-4',
    questId: 'q-behavior-3',
    childId: 'child-2',
    parentInputs: {
      q1: '꽤 잘 했어요',
      q2: '거의 없었어요',
      q3: '거의 스스로',
    },
    completed: true,
    date: '2026-06-23',
  },
]
