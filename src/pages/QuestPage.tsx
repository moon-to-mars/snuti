import { useState } from 'react'
import { mockQuests, activeQuest } from '../data'
import type { QuestTrack } from '../types'

const TRACK_LABEL: Record<QuestTrack, string> = {
  focus: '집중력',
  emotion: '감정 조절',
  behavior: '행동 교정',
  parent_support: '부모 보조',
}

const TRACK_COLOR: Record<QuestTrack, string> = {
  focus: 'bg-[#ffc83d] text-[#715400]',
  emotion: 'bg-[#e4e2e2] text-[#4f4634]',
  behavior: 'bg-[#e4e2e2] text-[#4f4634]',
  parent_support: 'bg-[#e4e2e2] text-[#4f4634]',
}

interface QuestDetailProps {
  questId: string
  onComplete: () => void
  onBack: () => void
}

function QuestDetail({ questId, onComplete, onBack }: QuestDetailProps) {
  const [progress, setProgress] = useState(0)
  const quest = mockQuests.find((q) => q.id === questId) ?? activeQuest

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="text-[13px] font-semibold text-[#817661] flex items-center gap-1 hover:text-[#1b1c1c]">
        ← Back
      </button>

      <div className="text-center">
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#817661]">Current Quest</span>
        <h1 style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[32px] font-extrabold text-[#1b1c1c] mt-1 leading-tight">
          {quest.title}
        </h1>
      </div>

      {/* 일러스트 카드 */}
      <div className="rounded-2xl overflow-hidden bg-[#d4e8d4] aspect-[4/3] flex items-center justify-center">
        <span className="text-8xl">📖</span>
      </div>

      {/* 진행 바 */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-[14px] font-semibold text-[#4f4634]">Progress</span>
          <span style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[18px] font-bold text-[#1b1c1c]">
            {progress} / 1 <span className="text-[14px] font-normal text-[#817661]">page</span>
          </span>
        </div>
        <div className="h-2 bg-[#e4e2e2] rounded-full overflow-hidden">
          <div className="h-full bg-[#ffc83d] rounded-full transition-all" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>

      <button
        onClick={() => { setProgress(1); setTimeout(onComplete, 400) }}
        className="w-full py-4 bg-[#ffc83d] text-[#715400] rounded-xl text-[17px] font-bold flex items-center justify-center gap-2 hover:bg-[#f5bf34] transition-colors"
      >
        ✓ Finished!
      </button>
    </div>
  )
}

interface QuestsListProps {
  onSelectQuest: (id: string) => void
}

function QuestsList({ onSelectQuest }: QuestsListProps) {
  const byTrack = mockQuests.reduce<Record<QuestTrack, typeof mockQuests>>((acc, q) => {
    if (!acc[q.track]) acc[q.track] = []
    acc[q.track].push(q)
    return acc
  }, {} as Record<QuestTrack, typeof mockQuests>)

  return (
    <div className="space-y-6">
      <h1 style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[28px] font-bold text-[#1b1c1c]">
        Quests
      </h1>
      {(Object.entries(byTrack) as [QuestTrack, typeof mockQuests][]).map(([track, quests]) => (
        <div key={track}>
          <div className="flex items-center justify-between mb-3">
            <span className={`text-[12px] font-bold px-3 py-1 rounded-full ${TRACK_COLOR[track]}`}>
              {TRACK_LABEL[track]}
            </span>
          </div>
          <div className="space-y-2">
            {quests.map((q) => (
              <button
                key={q.id}
                onClick={() => onSelectQuest(q.id)}
                className="w-full bg-white rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-between text-left hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow"
              >
                <div>
                  <p className="text-[15px] font-semibold text-[#1b1c1c]">{q.title}</p>
                  <p className="text-[13px] text-[#817661] mt-0.5">{q.durationMin}분 · 난이도 {q.difficulty}/5</p>
                </div>
                <span className="text-[#e4e2e2] text-lg">›</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

interface QuestPageProps {
  initialQuestId?: string
  onComplete: (questId: string) => void
}

export function QuestPage({ initialQuestId, onComplete }: QuestPageProps) {
  const [selectedId, setSelectedId] = useState<string | null>(initialQuestId ?? null)

  if (selectedId) {
    return (
      <QuestDetail
        questId={selectedId}
        onComplete={() => { onComplete(selectedId); setSelectedId(null) }}
        onBack={() => setSelectedId(null)}
      />
    )
  }
  return <QuestsList onSelectQuest={(id) => setSelectedId(id)} />
}
