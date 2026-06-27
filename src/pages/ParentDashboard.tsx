import { mockReports, activeQuest } from '../data'
import type { Child } from '../types'
import type { Tab } from '../components/TabBar'

interface ParentDashboardProps {
  child: Child
  onStartQuest: (questId: string) => void
  onTabChange: (tab: Tab) => void
}

const report = mockReports[0]

export function ParentDashboard({ child, onStartQuest, onTabChange }: ParentDashboardProps) {
  const scorePct = (report.focusScore / report.focusScoreMax) * 100

  return (
    <div className="space-y-5">
      {/* 인사 */}
      <div className="pt-2 pb-1">
        <h1 style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[32px] font-extrabold text-[#1b1c1c] leading-tight">
          Hi, {child.parentName}.
        </h1>
        <p className="text-[16px] text-[#4f4634] mt-1 leading-snug">
          {child.name}'s flow is peaking this morning.<br />Here's what's happening.
        </p>
      </div>

      {/* Focus Score 카드 */}
      <div className="bg-white rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold text-[#817661] tracking-widest uppercase">Today's Focus Score</span>
          <span className="text-[13px] font-semibold text-[#785a00]">↗ {report.focusTrend}</span>
        </div>
        <div className="flex items-baseline gap-1 mb-3">
          <span style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[48px] font-extrabold text-[#1b1c1c] leading-none">
            {report.focusScore}
          </span>
          <span className="text-[18px] text-[#817661] font-medium">/{report.focusScoreMax}</span>
        </div>
        {/* 진행바 */}
        <div className="h-2.5 bg-[#e4e2e2] rounded-full overflow-hidden mb-3">
          <div className="h-full bg-[#ffc83d] rounded-full" style={{ width: `${scorePct}%` }} />
        </div>
        <p className="text-[14px] text-[#4f4634] leading-relaxed">
          {child.name} is showing high engagement in "Logical Reasoning" activities today. Focus is 12% higher than yesterday's average.
        </p>
      </div>

      {/* Active Quest 노랑 카드 */}
      <div className="bg-[#ffc83d] rounded-2xl p-5">
        <span className="inline-block bg-[#715400] text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
          Active Quest
        </span>
        <h2 style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[24px] font-bold text-[#1b1c1c] mb-1">
          {activeQuest.title}
        </h2>
        <p className="text-[14px] text-[#715400] mb-4 leading-relaxed">{activeQuest.instruction}</p>
        <button
          onClick={() => onStartQuest(activeQuest.id)}
          className="w-full py-3.5 bg-[#1b1c1c] text-white rounded-xl text-[15px] font-semibold hover:bg-[#303031] transition-colors"
        >
          Resume Journey
        </button>
      </div>

      {/* 진입 카드 3개 */}
      {[
        { icon: '◎', title: 'Record Observation', sub: 'Log a new flow state moment', tab: 'observe' as Tab },
        { icon: '▦', title: 'Weekly Reports',     sub: 'Analyze progress over time',  tab: 'reports' as Tab },
        { icon: '📚', title: 'Growth Library',    sub: 'Parenting flow resources',    tab: 'dashboard' as Tab },
      ].map((item) => (
        <button
          key={item.title}
          onClick={() => onTabChange(item.tab)}
          className="w-full bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center gap-4 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-[#e4e2e2] flex items-center justify-center text-xl shrink-0">
            {item.icon}
          </div>
          <div>
            <p className="text-[15px] font-semibold text-[#1b1c1c]">{item.title}</p>
            <p className="text-[13px] text-[#817661]">{item.sub}</p>
          </div>
        </button>
      ))}
    </div>
  )
}
