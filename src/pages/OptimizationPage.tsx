import { mockOptimizations, mockQuests } from '../data'

interface OptimizationPageProps {
  completedQuestId: string
  onNext: () => void
}

const TRACK_LABEL = {
  focus: '집중력',
  behavior: '행동 교정',
  parent_support: '부모 보조',
} as const

export function OptimizationPage({ completedQuestId, onNext }: OptimizationPageProps) {
  const result = mockOptimizations.find((o) => o.previousQuestId === completedQuestId)
  const prevQuest = mockQuests.find((q) => q.id === completedQuestId)

  if (!result || !prevQuest) {
    return (
      <div className="space-y-5">
        <div className="text-center py-8">
          <span className="text-5xl">🤖</span>
          <h1 className="text-xl font-bold text-gray-800 mt-3">AI 분석 중</h1>
          <p className="text-sm text-gray-500 mt-2">다음 퀘스트를 준비하고 있어요.</p>
        </div>
        <button
          onClick={onNext}
          className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700"
        >
          대시보드로 돌아가기
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="text-center py-4">
        <span className="text-5xl">🤖</span>
        <h1 className="text-xl font-bold text-gray-800 mt-3">다음 퀘스트는 이렇게 조정됩니다</h1>
      </div>

      {/* 이전 vs 다음 비교 */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-3">
          <p className="text-xs text-gray-400 mb-1">이전 퀘스트</p>
          <p className="text-sm font-semibold text-gray-500 line-through">{prevQuest.title}</p>
          <p className="text-xs text-gray-400 mt-1">{TRACK_LABEL[prevQuest.track]} · 난이도 {prevQuest.difficulty}</p>
        </div>
        <div className="bg-indigo-50 rounded-xl border border-indigo-200 p-3">
          <p className="text-xs text-indigo-400 mb-1">다음 퀘스트</p>
          <p className="text-sm font-semibold text-gray-800">{result.nextQuest.title}</p>
          <p className="text-xs text-indigo-500 mt-1">{TRACK_LABEL[result.nextQuest.track]} · 난이도 {result.nextQuest.difficulty}</p>
        </div>
      </div>

      {/* 조정 이유 */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-2">조정 이유</h2>
        <p className="text-sm text-gray-600 leading-relaxed">{result.rationale}</p>
      </div>

      <button
        onClick={onNext}
        className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 active:scale-[0.99] transition-all"
      >
        대시보드로 돌아가기
      </button>
    </div>
  )
}
