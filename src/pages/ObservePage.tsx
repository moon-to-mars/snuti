import { useState } from 'react'

type HelpLevel = 'none' | 'some' | 'alot'

const HELP_OPTIONS: { value: HelpLevel; icon: string; label: string; sub: string }[] = [
  { value: 'none', icon: '😊', label: '없음', sub: '혼자서' },
  { value: 'some', icon: '🤝', label: '약간', sub: '함께' },
  { value: 'alot', icon: '⚙️', label: '많이', sub: '전적 지원' },
]

interface ObservePageProps {
  onSave: () => void
}

export function ObservePage({ onSave }: ObservePageProps) {
  const [context, setContext] = useState('')
  const [helpLevel, setHelpLevel] = useState<HelpLevel | null>(null)
  const [focusLevel, setFocusLevel] = useState(5)
  const [notes, setNotes] = useState('')

  const canSave = helpLevel !== null

  return (
    <div className="space-y-7">
      <div>
        <h1 style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[28px] font-extrabold text-[#1b1c1c]">
          새 관찰 기록
        </h1>
        <p className="text-[15px] text-[#817661] mt-1">몰입과 학습의 순간을 기록해요.</p>
      </div>

      {/* 활동 맥락 */}
      <div>
        <p className="text-[11px] font-bold tracking-widest uppercase text-[#817661] mb-3">활동 맥락</p>
        <div className="bg-white rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <p className="text-[13px] font-semibold text-[#1b1c1c] mb-2">아이가 무엇을 하고 있었나요?</p>
          <input
            type="text"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="예: 블록 쌓기, 그림 그리기, 책 읽기..."
            className="w-full text-[14px] text-[#4f4634] placeholder-[#d2c5ad] bg-transparent border border-[#e4e2e2] rounded-lg px-3 py-2 focus:outline-none focus:border-[#1b1c1c] transition-colors"
          />
        </div>
      </div>

      {/* 도움 수준 */}
      <div>
        <p className="text-[11px] font-bold tracking-widest uppercase text-[#817661] mb-3">도움 수준</p>
        <div className="space-y-2">
          {HELP_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setHelpLevel(opt.value)}
              className={`w-full bg-white rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col items-center gap-1 transition-all ${
                helpLevel === opt.value
                  ? 'ring-2 ring-[#ffc83d] bg-[#fffbf0]'
                  : 'hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]'
              }`}
            >
              <span className="text-2xl">{opt.icon}</span>
              <span className="text-[15px] font-semibold text-[#1b1c1c]">{opt.label}</span>
              <span className="text-[13px] text-[#817661]">{opt.sub}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 집중 수준 슬라이더 */}
      <div>
        <p className="text-[11px] font-bold tracking-widest uppercase text-[#817661] mb-3">집중 수준</p>
        <div className="bg-white rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="flex justify-between text-[13px] font-semibold mb-3">
            <span className="text-[#817661]">⊖ 산만함</span>
            <span className="text-[#715400] font-bold">깊은 집중 ✦</span>
          </div>
          <input
            type="range"
            min={0}
            max={10}
            value={focusLevel}
            onChange={(e) => setFocusLevel(Number(e.target.value))}
            className="w-full accent-[#ffc83d]"
          />
          <div className="flex justify-between mt-1">
            {Array.from({ length: 11 }).map((_, i) => (
              <span key={i} className={`text-[9px] ${i === focusLevel ? 'text-[#715400] font-bold' : 'text-[#d2c5ad]'}`}>|</span>
            ))}
          </div>
        </div>
      </div>

      {/* 관찰 내용 및 메모 */}
      <div>
        <p className="text-[11px] font-bold tracking-widest uppercase text-[#817661] mb-3">관찰 내용 및 메모</p>
        <div className="bg-white rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <p className="text-[13px] font-semibold text-[#4f4634] mb-2">이 순간에 대해 더 이야기해주세요...</p>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="아이가 무슨 말을 했나요? 어떤 어려움을 극복했나요?"
            rows={4}
            className="w-full text-[14px] text-[#4f4634] placeholder-[#d2c5ad] bg-[#f5f3f3] border border-[#e4e2e2] rounded-lg px-3 py-2 resize-none focus:outline-none focus:border-[#1b1c1c] transition-colors"
          />
        </div>
      </div>

      {/* 버튼 */}
      <div className="space-y-2 pb-2">
        <button
          onClick={() => canSave && onSave()}
          disabled={!canSave}
          className={`w-full py-4 rounded-xl text-[16px] font-semibold transition-all ${
            canSave
              ? 'bg-[#ffc83d] text-[#715400] hover:bg-[#f5bf34]'
              : 'bg-[#e4e2e2] text-[#a0a0a0] cursor-not-allowed'
          }`}
        >
          관찰 저장
        </button>
        <button
          onClick={() => { setContext(''); setHelpLevel(null); setFocusLevel(5); setNotes('') }}
          className="w-full py-3.5 rounded-xl text-[15px] font-semibold border border-[#d2c5ad] text-[#1b1c1c] hover:bg-[#f5f3f3] transition-colors"
        >
          취소
        </button>
      </div>
    </div>
  )
}
