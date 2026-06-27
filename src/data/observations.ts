import type { Observation } from '../types'

export const mockObservations: Observation[] = [
  {
    id: 'obs-1',
    questId: 'q-focus-1',
    childId: 'child-1',
    activityContext: '책 읽기',
    helpLevel: 6,
    focusLevel: 7,
    selfRegulation: 8,
    notes: '처음엔 산만했지만 5분 후 집중 시작. 내용 요약을 잘 했음.',
    completed: true,
    date: '2026-06-24',
  },
  {
    id: 'obs-2',
    questId: 'q-emotion-3',
    childId: 'child-1',
    activityContext: '그림 그리기',
    helpLevel: 9,
    focusLevel: 9,
    selfRegulation: 9,
    notes: '"기쁨"과 "약간 피곤함"을 그림으로 표현. 매우 적극적.',
    completed: true,
    date: '2026-06-23',
  },
]
