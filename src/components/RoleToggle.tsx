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
    <div className="flex gap-1 bg-[#f4e1af] rounded-full p-1">
      {ROLES.map((r) => (
        <button
          key={r.value}
          onClick={() => onChange(r.value)}
          className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold transition-all ${
            role === r.value
              ? 'bg-[#1a73e8] text-white shadow-sm'
              : 'text-[#414754] hover:text-[#231b00]'
          }`}
        >
          <span>{r.emoji}</span>
          <span>{r.label}</span>
        </button>
      ))}
    </div>
  )
}
