import type { Observation } from '../types'

export const mockObservations: Observation[] = [
  {
    id: 'obs-1',
    questId: 'q-focus-1',
    childId: 'child-1',
    activityContext: '책 읽기 활동',
    helpLevel: 'little',
    focusYn: 'yes',
    meltdown: 'none',
    notes: '처음엔 산만했지만 5분 후 집중 시작. 내용 요약을 잘 했음.',
    completed: true,
    date: '2023-10-24',
  },
  {
    id: 'obs-2',
    questId: 'q-emotion-3',
    childId: 'child-1',
    activityContext: '감정 카드 고르기',
    helpLevel: 'none',
    focusYn: 'yes',
    meltdown: 'none',
    notes: '오늘은 "기쁨"과 "약간 피곤함"을 그림으로 표현. 매우 적극적.',
    completed: true,
    date: '2023-10-23',
  },
]
