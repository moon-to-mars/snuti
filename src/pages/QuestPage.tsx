import { useState } from 'react'
import { mockQuests } from '../data'
import { QuestCard } from '../components/QuestCard'
import { ObservationForm } from '../components/ObservationForm'
import { SpeechBubble } from '../components/SpeechBubble'

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
      <div className="space-y-6">
        <button onClick={onBack} className="text-sm font-bold text-[#727785] flex items-center gap-1 hover:text-[#414754]">
          ← 홈으로
        </button>

        <div className="flex items-start gap-3 px-1">
          <span className="text-3xl mt-1">👻</span>
          <SpeechBubble variant="blue" className="flex-1">
            오늘 미션이야! 할 수 있어, 같이 해보자 🎯
          </SpeechBubble>
        </div>

        <div>
          <span className="inline-block bg-[#d0a700] text-[#231b00] text-xs font-bold px-3 py-1 rounded-full mb-3">
            오늘의 미션
          </span>
          <QuestCard quest={quest} />
        </div>

        <button
          onClick={() => setStep('observe')}
          className="w-full py-4 bg-[#1a73e8] text-white rounded-full text-base font-bold shadow-[0_4px_0_#005bbf] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none transition-all"
        >
          미션 완료 → 관찰 기록하기
        </button>
      </div>
    )
  }

  if (step === 'observe') {
    return (
      <div className="space-y-6">
        <button onClick={() => setStep('mission')} className="text-sm font-bold text-[#727785] flex items-center gap-1 hover:text-[#414754]">
          ← 미션으로
        </button>

        <div className="flex items-start gap-3 px-1">
          <span className="text-3xl mt-1">🧑‍⚕️</span>
          <SpeechBubble variant="orange" className="flex-1">
            아이가 어떻게 수행했는지 알려주세요. 솔직하게 답할수록 AI 분석이 정확해져요!
          </SpeechBubble>
        </div>

        <h1 className="text-lg font-bold text-[#231b00]">관찰 결과 기록</h1>
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
    <div className="flex flex-col items-center justify-center py-12 space-y-5">
      <span className="text-6xl">🎉</span>
      <h1 className="text-2xl font-bold text-[#231b00]">퀘스트 완료!</h1>
      <SpeechBubble variant="orange" className="w-full">
        기록 완료! AI가 분석 중이에요. 잠시 후 다음 퀘스트를 추천해드릴게요 ✨
      </SpeechBubble>
      <button
        onClick={onBack}
        className="mt-4 px-8 py-3.5 bg-[#1a73e8] text-white rounded-full font-bold shadow-[0_4px_0_#005bbf] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none transition-all"
      >
        결과 보기
      </button>
    </div>
  )
}
