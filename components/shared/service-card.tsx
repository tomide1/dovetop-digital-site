import React, { useMemo, useRef } from 'react'
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
  const iconRef = useRef<HTMLElement>(null)
  
  const animationConfig = useMemo(() => {
    const animations = [
      { rotate: '360deg', scale: 1 },
      { rotate: '-360deg', scale: 1 },
      { rotate: '720deg', scale: 1 },
      { rotate: '180deg', scale: 1.25 },
    ]
    const durations = [500, 700, 1000]
    const hash = service.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return {
      animation: animations[hash % animations.length],
      duration: durations[hash % durations.length]
    }
  }, [service.id])

  const handleCardHover = (isHovering: boolean) => {
    if (iconRef.current) {
      if (isHovering) {
        iconRef.current.style.transform = `rotate(${animationConfig.animation.rotate}) scale(${animationConfig.animation.scale})`
      } else {
        iconRef.current.style.transform = 'rotate(0deg) scale(1)'
      }
    }
  }

  const cardClasses = useMemo(() => {
    const base = 'group block text-center transition-all duration-500 transform hover:-translate-y-2 p-8 rounded-2xl border-2 h-80 flex flex-col'
    const hover = 'hover:border-blue-200 hover:shadow-xl'
    const visibility = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    const border = 'border-gray-100'
    
    return `${base} ${hover} ${border} ${visibility} ${className}`.trim()
  }, [isVisible, className])

  const iconContainerClasses = useMemo(() => {
    return 'mx-auto mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300'
  }, [])

  const titleClasses = useMemo(() => {
    return 'text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300'
  }, [])

  return (
    <Link
      href={`/services/${service.id}`}
      className={cardClasses}
      style={{
        transitionDelay: `${animationDelay}ms`,
      }}
      onMouseEnter={() => handleCardHover(true)}
      onMouseLeave={() => handleCardHover(false)}
      data-testid={`service-card-${service.id}`}
    >
      <div className={iconContainerClasses}>
        {service.icon && isValidImageUrl(service.icon) ? (
          <Image
            ref={iconRef as any}
            src={service.icon}
            alt={service.title}
            width={40}
            height={40}
            className='w-10 h-10 icon-animate inline-block transition-transform duration-700'
            style={{ transform: 'rotate(0deg) scale(1)' }}
            data-aos='zoom-in'
            data-aos-duration={animationConfig.duration}
            data-aos-delay={animationDelay}
          />
        ) : service.icon ? (
          <span 
            ref={iconRef as any}
            className='text-4xl icon-animate inline-block transition-transform duration-700'
            style={{ transform: 'rotate(0deg) scale(1)' }}
            data-aos='zoom-in'
            data-aos-duration={animationConfig.duration}
            data-aos-delay={animationDelay}
          >
            {service.icon}
          </span>
        ) : (
          <div 
            ref={iconRef as any}
            className='w-10 h-10 bg-blue-600 rounded-full icon-animate inline-block transition-transform duration-700'
            style={{ transform: 'rotate(0deg) scale(1)' }}
            data-aos='zoom-in'
            data-aos-duration={animationConfig.duration}
            data-aos-delay={animationDelay}
          />
        )}
      </div>

      <h3 className={titleClasses}>
        {service.title}
      </h3>

      <p className='text-sm text-gray-600 leading-relaxed flex-grow'>
        {service.shortDescription}
      </p>
    </Link>
  )
}
