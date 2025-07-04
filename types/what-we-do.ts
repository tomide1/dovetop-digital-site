export interface CaseStudy {
  id: string
  title: string
  serviceIds: string[]
  shortDescription: string
  detailedDescription: string
  results: string[]
  imageUrl: string
  client: string
  industryIds: string[]
  duration: string
  technologies: string[]
}

export interface Service {
  id: string
  title: string
  shortDescription: string
  detailedDescription: string
  icon: string // Path to the icon/image
  benefits: string[]
  process?: {
    steps: {
      title: string
      description: string
    }[]
  }
  deliverables?: string[]
  caseStudies?: {
    id: string
    title: string
  }[] // For future integration with case studies
}

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
