import Image from 'next/image'
import { getTechnology } from '@/utils/technology-helpers'
import type { TechnologyId } from '@/types/what-we-do'

interface TechnologyBadgeProps {
  id: TechnologyId
  className?: string
}

export default function TechnologyBadge({
  id,
  className = '',
}: TechnologyBadgeProps) {
  const tech = getTechnology(id)
  if (!tech) {
    return (
      <div
        className={`flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 ${className}`}
      >
        <span className='text-sm font-medium text-gray-900'>{id}</span>
      </div>
    )
  }

  const isImage = tech.icon.startsWith('/') || tech.icon.startsWith('http')

  return (
    <div
      className={`flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 ${className}`}
      data-testid={`technology-badge-${id}`}
    >
      {isImage ? (
        <Image src={tech.icon} alt={tech.name} width={20} height={20} />
      ) : (
        <span className='text-lg'>{tech.icon}</span>
      )}
      <span className='text-sm font-medium text-gray-900'>{tech.name}</span>
    </div>
  )
}
