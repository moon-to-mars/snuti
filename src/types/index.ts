export type QuestTrack = 'focus' | 'emotion' | 'behavior' | 'parent_support'

export type AdhkType = 'inattentive' | 'hyperactive' | 'combined'

export interface Child {
  id: string
  name: string
  parentName: string
  age: number
  adhdType: AdhkType
  parentingEnv: string
  streak: number
}

export interface Quest {
  id: string
  childId: string
  track: QuestTrack
  title: string
  instruction: string
  difficulty: number
  durationMin: number
}

export interface Observation {
  id: string
  questId: string
  childId: string
  activityContext: string
  helpLevel: 'none' | 'some' | 'alot'
  focusLevel: number        // 0–10
  notes: string
  completed: boolean
  date: string
}

export interface CategoryStat {
  track: QuestTrack
  completed: number
  total: number
}

export interface OptimizationResult {
  id: string
  childId: string
  previousQuestId: string
  nextQuest: Quest
  rationale: string
  metrics: { label: string; value: string }[]
  date: string
}

export interface ClinicalEntry {
  id: string
  type: 'milestone' | 'observation' | 'action'
  title: string
  author: string
  date: string
  body: string
}

export interface WeeklyTrend {
  week: string
  focus: number
  impulsivity: number
  completedQuests: number
}

export interface ClinicianReport {
  childId: string
  generatedAt: string
  focusScore: number
  focusScoreMax: number
  focusTrend: string
  categoryStats: CategoryStat[]
  weeklyTrends: WeeklyTrend[]
  clinicalEntries: ClinicalEntry[]
  weaknesses: string[]
  totalObservations: number
}
