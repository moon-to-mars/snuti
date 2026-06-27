import { useState } from 'react'

export type UserRole = 'parent' | 'child' | 'clinician'

export function useRole() {
  const [role, setRole] = useState<UserRole>('parent')
  return { role, setRole }
}
