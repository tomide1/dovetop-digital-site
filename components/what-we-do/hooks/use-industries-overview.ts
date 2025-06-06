import { useState, useCallback } from 'react'
import { industries } from '@/data/industries'

interface IndustryWithAnimation {
  id: string
  name: string
  description?: string
  icon?: string
  isVisible: boolean
  animationDelay: number
}

export function useIndustriesOverview() {
  const [isVisible, setIsVisible] = useState(false)

  const triggerAnimation = useCallback(() => {
    setIsVisible(true)
  }, [])

  // Augment industries with animation properties
  const industriesWithAnimation: IndustryWithAnimation[] = industries.map(
    (industry, index) => ({
      ...industry,
      isVisible,
      animationDelay: index * 100, // Stagger animation by 100ms per card
    })
  )

  return {
    industries: industriesWithAnimation,
    isVisible,
    triggerAnimation,
  }
}
