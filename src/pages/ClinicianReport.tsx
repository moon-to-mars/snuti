import { useState } from 'react'
import { mockReports, mockChildren } from '../data'
import { TrendBar } from '../components/TrendBar'

const TRACK_LABEL = {
  focus: '집중력',
  behavior: '행동 교정',
  parent_support: '부모 보조',
} as const

export function ClinicianReport() {
  const [selectedChildId, setSelectedChildId] = useState(mockChildren[0].id)
  const report = mockReports.find((r) => r.childId === selectedChildId) ?? mockReports[0]
  const child = mockChildren.find((c) => c.id === selectedChildId) ?? mockChildren[0]

  return (
    <div className="space-y-5">
      <h1 className="text-lg font-bold text-gray-800">의사용 리포트</h1>

      {/* 아이 필터 */}
      <div className="flex gap-2 flex-wrap">
        {mockChildren.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedChildId(c.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${
              selectedChildId === c.id
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* 요약 카드 */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl border border-gray-200 p-3 text-center">
          <p className="text-2xl font-bold text-indigo-600">{report.totalObservations}</p>
          <p className="text-xs text-gray-400 mt-1">총 관찰 횟수</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-3 text-center">
          <p className="text-2xl font-bold text-green-600">{report.weeklyTrends.at(-1)?.completedQuests ?? 0}</p>
          <p className="text-xs text-gray-400 mt-1">최근 주 완료</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-3 text-center">
          <p className="text-lg font-bold text-orange-500">{TRACK_LABEL[report.topPerformingTrack]}</p>
          <p className="text-xs text-gray-400 mt-1">최고 트랙</p>
        </div>
      </div>

      {/* 아이 정보 */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-2">아이 정보</h2>
        <dl className="space-y-1 text-sm">
          <div className="flex gap-2"><dt className="text-gray-400 w-20">이름</dt><dd className="text-gray-700">{child.name}</dd></div>
          <div className="flex gap-2"><dt className="text-gray-400 w-20">나이</dt><dd className="text-gray-700">{child.age}세</dd></div>
          <div className="flex gap-2"><dt className="text-gray-400 w-20">유형</dt><dd className="text-gray-700">{child.adhdType === 'combined' ? '복합형' : child.adhdType === 'inattentive' ? '부주의형' : '과잉행동형'}</dd></div>
          <div className="flex gap-2"><dt className="text-gray-400 w-20">양육 환경</dt><dd className="text-gray-700">{child.parentingEnv}</dd></div>
        </dl>
      </div>

      {/* 주간 트렌드 */}
      <TrendBar trends={report.weeklyTrends} />

      {/* 의사 노트 */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-2">임상 노트</h2>
        <p className="text-sm text-gray-600 leading-relaxed">{report.notes}</p>
        <p className="text-xs text-gray-400 mt-3">생성일: {report.generatedAt}</p>
      </div>
    </div>
  )
}
