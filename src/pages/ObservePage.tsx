import { useState } from 'react'
import type { HelpLevel, MeltdownLevel } from '../types'

const HELP_OPTIONS: { value: HelpLevel; label: string; sub: string }[] = [
  { value: 'none',   label: '도움 없음',   sub: '스스로 함' },
  { value: 'little', label: '약간의 도움', sub: '가끔 안내' },
  { value: 'often',  label: '자주 도와줌', sub: '단계마다 안내' },
  { value: 'full',   label: '전적인 지원', sub: '함께 수행' },
]

const MELTDOWN_OPTIONS: { value: MeltdownLevel; label: string; color: string }[] = [
  { value: 'none',   label: '없음', color: 'text-[#4f4634]' },
  { value: 'mild',   label: '약간', color: 'text-[#785a00]' },
  { value: 'severe', label: '심함', color: 'text-[#ba1a1a]' },
]

interface ObservePageProps {
  onSave: () => void
}

export function ObservePage({ onSave }: ObservePageProps) {
  const [context, setContext] = useState('')
  const [helpLevel, setHelpLevel] = useState<HelpLevel | null>(null)
  const [focusYn, setFocusYn] = useState<'yes' | 'no' | null>(null)
  const [meltdown, setMeltdown] = useState<MeltdownLevel | null>(null)
  const [notes, setNotes] = useState('')

  const canSave = helpLevel !== null && focusYn !== null && meltdown !== null

  return (
    <div className="space-y-7">
      {/* 헤더 */}
      <div className="bg-[#ffc83d] rounded-2xl p-4 flex items-start gap-3">
        <span className="text-2xl">👀</span>
        <div>
          <h1 style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="text-[20px] font-extrabold text-[#1b1c1c]">
            관찰 기록
          </h1>
          <p className="text-[14px] text-[#715400] mt-0.5 leading-relaxed">
            오늘 아이의 퀘스트는 어땠나요? 함께 기록해 보아요!
          </p>
        </div>
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

      {/* 도움 수준 — 2×2 그리드 */}
      <div>
        <p className="text-[11px] font-bold tracking-widest uppercase text-[#817661] mb-3">도움 수준</p>
        <div className="grid grid-cols-2 gap-2">
          {HELP_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setHelpLevel(opt.value)}
              className={`bg-white rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col gap-1 transition-all text-left ${
                helpLevel === opt.value ? 'ring-2 ring-[#ffc83d] bg-[#fffbf0]' : 'hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]'
              }`}
            >
              <span className="text-[14px] font-semibold text-[#1b1c1c]">{opt.label}</span>
              <span className="text-[12px] text-[#817661]">{opt.sub}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 활동 집중도 */}
      <div>
        <p className="text-[11px] font-bold tracking-widest uppercase text-[#817661] mb-3">활동 집중도</p>
        <div className="flex gap-2">
          {(['yes', 'no'] as const).map((v) => (
            <button
              key={v}
              onClick={() => setFocusYn(v)}
              className={`flex-1 py-3.5 rounded-xl text-[15px] font-semibold border-2 transition-all ${
                focusYn === v
                  ? 'border-[#ffc83d] bg-[#fffbf0] text-[#715400]'
                  : 'border-[#e4e2e2] bg-white text-[#1b1c1c] hover:border-[#d2c5ad]'
              }`}
            >
              {v === 'yes' ? '예' : '아니오'}
            </button>
          ))}
        </div>
      </div>

      {/* 정서적 폭발 */}
      <div>
        <p className="text-[11px] font-bold tracking-widest uppercase text-[#817661] mb-3">정서적 폭발 (멜트다운)</p>
        <div className="flex gap-2">
          {MELTDOWN_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setMeltdown(opt.value)}
              className={`flex-1 py-3.5 rounded-xl text-[15px] font-semibold border-2 transition-all ${
                meltdown === opt.value
                  ? 'border-[#ffc83d] bg-[#fffbf0] text-[#715400]'
                  : 'border-[#e4e2e2] bg-white hover:border-[#d2c5ad]'
              } ${opt.color}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* 부모님 관찰 일지 */}
      <div>
        <p className="text-[11px] font-bold tracking-widest uppercase text-[#817661] mb-3">부모님 관찰 일지</p>
        <div className="bg-white rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="아이가 퀘스트 중 보여준 특별한 행동이나 감정 변화를 적어주세요..."
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
          제출하고 AI 분석 보기
        </button>
        <button
          onClick={() => { setContext(''); setHelpLevel(null); setFocusYn(null); setMeltdown(null); setNotes('') }}
          className="w-full py-3.5 rounded-xl text-[15px] font-semibold border border-[#d2c5ad] text-[#1b1c1c] hover:bg-[#f5f3f3] transition-colors"
        >
          취소
        </button>
        <p className="text-center text-[12px] text-[#b0a898] pt-1">아이의 성장을 위한 소중한 기록입니다.</p>
      </div>
    </div>
  )
}
