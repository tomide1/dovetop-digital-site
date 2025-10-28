// Services data with comprehensive information about each service offered
import { Service } from '@/types/what-we-do'

export const services: Service[] = [
  {
    id: 'cloud-solutions',
    title: 'Cloud',
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
  // {
  //   id: 'user-centered-design',
  //   title: 'User-Centered Design',
  //   shortDescription:
  //     "Solutions that prioritize your users' needs and experience.",
  //   detailedDescription:
  //     "The needs of your Users always comes first, we can help you chart the course towards running a ship that prioritises your user's needs and experience. Our user-centered design approach ensures that your digital products are intuitive, engaging, and effective, leading to higher user satisfaction and better business outcomes.",
  //   icon: '/images/icons/design.svg',
  //   benefits: [
  //     'Increased user satisfaction and engagement',
  //     'Higher conversion rates',
  //     'Reduced development costs through early problem-solving',
  //     'Competitive advantage through superior user experience',
  //     'Accessible design for all users',
  //   ],
  //   process: {
  //     steps: [
  //       {
  //         title: 'User Research',
  //         description:
  //           'Understanding your users through interviews, surveys, and behavioral analysis.',
  //       },
  //       {
  //         title: 'Experience Design',
  //         description:
  //           'Creating intuitive user flows and interactions that meet user needs.',
  //       },
  //       {
  //         title: 'Prototype & Testing',
  //         description:
  //           'Developing and testing prototypes with real users to validate designs.',
  //       },
  //       {
  //         title: 'Implementation & Refinement',
  //         description:
  //           'Implementing designs and continuously refining based on user feedback.',
  //       },
  //     ],
  //   },
  //   deliverables: [
  //     'User research findings and personas',
  //     'User journey maps and experience flows',
  //     'Interactive prototypes',
  //     'Design system and component library',
  //     'Usability testing reports',
  //   ],
  // },
  // {
  //   id: 'data-analytics',
  //   title: 'Data Analytics, Engineering & ML',
  //   shortDescription:
  //     'Data-driven insights and solutions to power your business growth.',
  //   detailedDescription:
  //     'Making Data driven decisions can easily take your SME to achieve your scaling goals. No matter your data landscape, we can help you achieve this and your other Data needs e.g cleansing, ETL processes, ML models. Our comprehensive data services empower your organization to extract maximum value from your data assets.',
  //   icon: '/images/icons/data.svg',
  //   benefits: [
  //     'Data-driven decision making',
  //     'Improved operational efficiency',
  //     'Predictive insights for business planning',
  //     'Enhanced customer understanding and segmentation',
  //     'Competitive advantage through advanced analytics',
  //   ],
  //   process: {
  //     steps: [
  //       {
  //         title: 'Data Assessment',
  //         description:
  //           'Evaluating your data landscape and identifying opportunities for improvement.',
  //       },
  //       {
  //         title: 'Data Engineering',
  //         description:
  //           'Building robust data pipelines and infrastructure for efficient data processing.',
  //       },
  //       {
  //         title: 'Analytics Implementation',
  //         description:
  //           'Implementing analytics solutions that provide actionable insights.',
  //       },
  //       {
  //         title: 'Machine Learning Development',
  //         description:
  //           'Creating ML models that solve specific business problems.',
  //       },
  //     ],
  //   },
  //   deliverables: [
  //     'Data strategy and roadmap',
  //     'ETL pipelines and data warehouse',
  //     'Analytics dashboards and reports',
  //     'Machine learning models',
  //     'Data governance framework',
  //   ],
  // },
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
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    shortDescription: 'Comprehensive cybersecurity solutions to protect your digital assets and data.',
    detailedDescription: 'Safeguard your organization with our advanced cybersecurity services. We provide end-to-end security solutions including threat detection, incident response, and compliance management to protect your business from evolving cyber threats.',
    icon: '/images/icons/security.svg',
    benefits: [
      'Protection against advanced cyber threats',
      'Regulatory compliance assurance',
      'Reduced risk of data breaches',
      'Enhanced business continuity',
      'Improved customer trust and confidence',
    ],
    process: {
      steps: [
        {
          title: 'Security Assessment',
          description: 'Comprehensive evaluation of your current security posture and vulnerabilities.',
        },
        {
          title: 'Security Strategy Development',
          description: 'Create a tailored cybersecurity strategy aligned with your business objectives.',
        },
        {
          title: 'Implementation & Deployment',
          description: 'Deploy security controls and monitoring systems across your infrastructure.',
        },
        {
          title: 'Monitoring & Response',
          description: 'Continuous monitoring and rapid response to security incidents.',
        },
      ],
    },
    deliverables: [
      'Security assessment report',
      'Cybersecurity framework implementation',
      'Incident response procedures',
      'Security monitoring dashboard',
      'Staff training and awareness programs',
    ],
  },
  {
    id: 'strategy',
    title: 'Strategy',
    shortDescription: 'Strategic technology consulting to align IT initiatives with business objectives.',
    detailedDescription: 'Drive your digital transformation with our strategic consulting services. We help organizations develop technology strategies that align with business goals, optimize operations, and create competitive advantages in the digital marketplace.',
    icon: '/images/icons/design.svg',
    benefits: [
      'Clear technology roadmap aligned with business goals',
      'Improved decision-making processes',
      'Optimized technology investments',
      'Enhanced competitive positioning',
      'Accelerated digital transformation',
    ],
    process: {
      steps: [
        {
          title: 'Business Analysis',
          description: 'Analyze current business processes and technology landscape.',
        },
        {
          title: 'Strategy Development',
          description: 'Develop comprehensive technology strategy and roadmap.',
        },
        {
          title: 'Implementation Planning',
          description: 'Create detailed implementation plans with timelines and milestones.',
        },
        {
          title: 'Execution Support',
          description: 'Provide ongoing support and guidance during strategy execution.',
        },
      ],
    },
    deliverables: [
      'Technology strategy document',
      'Digital transformation roadmap',
      'Implementation timeline and milestones',
      'ROI analysis and business case',
      'Change management framework',
    ],
  },
  {
    id: 'data-ai',
    title: 'Data and Artificial Intelligence',
    shortDescription: 'Advanced data analytics and AI solutions to unlock business insights and automation.',
    detailedDescription: 'Harness the power of data and artificial intelligence to drive innovation and growth. Our AI and data services help organizations extract valuable insights, automate processes, and make data-driven decisions that transform their business.',
    icon: '/images/icons/data.svg',
    benefits: [
      'Data-driven decision making capabilities',
      'Automated business processes',
      'Predictive analytics and forecasting',
      'Enhanced customer experiences',
      'Competitive advantage through AI innovation',
    ],
    process: {
      steps: [
        {
          title: 'Data Strategy & Assessment',
          description: 'Evaluate data maturity and develop comprehensive data strategy.',
        },
        {
          title: 'AI Solution Design',
          description: 'Design AI models and solutions tailored to your business needs.',
        },
        {
          title: 'Development & Training',
          description: 'Build and train AI models using your data and industry best practices.',
        },
        {
          title: 'Deployment & Optimization',
          description: 'Deploy AI solutions and continuously optimize for better performance.',
        },
      ],
    },
    deliverables: [
      'Data strategy and governance framework',
      'AI model development and training',
      'Analytics dashboards and reporting',
      'Automated workflow implementations',
      'AI ethics and compliance documentation',
    ],
  },
  {
    id: 'tech-transformation',
    title: 'Technology Transformation',
    shortDescription: 'Comprehensive technology modernization to drive digital innovation and efficiency.',
    detailedDescription: 'Transform your technology landscape with our comprehensive modernization services. We help organizations upgrade legacy systems, adopt modern architectures, and implement cutting-edge technologies to improve efficiency and competitiveness.',
    icon: '/images/icons/design.svg',
    benefits: [
      'Modernized technology infrastructure',
      'Improved operational efficiency',
      'Enhanced scalability and performance',
      'Reduced technical debt and maintenance costs',
      'Accelerated innovation capabilities',
    ],
    process: {
      steps: [
        {
          title: 'Technology Assessment',
          description: 'Comprehensive evaluation of existing technology stack and architecture.',
        },
        {
          title: 'Transformation Planning',
          description: 'Develop detailed transformation roadmap and migration strategy.',
        },
        {
          title: 'Modernization Implementation',
          description: 'Execute technology upgrades and system modernization initiatives.',
        },
        {
          title: 'Optimization & Support',
          description: 'Optimize new systems and provide ongoing support and maintenance.',
        },
      ],
    },
    deliverables: [
      'Technology assessment report',
      'Modernization roadmap and strategy',
      'Upgraded systems and infrastructure',
      'Performance optimization recommendations',
      'Knowledge transfer and training materials',
    ],
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    shortDescription: 'Sustainable technology solutions that reduce environmental impact while driving business value.',
    detailedDescription: 'Build a sustainable future with our green technology solutions. We help organizations reduce their environmental footprint through energy-efficient systems, sustainable practices, and technologies that support environmental responsibility.',
    icon: '/images/icons/design.svg',
    benefits: [
      'Reduced environmental impact and carbon footprint',
      'Lower energy costs and operational expenses',
      'Enhanced brand reputation and stakeholder trust',
      'Compliance with environmental regulations',
      'Long-term cost savings and efficiency gains',
    ],
    process: {
      steps: [
        {
          title: 'Sustainability Assessment',
          description: 'Evaluate current environmental impact and identify improvement opportunities.',
        },
        {
          title: 'Green Strategy Development',
          description: 'Develop comprehensive sustainability strategy and implementation plan.',
        },
        {
          title: 'Implementation & Deployment',
          description: 'Deploy sustainable technologies and practices across your organization.',
        },
        {
          title: 'Monitoring & Reporting',
          description: 'Track progress and report on sustainability metrics and achievements.',
        },
      ],
    },
    deliverables: [
      'Sustainability assessment report',
      'Green technology implementation plan',
      'Energy efficiency optimization',
      'Environmental impact monitoring dashboard',
      'Sustainability compliance documentation',
    ],
  },
  {
    id: 'learning',
    title: 'Learning',
    shortDescription: 'Educational technology solutions and training programs to enhance learning experiences.',
    detailedDescription: 'Transform education and training with our innovative learning solutions. We develop educational technologies, learning management systems, and training programs that enhance knowledge transfer and skill development.',
    icon: '/images/icons/design.svg',
    benefits: [
      'Enhanced learning outcomes and engagement',
      'Scalable training and education delivery',
      'Personalized learning experiences',
      'Improved knowledge retention and application',
      'Cost-effective training solutions',
    ],
    process: {
      steps: [
        {
          title: 'Learning Needs Analysis',
          description: 'Assess current learning requirements and identify improvement opportunities.',
        },
        {
          title: 'Solution Design',
          description: 'Design customized learning solutions and educational technology platforms.',
        },
        {
          title: 'Development & Implementation',
          description: 'Build and deploy learning management systems and training programs.',
        },
        {
          title: 'Evaluation & Optimization',
          description: 'Monitor learning effectiveness and continuously improve programs.',
        },
      ],
    },
    deliverables: [
      'Learning needs assessment report',
      'Custom learning management system',
      'Interactive training content and materials',
      'Learning analytics and progress tracking',
      'Instructor training and support documentation',
    ],
  },
]
