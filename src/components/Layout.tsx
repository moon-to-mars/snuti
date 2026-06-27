import type { ReactNode } from 'react'
import { RoleToggle } from './RoleToggle'
import { TabBar, type Tab } from './TabBar'
import type { UserRole } from '../hooks/useRole'

interface LayoutProps {
  children: ReactNode
  role: UserRole
  onRoleChange: (role: UserRole) => void
  activeTab?: Tab
  onTabChange?: (tab: Tab) => void
}

export function Layout({ children, role, onRoleChange, activeTab, onTabChange }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#fff8f0]">
      {/* 헤더 */}
      <header className="bg-[#fff8f0] border-b-2 border-[#f4e1af] sticky top-0 z-10">
        <div className="max-w-md mx-auto px-5 h-14 flex items-center justify-between gap-3">
          {/* 아바타 + 로고 */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#1a73e8] flex items-center justify-center text-lg">
              🧒
            </div>
            <span className="font-bold text-[#1a73e8] text-base tracking-tight">PTBM Quest</span>
          </div>

          {/* 스트릭 칩 */}
          <div className="flex items-center gap-1.5 bg-[#d0a700] text-[#231b00] text-xs font-bold px-3 py-1 rounded-full">
            🔥 <span>5일 연속</span>
          </div>

          {/* 역할 토글 */}
          <RoleToggle role={role} onChange={onRoleChange} />
        </div>
      </header>

      {/* 본문 */}
      <main className="max-w-md mx-auto px-5 py-6 pb-24">
        {children}
      </main>

      {/* 하단 탭바 — 부모 역할일 때만 */}
      {role === 'parent' && activeTab && onTabChange && (
        <TabBar active={activeTab} onChange={onTabChange} />
      )}
    </div>
  )
}
