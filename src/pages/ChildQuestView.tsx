import { useState } from 'react'
import { mockQuests, mockChildren } from '../data'
import { SpeechBubble } from '../components/SpeechBubble'

const child = mockChildren[0]
const quests = mockQuests.filter((q) => q.childId === child.id).slice(0, 3)

const TRACK_EMOJI = {
  focus: '🧠',
  behavior: '⭐',
  parent_support: '🤝',
} as const

const TRACK_BG = {
  focus: 'bg-[#e8f0ff] border-[#c5d8f7]',
  behavior: 'bg-[#fff3d7] border-[#fae7b4]',
  parent_support: 'bg-[#fff0ea] border-[#fcc9a9]',
} as const

export function ChildQuestView() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [done, setDone] = useState<Set<string>>(new Set())

  const quest = quests[activeIdx]
  if (!quest) return null

  const isDone = done.has(quest.id)

  return (
    <div className="space-y-6">
      {/* 진행 점 */}
      <div className="flex justify-center gap-3 pt-2">
        {quests.map((q, i) => (
          <button
            key={q.id}
            onClick={() => setActiveIdx(i)}
            className={`transition-all rounded-full ${
              i === activeIdx
                ? 'w-6 h-3 bg-[#1a73e8]'
                : done.has(q.id)
                ? 'w-3 h-3 bg-[#d0a700]'
                : 'w-3 h-3 bg-[#c1c6d6]'
            }`}
          />
        ))}
      </div>

      {/* 마스코트 말풍선 */}
      <div className="flex items-start gap-3 px-1">
        <span className="text-4xl">👻</span>
        <SpeechBubble variant={isDone ? 'orange' : 'blue'} className="flex-1">
          {isDone
            ? '야호! 정말 잘 했어! 최고야 🎉'
            : `안녕 ${child.name}! 오늘 미션이 왔어. 같이 해볼까? 💪`}
        </SpeechBubble>
      </div>

      {/* 미션 카드 */}
      <div className={`rounded-[28px_24px_32px_20px] border-2 p-7 text-center space-y-4 transition-all ${
        isDone ? 'bg-[#fff3d7] border-[#fae7b4]' : TRACK_BG[quest.track]
      }`}>
        <span className="text-6xl block">{isDone ? '🎊' : TRACK_EMOJI[quest.track]}</span>
        <h2 className="text-2xl font-bold text-[#231b00]">{quest.title}</h2>
        <p className="text-base text-[#414754] leading-relaxed font-medium">{quest.instruction}</p>
        {isDone && (
          <span className="inline-block bg-[#d0a700] text-[#231b00] text-sm font-bold px-4 py-1.5 rounded-full">
            완료! ✓
          </span>
        )}
      </div>

      {/* 행동 버튼 */}
      {!isDone ? (
        <button
          onClick={() => setDone((prev) => new Set([...prev, quest.id]))}
          className="w-full py-5 bg-[#1a73e8] text-white rounded-full text-xl font-bold shadow-[0_5px_0_#005bbf] hover:-translate-y-0.5 active:translate-y-1.5 active:shadow-none transition-all"
        >
          다 했어요! ✓
        </button>
      ) : (
        <button
          onClick={() => {
            if (activeIdx < quests.length - 1) setActiveIdx((i) => i + 1)
          }}
          disabled={activeIdx >= quests.length - 1}
          className="w-full py-5 bg-[#d0a700] text-[#231b00] rounded-full text-xl font-bold shadow-[0_5px_0_#a07800] hover:-translate-y-0.5 active:translate-y-1.5 active:shadow-none transition-all disabled:bg-[#f4e1af] disabled:text-[#727785] disabled:shadow-none"
        >
          {activeIdx < quests.length - 1 ? '다음 미션 →' : '오늘 끝! 🎊'}
        </button>
      )}
    </div>
  )
}
