import { mockChildren, mockQuests, mockObservations, mockReports } from '../data'
import { QuestCard } from '../components/QuestCard'
import { TrendBar, ProgressBar } from '../components/TrendBar'

interface ParentDashboardProps {
  onStartQuest: (questId: string) => void
  completedQuests: Record<string, Record<string, string>>
}

const child = mockChildren[0]
const todayQuests = mockQuests.filter((q) => q.childId === child.id).slice(0, 3)
const mockCompletedIds = new Set(mockObservations.filter((o) => o.completed).map((o) => o.questId))
const report = mockReports[0]

export function ParentDashboard({ onStartQuest, completedQuests }: ParentDashboardProps) {
  const sessionCompletedIds = new Set(Object.keys(completedQuests))
  const completedIds = new Set([...mockCompletedIds, ...sessionCompletedIds])
  const completedToday = todayQuests.filter((q) => completedIds.has(q.id)).length

  return (
    <div className="space-y-5">
      {/* 아이 정보 카드 */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-2xl">
            🧒
          </div>
          <div>
            <p className="font-semibold text-gray-800">{child.name}</p>
            <p className="text-sm text-gray-500">{child.age}세 · {child.adhdType === 'combined' ? '복합형' : child.adhdType === 'inattentive' ? '부주의형' : '과잉행동형'} ADHD</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-2xl font-bold text-indigo-600">{completedToday}/{todayQuests.length}</p>
            <p className="text-xs text-gray-400">오늘 완료</p>
          </div>
        </div>
      </div>

      {/* 진행 상황 요약 */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 space-y-3">
        <h2 className="text-sm font-semibold text-gray-700">진행 상황</h2>
        <ProgressBar label="오늘 퀘스트" value={completedToday} max={todayQuests.length} />
        <ProgressBar label="이번 달 총 관찰" value={report.totalObservations} max={30} color="bg-green-500" />
      </div>

      {/* 오늘의 퀘스트 */}
      <div>
        <h2 className="text-sm font-semibold text-gray-700 mb-2">오늘의 퀘스트</h2>
        <div className="space-y-2">
          {todayQuests.map((quest) => (
            <QuestCard
              key={quest.id}
              quest={quest}
              completed={completedIds.has(quest.id)}
              onClick={completedIds.has(quest.id) ? undefined : () => onStartQuest(quest.id)}
            />
          ))}
        </div>
      </div>

      {/* 주간 트렌드 */}
      <TrendBar trends={report.weeklyTrends} />
    </div>
  )
}
