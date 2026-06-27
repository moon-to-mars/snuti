import { mockReports, mockChildren } from '../data'
import type { QuestTrack, ClinicalEntry } from '../types'

const TRACK_LABEL: Record<QuestTrack, string> = {
  focus: 'Executive Focus',
  emotion: 'Emotional Regulation',
  behavior: 'Behavior Control',
  parent_support: 'Parent Support',
}

const CHIP_STYLE: Record<ClinicalEntry['type'], string> = {
  milestone:   'bg-[#ffc83d] text-[#715400]',
  observation: 'bg-[#e4e2e2] text-[#4f4634]',
  action:      'bg-[#ffdad6] text-[#ba1a1a]',
}
const CHIP_LABEL: Record<ClinicalEntry['type'], string> = {
  milestone:   'Milestone',
  observation: 'Observation',
  action:      'Action Item',
}

const report = mockReports[0]
const child = mockChildren[0]
const maxBar = Math.max(...report.weeklyTrends.map((t) => Math.max(t.focus, t.impulsivity)))

export function ClinicianReport() {
  const completedTotal = report.categoryStats.reduce((s, c) => s + c.completed, 0)
  const total = report.categoryStats.reduce((s, c) => s + c.total, 0)
  const completionPct = Math.round((completedTotal / total) * 100)

  return (
    <div className="space-y-5">
      {/* 헤더 */}
      <div>
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#817661]">Patient Progress Report</span>
        <h1 style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[28px] font-extrabold text-[#1b1c1c] mt-0.5">
          {child.name} Harrison
        </h1>
        <p className="text-[13px] text-[#817661] mt-0.5">Assessment Period: Oct 1 – Oct 31, 2023</p>
        <div className="flex gap-2 mt-3">
          <button className="flex items-center gap-1.5 px-4 py-2 border border-[#d2c5ad] rounded-lg text-[13px] font-semibold text-[#1b1c1c] hover:bg-[#f5f3f3] transition-colors">
            ⬇ Export PDF
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-[#ffc83d] rounded-lg text-[13px] font-semibold text-[#715400] hover:bg-[#f5bf34] transition-colors">
            ↗ Share with Parents
          </button>
        </div>
      </div>

      {/* Quest Completion 도넛 */}
      <div className="bg-white rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <p className="text-[15px] font-semibold text-[#1b1c1c] mb-0.5">Quest Completion</p>
        <p className="text-[13px] text-[#817661] mb-4">Consistency across focused flow sessions.</p>
        <div className="flex items-center justify-center mb-4">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="46" fill="none" stroke="#e4e2e2" strokeWidth="12"/>
            <circle
              cx="60" cy="60" r="46"
              fill="none" stroke="#ffc83d" strokeWidth="12"
              strokeDasharray={`${2 * Math.PI * 46 * completionPct / 100} ${2 * Math.PI * 46 * (1 - completionPct / 100)}`}
              strokeDashoffset={2 * Math.PI * 46 * 0.25}
              strokeLinecap="round"
            />
            <text x="60" y="56" textAnchor="middle" style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: 22, fontWeight: 800, fill: '#1b1c1c' }}>{completionPct}%</text>
            <text x="60" y="72" textAnchor="middle" style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fill: '#817661' }}>Completed</text>
          </svg>
        </div>
        {/* 카테고리별 성공률 */}
        <div className="space-y-2.5">
          {report.categoryStats.map((stat) => (
            <div key={stat.track} className="flex items-center justify-between">
              <span className="text-[14px] text-[#4f4634] font-medium">{TRACK_LABEL[stat.track]}</span>
              <span style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[15px] font-bold text-[#1b1c1c]">
                {stat.completed}/{stat.total}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 약점 요약 카드 */}
      <div className="bg-[#ffdad6] rounded-2xl p-5 border border-[#ffb3ae]">
        <p className="text-[13px] font-bold text-[#ba1a1a] uppercase tracking-wide mb-3">⚠ 아이 약점 요약</p>
        <ul className="space-y-2">
          {report.weaknesses.map((w, i) => (
            <li key={i} className="text-[13px] text-[#1b1c1c] leading-relaxed flex gap-2">
              <span className="text-[#ba1a1a] mt-0.5 shrink-0">•</span>
              <span>{w}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Behavioral Trends 막대 */}
      <div className="bg-white rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-4 mb-4">
          <p style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[18px] font-bold text-[#1b1c1c]">Behavioral Trends</p>
          <div className="flex items-center gap-3 text-[12px]">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#ffc83d] inline-block"/>Focus</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#e4e2e2] inline-block"/>Impulsivity</span>
          </div>
        </div>
        <div className="flex items-end gap-3 h-28">
          {report.weeklyTrends.map((t) => (
            <div key={t.week} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex gap-0.5 items-end" style={{ height: '80px' }}>
                <div className="flex-1 bg-[#ffc83d] rounded-t" style={{ height: `${(t.focus / maxBar) * 80}px` }} />
                <div className="flex-1 bg-[#e4e2e2] rounded-t" style={{ height: `${(t.impulsivity / maxBar) * 80}px` }} />
              </div>
              <span className="text-[10px] text-[#817661] font-medium">{t.week}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Clinical Observations */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[20px] font-bold text-[#1b1c1c]">Clinical Observations</p>
          <button className="text-[13px] font-semibold text-[#785a00]">+ New Entry</button>
        </div>
        <div className="space-y-3">
          {report.clinicalEntries.map((entry) => (
            <div key={entry.id} className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{entry.type === 'milestone' ? '⭐' : entry.type === 'observation' ? '⚠️' : '📋'}</span>
                  <div>
                    <p className="text-[14px] font-semibold text-[#1b1c1c]">{entry.title}</p>
                    <p className="text-[12px] text-[#817661]">{entry.author} · {entry.date}</p>
                  </div>
                </div>
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 ${CHIP_STYLE[entry.type]}`}>
                  {CHIP_LABEL[entry.type]}
                </span>
              </div>
              <p className="text-[13px] text-[#4f4634] leading-relaxed">{entry.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
