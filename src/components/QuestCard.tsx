import type { Quest } from '../types'

const TRACK_CONFIG = {
  focus: {
    label: '집중력',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    badge: 'bg-blue-100 text-blue-700',
    dot: 'bg-blue-500',
  },
  behavior: {
    label: '행동 교정',
    bg: 'bg-green-50',
    border: 'border-green-200',
    badge: 'bg-green-100 text-green-700',
    dot: 'bg-green-500',
  },
  parent_support: {
    label: '부모 보조',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    badge: 'bg-orange-100 text-orange-700',
    dot: 'bg-orange-500',
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
    <button
      onClick={onClick}
      className={`w-full text-left rounded-2xl border p-4 transition-all ${cfg.bg} ${cfg.border} ${
        onClick ? 'hover:shadow-md active:scale-[0.99]' : 'cursor-default'
      } ${completed ? 'opacity-50' : ''}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${cfg.badge}`}>
            {cfg.label}
          </span>
          <p className={`font-semibold text-gray-800 ${completed ? 'line-through' : ''}`}>
            {quest.title}
          </p>
          <p className="text-sm text-gray-500 mt-1">{quest.instruction}</p>
        </div>
        <div className="flex items-center gap-0.5 shrink-0 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${i < quest.difficulty ? cfg.dot : 'bg-gray-200'}`}
            />
          ))}
        </div>
      </div>
      {completed && (
        <p className="text-xs text-gray-400 mt-2">완료됨 ✓</p>
      )}
    </button>
  )
}
