import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Service } from '@/types/what-we-do'

export interface ServiceCardProps {
  service: Service
  isVisible?: boolean
  animationDelay?: number
  variant?: 'default' | 'homepage'
  className?: string
}

// Helper function to determine if icon is a valid image URL
const isValidImageUrl = (icon: string): boolean => {
  return (
    icon.startsWith('/') ||
    icon.startsWith('http://') ||
    icon.startsWith('https://')
  )
}

export default function ServiceCard({
  service,
  isVisible = true,
  animationDelay = 0,
  variant = 'default',
  className = '',
}: ServiceCardProps) {
  const baseClasses =
    'group block text-center transition-all duration-500 transform hover:-translate-y-2'

  const variantClasses = {
    default:
      'p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl',
    homepage:
      'p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl',
  }

  const animationClasses = isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-8'

  const combinedClasses =
    `${baseClasses} ${variantClasses[variant]} ${animationClasses} ${className}`.trim()

  return (
    <Link
      href={`/services/${service.id}`}
      className={combinedClasses}
      style={{
        transitionDelay: `${animationDelay}ms`,
      }}
      data-testid={`service-card-${service.id}`}
    >
      <div className='mx-auto mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 group-hover:scale-110 transition-all duration-300'>
        {service.icon && isValidImageUrl(service.icon) ? (
          <Image
            src={service.icon}
            alt={service.title}
            width={40}
            height={40}
            className='w-10 h-10'
          />
        ) : service.icon ? (
          <span className='text-4xl'>{service.icon}</span>
        ) : (
          <div className='w-10 h-10 bg-blue-600 rounded-full'></div>
        )}
      </div>

      <h3 className='text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300'>
        {service.title}
      </h3>

      <p className='text-sm text-gray-600 leading-relaxed'>
        {service.shortDescription}
      </p>
    </Link>
  )
}
