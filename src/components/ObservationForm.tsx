import { useState } from 'react'

const QUESTIONS = [
  {
    id: 'help',
    question: '도움이 얼마나 필요했나요?',
    options: ['도움 없이 스스로', '약간 도움', '많은 도움', '전적 도움'],
  },
  {
    id: 'focus',
    question: '미션에 집중했나요?',
    options: ['네', '보통이에요', '아니요'],
  },
  {
    id: 'meltdown',
    question: '감정 폭발(멜트다운)이 있었나요?',
    options: ['없음', '약간', '심함'],
  },
]

interface ObservationFormProps {
  onSubmit: (answers: Record<string, string>) => void
}

export function ObservationForm({ onSubmit }: ObservationFormProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const allAnswered = QUESTIONS.every((q) => answers[q.id])

  return (
    <div className="space-y-7">
      {QUESTIONS.map((q, idx) => (
        <div key={q.id}>
          <p className="text-sm font-bold text-[#231b00] mb-3">
            {idx + 1}. {q.question}
          </p>
          <div className="flex flex-wrap gap-2">
            {q.options.map((opt) => {
              const selected = answers[q.id] === opt
              const isBad = q.id === 'meltdown' && opt === '심함'
              return (
                <button
                  key={opt}
                  onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt }))}
                  className={`px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${
                    selected
                      ? isBad
                        ? 'bg-[#ba1a1a] border-[#ba1a1a] text-white'
                        : 'bg-[#1a73e8] border-[#1a73e8] text-white'
                      : 'bg-[#fff8f0] border-[#c1c6d6] text-[#414754] hover:border-[#1a73e8]'
                  }`}
                >
                  {opt}
                </button>
              )
            })}
          </div>
        </div>
      ))}

      <button
        onClick={() => allAnswered && onSubmit(answers)}
        disabled={!allAnswered}
        className={`w-full py-4 rounded-full text-base font-bold transition-all relative ${
          allAnswered
            ? 'bg-[#1a73e8] text-white shadow-[0_4px_0_#005bbf] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none'
            : 'bg-[#f4e1af] text-[#727785] cursor-not-allowed'
        }`}
      >
        제출하고 AI 분석 보기 →
      </button>
    </div>
  )
}
