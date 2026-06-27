import { useState } from 'react'
import { mockReports, activeQuest, dailyChecklist, parentingTips } from '../data'
import type { Child } from '../types'
import type { Tab } from '../components/TabBar'

interface ParentDashboardProps {
  child: Child
  onStartQuest: (questId: string) => void
  onTabChange: (tab: Tab) => void
}

const report = mockReports[0]
const todayTip = parentingTips[new Date().getDay() % parentingTips.length]

export function ParentDashboard({ child, onStartQuest, onTabChange }: ParentDashboardProps) {
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const [checklistOpen, setChecklistOpen] = useState(true)

  const scorePct = (report.focusScore / report.focusScoreMax) * 100

  function toggle(id: string) {
    setChecked((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div className="space-y-5">
      {/* 인사 */}
      <div className="pt-2 pb-1">
        <h1 style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[32px] font-extrabold text-[#1b1c1c] leading-tight">
          {child.parentName}님, 안녕하세요.
        </h1>
        <p className="text-[16px] text-[#4f4634] mt-1 leading-snug">
          {child.name}의 집중력이 오늘 아침 절정이에요.<br />지금 어떤 상황인지 확인해보세요.
        </p>
      </div>

      {/* 오늘의 육아 팁 */}
      <div className="bg-[#1b1c1c] rounded-2xl p-4 flex gap-3 items-start">
        <span className="text-xl shrink-0">💡</span>
        <div>
          <p className="text-[11px] font-bold tracking-widest uppercase text-[#817661] mb-1">오늘의 육아 팁</p>
          <p className="text-[14px] text-[#dbdad9] leading-relaxed">{todayTip}</p>
        </div>
      </div>

      {/* 집중 점수 카드 */}
      <div className="bg-white rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold text-[#817661] tracking-widest uppercase">오늘의 집중 점수</span>
          <span className="text-[13px] font-semibold text-[#785a00]">↗ 최적</span>
        </div>
        <div className="flex items-baseline gap-1 mb-3">
          <span style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[48px] font-extrabold text-[#1b1c1c] leading-none">
            {report.focusScore}
          </span>
          <span className="text-[18px] text-[#817661] font-medium">/{report.focusScoreMax}</span>
        </div>
        <div className="h-2.5 bg-[#e4e2e2] rounded-full overflow-hidden mb-3">
          <div className="h-full bg-[#ffc83d] rounded-full" style={{ width: `${scorePct}%` }} />
        </div>
        <p className="text-[14px] text-[#4f4634] leading-relaxed">
          {child.name}이(가) 오늘 '논리적 추론' 활동에서 높은 참여도를 보이고 있어요. 어제 평균보다 집중력이 12% 더 높아요.
        </p>
      </div>

      {/* 하루 핵심 체크리스트 */}
      <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
        <button
          onClick={() => setChecklistOpen((o) => !o)}
          className="w-full flex items-center justify-between p-5 text-left"
        >
          <div>
            <p className="text-[15px] font-semibold text-[#1b1c1c]">하루 핵심 체크리스트</p>
            <p className="text-[12px] text-[#817661] mt-0.5">
              {checked.size}/{dailyChecklist.length}개 완료
            </p>
          </div>
          <span className="text-[#d2c5ad] text-lg">{checklistOpen ? '∧' : '∨'}</span>
        </button>
        {checklistOpen && (
          <div className="px-5 pb-5 space-y-2.5 border-t border-[#f5f3f3] pt-4">
            {dailyChecklist.map((item) => {
              const done = checked.has(item.id)
              return (
                <button
                  key={item.id}
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center gap-3 text-left"
                >
                  <div className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center border-2 transition-colors ${done ? 'bg-[#ffc83d] border-[#ffc83d]' : 'border-[#d2c5ad]'}`}>
                    {done && <span className="text-[10px] font-bold text-[#715400]">✓</span>}
                  </div>
                  <span className={`text-[14px] ${done ? 'line-through text-[#b0a898]' : 'text-[#1b1c1c]'}`}>
                    {item.label}
                  </span>
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* 진행 중인 퀘스트 카드 */}
      <div className="bg-[#ffc83d] rounded-2xl p-5">
        <span className="inline-block bg-[#715400] text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
          진행 중인 퀘스트
        </span>
        <h2 style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[24px] font-bold text-[#1b1c1c] mb-1">
          {activeQuest.title}
        </h2>
        <p className="text-[14px] text-[#715400] mb-4 leading-relaxed">{activeQuest.instruction}</p>
        <button
          onClick={() => onStartQuest(activeQuest.id)}
          className="w-full py-3.5 bg-[#1b1c1c] text-white rounded-xl text-[15px] font-semibold hover:bg-[#303031] transition-colors"
        >
          계속하기
        </button>
      </div>

      {/* 진입 카드 3개 */}
      {[
        { icon: '◎', title: '관찰 기록하기', sub: '새로운 몰입 순간을 기록해요', tab: 'observe' as Tab },
        { icon: '▦', title: '주간 리포트',   sub: '시간별 성장 내용을 분석해요', tab: 'reports' as Tab },
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
