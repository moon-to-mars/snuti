import type { ReactNode } from 'react'
import { TabBar, type Tab } from './TabBar'
import type { Child } from '../types'

interface LayoutProps {
  children: ReactNode
  child: Child
  activeTab: Tab
  onTabChange: (tab: Tab) => void
  showTabs?: boolean
}

export function Layout({ children, child, activeTab, onTabChange, showTabs = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#fbf9f8]">
      {/* 헤더 */}
      <header className="bg-[#fbf9f8] sticky top-0 z-10 border-b border-[#e4e2e2]">
        <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#ffc83d] flex items-center justify-center text-sm">
              🧒
            </div>
            <span style={{ fontFamily: 'Hanken Grotesk, sans-serif' }} className="font-bold text-[15px] text-[#1b1c1c]">
              Naru
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#e4e2e2] text-[#1b1c1c] text-[13px] font-semibold px-3 py-1 rounded-full">
            <span>{child.streak}</span>
            <span>🔥</span>
          </div>
        </div>
      </header>

      {/* 본문 */}
      <main className="max-w-md mx-auto px-4 py-6 pb-24">
        {children}
      </main>

      {showTabs && <TabBar active={activeTab} onChange={onTabChange} />}
    </div>
  )
}
