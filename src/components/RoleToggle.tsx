import type { UserRole } from '../hooks/useRole'

const ROLES: { value: UserRole; label: string; emoji: string }[] = [
  { value: 'parent', label: '부모', emoji: '👨‍👩‍👧' },
  { value: 'child', label: '아이', emoji: '🧒' },
  { value: 'clinician', label: '의사', emoji: '🩺' },
]

interface RoleToggleProps {
  role: UserRole
  onChange: (role: UserRole) => void
}

export function RoleToggle({ role, onChange }: RoleToggleProps) {
  return (
    <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
      {ROLES.map((r) => (
        <button
          key={r.value}
          onClick={() => onChange(r.value)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            role === r.value
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <span>{r.emoji}</span>
          <span>{r.label}</span>
        </button>
      ))}
    </div>
  )
}
