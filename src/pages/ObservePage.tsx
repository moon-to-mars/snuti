import { useState } from 'react'

const ACTIVITY_OPTIONS = [
  '책 읽기', '그림 그리기', '블록 쌓기', '퍼즐',
  '숙제', '야외 활동', '자유 놀이', '식사',
]

interface ScalePickerProps {
  value: number
  onChange: (v: number) => void
  lowLabel: string
  highLabel: string
}

function ScalePicker({ value, onChange, lowLabel, highLabel }: ScalePickerProps) {
  return (
    <div>
      <div className="flex gap-1.5 mb-2">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            onClick={() => onChange(n)}
            className={`flex-1 py-2.5 rounded-lg text-[13px] font-bold transition-all ${
              value === n
                ? 'bg-[#ffc83d] text-[#715400]'
                : 'bg-[#f5f3f3] text-[#817661] hover:bg-[#e4e2e2]'
            }`}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="flex justify-between text-[11px] text-[#b0a898]">
        <span>{lowLabel}</span>
        <span>{highLabel}</span>
      </div>
    </div>
  )
}

interface ObservePageProps {
  onSave: () => void
}

export function ObservePage({ onSave }: ObservePageProps) {
  const [activity, setActivity] = useState<string | null>(null)
  const [helpLevel, setHelpLevel] = useState(5)
  const [focusLevel, setFocusLevel] = useState(5)
  const [selfRegulation, setSelfRegulation] = useState(5)
  const [notes, setNotes] = useState('')

  const canSave = activity !== null

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
        <div className="grid grid-cols-4 gap-2">
          {ACTIVITY_OPTIONS.map((opt) => (
            <button
              key={opt}
              onClick={() => setActivity(opt)}
              className={`py-3 rounded-xl text-[13px] font-semibold border-2 transition-all ${
                activity === opt
                  ? 'border-[#ffc83d] bg-[#fffbf0] text-[#715400]'
                  : 'border-[#e4e2e2] bg-white text-[#4f4634] hover:border-[#d2c5ad]'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* 도움 수준 */}
      <div>
        <p className="text-[11px] font-bold tracking-widest uppercase text-[#817661] mb-3">도움 수준</p>
        <div className="bg-white rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <ScalePicker
            value={helpLevel}
            onChange={setHelpLevel}
            lowLabel="전적인 도움 필요"
            highLabel="완전히 혼자서"
          />
        </div>
      </div>

      {/* 활동 집중도 */}
      <div>
        <p className="text-[11px] font-bold tracking-widest uppercase text-[#817661] mb-3">활동 집중도</p>
        <div className="bg-white rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <ScalePicker
            value={focusLevel}
            onChange={setFocusLevel}
            lowLabel="전혀 집중 못 함"
            highLabel="완전히 집중"
          />
        </div>
      </div>

      {/* 자기 조절 */}
      <div>
        <p className="text-[11px] font-bold tracking-widest uppercase text-[#817661] mb-3">자기 조절</p>
        <div className="bg-white rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <ScalePicker
            value={selfRegulation}
            onChange={setSelfRegulation}
            lowLabel="매우 어려웠어요"
            highLabel="잘 조절했어요"
          />
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
          onClick={() => { setActivity(null); setHelpLevel(5); setFocusLevel(5); setSelfRegulation(5); setNotes('') }}
          className="w-full py-3.5 rounded-xl text-[15px] font-semibold border border-[#d2c5ad] text-[#1b1c1c] hover:bg-[#f5f3f3] transition-colors"
        >
          취소
        </button>
        <p className="text-center text-[12px] text-[#b0a898] pt-1">아이의 성장을 위한 소중한 기록입니다.</p>
      </div>
    </div>
  )
}
