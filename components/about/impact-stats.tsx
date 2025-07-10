'use client'

import React, { useState, useEffect, useRef } from 'react'
import { QuickStat } from '@/data/about/quick-stats'

interface ImpactStatsProps {
  stats: QuickStat[]
}

// Custom hook for animated counter
const useAnimatedCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const startAnimation = () => {
    if (isAnimating) return

    setIsAnimating(true)
    const startTime = Date.now()
    const startValue = 0

    const updateCount = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(
        startValue + (end - startValue) * easeOutQuart
      )

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      } else {
        setIsAnimating(false)
      }
    }

    requestAnimationFrame(updateCount)
  }

  return { count, startAnimation }
}

// Individual stat card component
const StatCard = ({ stat, index }: { stat: QuickStat; index: number }) => {
  const { count, startAnimation } = useAnimatedCounter(stat.value)
  const [hasAnimated, setHasAnimated] = useState(false)

  return (
    <div
      className='text-center text-white'
      data-testid={`stat-card-${index}`}
      ref={(el) => {
        if (el && !hasAnimated) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                startAnimation()
                setHasAnimated(true)
                observer.disconnect()
              }
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
          )
          observer.observe(el)
        }
      }}
    >
      <div
        className='text-4xl md:text-5xl font-bold mb-2'
        data-testid={`stat-value-${index}`}
        aria-live='polite'
      >
        {count}
        {stat.suffix || ''}
      </div>
      <div className='text-lg md:text-xl font-medium opacity-90'>
        {stat.label}
      </div>
    </div>
  )
}

export default function ImpactStats({ stats }: ImpactStatsProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Set up intersection observer for the section
    if (sectionRef.current) {
      const observer = new IntersectionObserver(
        () => {
          // Observer callback - handled by individual StatCard components
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
      )
      observer.observe(sectionRef.current)

      return () => observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className='bg-blue-600 py-16 md:py-24'
      role='region'
      aria-labelledby='impact-stats-title'
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-12'>
          <h2
            id='impact-stats-title'
            className='text-3xl md:text-4xl font-bold text-white mb-4'
          >
            Our Impact
          </h2>
          <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
            Numbers that reflect our commitment to excellence and the trust our
            clients place in us.
          </p>
        </div>

        <div
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8'
          data-testid='stats-grid'
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
