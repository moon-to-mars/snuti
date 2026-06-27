export type Tab = 'home' | 'quests' | 'observe' | 'ai' | 'report'

const TABS: { value: Tab; label: string; icon: string }[] = [
  { value: 'home', label: 'HOME', icon: '🏠' },
  { value: 'quests', label: 'QUESTS', icon: '🎯' },
  { value: 'observe', label: 'OBSERVE', icon: '📝' },
  { value: 'ai', label: 'AI HELP', icon: '🤖' },
  { value: 'report', label: 'REPORT', icon: '📊' },
]

interface TabBarProps {
  active: Tab
  onChange: (tab: Tab) => void
}

export function TabBar({ active, onChange }: TabBarProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 bg-[#fff8f0] border-t-2 border-[#f4e1af]">
      <div className="max-w-md mx-auto flex">
        {TABS.map((tab) => {
          const isActive = tab.value === active
          return (
            <button
              key={tab.value}
              onClick={() => onChange(tab.value)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 transition-all ${
                isActive ? 'text-[#1a73e8]' : 'text-[#727785]'
              }`}
            >
              <span className={`text-xl transition-transform ${isActive ? 'scale-110' : ''}`}>{tab.icon}</span>
              <span className={`text-[10px] font-bold tracking-wide ${isActive ? 'text-[#1a73e8]' : 'text-[#727785]'}`}>
                {tab.label}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-[#1a73e8] mt-0.5" />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
