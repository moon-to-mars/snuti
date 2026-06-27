import type { ClinicianReport } from '../types'

export const mockReports: ClinicianReport[] = [
  {
    childId: 'child-1',
    generatedAt: '2026-06-28',
    weeklyTrends: [
      {
        week: '2026-W23',
        completedQuests: 3,
        avgDifficulty: 2.0,
        trackBreakdown: { focus: 1, behavior: 1, parent_support: 1 },
      },
      {
        week: '2026-W24',
        completedQuests: 5,
        avgDifficulty: 2.4,
        trackBreakdown: { focus: 2, behavior: 2, parent_support: 1 },
      },
      {
        week: '2026-W25',
        completedQuests: 6,
        avgDifficulty: 2.8,
        trackBreakdown: { focus: 2, behavior: 2, parent_support: 2 },
      },
      {
        week: '2026-W26',
        completedQuests: 7,
        avgDifficulty: 3.1,
        trackBreakdown: { focus: 3, behavior: 2, parent_support: 2 },
      },
    ],
    totalObservations: 21,
    topPerformingTrack: 'focus',
    notes: '4주 동안 퀘스트 완료율과 난이도가 꾸준히 상승하고 있습니다. 특히 집중력 트랙에서 두드러진 개선을 보입니다. 행동 교정 트랙도 안정화 단계에 진입한 것으로 판단됩니다. 다음 진료 시 난이도 4 퀘스트 도입 여부를 논의할 것을 권장합니다.',
  },
]
