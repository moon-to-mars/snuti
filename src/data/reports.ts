import type { ClinicianReport } from '../types'

export const mockReports: ClinicianReport[] = [
  {
    childId: 'child-1',
    generatedAt: '2023-10-31',
    focusScore: 84,
    focusScoreMax: 100,
    focusTrend: 'Optimal',
    categoryStats: [
      { track: 'focus',          completed: 8,  total: 10 },
      { track: 'emotion',        completed: 12, total: 15 },
      { track: 'behavior',       completed: 5,  total: 9  },
      { track: 'parent_support', completed: 4,  total: 6  },
    ],
    weeklyTrends: [
      { week: 'Week 1', focus: 55, impulsivity: 70, completedQuests: 3 },
      { week: 'Week 2', focus: 62, impulsivity: 60, completedQuests: 5 },
      { week: 'Week 3', focus: 58, impulsivity: 75, completedQuests: 4 },
      { week: 'Week 4', focus: 84, impulsivity: 45, completedQuests: 7 },
    ],
    clinicalEntries: [
      {
        id: 'ce-1',
        type: 'milestone',
        title: 'Significant Improvement in Task Initiation',
        author: 'Dr. Sarah Jenkins',
        date: 'Oct 24, 2023',
        body: 'Leo demonstrated a notable shift in his ability to start cognitive "Flow" quests without secondary prompting. He engaged with the "Patterns" quest for 12 minutes — a 40% increase from his baseline.',
      },
      {
        id: 'ce-2',
        type: 'observation',
        title: 'Afternoon Fatigue Observed',
        author: 'Clinical Assistant Mike R.',
        date: 'Oct 19, 2023',
        body: 'Impulsivity metrics spiked during the 3:00 PM session. Recommend shifting high-cognition tasks to the morning window.',
      },
      {
        id: 'ce-3',
        type: 'action',
        title: 'Quarterly Goal Adjustment',
        author: 'Dr. Sarah Jenkins',
        date: 'Oct 12, 2023',
        body: "Updated the IEP to reflect new mastery of level 4 quests. We are introducing more 'Impulse Control' themed modules for the next month.",
      },
    ],
    weaknesses: [
      '행동 교정(Behavior) 성공률 56% — 차례 기다리기, 자리 지키기에서 지속적 어려움',
      '오후 3시 이후 충동성 급등 패턴 — 고난도 미션은 오전으로 배치 권장',
      '감정 표현 어휘 제한 — 감정 일기·카드 활동 비중 증가 필요',
    ],
    totalObservations: 21,
  },
]
