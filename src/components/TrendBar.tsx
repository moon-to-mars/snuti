import type { WeeklyTrend } from '../types'

interface TrendBarProps {
  trends: WeeklyTrend[]
}

const MAX_QUESTS = 10

export function TrendBar({ trends }: TrendBarProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">주간 완료 퀘스트</h3>
      <div className="flex items-end gap-2 h-20">
        {trends.map((t) => {
          const pct = Math.min((t.completedQuests / MAX_QUESTS) * 100, 100)
          return (
            <div key={t.week} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-xs text-gray-500">{t.completedQuests}</span>
              <div className="w-full bg-gray-100 rounded-t-md" style={{ height: '60px' }}>
                <div
                  className="bg-indigo-400 rounded-t-md w-full transition-all"
                  style={{ height: `${pct}%`, marginTop: `${100 - pct}%` }}
                />
              </div>
              <span className="text-xs text-gray-400">W{t.week.split('-W')[1]}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

interface ProgressBarProps {
  label: string
  value: number
  max: number
  color?: string
}

export function ProgressBar({ label, value, max, color = 'bg-indigo-500' }: ProgressBarProps) {
  const pct = Math.min((value / max) * 100, 100)
  return (
    <div>
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>{label}</span>
        <span>{value}/{max}</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full transition-all`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
