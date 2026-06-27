import { useState } from 'react'
import { mockQuests, mockChildren } from '../data'

const child = mockChildren[0]
const quests = mockQuests.filter((q) => q.childId === child.id).slice(0, 3)

const TRACK_EMOJI = {
  focus: '🧠',
  behavior: '⭐',
  parent_support: '🤝',
} as const

export function ChildQuestView() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [done, setDone] = useState<Set<string>>(new Set())

  const quest = quests[activeIdx]

  if (!quest) return null

  const isDone = done.has(quest.id)

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-gray-400 text-sm">{child.name}의 오늘 미션</p>
        <div className="flex justify-center gap-2 mt-2">
          {quests.map((q, i) => (
            <button
              key={q.id}
              onClick={() => setActiveIdx(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === activeIdx ? 'bg-indigo-500 scale-125' : done.has(q.id) ? 'bg-green-400' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      <div className={`rounded-3xl p-6 text-center space-y-4 transition-all ${isDone ? 'bg-green-50 border border-green-200' : 'bg-indigo-50 border border-indigo-200'}`}>
        <span className="text-6xl block">{isDone ? '🎉' : TRACK_EMOJI[quest.track]}</span>
        <h2 className="text-2xl font-bold text-gray-800">{quest.title}</h2>
        <p className="text-base text-gray-600 leading-relaxed">{quest.instruction}</p>
        {isDone && <p className="text-green-600 font-semibold">미션 완료! 잘 했어요!</p>}
      </div>

      {!isDone ? (
        <button
          onClick={() => setDone((prev) => new Set([...prev, quest.id]))}
          className="w-full py-4 bg-indigo-600 text-white rounded-2xl text-lg font-bold hover:bg-indigo-700 active:scale-[0.98] transition-all"
        >
          다 했어요! ✓
        </button>
      ) : (
        <button
          onClick={() => setActiveIdx((i) => Math.min(i + 1, quests.length - 1))}
          disabled={activeIdx >= quests.length - 1}
          className="w-full py-4 bg-green-500 text-white rounded-2xl text-lg font-bold hover:bg-green-600 disabled:bg-gray-200 disabled:text-gray-400 transition-all"
        >
          {activeIdx < quests.length - 1 ? '다음 미션 →' : '오늘 끝! 🎊'}
        </button>
      )}
    </div>
  )
}
