import { mockChildren, mockQuests, mockObservations, mockReports } from '../data'
import { QuestCard } from '../components/QuestCard'
import { TrendBar, DonutChart } from '../components/TrendBar'
import { SpeechBubble } from '../components/SpeechBubble'

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
    <div className="space-y-6">
      {/* 인사 + 아이 정보 */}
      <div className="bg-[#fff3d7] rounded-[24px_20px_28px_16px] border-2 border-[#fae7b4] p-5">
        <p className="text-xs font-bold text-[#727785] mb-1">안녕하세요 👋</p>
        <h1 className="text-xl font-bold text-[#231b00]">{child.name}의 오늘</h1>
        <p className="text-sm text-[#414754] mt-0.5 font-medium">
          {child.age}세 · {child.adhdType === 'combined' ? '복합형' : child.adhdType === 'inattentive' ? '부주의형' : '과잉행동형'} ADHD
        </p>
      </div>

      {/* 완료율 도넛 + 주간 진행 */}
      <div className="flex gap-4 items-center bg-[#fff8f0] rounded-[20px_24px_18px_22px] border-2 border-[#f4e1af] p-5">
        <DonutChart value={completedToday} max={todayQuests.length} label="오늘 완료" />
        <div className="flex-1 space-y-3">
          <div>
            <p className="text-xs font-bold text-[#414754] mb-1">이번 달 총 관찰</p>
            <div className="h-2.5 bg-[#f4e1af] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#d0a700] rounded-full"
                style={{ width: `${Math.min((report.totalObservations / 30) * 100, 100)}%` }}
              />
            </div>
            <p className="text-xs text-[#727785] mt-1 font-medium">{report.totalObservations}/30</p>
          </div>
          <div>
            <p className="text-xs font-bold text-[#414754] mb-1">최고 트랙</p>
            <span className="inline-block bg-[#1a73e8] text-white text-xs font-bold px-3 py-1 rounded-full">
              {report.topPerformingTrack === 'focus' ? '🧠 집중력' : report.topPerformingTrack === 'behavior' ? '⭐ 행동 교정' : '🤝 부모 보조'}
            </span>
          </div>
        </div>
      </div>

      {/* 육아 팁 말풍선 카드 */}
      <div className="flex items-start gap-3 px-1">
        <span className="text-3xl mt-1">💡</span>
        <SpeechBubble variant="orange" className="flex-1">
          <span className="font-bold">오늘의 육아 팁</span><br />
          퀘스트 완료 직후 5초 안에 칭찬하면 강화 효과가 3배 높아진다고 해요!
        </SpeechBubble>
      </div>

      {/* 오늘의 퀘스트 */}
      <div>
        <h2 className="text-base font-bold text-[#231b00] mb-3">오늘의 퀘스트</h2>
        <div className="space-y-4">
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
