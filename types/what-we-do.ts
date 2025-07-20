export const SERVICE_IDS = [
  'cloud-solutions',
  'user-centered-design',
  'data-analytics',
  'security-governance',
] as const
export type ServiceId = (typeof SERVICE_IDS)[number]

export const INDUSTRY_IDS = [
  'healthcare',
  'finance',
  'legal',
  'agriculture',
  'education',
  'e-commerce',
  'government',
] as const
export type IndustryId = (typeof INDUSTRY_IDS)[number]

export const TECHNOLOGY_CATEGORY_IDS = [
  'frontend',
  'backend',
  'cloud',
  'database',
  'devops',
  'mobile',
  'ai-ml',
  'design',
  'blockchain',
] as const
export type TechnologyCategoryId = (typeof TECHNOLOGY_CATEGORY_IDS)[number]

export interface TechnologyCategory {
  id: TechnologyCategoryId
  name: string
  icon?: string
}

export const TECHNOLOGY_IDS = [
  // Frontend
  'react',
  'nextjs',
  'react-native',
  'swift',
  'kotlin',
  'flutter',
  'd3js',
  'webrtc',

  // Backend
  'nodejs',
  'python',
  'graphql',
  'firebase',
  'algolia',
  'twilio',
  'sharepoint',
  'microsoft-graph',
  'cerner',

  // Cloud
  'aws',
  'aws-lambda',
  'aws-cloudfront',
  'aws-route53',
  'aws-ecs',
  'aws-rds',
  'aws-vpc',
  'aws-kms',
  'aws-cloudtrail',
  'aws-ec2',
  'aws-directconnect',
  'aws-elasticache',
  'aws-kinesis',
  'aws-healthlake',
  'aws-iot-core',
  'aws-iot-greengrass',
  'aws-s3',
  'aws-iam',
  'aws-api-gateway',
  'aws-cognito',
  'aws-sagemaker',
  'aws-redshift',
  'aws-quicksight',
  'aws-govcloud',
  'iot',

  // Database
  'postgresql',
  'dynamodb',
  'documentdb',
  'elasticsearch',
  'sqlite',

  // DevOps
  'terraform',
  'kubernetes',
  'docker',
  'cicd',

  // AI & ML
  'pytorch',
  'tensorflow',

  // Design
  'figma',
  'adobe-xd',
  'sketch',
  'invision',
  'lottie',
  'usertesting',

  // Other
  'unity',
  'blockchain',
  'tableau',
  'hotjar',
  'mapbox',
  'webflow',
  'moodle',
  'wcag',
  'dynamic-yield',
] as const

export type TechnologyId = (typeof TECHNOLOGY_IDS)[number] | (string & {})

export interface Technology {
  id: TechnologyId
  name: string
  categoryId: TechnologyCategoryId
  icon: string
}

export interface CaseStudy {
  id: string
  title: string
  serviceIds: ServiceId[]
  shortDescription: string
  detailedDescription: string
  results: string[]
  imageUrl: string
  client: string
  industryIds: IndustryId[]
  duration: string
  technologies: TechnologyId[]
}

export interface Service {
  id: ServiceId
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
  id: IndustryId
  name: string
  description: string
  icon?: string
  isVisible?: boolean
  animationDelay?: number
}

export interface ServiceApplication {
  serviceId: ServiceId
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
