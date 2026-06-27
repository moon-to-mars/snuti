import type { Quest } from '../types'

const TRACK_CONFIG = {
  focus: {
    label: '집중력',
    bg: 'bg-[#e8f0ff]',
    offsetBg: 'bg-[#c5d8f7]',
    badge: 'bg-[#1a73e8] text-white',
    dot: 'bg-[#1a73e8]',
    border: 'border-[#1a73e8]',
  },
  behavior: {
    label: '행동 교정',
    bg: 'bg-[#fff3d7]',
    offsetBg: 'bg-[#fae7b4]',
    badge: 'bg-[#d0a700] text-[#231b00]',
    dot: 'bg-[#d0a700]',
    border: 'border-[#d0a700]',
  },
  emotion: {
    label: '감정 조절',
    bg: 'bg-[#fff3d7]',
    offsetBg: 'bg-[#fae7b4]',
    badge: 'bg-[#d0a700] text-[#231b00]',
    dot: 'bg-[#d0a700]',
    border: 'border-[#d0a700]',
  },
  parent_support: {
    label: '부모 보조',
    bg: 'bg-[#fff0ea]',
    offsetBg: 'bg-[#fcc9a9]',
    badge: 'bg-[#fc9b6c] text-[#231b00]',
    dot: 'bg-[#fc9b6c]',
    border: 'border-[#fc9b6c]',
  },
} as const

interface QuestCardProps {
  quest: Quest
  onClick?: () => void
  completed?: boolean
}

export function QuestCard({ quest, onClick, completed = false }: QuestCardProps) {
  const cfg = TRACK_CONFIG[quest.track]
  return (
    <div className="relative">
      {/* 물리적 깊이 — 오프셋 배경 레이어 */}
      <div className={`absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-[24px_18px_28px_20px] ${cfg.offsetBg}`} />

      <button
        onClick={onClick}
        disabled={!onClick}
        className={`relative w-full text-left rounded-[24px_18px_28px_20px] border-2 p-5 transition-all
          ${cfg.bg} ${cfg.border}
          ${onClick ? 'hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5' : 'cursor-default'}
          ${completed ? 'opacity-50' : ''}`}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-2 ${cfg.badge}`}>
              {cfg.label}
            </span>
            <p className={`font-bold text-[#231b00] text-base ${completed ? 'line-through opacity-60' : ''}`}>
              {quest.title}
            </p>
            <p className="text-sm text-[#414754] mt-1 font-medium leading-relaxed">{quest.instruction}</p>
          </div>
          <div className="flex flex-col items-center gap-1 shrink-0 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${i < quest.difficulty ? cfg.dot : 'bg-[#c1c6d6]'}`}
              />
            ))}
          </div>
        </div>
        {completed && (
          <p className="text-xs text-[#727785] mt-2 font-semibold">완료 ✓</p>
        )}
      </button>
    </div>
  )
}
