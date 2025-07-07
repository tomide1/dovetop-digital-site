import type { TechnologyCategory, Technology } from '@/types/what-we-do'

export const technologyCategories: TechnologyCategory[] = [
  { id: 'frontend', name: 'Frontend', icon: '/images/technology/frontend.svg' },
  { id: 'backend', name: 'Backend', icon: '/images/technology/backend.svg' },
  { id: 'cloud', name: 'Cloud', icon: '/images/technology/cloud.svg' },
  { id: 'database', name: 'Database', icon: '/images/technology/database.svg' },
  { id: 'devops', name: 'DevOps', icon: '/images/technology/devops.svg' },
  { id: 'mobile', name: 'Mobile', icon: '/images/technology/mobile.svg' },
  { id: 'ai-ml', name: 'AI & ML', icon: '/images/technology/ai-ml.svg' },
]

export const technologies: Technology[] = [
  {
    id: 'react',
    name: 'React',
    categoryId: 'frontend',
    icon: '/images/technology/react.svg',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    categoryId: 'frontend',
    icon: '/images/technology/nextjs.svg',
  },
  {
    id: 'aws-lambda',
    name: 'AWS Lambda',
    categoryId: 'cloud',
    icon: '/images/technology/aws-lambda.svg',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    categoryId: 'database',
    icon: '/images/technology/postgresql.svg',
  },
  {
    id: 'terraform',
    name: 'Terraform',
    categoryId: 'devops',
    icon: '/images/technology/terraform.svg',
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    categoryId: 'devops',
    icon: '/images/technology/kubernetes.svg',
  },
  {
    id: 'flutter',
    name: 'Flutter',
    categoryId: 'mobile',
    icon: '/images/technology/flutter.svg',
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    categoryId: 'ai-ml',
    icon: '/images/technology/pytorch.svg',
  },
]
