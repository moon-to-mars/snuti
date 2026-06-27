export type Tab = 'dashboard' | 'quests' | 'observe' | 'reports'

const TABS: { value: Tab; label: string; icon: string }[] = [
  { value: 'dashboard', label: 'Dashboard', icon: '⊞' },
  { value: 'quests',    label: 'Quests',    icon: '✦' },
  { value: 'observe',   label: 'Observe',   icon: '◎' },
  { value: 'reports',   label: 'Reports',   icon: '▦' },
]

interface TabBarProps {
  active: Tab
  onChange: (tab: Tab) => void
}

export function TabBar({ active, onChange }: TabBarProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 bg-[#fbf9f8] border-t border-[#e4e2e2]">
      <div className="max-w-md mx-auto flex px-2 py-2">
        {TABS.map((tab) => {
          const isActive = tab.value === active
          return (
            <button
              key={tab.value}
              onClick={() => onChange(tab.value)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-1.5 px-2 rounded-xl transition-all ${
                isActive ? 'bg-[#ffc83d]' : ''
              }`}
            >
              <span className="text-lg leading-none">{tab.icon}</span>
              <span className={`text-[11px] font-semibold tracking-wide ${
                isActive ? 'text-[#715400]' : 'text-[#817661]'
              }`}>
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
