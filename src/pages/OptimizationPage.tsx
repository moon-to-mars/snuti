import { mockOptimizations, mockQuests } from '../data'
import { SpeechBubble } from '../components/SpeechBubble'

interface OptimizationPageProps {
  completedQuestId: string
  onNext: () => void
}

const TRACK_LABEL = {
  focus: '🧠 집중력',
  behavior: '⭐ 행동 교정',
  parent_support: '🤝 부모 보조',
} as const

export function OptimizationPage({ completedQuestId, onNext }: OptimizationPageProps) {
  const result = mockOptimizations.find((o) => o.previousQuestId === completedQuestId)
  const prevQuest = mockQuests.find((q) => q.id === completedQuestId)

  if (!result || !prevQuest) {
    return (
      <div className="space-y-6">
        <div className="text-center py-8">
          <span className="text-5xl">🤖</span>
          <h1 className="text-xl font-bold text-[#231b00] mt-3">AI 분석 중</h1>
        </div>
        <button onClick={onNext} className="w-full py-4 bg-[#1a73e8] text-white rounded-full font-bold shadow-[0_4px_0_#005bbf]">
          대시보드로 돌아가기
        </button>
      </div>
    )
  }

  const levelBefore = prevQuest.difficulty
  const levelAfter = result.nextQuest.difficulty
  const levelDiff = levelAfter - levelBefore

  return (
    <div className="space-y-6">
      <div className="text-center py-2">
        <span className="text-5xl">☁️</span>
        <h1 className="text-xl font-bold text-[#231b00] mt-2">AI 분석 완료</h1>
      </div>

      {/* 구름 캐릭터 말풍선 */}
      <div className="flex items-start gap-3 px-1">
        <span className="text-3xl mt-1">🌤️</span>
        <SpeechBubble variant="blue" className="flex-1">
          {result.rationale}
        </SpeechBubble>
      </div>

      {/* Level 변화 */}
      <div className="bg-[#fff3d7] rounded-[20px_24px_18px_22px] border-2 border-[#fae7b4] p-5">
        <p className="text-xs font-bold text-[#727785] mb-3">숙련도 변화</p>
        <div className="flex items-center justify-center gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-[#727785]">Lv.{levelBefore}</p>
            <p className="text-xs text-[#727785] mt-1">{prevQuest.title}</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl">→</span>
            {levelDiff !== 0 && (
              <span className={`text-xs font-bold mt-0.5 ${levelDiff > 0 ? 'text-[#1a73e8]' : 'text-[#fc9b6c]'}`}>
                {levelDiff > 0 ? `+${levelDiff}` : levelDiff}
              </span>
            )}
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#1a73e8]">Lv.{levelAfter}</p>
            <p className="text-xs text-[#1a73e8] mt-1 font-semibold">{result.nextQuest.title}</p>
          </div>
        </div>
      </div>

      {/* 이전 vs 다음 비교 */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#f4e1af] rounded-[16px_20px_14px_18px] border-2 border-[#ebd9a7] p-4">
          <p className="text-xs font-bold text-[#727785] mb-1">이전 퀘스트</p>
          <p className="text-sm font-bold text-[#727785] line-through">{prevQuest.title}</p>
          <p className="text-xs text-[#727785] mt-1">{TRACK_LABEL[prevQuest.track]}</p>
        </div>
        <div className="bg-[#e8f0ff] rounded-[16px_20px_14px_18px] border-2 border-[#c5d8f7] p-4">
          <p className="text-xs font-bold text-[#1a73e8] mb-1">내일 퀘스트</p>
          <p className="text-sm font-bold text-[#231b00]">{result.nextQuest.title}</p>
          <p className="text-xs text-[#1a73e8] mt-1 font-semibold">{TRACK_LABEL[result.nextQuest.track]}</p>
        </div>
      </div>

      {/* 효과 지표 칩 */}
      <div className="flex gap-2 flex-wrap">
        <span className="bg-[#d0a700] text-[#231b00] text-xs font-bold px-3 py-1.5 rounded-full">+12% 집중도</span>
        <span className="bg-[#1a73e8] text-white text-xs font-bold px-3 py-1.5 rounded-full">방해 행동 감소</span>
        <span className="bg-[#fc9b6c] text-[#231b00] text-xs font-bold px-3 py-1.5 rounded-full">자립 수행 향상</span>
      </div>

      <button
        onClick={onNext}
        className="w-full py-4 bg-[#1a73e8] text-white rounded-full text-base font-bold shadow-[0_4px_0_#005bbf] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none transition-all"
      >
        내일 퀘스트 확정하기 →
      </button>
    </div>
  )
}
