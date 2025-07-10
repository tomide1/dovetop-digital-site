'use client'

import { Icon } from '@iconify/react'
import {
  getTechnologyDisplayName,
  getTechnologyIcon,
} from '@/utils/technology-helpers'
import type { TechnologyId } from '@/types/what-we-do'

interface TechnologyBadgeProps {
  id: TechnologyId | string // Allow both TechnologyId and string
  className?: string
}

export default function TechnologyBadge({
  id,
  className = '',
}: TechnologyBadgeProps) {
  const displayName = getTechnologyDisplayName(id)
  const iconName = getTechnologyIcon(id)

  return (
    <div
      className={`flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 ${className}`}
      data-testid={`technology-badge-${id}`}
    >
      <Icon icon={iconName} className='w-5 h-5' />
      <span className='text-sm font-medium text-gray-900'>{displayName}</span>
    </div>
  )
}
