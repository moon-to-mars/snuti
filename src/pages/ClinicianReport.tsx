import { useState } from 'react'
import { mockReports, mockChildren } from '../data'
import { TrendBar } from '../components/TrendBar'

const TRACK_LABEL = {
  focus: '🧠 집중력',
  behavior: '⭐ 행동 교정',
  parent_support: '🤝 부모 보조',
} as const

export function ClinicianReport() {
  const [selectedChildId, setSelectedChildId] = useState(mockChildren[0].id)
  const report = mockReports.find((r) => r.childId === selectedChildId) ?? mockReports[0]
  const child = mockChildren.find((c) => c.id === selectedChildId) ?? mockChildren[0]

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-[#231b00]">의사용 리포트</h1>
        <div className="flex gap-1.5">
          <button className="text-xs font-bold px-3 py-1.5 bg-[#1a73e8] text-white rounded-full">PDF 생성</button>
          <button className="text-xs font-bold px-3 py-1.5 border-2 border-[#1a73e8] text-[#1a73e8] rounded-full">치료 계획 수정</button>
        </div>
      </div>

      {/* 아이 필터 */}
      <div className="flex gap-2 flex-wrap">
        {mockChildren.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedChildId(c.id)}
            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all border-2 ${
              selectedChildId === c.id
                ? 'bg-[#1a73e8] text-white border-[#1a73e8]'
                : 'border-[#c1c6d6] text-[#414754] hover:border-[#1a73e8]'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* 요약 카드 */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-[#fff3d7] rounded-[16px_20px_14px_18px] border-2 border-[#fae7b4] p-3 text-center">
          <p className="text-2xl font-bold text-[#231b00]">{report.totalObservations}</p>
          <p className="text-[10px] font-bold text-[#727785] mt-1">총 관찰</p>
        </div>
        <div className="bg-[#e8f0ff] rounded-[16px_20px_14px_18px] border-2 border-[#c5d8f7] p-3 text-center">
          <p className="text-2xl font-bold text-[#1a73e8]">{report.weeklyTrends.at(-1)?.completedQuests ?? 0}</p>
          <p className="text-[10px] font-bold text-[#727785] mt-1">최근 주</p>
        </div>
        <div className="bg-[#fff0ea] rounded-[16px_20px_14px_18px] border-2 border-[#fcc9a9] p-3 text-center">
          <p className="text-sm font-bold text-[#954921]">{TRACK_LABEL[report.topPerformingTrack]}</p>
          <p className="text-[10px] font-bold text-[#727785] mt-1">최고 트랙</p>
        </div>
      </div>

      {/* 아이 정보 */}
      <div className="bg-[#fff8f0] rounded-[20px_24px_18px_22px] border-2 border-[#f4e1af] p-5">
        <h2 className="text-sm font-bold text-[#231b00] mb-3">아이 정보</h2>
        <dl className="space-y-2 text-sm">
          {[
            ['이름', child.name],
            ['나이', `${child.age}세`],
            ['유형', child.adhdType === 'combined' ? '복합형' : child.adhdType === 'inattentive' ? '부주의형' : '과잉행동형'],
            ['양육 환경', child.parentingEnv],
          ].map(([label, value]) => (
            <div key={label} className="flex gap-3">
              <dt className="text-[#727785] font-semibold w-20 shrink-0">{label}</dt>
              <dd className="text-[#231b00] font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* 퀘스트 완료율 */}
      <TrendBar trends={report.weeklyTrends} />

      {/* 임상 관찰 기록 표 */}
      <div className="bg-[#fff8f0] rounded-[20px_24px_18px_22px] border-2 border-[#f4e1af] p-5">
        <h2 className="text-sm font-bold text-[#231b00] mb-3">최근 임상 관찰 기록</h2>
        <table className="w-full text-xs">
          <thead>
            <tr className="text-[#727785] font-bold border-b-2 border-[#f4e1af]">
              <th className="pb-2 text-left">주차</th>
              <th className="pb-2 text-center">완료</th>
              <th className="pb-2 text-center">평균 난이도</th>
            </tr>
          </thead>
          <tbody>
            {report.weeklyTrends.map((t) => (
              <tr key={t.week} className="border-b border-[#f4e1af] last:border-0">
                <td className="py-2 text-[#414754] font-semibold">W{t.week.split('-W')[1]}</td>
                <td className="py-2 text-center font-bold text-[#1a73e8]">{t.completedQuests}</td>
                <td className="py-2 text-center text-[#414754] font-semibold">{t.avgDifficulty.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* AI 심층 분석 */}
      <div className="bg-[#e8f0ff] rounded-[20px_24px_18px_22px] border-2 border-[#c5d8f7] p-5">
        <h2 className="text-sm font-bold text-[#1a73e8] mb-2">AI 심층 분석</h2>
        <p className="text-sm text-[#231b00] leading-relaxed font-medium">{report.notes}</p>
        <p className="text-xs text-[#727785] mt-3 font-semibold">분석일: {report.generatedAt}</p>
      </div>

      {/* 다음 예약 카드 */}
      <div className="bg-[#fff3d7] rounded-[20px_24px_18px_22px] border-2 border-[#fae7b4] p-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-[#727785]">다음 예약</p>
          <p className="font-bold text-[#231b00] mt-0.5">2026년 7월 15일</p>
        </div>
        <button className="px-4 py-2 bg-[#1a73e8] text-white text-sm font-bold rounded-full shadow-[0_3px_0_#005bbf] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none transition-all">
          예약 확인
        </button>
      </div>
    </div>
  )
}
