import type { CaseStudy } from '@/data/case-studies'
import type { Service } from '@/data/services'

export interface Industry {
  id: string
  name: string
  description: string
  icon?: string
  isVisible?: boolean
  animationDelay?: number
}

export interface ServiceApplication {
  serviceId: string
  applicationText: string
}

export interface ServiceApplicationWithService extends ServiceApplication {
  service?: Service
}

export interface IndustryDetailsData {
  industry: Industry
  applications: ServiceApplicationWithService[]
  caseStudies: CaseStudy[]
}
