import type { TechnologyCategory, Technology } from '@/types/what-we-do'

export const technologyCategories: TechnologyCategory[] = [
  { id: 'frontend', name: 'Frontend', icon: 'devicon:html5' },
  { id: 'backend', name: 'Backend', icon: 'devicon:nodejs' },
  { id: 'cloud', name: 'Cloud', icon: 'devicon:amazonwebservices' },
  { id: 'database', name: 'Database', icon: 'devicon:postgresql' },
  { id: 'devops', name: 'DevOps', icon: 'devicon:kubernetes' },
  { id: 'mobile', name: 'Mobile', icon: 'devicon:android' },
  { id: 'ai-ml', name: 'AI & ML', icon: 'devicon:tensorflow' },
  { id: 'design', name: 'Design', icon: 'devicon:figma' },
  { id: 'blockchain', name: 'Blockchain', icon: 'simple-icons:ethereum' },
]

export const technologies: Technology[] = [
  // Frontend Technologies
  {
    id: 'react',
    name: 'React',
    categoryId: 'frontend',
    icon: 'devicon:react',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    categoryId: 'frontend',
    icon: 'devicon:nextjs',
  },
  {
    id: 'react-native',
    name: 'React Native',
    categoryId: 'mobile',
    icon: 'devicon:react',
  },
  {
    id: 'swift',
    name: 'Swift',
    categoryId: 'mobile',
    icon: 'devicon:swift',
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    categoryId: 'mobile',
    icon: 'devicon:kotlin',
  },
  {
    id: 'flutter',
    name: 'Flutter',
    categoryId: 'mobile',
    icon: 'devicon:flutter',
  },
  {
    id: 'd3js',
    name: 'D3.js',
    categoryId: 'frontend',
    icon: 'devicon:d3js',
  },
  {
    id: 'webrtc',
    name: 'WebRTC',
    categoryId: 'frontend',
    icon: 'simple-icons:webrtc',
  },

  // Backend Technologies
  {
    id: 'nodejs',
    name: 'Node.js',
    categoryId: 'backend',
    icon: 'devicon:nodejs',
  },
  {
    id: 'python',
    name: 'Python',
    categoryId: 'backend',
    icon: 'devicon:python',
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    categoryId: 'backend',
    icon: 'logos:graphql',
  },

  // Cloud Technologies
  {
    id: 'aws',
    name: 'AWS',
    categoryId: 'cloud',
    icon: 'logos:aws',
  },
  {
    id: 'aws-lambda',
    name: 'AWS Lambda',
    categoryId: 'cloud',
    icon: 'simple-icons:awslambda',
  },
  {
    id: 'aws-cloudfront',
    name: 'CloudFront',
    categoryId: 'cloud',
    icon: 'logos:aws-cloudfront',
  },
  {
    id: 'aws-route53',
    name: 'Route 53',
    categoryId: 'cloud',
    icon: 'simple-icons:amazonroute53',
  },
  {
    id: 'aws-ecs',
    name: 'ECS',
    categoryId: 'cloud',
    icon: 'simple-icons:amazonecs',
  },
  {
    id: 'aws-rds',
    name: 'RDS',
    categoryId: 'cloud',
    icon: 'simple-icons:amazonrds',
  },
  {
    id: 'aws-vpc',
    name: 'VPC',
    categoryId: 'cloud',
    icon: 'simple-icons:amazonvpc',
  },
  {
    id: 'aws-kms',
    name: 'KMS',
    categoryId: 'cloud',
    icon: 'simple-icons:amazonwebservices',
  },
  {
    id: 'aws-cloudtrail',
    name: 'CloudTrail',
    categoryId: 'cloud',
    icon: 'simple-icons:amazonwebservices',
  },
  {
    id: 'aws-ec2',
    name: 'EC2 Bare Metal',
    categoryId: 'cloud',
    icon: 'logos:ec2',
  },
  {
    id: 'aws-directconnect',
    name: 'DirectConnect',
    categoryId: 'cloud',
    icon: 'simple-icons:amazonwebservices',
  },
  {
    id: 'aws-elasticache',
    name: 'ElastiCache',
    categoryId: 'cloud',
    icon: 'simple-icons:amazonelasticache',
  },
  {
    id: 'aws-kinesis',
    name: 'Kinesis',
    categoryId: 'cloud',
    icon: 'logos:aws-kinesis',
  },
  {
    id: 'aws-healthlake',
    name: 'HealthLake',
    categoryId: 'cloud',
    icon: 'simple-icons:amazonwebservices',
  },
  {
    id: 'aws-iot-core',
    name: 'IoT Core',
    categoryId: 'cloud',
    icon: 'simple-icons:amazoniot',
  },
  {
    id: 'aws-iot-greengrass',
    name: 'IoT Greengrass',
    categoryId: 'cloud',
    icon: 'simple-icons:amazoniot',
  },
  {
    id: 'aws-s3',
    name: 'S3',
    categoryId: 'cloud',
    icon: 'logos:aws-s3',
  },
  {
    id: 'aws-iam',
    name: 'IAM',
    categoryId: 'cloud',
    icon: 'simple-icons:amazoniam',
  },
  {
    id: 'aws-api-gateway',
    name: 'API Gateway',
    categoryId: 'cloud',
    icon: 'simple-icons:amazonapigateway',
  },
  {
    id: 'aws-cognito',
    name: 'Cognito',
    categoryId: 'cloud',
    icon: 'simple-icons:amazoncognito',
  },
  {
    id: 'aws-sagemaker',
    name: 'SageMaker',
    categoryId: 'ai-ml',
    icon: 'simple-icons:amazonsagemaker',
  },
  {
    id: 'aws-redshift',
    name: 'Redshift',
    categoryId: 'database',
    icon: 'simple-icons:amazonredshift',
  },
  {
    id: 'aws-quicksight',
    name: 'QuickSight',
    categoryId: 'frontend',
    icon: 'simple-icons:amazonquicksight',
  },
  {
    id: 'aws-govcloud',
    name: 'AWS GovCloud',
    categoryId: 'cloud',
    icon: 'simple-icons:amazonwebservices',
  },

  // Database Technologies
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    categoryId: 'database',
    icon: 'devicon:postgresql',
  },
  {
    id: 'dynamodb',
    name: 'DynamoDB',
    categoryId: 'database',
    icon: 'devicon:dynamodb',
  },
  {
    id: 'documentdb',
    name: 'DocumentDB',
    categoryId: 'database',
    icon: 'simple-icons:amazondocumentdb',
  },
  {
    id: 'elasticsearch',
    name: 'Elasticsearch',
    categoryId: 'database',
    icon: 'devicon:elasticsearch',
  },
  {
    id: 'sqlite',
    name: 'SQLite',
    categoryId: 'database',
    icon: 'devicon:sqlite',
  },

  // DevOps Technologies
  {
    id: 'terraform',
    name: 'Terraform',
    categoryId: 'devops',
    icon: 'devicon:terraform',
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    categoryId: 'devops',
    icon: 'devicon:kubernetes',
  },
  {
    id: 'docker',
    name: 'Docker',
    categoryId: 'devops',
    icon: 'devicon:docker',
  },
  {
    id: 'cicd',
    name: 'CI/CD',
    categoryId: 'devops',
    icon: 'simple-icons:githubactions',
  },

  // AI & ML Technologies
  {
    id: 'pytorch',
    name: 'PyTorch',
    categoryId: 'ai-ml',
    icon: 'devicon:pytorch',
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    categoryId: 'ai-ml',
    icon: 'devicon:tensorflow',
  },

  // Design Technologies
  {
    id: 'figma',
    name: 'Figma',
    categoryId: 'design',
    icon: 'devicon:figma',
  },
  {
    id: 'adobe-xd',
    name: 'Adobe XD',
    categoryId: 'design',
    icon: 'logos:adobe-xd',
  },
  {
    id: 'sketch',
    name: 'Sketch',
    categoryId: 'design',
    icon: 'devicon:sketch',
  },
  {
    id: 'invision',
    name: 'InVision',
    categoryId: 'design',
    icon: 'simple-icons:invision',
  },
  {
    id: 'lottie',
    name: 'Lottie',
    categoryId: 'design',
    icon: 'simple-icons:lottiefiles',
  },

  // Other Technologies
  {
    id: 'firebase',
    name: 'Firebase',
    categoryId: 'backend',
    icon: 'devicon:firebase',
  },
  {
    id: 'unity',
    name: 'Unity',
    categoryId: 'frontend',
    icon: 'devicon:unity',
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    categoryId: 'blockchain',
    icon: 'simple-icons:ethereum',
  },
  {
    id: 'iot',
    name: 'IoT',
    categoryId: 'cloud',
    icon: 'simple-icons:internetofthings',
  },
  {
    id: 'tableau',
    name: 'Tableau',
    categoryId: 'frontend',
    icon: 'logos:tableau-icon',
  },
  {
    id: 'algolia',
    name: 'Algolia',
    categoryId: 'backend',
    icon: 'simple-icons:algolia',
  },
  {
    id: 'hotjar',
    name: 'Hotjar',
    categoryId: 'frontend',
    icon: 'simple-icons:hotjar',
  },
  {
    id: 'mapbox',
    name: 'Mapbox',
    categoryId: 'frontend',
    icon: 'simple-icons:mapbox',
  },
  {
    id: 'twilio',
    name: 'Twilio',
    categoryId: 'backend',
    icon: 'devicon:twilio',
  },
  {
    id: 'webflow',
    name: 'Webflow',
    categoryId: 'frontend',
    icon: 'devicon:webflow',
  },
  {
    id: 'sharepoint',
    name: 'SharePoint',
    categoryId: 'backend',
    icon: 'devicon:sharepoint',
  },
  {
    id: 'microsoft-graph',
    name: 'Microsoft Graph API',
    categoryId: 'backend',
    icon: 'devicon:microsoftgraph',
  },
  {
    id: 'moodle',
    name: 'Moodle',
    categoryId: 'frontend',
    icon: 'simple-icons:moodle',
  },
  {
    id: 'cerner',
    name: 'Cerner API',
    categoryId: 'backend',
    icon: 'simple-icons:cerner',
  },
  {
    id: 'wcag',
    name: 'WCAG',
    categoryId: 'frontend',
    icon: 'simple-icons:w3c',
  },
  {
    id: 'usertesting',
    name: 'UserTesting',
    categoryId: 'design',
    icon: 'simple-icons:usertesting',
  },
  {
    id: 'dynamic-yield',
    name: 'Dynamic Yield',
    categoryId: 'frontend',
    icon: 'simple-icons:dynamicyield',
  },
]
