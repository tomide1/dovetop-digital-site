// Services data with comprehensive information about each service offered
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

export const services: Service[] = [
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortDescription:
      'Modern, robust, and scalable solutions in the cloud for all your business needs.',
    detailedDescription:
      'We build modern, robust, and scalable solutions in the cloud for all your business needs. Whether greenfield or brownfield, we have the expertise to deliver results. Our cloud solutions are designed to enhance your operational efficiency, security, and scalability, allowing your business to innovate and grow without infrastructure limitations.',
    icon: '/images/icons/cloud.svg',
    benefits: [
      'Increased operational efficiency',
      'Reduced infrastructure costs',
      'Enhanced security and compliance',
      'Scalable architecture for business growth',
      'Improved business continuity and disaster recovery',
    ],
    process: {
      steps: [
        {
          title: 'Cloud Assessment',
          description:
            'We evaluate your current infrastructure and identify opportunities for cloud adoption or optimization.',
        },
        {
          title: 'Architecture Design',
          description:
            'Create a tailored cloud architecture that aligns with your business needs and goals.',
        },
        {
          title: 'Implementation',
          description:
            'Seamless migration or implementation of cloud solutions with minimal disruption.',
        },
        {
          title: 'Optimization',
          description:
            'Continuous monitoring and refinement to ensure optimal performance and cost-efficiency.',
        },
      ],
    },
    deliverables: [
      'Cloud architecture documentation',
      'Migration or implementation plan',
      'Security and compliance framework',
      'Performance monitoring setup',
      'Training and knowledge transfer',
    ],
  },
  {
    id: 'user-centered-design',
    title: 'User-Centered Design',
    shortDescription:
      "Solutions that prioritize your users' needs and experience.",
    detailedDescription:
      "The needs of your Users always comes first, we can help you chart the course towards running a ship that prioritises your user's needs and experience. Our user-centered design approach ensures that your digital products are intuitive, engaging, and effective, leading to higher user satisfaction and better business outcomes.",
    icon: '/images/icons/design.svg',
    benefits: [
      'Increased user satisfaction and engagement',
      'Higher conversion rates',
      'Reduced development costs through early problem-solving',
      'Competitive advantage through superior user experience',
      'Accessible design for all users',
    ],
    process: {
      steps: [
        {
          title: 'User Research',
          description:
            'Understanding your users through interviews, surveys, and behavioral analysis.',
        },
        {
          title: 'Experience Design',
          description:
            'Creating intuitive user flows and interactions that meet user needs.',
        },
        {
          title: 'Prototype & Testing',
          description:
            'Developing and testing prototypes with real users to validate designs.',
        },
        {
          title: 'Implementation & Refinement',
          description:
            'Implementing designs and continuously refining based on user feedback.',
        },
      ],
    },
    deliverables: [
      'User research findings and personas',
      'User journey maps and experience flows',
      'Interactive prototypes',
      'Design system and component library',
      'Usability testing reports',
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics, Engineering & ML',
    shortDescription:
      'Data-driven insights and solutions to power your business growth.',
    detailedDescription:
      'Making Data driven decisions can easily take your SME to achieve your scaling goals. No matter your data landscape, we can help you achieve this and your other Data needs e.g cleansing, ETL processes, ML models. Our comprehensive data services empower your organization to extract maximum value from your data assets.',
    icon: '/images/icons/data.svg',
    benefits: [
      'Data-driven decision making',
      'Improved operational efficiency',
      'Predictive insights for business planning',
      'Enhanced customer understanding and segmentation',
      'Competitive advantage through advanced analytics',
    ],
    process: {
      steps: [
        {
          title: 'Data Assessment',
          description:
            'Evaluating your data landscape and identifying opportunities for improvement.',
        },
        {
          title: 'Data Engineering',
          description:
            'Building robust data pipelines and infrastructure for efficient data processing.',
        },
        {
          title: 'Analytics Implementation',
          description:
            'Implementing analytics solutions that provide actionable insights.',
        },
        {
          title: 'Machine Learning Development',
          description:
            'Creating ML models that solve specific business problems.',
        },
      ],
    },
    deliverables: [
      'Data strategy and roadmap',
      'ETL pipelines and data warehouse',
      'Analytics dashboards and reports',
      'Machine learning models',
      'Data governance framework',
    ],
  },
  {
    id: 'security-governance',
    title: 'Security & Governance',
    shortDescription:
      'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    detailedDescription:
      'With years of experience in regulated industries such as Banking, Health & Public Safety e.t.c., we understand your security and governance requirements and can help you stay in line with the standards. Our security and governance solutions help you protect your digital assets while meeting regulatory requirements.',
    icon: '/images/icons/security.svg',
    benefits: [
      'Enhanced protection against cyber threats',
      'Regulatory compliance',
      'Reduced risk of data breaches',
      'Improved stakeholder confidence',
      'Efficient security operations',
    ],
    process: {
      steps: [
        {
          title: 'Security Assessment',
          description:
            'Comprehensive evaluation of your security posture and compliance status.',
        },
        {
          title: 'Strategy Development',
          description:
            'Creating a security and governance strategy aligned with your business needs.',
        },
        {
          title: 'Implementation',
          description: 'Deploying security controls and governance frameworks.',
        },
        {
          title: 'Monitoring & Management',
          description:
            'Ongoing monitoring, management, and refinement of security measures.',
        },
      ],
    },
    deliverables: [
      'Security assessment report',
      'Security architecture and controls',
      'Governance framework',
      'Compliance documentation',
      'Security training materials',
    ],
  },
]
