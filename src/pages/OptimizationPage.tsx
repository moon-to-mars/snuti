import { mockOptimizations } from '../data'

interface OptimizationPageProps {
  completedQuestId: string
  onNext: () => void
}

export function OptimizationPage({ completedQuestId, onNext }: OptimizationPageProps) {
  const result = mockOptimizations.find((o) => o.previousQuestId === completedQuestId)
    ?? mockOptimizations[0]

  return (
    <div className="space-y-6">
      {/* Lvl 배지 */}
      <div className="flex justify-center pt-2">
        <div className="border-2 border-[#ffc83d] rounded-full w-20 h-20 flex flex-col items-center justify-center">
          <span style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[18px] font-extrabold text-[#1b1c1c]">Lvl 2</span>
          <span className="text-[9px] font-bold tracking-widest text-[#715400] uppercase">Expertise</span>
        </div>
      </div>

      <div className="text-center">
        <h1 style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[28px] font-extrabold text-[#1b1c1c]">Analysis Complete</h1>
        <p className="text-[14px] text-[#817661] mt-1 leading-relaxed">{result.rationale}</p>
      </div>

      {/* 지표 카드 */}
      {result.metrics.map((m) => (
        <div key={m.label} className="bg-white rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-start justify-between">
            <span className="text-2xl">🎯</span>
            <span className="text-[13px] font-bold text-[#785a00]">{m.value}</span>
          </div>
          <h3 style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[18px] font-bold text-[#1b1c1c] mt-2">{m.label}</h3>
          <p className="text-[13px] text-[#817661] mt-1 leading-relaxed">
            {m.label === 'Focus Deepened'
              ? 'Sustained attention span has increased by an average of 4.2 minutes during creative tasks.'
              : 'Retention rates for new concepts are trending upward. Recall speed is 15% faster than baseline.'}
          </p>
        </div>
      ))}

      {/* Recommended Next 다크 카드 */}
      <div className="bg-[#1b1c1c] rounded-2xl p-5">
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#817661]">Recommended Next</span>
        <h2 style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[22px] font-bold text-white mt-1 mb-1">
          {result.nextQuest.title}
        </h2>
        <p className="text-[13px] text-[#dbdad9] mb-4">⏱ {result.nextQuest.durationMin} Minute Quest</p>
        <button
          onClick={onNext}
          className="w-full py-3.5 bg-[#ffc83d] text-[#715400] rounded-xl text-[15px] font-bold hover:bg-[#f5bf34] transition-colors"
        >
          Start Quest
        </button>
      </div>

      {/* Biometric Flow Sync 막대 */}
      <div className="bg-white rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <div className="flex items-center justify-between mb-4">
          <h3 style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[18px] font-bold text-[#1b1c1c]">Biometric Flow Sync</h3>
          <div className="flex gap-1.5">
            {['Week', 'Month'].map((t) => (
              <span key={t} className={`text-[12px] font-semibold px-3 py-1 rounded-full ${t === 'Month' ? 'bg-[#ffc83d] text-[#715400]' : 'text-[#817661]'}`}>{t}</span>
            ))}
          </div>
        </div>
        <div className="flex items-end gap-2 h-20">
          {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d, i) => {
            const h = [30, 45, 40, 90, 55, 35, 60][i]
            return (
              <div key={d} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full rounded-t" style={{ height: '70px', display: 'flex', alignItems: 'flex-end' }}>
                  <div className={`w-full rounded-t ${d === 'Thu' ? 'bg-[#ffc83d]' : 'bg-[#e4e2e2]'}`} style={{ height: `${h}%` }} />
                </div>
                <span className="text-[10px] text-[#817661]">{d}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Morning Window 팁 */}
      <div className="bg-[#f5f3f3] rounded-2xl p-5 text-center">
        <span className="text-2xl">💡</span>
        <h3 style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[18px] font-bold text-[#1b1c1c] mt-2">Morning Window</h3>
        <p className="text-[14px] text-[#4f4634] mt-1 leading-relaxed">
          Analysis suggests peak flow between 8:30 AM and 9:15 AM. Try scheduling logic puzzles then.
        </p>
      </div>
    </div>
  )
}
