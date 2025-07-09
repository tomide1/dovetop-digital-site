import { technologies, technologyCategories } from '@/data/technologies'
import type {
  TechnologyId,
  TechnologyCategoryId,
  Technology,
  TechnologyCategory,
} from '@/types/what-we-do'

export function getTechnology(
  id: TechnologyId | string
): Technology | undefined {
  // First try to find by ID
  const techById = technologies.find((t) => t.id === id)
  if (techById) return techById

  // If not found and it's a string, try to find by name
  if (typeof id === 'string') {
    return findTechnologyByName(id)
  }

  return undefined
}

export function getTechnologyCategory(
  id: TechnologyCategoryId
): TechnologyCategory | undefined {
  return technologyCategories.find((c) => c.id === id)
}

export function getTechnologyDisplayName(id: TechnologyId | string): string {
  const tech = getTechnology(id)
  return tech?.name ?? String(id)
}

export function getTechnologyIcon(id: TechnologyId | string): string {
  const tech = getTechnology(id)
  return tech?.icon ?? 'simple-icons:code'
}

// Technology name mappings for edge cases
const technologyNameMappings: Record<string, string> = {
  AWS: 'aws',
  Lambda: 'aws-lambda',
  CloudFront: 'aws-cloudfront',
  'Route 53': 'aws-route53',
  ECS: 'aws-ecs',
  RDS: 'aws-rds',
  VPC: 'aws-vpc',
  KMS: 'aws-kms',
  CloudTrail: 'aws-cloudtrail',
  DirectConnect: 'aws-directconnect',
  ElastiCache: 'aws-elasticache',
  Kinesis: 'aws-kinesis',
  HealthLake: 'aws-healthlake',
  'IoT Core': 'aws-iot-core',
  'IoT Greengrass': 'aws-iot-greengrass',
  S3: 'aws-s3',
  IAM: 'aws-iam',
  'API Gateway': 'aws-api-gateway',
  Cognito: 'aws-cognito',
  SageMaker: 'aws-sagemaker',
  Redshift: 'aws-redshift',
  QuickSight: 'aws-quicksight',
  'AWS GovCloud': 'aws-govcloud',
  DynamoDB: 'dynamodb',
  DocumentDB: 'documentdb',
  Elasticsearch: 'elasticsearch',
  SQLite: 'sqlite',
  Terraform: 'terraform',
  Kubernetes: 'kubernetes',
  Docker: 'docker',
  'CI/CD': 'cicd',
  PyTorch: 'pytorch',
  TensorFlow: 'tensorflow',
  Figma: 'figma',
  'Adobe XD': 'adobe-xd',
  Sketch: 'sketch',
  InVision: 'invision',
  Lottie: 'lottie',
  Firebase: 'firebase',
  Unity: 'unity',
  Blockchain: 'blockchain',
  IoT: 'iot',
  Tableau: 'tableau',
  Algolia: 'algolia',
  Hotjar: 'hotjar',
  Mapbox: 'mapbox',
  Twilio: 'twilio',
  Webflow: 'webflow',
  SharePoint: 'sharepoint',
  'Microsoft Graph API': 'microsoft-graph',
  Moodle: 'moodle',
  'Cerner API': 'cerner',
  WCAG: 'wcag',
  UserTesting: 'usertesting',
  'Dynamic Yield': 'dynamic-yield',
  'Node.js': 'nodejs',
  Python: 'python',
  GraphQL: 'graphql',
  React: 'react',
  'Next.js': 'nextjs',
  'React Native': 'react-native',
  Swift: 'swift',
  Kotlin: 'kotlin',
  Flutter: 'flutter',
  'D3.js': 'd3js',
  WebRTC: 'webrtc',
  PostgreSQL: 'postgresql',
}

// Helper function to find technology by name (case-insensitive)
export function findTechnologyByName(name: string): Technology | undefined {
  // First check if there's a direct mapping
  const mappedId = technologyNameMappings[name]
  if (mappedId) {
    return technologies.find((tech) => tech.id === mappedId)
  }

  // Otherwise do a case-insensitive search
  return technologies.find(
    (tech) => tech.name.toLowerCase() === name.toLowerCase()
  )
}

// Helper function to get technology icon by name
export function getTechnologyIconByName(name: string): string {
  const tech = findTechnologyByName(name)
  return tech?.icon || 'simple-icons:code'
}

// Helper function to get all technologies in a category
export function getTechnologiesByCategory(
  categoryId: TechnologyCategoryId
): Technology[] {
  return technologies.filter((tech) => tech.categoryId === categoryId)
}

// Helper function to search technologies by name
export function searchTechnologies(query: string): Technology[] {
  const lowerQuery = query.toLowerCase()
  return technologies.filter(
    (tech) =>
      tech.name.toLowerCase().includes(lowerQuery) ||
      tech.id.toLowerCase().includes(lowerQuery)
  )
}

// Helper function to get all unique categories used by technologies
export function getUsedCategories(): TechnologyCategory[] {
  const usedCategoryIds = new Set(technologies.map((tech) => tech.categoryId))
  return technologyCategories.filter((cat) => usedCategoryIds.has(cat.id))
}

// Helper function to validate if a technology exists
export function technologyExists(id: TechnologyId | string): boolean {
  return getTechnology(id) !== undefined
}
