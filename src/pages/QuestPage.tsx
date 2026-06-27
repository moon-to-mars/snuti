import { useState } from 'react'
import { mockQuests } from '../data'
import { QuestCard } from '../components/QuestCard'
import { ObservationForm } from '../components/ObservationForm'

type Step = 'mission' | 'observe' | 'done'

interface QuestPageProps {
  questId: string
  onComplete: (questId: string, answers: Record<string, string>) => void
  onBack: () => void
}

export function QuestPage({ questId, onComplete, onBack }: QuestPageProps) {
  const [step, setStep] = useState<Step>('mission')
  const quest = mockQuests.find((q) => q.id === questId)

  if (!quest) return null

  if (step === 'mission') {
    return (
      <div className="space-y-5">
        <button onClick={onBack} className="text-sm text-gray-500 flex items-center gap-1 hover:text-gray-700">
          ← 대시보드로
        </button>
        <div className="text-center py-4">
          <span className="text-5xl">🎯</span>
          <h1 className="text-xl font-bold text-gray-800 mt-3">오늘의 미션</h1>
        </div>
        <QuestCard quest={quest} />
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
          <p className="text-sm text-yellow-800 font-medium">미션을 완료한 뒤 아래 버튼을 눌러주세요.</p>
        </div>
        <button
          onClick={() => setStep('observe')}
          className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 active:scale-[0.99] transition-all"
        >
          미션 완료 → 관찰 기록하기
        </button>
      </div>
    )
  }

  if (step === 'observe') {
    return (
      <div className="space-y-5">
        <button onClick={() => setStep('mission')} className="text-sm text-gray-500 flex items-center gap-1 hover:text-gray-700">
          ← 미션으로
        </button>
        <h1 className="text-lg font-bold text-gray-800">관찰 결과 기록</h1>
        <p className="text-sm text-gray-500">아이가 미션을 수행하는 동안 어땠는지 응답해주세요.</p>
        <ObservationForm
          onSubmit={(answers) => {
            onComplete(questId, answers)
            setStep('done')
          }}
        />
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <span className="text-6xl">🎉</span>
      <h1 className="text-xl font-bold text-gray-800">퀘스트 완료!</h1>
      <p className="text-sm text-gray-500">AI가 다음 퀘스트를 분석 중이에요.</p>
      <button
        onClick={onBack}
        className="mt-4 px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700"
      >
        결과 보기
      </button>
    </div>
  )
}
