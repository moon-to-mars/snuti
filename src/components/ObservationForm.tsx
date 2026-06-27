import { useState } from 'react'
import { observationQuestions } from '../data'

interface ObservationFormProps {
  onSubmit: (answers: Record<string, string>) => void
}

export function ObservationForm({ onSubmit }: ObservationFormProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const allAnswered = observationQuestions.every((q) => answers[q.questionId])

  function handleSelect(questionId: string, option: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: option }))
  }

  return (
    <div className="space-y-6">
      {observationQuestions.map((q, idx) => (
        <div key={q.questionId}>
          <p className="text-sm font-semibold text-gray-700 mb-2">
            {idx + 1}. {q.question}
          </p>
          <div className="space-y-2">
            {q.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect(q.questionId, opt)}
                className={`w-full text-left px-4 py-2.5 rounded-xl border text-sm transition-all ${
                  answers[q.questionId] === opt
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700 font-medium'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={() => allAnswered && onSubmit(answers)}
        disabled={!allAnswered}
        className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
          allAnswered
            ? 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.99]'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        관찰 결과 제출
      </button>
    </div>
  )
}
