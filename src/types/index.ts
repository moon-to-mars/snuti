export type QuestTrack = 'focus' | 'behavior' | 'parent_support'

export type AdhkType = 'inattentive' | 'hyperactive' | 'combined'

export interface Child {
  id: string
  name: string
  age: number
  adhdType: AdhkType
  parentingEnv: string
}

export interface Quest {
  id: string
  childId: string
  track: QuestTrack
  title: string
  instruction: string
  difficulty: number
}

export interface ObservationInput {
  questionId: string
  question: string
  options: string[]
}

export interface Observation {
  id: string
  questId: string
  childId: string
  parentInputs: Record<string, string>
  completed: boolean
  date: string
}

export interface OptimizationResult {
  id: string
  childId: string
  previousQuestId: string
  nextQuest: Quest
  rationale: string
  date: string
}

export interface WeeklyTrend {
  week: string
  completedQuests: number
  avgDifficulty: number
  trackBreakdown: Record<QuestTrack, number>
}

export interface ClinicianReport {
  childId: string
  generatedAt: string
  weeklyTrends: WeeklyTrend[]
  totalObservations: number
  topPerformingTrack: QuestTrack
  notes: string
}
