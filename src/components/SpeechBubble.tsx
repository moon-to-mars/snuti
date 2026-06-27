import type { ReactNode } from 'react'

interface SpeechBubbleProps {
  children: ReactNode
  variant?: 'orange' | 'blue'
  className?: string
}

export function SpeechBubble({ children, variant = 'orange', className = '' }: SpeechBubbleProps) {
  const bg = variant === 'orange' ? 'bg-[#fc9b6c]' : 'bg-[#1a73e8]'
  const text = variant === 'orange' ? 'text-[#231b00]' : 'text-white'
  const tail = variant === 'orange' ? 'border-t-[#fc9b6c]' : 'border-t-[#1a73e8]'

  return (
    <div className={`relative ${className}`}>
      <div className={`${bg} ${text} rounded-[24px_20px_20px_8px] px-4 py-3 text-sm font-medium leading-relaxed`}>
        {children}
      </div>
      <div
        className={`absolute left-5 -bottom-2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent ${tail}`}
      />
    </div>
  )
}
