import { mockOptimizations } from '../data'

interface OptimizationPageProps {
  completedQuestId: string
  onNext: () => void
}

const DAYS = ['월', '화', '수', '목', '금', '토', '일']
const BAR_HEIGHTS = [30, 45, 40, 90, 55, 35, 60]

const BULLETS = [
  '코믹스 형태의 퀘스트에서 집중도와 정답률이 더 높게 나타났습니다.',
  '이미지 결합형 방식이 텍스트 위주보다 학습 효율이 뛰어납니다.',
  '이에 따라 시각 정보가 강화된 환경으로 자동 전환합니다.',
]

export function OptimizationPage({ completedQuestId, onNext }: OptimizationPageProps) {
  const result = mockOptimizations.find((o) => o.previousQuestId === completedQuestId)
    ?? mockOptimizations[0]

  return (
    <div className="space-y-6">
      {/* 단계 배지 */}
      <div className="flex justify-center pt-2">
        <div className="border-2 border-[#ffc83d] rounded-full w-20 h-20 flex flex-col items-center justify-center">
          <span style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[18px] font-extrabold text-[#1b1c1c]">단계 2</span>
          <span className="text-[9px] font-bold tracking-widest text-[#715400] uppercase">숙련도</span>
        </div>
      </div>

      {/* AI 분석 캐릭터 메시지 */}
      <div className="bg-[#ffc83d] rounded-2xl p-5">
        <p className="text-[11px] font-bold tracking-widest uppercase text-[#715400] mb-2">AI 분석 완료</p>
        <p style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[20px] font-bold text-[#1b1c1c] leading-snug">
          {result.rationale}
        </p>
      </div>

      {/* 분석 근거 bullets */}
      <div className="bg-white rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <p className="text-[13px] font-bold text-[#817661] uppercase tracking-wide mb-3">분석 근거</p>
        <ul className="space-y-3">
          {BULLETS.map((b, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="w-5 h-5 rounded-full bg-[#ffc83d] flex items-center justify-center text-[11px] font-bold text-[#715400] shrink-0 mt-0.5">{i + 1}</span>
              <span className="text-[13px] text-[#4f4634] leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 지표 카드 */}
      <div className="grid grid-cols-3 gap-2">
        {result.metrics.map((m) => (
          <div key={m.label} className="bg-white rounded-xl p-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-center">
            <span style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[20px] font-extrabold text-[#1b1c1c] block">{m.value}</span>
            <span className="text-[11px] text-[#817661]">{m.label}</span>
          </div>
        ))}
      </div>

      {/* 다음 추천 다크 카드 */}
      <div className="bg-[#1b1c1c] rounded-2xl p-5">
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#817661]">다음 추천</span>
        <h2 style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[22px] font-bold text-white mt-1 mb-1">
          {result.nextQuest.title}
        </h2>
        <p className="text-[13px] text-[#dbdad9] mb-4">⏱ {result.nextQuest.durationMin}분 퀘스트</p>
        {result.nextQuest.childPrompt && (
          <p className="text-[13px] text-[#dbdad9] mb-4 italic">"{result.nextQuest.childPrompt}"</p>
        )}
        <button
          onClick={onNext}
          className="w-full py-3.5 bg-[#ffc83d] text-[#715400] rounded-xl text-[15px] font-bold hover:bg-[#f5bf34] transition-colors"
        >
          내일 퀘스트 확정하기
        </button>
      </div>

      {/* 주간 집중 흐름 막대 */}
      <div className="bg-white rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <div className="flex items-center justify-between mb-4">
          <h3 style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[18px] font-bold text-[#1b1c1c]">주간 집중 흐름</h3>
          <div className="flex gap-1.5">
            {['주간', '월간'].map((t) => (
              <span key={t} className={`text-[12px] font-semibold px-3 py-1 rounded-full ${t === '월간' ? 'bg-[#ffc83d] text-[#715400]' : 'text-[#817661]'}`}>{t}</span>
            ))}
          </div>
        </div>
        <div className="flex items-end gap-2 h-20">
          {DAYS.map((d, i) => (
            <div key={d} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-t" style={{ height: '70px', display: 'flex', alignItems: 'flex-end' }}>
                <div
                  className={`w-full rounded-t ${d === '목' ? 'bg-[#ffc83d]' : 'bg-[#e4e2e2]'}`}
                  style={{ height: `${BAR_HEIGHTS[i]}%` }}
                />
              </div>
              <span className="text-[10px] text-[#817661]">{d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 최적 시간대 팁 */}
      <div className="bg-[#f5f3f3] rounded-2xl p-5 text-center">
        <span className="text-2xl">💡</span>
        <h3 style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[18px] font-bold text-[#1b1c1c] mt-2">최적 시간대</h3>
        <p className="text-[14px] text-[#4f4634] mt-1 leading-relaxed">
          오전 8시 30분~9시 15분 사이에 집중력이 가장 높아요. 이 시간에 논리 퍼즐 활동을 배치해보세요.
        </p>
      </div>
    </div>
  )
}
