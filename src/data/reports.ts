import type { ClinicianReport } from '../types'

export const mockReports: ClinicianReport[] = [
  {
    childId: 'child-1',
    generatedAt: '2023-10-31',
    focusScore: 84,
    focusScoreMax: 100,
    focusTrend: '최적',
    categoryStats: [
      { track: 'focus',          completed: 8,  total: 10 },
      { track: 'emotion',        completed: 12, total: 15 },
      { track: 'behavior',       completed: 5,  total: 9  },
      { track: 'parent_support', completed: 4,  total: 6  },
    ],
    weeklyTrends: [
      { week: '1주차', focus: 55, impulsivity: 70, completedQuests: 3 },
      { week: '2주차', focus: 62, impulsivity: 60, completedQuests: 5 },
      { week: '3주차', focus: 58, impulsivity: 75, completedQuests: 4 },
      { week: '4주차', focus: 84, impulsivity: 45, completedQuests: 7 },
    ],
    clinicalEntries: [
      {
        id: 'ce-1',
        type: 'milestone',
        title: '과제 시작 능력 현저히 향상',
        author: '박지연 선생님',
        date: '2023년 10월 24일',
        body: '레오가 보조 촉구 없이 인지 "몰입" 퀘스트를 스스로 시작하는 능력이 눈에 띄게 향상됐어요. "패턴 탐험가" 퀘스트를 12분간 지속했으며, 이는 기준치보다 40% 증가한 수치예요.',
      },
      {
        id: 'ce-2',
        type: 'observation',
        title: '오후 시간대 피로 관찰',
        author: '임상 보조 김민수',
        date: '2023년 10월 19일',
        body: '오후 3시 세션에서 충동성 지표가 급등했어요. 고인지 과제를 오전 시간대로 배치하는 것을 권장해요.',
      },
      {
        id: 'ce-3',
        type: 'action',
        title: '분기 목표 조정',
        author: '박지연 선생님',
        date: '2023년 10월 12일',
        body: '레벨 4 퀘스트 숙달을 반영하여 개별화 교육 계획(IEP)을 업데이트했어요. 다음 달은 \'충동 조절\' 테마 모듈을 추가로 도입할 예정이에요.',
      },
    ],
    weaknesses: [
      '행동 교정 성공률 56% — 차례 기다리기, 자리 지키기에서 지속적 어려움',
      '오후 3시 이후 충동성 급등 패턴 — 고난도 미션은 오전으로 배치 권장',
      '감정 표현 어휘 제한 — 감정 일기·카드 활동 비중 증가 필요',
    ],
    totalObservations: 21,
  },
]
