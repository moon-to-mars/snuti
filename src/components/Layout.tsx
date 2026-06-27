import type { ReactNode } from 'react'
import { RoleToggle } from './RoleToggle'
import type { UserRole } from '../hooks/useRole'

interface LayoutProps {
  children: ReactNode
  role: UserRole
  onRoleChange: (role: UserRole) => void
}

export function Layout({ children, role, onRoleChange }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="font-bold text-indigo-600 text-lg">SNUTI</span>
          <RoleToggle role={role} onChange={onRoleChange} />
        </div>
      </header>
      <main className="max-w-2xl mx-auto px-4 py-6">{children}</main>
    </div>
  )
}
