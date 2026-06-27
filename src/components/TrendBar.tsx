import type { WeeklyTrend } from '../types'

interface DonutProps {
  value: number
  max: number
  label: string
}

export function DonutChart({ value, max, label }: DonutProps) {
  const pct = Math.min(value / max, 1)
  const r = 36
  const circ = 2 * Math.PI * r
  const dash = circ * pct
  const gap = circ - dash

  return (
    <div className="flex flex-col items-center gap-1">
      <svg width="88" height="88" viewBox="0 0 88 88">
        <circle cx="44" cy="44" r={r} fill="none" stroke="#f4e1af" strokeWidth="10" />
        <circle
          cx="44" cy="44" r={r}
          fill="none"
          stroke="#1a73e8"
          strokeWidth="10"
          strokeDasharray={`${dash} ${gap}`}
          strokeDashoffset={circ / 4}
          strokeLinecap="round"
        />
        <text x="44" y="44" textAnchor="middle" dominantBaseline="middle" className="font-bold" style={{ fontFamily: 'Quicksand', fontSize: 16, fontWeight: 700, fill: '#231b00' }}>
          {value}/{max}
        </text>
      </svg>
      <span className="text-xs font-bold text-[#414754]">{label}</span>
    </div>
  )
}

interface TrendBarProps {
  trends: WeeklyTrend[]
}

const MAX_QUESTS = 10

export function TrendBar({ trends }: TrendBarProps) {
  return (
    <div className="bg-[#fff3d7] rounded-[20px_24px_18px_22px] border-2 border-[#fae7b4] p-5">
      <h3 className="text-sm font-bold text-[#231b00] mb-4">주간 완료 퀘스트</h3>
      <div className="flex items-end gap-3 h-20">
        {trends.map((t) => {
          const pct = Math.min((t.completedQuests / MAX_QUESTS) * 100, 100)
          return (
            <div key={t.week} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-xs font-bold text-[#414754]">{t.completedQuests}</span>
              <div className="w-full rounded-t-lg overflow-hidden" style={{ height: '52px', display: 'flex', alignItems: 'flex-end' }}>
                <div
                  className="w-full bg-[#1a73e8] rounded-t-lg transition-all"
                  style={{ height: `${pct}%`, minHeight: 4 }}
                />
              </div>
              <span className="text-[10px] font-bold text-[#727785]">W{t.week.split('-W')[1]}</span>
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

export function ProgressBar({ label, value, max, color = 'bg-[#1a73e8]' }: ProgressBarProps) {
  const pct = Math.min((value / max) * 100, 100)
  return (
    <div>
      <div className="flex justify-between text-sm font-semibold text-[#414754] mb-1.5">
        <span>{label}</span>
        <span>{value}/{max}</span>
      </div>
      <div className="h-3 bg-[#f4e1af] rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full transition-all`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
