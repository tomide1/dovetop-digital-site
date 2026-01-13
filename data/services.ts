// Services data with comprehensive information about each service offered
import { Service } from '@/types/what-we-do'

export const services: Service[] = [
  {
    id: 'cloud-solutions',
    title: 'Cloud',
    shortDescription: 'Cloud computing delivers speed, intelligence, and competitive advantage through on-demand computing resources.',
    detailedDescription: 'Cloud computing delivers computing resources such as servers, storage, databases, software, and intelligence on demand over the internet, replacing the need for physical infrastructure and heavy capital investment. Instead of owning technology, businesses consume technology as a service. This model enables rapid scaling, global access, built-in resilience, and continuous innovation. Cloud is now the foundation for AI, data analytics, remote collaboration, digital platforms, and modern customer experiences.',
    icon: '/images/icons/cloud.svg',
    whatItIs: 'Cloud computing delivers servers, storage, databases, software, analytics, and intelligence over the internet. It eliminates the need for physical infrastructure and heavy upfront capital investment, operates on a pay-as-you-use (OPEX) model instead of CAPEX, enables global access, rapid scaling, built-in resilience, and faster innovation, and forms the foundation for AI, data analytics, remote work, and digital platforms. Cloud is not just infrastructure. Cloud is speed, intelligence, and competitive advantage.',
    stats: [
      {
        value: '94%',
        description: 'Enterprises use cloud services',
      },
      {
        value: '$723B',
        description: 'Global public cloud spending projected in 2025',
      },
      {
        value: '80%+',
        description: 'Enterprise workloads now run in cloud or hybrid environments',
      },
      {
        value: '20-30%',
        description: 'Average infrastructure cost reduction after cloud migration',
      },
      {
        value: '46%',
        description: 'Faster deployment speed for cloud-native teams',
      },
      {
        value: '99.9%+',
        description: 'Enterprise-grade cloud platform uptime',
      },
    ],
    whyMattersNow: [
      'Cost efficiency: Companies reduce IT infrastructure costs by 20-30% on average after cloud migration',
      'Speed to market: Cloud-native teams deploy applications up to 46% faster',
      'Scalability: Resources scale instantly to match demand - no downtime, no overprovisioning',
      'Availability: Leading cloud platforms deliver 99.9%+ uptime',
      'Security: Cloud providers invest billions annually in security, compliance, and threat detection',
    ],
    asAService: {
      title: 'Cloud as a Service (Our Core Offerings)',
      description: 'We deliver comprehensive cloud services across all deployment models and service types.',
    },
    capabilities: [
      {
        title: 'Infrastructure as a Service (IaaS)',
        items: [
          'On-demand virtual servers, storage, and networking',
          'Full control over operating systems and applications',
          'Ideal for scalable workloads and high-performance computing',
          'Accounts for ~31% of global cloud spending',
        ],
      },
      {
        title: 'Platform as a Service (PaaS)',
        items: [
          'Managed platforms for building and deploying applications',
          'Built-in runtimes, databases, and DevOps pipelines',
          'Accelerates development and reduces operational overhead',
          'Widely adopted for modern application development',
        ],
      },
      {
        title: 'Software as a Service (SaaS)',
        items: [
          'Fully managed, ready-to-use applications',
          'No installation, maintenance, or upgrades required',
          'Enables rapid business adoption and collaboration',
          'Represents ~47% of global cloud market revenue',
        ],
      },
      {
        title: 'Advanced Cloud Services',
        items: [
          'Serverless / Function as a Service: Run code on demand',
          'Database as a Service (DBaaS): Fully managed databases',
          'AI & Machine Learning Services: Cloud-native AI and analytics',
          'Containerization & Kubernetes: 55%+ of apps run in containers',
        ],
      },
    ],
    services: [
      {
        title: 'Cloud Consulting Services',
        description: 'Cloud readiness and architecture assessment, cloud strategy and roadmap design, migration planning and execution, cost optimization and FinOps governance, security, risk, and compliance advisory, hybrid and multi-cloud strategy, training and knowledge transfer, and performance monitoring setup.',
      },
      {
        title: 'Cloud Migration & Modernization',
        description: 'Secure data and workload migration, application modernization and refactoring, hybrid transition for regulated workloads, and post-migration optimization and monitoring.',
      },
      {
        title: 'Cloud Optimization & Managed Services',
        description: 'Cost efficiency through resource right-sizing, performance monitoring and tuning, high availability and disaster recovery, security posture management and compliance, continuous improvement and scalability, and long-term ROI and operational excellence.',
      },
    ],
    benefits: [
      'Rebuild systems as cloud-native, modular architectures',
      'Embed AI and analytics into everyday operations',
      'Enable real-time data processing with edge computing',
      'Launch new digital products faster',
      'Respond to market changes with speed and intelligence',
      'Up to 50% faster product launches',
    ],
    shapingNow: [
      'AI & Generative AI: ~30% of cloud compute now supports AI workloads',
      'Edge Computing: By 2027, 75% of enterprise data will be processed at the edge',
      'Hybrid & Multi-Cloud: The new enterprise default (78% use hybrid, 80%+ multi-cloud)',
      'FinOps & Sustainability: Cloud cost and energy optimization as a business priority',
      'Industry-Specific Clouds: Purpose-built platforms for finance, healthcare, retail',
    ],
    process: {
      steps: [
        {
          title: 'Cloud Assessment',
          description: 'Evaluate your current infrastructure, cloud readiness, and identify opportunities for cloud adoption or optimization.',
        },
        {
          title: 'Architecture Design',
          description: 'Create a tailored cloud architecture and strategy that aligns with your business needs, goals, and deployment model.',
        },
        {
          title: 'Implementation',
          description: 'Seamless migration or implementation of cloud solutions with minimal disruption, including modernization and refactoring.',
        },
        {
          title: 'Optimization',
          description: 'Continuous monitoring, cost optimization, performance tuning, and refinement to ensure optimal performance and cost-efficiency.',
        },
      ],
    },
    deliverables: [
      'Tailored cloud strategy aligned to business goals',
      'Secure and seamless cloud migration',
      'Optimized, scalable, high-performance infrastructure',
      'Cost transparency and financial governance',
      'Enterprise-grade security and compliance readiness',
      'Continuous support, monitoring, and optimization',
      'Future-ready platform for AI, analytics, and growth',
    ],
    whyChooseUs: [
      'End-to-end cloud consulting, migration, and management',
      'Deep expertise across IaaS, PaaS, SaaS, and cloud-native architectures',
      'Business-first, security-driven approach',
      'Proven ability to deliver cost savings, scalability, and innovation',
      'Focus on long-term value, not just deployment',
      'Support for public, private, hybrid, and multi-cloud deployments',
      'Up to 30% faster cloud migration',
      '20-25% reduction in cloud spend within the first year',
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
    shortDescription: 'Core business capabilities that provide visibility into risk, consistency in decision-making, and confidence at every level.',
    detailedDescription: 'Security and governance are two sides of the same operating model. Security protects systems, data, and users from threats. Governance ensures those protections are intentional, monitored, and aligned with business priorities. Together, they provide visibility into risk, consistency in decision-making, and confidence at every level of the organization.',
    icon: '/images/icons/security.svg',
    whatItIs: 'Security and governance are two sides of the same operating model. Security protects systems, data, and users from threats. Governance ensures those protections are intentional, monitored, and aligned with business priorities. Together, they provide visibility into risk, consistency in decision-making, and confidence at every level of the organization. Modern enterprises no longer treat security as reactive or governance as a compliance exercise. Both are continuous disciplines that support resilience, trust, and sustainable digital growth.',
    stats: [
      {
        value: '$4.88M',
        description: 'Average global cost of a data breach',
      },
      {
        value: '$213B+',
        description: 'Global information security spending projected in 2025',
      },
      {
        value: '60%+',
        description: 'Organizations adopting Zero Trust strategies',
      },
    ],
    asAService: {
      title: 'Security & Governance as a Service',
      description: 'Dovetop Digital delivers security and governance through managed, ongoing services - reducing operational complexity while improving resilience and compliance.',
      features: [
        'Continuous threat monitoring and response',
        'Managed endpoint, cloud, and network security',
        'Identity and privileged access management',
        'Policy and control framework implementation',
        'Continuous compliance and audit evidence management',
        'Risk assessments and risk register operations',
      ],
    },
    capabilities: [
      {
        title: 'Security Capabilities',
        items: [
          'Identity & Access Management (IAM, MFA, PAM)',
          'Endpoint Detection & Response (EDR/XDR)',
          'Cloud security posture management',
          'Network, application, and API security',
          'Data encryption, backup, and recovery',
          'Vulnerability and patch management',
          'Incident response planning and execution',
        ],
      },
      {
        title: 'Governance Capabilities',
        items: [
          'Risk management and reporting',
          'Security policies and standards',
          'Compliance and audit readiness',
          'Third-party risk management',
          'Data governance (classification, retention, access)',
          'AI governance (approved use cases, controls, oversight)',
        ],
      },
    ],
    benefits: [
      'Designing security into platforms from day one',
      'Embedding governance into workflows so compliance is continuous',
      'Replacing fragmented controls with integrated, measurable systems',
      'Turning risk visibility into faster, better decision-making',
      'Enabling innovation while maintaining trust, resilience, and accountability',
      'Reduced breach likelihood and impact',
    ],
    successMetrics: [
      'Mean Time to Detect (MTTD)',
      'Mean Time to Respond (MTTR)',
      'Patch compliance rate',
      'MFA and privileged access coverage',
      'Risk register coverage and closure',
      'Control evidence readiness',
      'Compliance status by framework',
    ],
    process: {
      steps: [
        {
          title: 'Assess & Baseline',
          description: 'Evaluate current security posture, governance maturity, and risk exposure to establish a clear baseline.',
        },
        {
          title: 'Design & Roadmap',
          description: 'Define the target security architecture and governance model aligned to business priorities and risk appetite.',
        },
        {
          title: 'Implement & Operate',
          description: 'Deploy controls, integrate platforms, and begin continuous security and governance operations.',
        },
        {
          title: 'Monitor & Improve',
          description: 'Provide ongoing monitoring, executive reporting, and continuous improvement as threats, technology, and regulations evolve.',
        },
      ],
    },
    deliverables: [
      'Clear view of current security and governance posture',
      'Defined security and governance roadmap aligned to business priorities',
      'Continuous protection across cloud, platforms, users, and data',
      'Governance frameworks embedded into daily operations',
      'Ongoing risk visibility with executive-ready reporting',
      'Measurable security and compliance metrics tied to outcomes',
      'Reduced operational complexity and tool sprawl',
      'Improved audit readiness and regulatory confidence',
    ],
    whyChooseUs: [
      'Security and governance aligned to business outcomes',
      'Continuous services, not one-off projects',
      'Executive-ready visibility and reporting',
      'Scalable delivery that grows with your organization',
      'Integrated approach across software, platforms, cloud, and data',
      'Alignment with ISO 27001, NIST, SOC 2, and emerging AI standards',
      'Experience across financial services, healthcare, and regulated industries',
    ],
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    shortDescription: 'Always-on cybersecurity protection that evolves with your business, enabling secure operations and confident innovation.',
    detailedDescription: 'Cybersecurity is no longer just a technical function - it\'s a business necessity. As organizations rely more on cloud platforms, digital identities, and data-driven systems, cyber risk now directly impacts trust, continuity, and growth. Modern cybersecurity focuses on resilience and rapid response, enabling organizations to operate securely while innovating with confidence.',
    icon: '/images/icons/cybersecurity.png',
    whatItIs: 'Cybersecurity is no longer just a technical function - it\'s a business necessity. Modern cybersecurity protects the full digital ecosystem, including digital identities and access points, cloud platforms, applications, and APIs, endpoints, networks, and remote work environments, sensitive and regulated data, third-party vendors and supply chains, and digital brands and online presence. Security today must be continuous, adaptive, and embedded into business operations.',
    stats: [
      {
        value: '$4.4M',
        description: 'Average global cost of a data breach',
      },
      {
        value: '~270 days',
        description: 'Average time to identify and contain a breach',
      },
      {
        value: '50%+',
        description: 'Breaches involve stolen or compromised credentials',
      },
      {
        value: '$245B+',
        description: 'Global cybersecurity market, growing at ~13% annually',
      },
    ],
    asAService: {
      title: 'Cybersecurity as a Service (CaaS)',
      description: 'Our cybersecurity as a service model delivers always-on protection that evolves with your business without the cost and complexity of building everything internally.',
    },
    capabilities: [
      {
        title: 'Identity & Access Security',
        items: [
          'Multi-factor authentication (MFA)',
          'Role-based and least-privilege access',
          'Privileged access management',
          'Identity threat detection and response',
        ],
      },
      {
        title: 'Cloud & Platform Security',
        items: [
          'Cloud security posture management',
          'Secure configurations and access controls',
          'API and integration security',
          'Data encryption and visibility',
        ],
      },
      {
        title: 'Endpoint & Network Security',
        items: [
          'Endpoint detection and response (EDR/XDR)',
          'Secure hybrid and remote work environments',
          'Network segmentation and monitoring',
        ],
      },
      {
        title: 'Security Monitoring & Incident Response',
        items: [
          'Continuous threat detection',
          'Incident investigation and containment',
          'Response playbooks and recovery support',
        ],
      },
      {
        title: 'Data Protection & Privacy',
        items: [
          'Data classification and access controls',
          'Encryption and monitoring',
          'Support for regulatory and privacy requirements',
        ],
      },
      {
        title: 'Cybersquatting & Digital Brand Protection',
        items: [
          'Continuous domain and brand monitoring',
          'Detection of impersonation and typo-squatted domains',
          'Email authentication (DMARC, SPF, DKIM)',
          'Threat intelligence and takedown support',
        ],
      },
    ],
    benefits: [
      'Secure digital transformation and cloud adoption',
      'Trust-driven customer and digital experiences',
      'Resilient operations that withstand disruption',
      'Faster innovation with controlled risk',
      'Reduced disruption during transformation initiatives',
      'Lower long-term security and recovery costs',
    ],
    shapingNow: [
      'Identity-first and Zero Trust security models',
      'Ransomware preparedness and recovery',
      'AI-driven detection with governance controls',
      'Third-party and supply-chain risk expansion',
      'Security tool consolidation and automation',
    ],
    successMetrics: [
      'Mean Time to Detect (MTTD)',
      'Mean Time to Respond (MTTR)',
      'MFA and privileged access coverage',
      'Patch compliance rates',
      'Endpoint and cloud visibility coverage',
      'Phishing resilience metrics',
      'Brand abuse detection and takedown speed',
    ],
    process: {
      steps: [
        {
          title: 'Security Assessment',
          description: 'Comprehensive evaluation of your current security posture, vulnerabilities, and risk exposure across identity, cloud, data, and endpoints.',
        },
        {
          title: 'Security Strategy & Roadmap',
          description: 'Create a tailored, business-aligned cybersecurity roadmap with clear priorities and measurable outcomes.',
        },
        {
          title: 'Implementation & Deployment',
          description: 'Deploy security controls, monitoring systems, and protection across your infrastructure with minimal disruption.',
        },
        {
          title: 'Continuous Monitoring & Response',
          description: 'Always-on threat detection, incident response, and continuous improvement as threats and technology evolve.',
        },
      ],
    },
    deliverables: [
      'Clear visibility into cyber risk across identity, cloud, data, and endpoints',
      'Tailored, business-aligned cybersecurity roadmap',
      'Always-on cybersecurity protection that scales with growth',
      'Faster detection, response, and recovery from incidents',
      'Stronger protection against brand impersonation and fraud',
      'Executive-ready metrics and reporting',
      'Future-ready security foundation built for innovation',
    ],
    whyChooseUs: [
      'Business-first cybersecurity aligned to revenue and risk',
      'Cybersecurity delivered as a scalable, always-on service',
      'End-to-end capability: strategy, implementation, and operations',
      'Strong focus on identity, cloud, and digital brand protection',
      'Proactive defense against modern threats, including cybersquatting',
      'Metrics-driven security with executive-ready reporting',
      'Security designed to support transformation and innovation',
      'Reduced complexity through integrated platforms',
      'Long-term partnership approach, not one-off engagements',
    ],
  },
  {
    id: 'strategy',
    title: 'Strategy',
    shortDescription: 'A disciplined decision system that guides action, closely connected to execution, operations, and technology.',
    detailedDescription: 'Modern strategy is not a document. It is a decision system that guides action. A disciplined way to decide where to play, how to win, and what to prioritize. A continuous process, not a one-time planning exercise, closely connected to execution, operations, and technology, and designed to evolve with markets, customers, and digital change.',
    icon: '/images/icons/design.svg',
    whatItIs: 'Strategy is a disciplined way to decide where to play, how to win, and what to prioritize. A continuous process, not a one-time planning exercise, closely connected to execution, operations, and technology, and designed to evolve with markets, customers, and digital change. Modern strategy is not a document. It is a decision system that guides action.',
    whyMattersNow: [
      'Over 75% of organizations globally use AI, yet many fail to realize value due to weak strategic alignment',
      'Global IT spending exceeds $5 trillion annually, increasing the cost of poor prioritization',
      'Organizations that tightly align strategy with execution are 2-3x more likely to outperform peers',
      'Most failed transformations are caused by unclear priorities and poor governance, not lack of tools',
    ],
    asAService: {
      title: 'Strategy as a Service (STaaS)',
      description: 'Dovetop Digital delivers Strategy as a Service to provide ongoing strategic leadership, not one-off recommendations.',
      features: [
        'Continuous strategy planning and refinement',
        'Ongoing market, competitive, and industry analysis',
        'Executive advisory and decision support',
        'Initiative prioritization and portfolio management',
        'Strategy-to-execution alignment and performance tracking',
      ],
    },
    capabilities: [
      {
        title: 'Business & Growth Strategy',
        items: [
          'Identify growth opportunities, expansion paths, and competitive advantage',
        ],
      },
      {
        title: 'Market & Competitive Strategy',
        items: [
          'Analyze markets, competitors, trends, and disruption risks',
        ],
      },
      {
        title: 'Customer & Value Proposition Strategy',
        items: [
          'Clarify who you serve, how you differentiate, and why you win',
        ],
      },
      {
        title: 'Operating Model Strategy',
        items: [
          'Align people, processes, governance, and technology with strategy',
        ],
      },
      {
        title: 'Digital, Data & AI Strategy',
        items: [
          'Prioritize high-impact use cases, guide investment decisions, and define governance',
        ],
      },
      {
        title: 'Transformation & Change Strategy',
        items: [
          'Structure and manage complex business and digital transformations',
        ],
      },
      {
        title: 'Portfolio & Investment Strategy',
        items: [
          'Decide what to fund, scale, pause, or stop to maximize impact',
        ],
      },
    ],
    benefits: [
      'Reinvent business models for digital-first markets',
      'Redesign operations for speed, efficiency, and scalability',
      'Unlock value from data, automation, and AI',
      'Improve customer experiences across channels',
      'Shift from reactive decision-making to proactive leadership',
    ],
    successMetrics: [
      'Revenue growth and profitability improvement',
      'Return on strategic investments (ROI)',
      'OKR and KPI achievement rates',
      'On-time delivery of strategic initiatives',
      'Cost optimization and productivity gains',
      'Digital and AI adoption impact',
      'Faster decision and execution cycles',
    ],
    process: {
      steps: [
        {
          title: 'Diagnose',
          description: 'Assess current performance, challenges, data, and capabilities to understand the starting point.',
        },
        {
          title: 'Design',
          description: 'Define strategic options, priorities, and future-state vision aligned with business goals.',
        },
        {
          title: 'Decide',
          description: 'Support leadership in making clear, trade-off-based decisions with confidence.',
        },
        {
          title: 'Deliver',
          description: 'Translate strategy into roadmaps, KPIs, and execution plans that drive action.',
        },
        {
          title: 'Optimize',
          description: 'Continuously review outcomes and refine strategy based on performance and market changes.',
        },
      ],
    },
    deliverables: [
      'Strategic vision and direction framework',
      'Market and competitive insights',
      'Strategic priorities and initiative portfolio',
      '12-18 month execution roadmap',
      'KPI and OKR measurement framework',
      'Operating model recommendations',
      'Digital, data, and AI strategy roadmap',
      'Governance and decision-making structure',
      'Ongoing strategy advisory and reviews (for STaaS engagements)',
    ],
    whyChooseUs: [
      'Strategy directly connected to execution',
      'Strong alignment between business, technology, and operations',
      'Data-driven and outcome-focused approach',
      'Strategy delivered as a continuous service (Strategy as a Service)',
      'Business and growth strategy',
      'Market and competitive strategy',
      'Customer and value proposition strategy',
      'Operating model and transformation strategy',
      'Digital, data, and AI strategy',
      'Portfolio prioritization and investment strategy',
      'Clear metrics, KPIs, and measurable outcomes',
      'Tangible strategy deliverables and execution roadmaps',
      'Executive-level advisory and decision support',
      'Experience across complex and regulated industries',
      'Strong governance and risk-aware decision-making',
      'Built for speed, clarity, and scalability',
    ],
  },
  {
    id: 'data-ai',
    title: 'Data & Artificial Intelligence',
    shortDescription: 'Production-ready Data & AI solutions that turn data into predictions, recommendations, and autonomous actions at scale.',
    detailedDescription: 'Data and Artificial Intelligence (AI) are no longer experimental tools - they are the decision engine of modern organizations. Today\'s leaders are using data and AI to predict outcomes, automate complex processes, personalize experiences, manage risk, and unlock new revenue streams at scale. At its core: Data is the foundation - accurate, governed, and accessible information. Artificial Intelligence is the accelerator - turning data into predictions, recommendations, and autonomous actions. Together, they enable faster decisions, smarter operations, and continuous learning across the enterprise.',
    icon: '/images/icons/data.svg',
    whatItIs: 'Data and Artificial Intelligence (AI) are no longer experimental tools - they are the decision engine of modern organizations. Today\'s leaders are using data and AI to predict outcomes, automate complex processes, personalize experiences, manage risk, and unlock new revenue streams at scale. At its core: Data is the foundation - accurate, governed, and accessible information. Artificial Intelligence is the accelerator - turning data into predictions, recommendations, and autonomous actions. Together, they enable faster decisions, smarter operations, and continuous learning across the enterprise. Organizations that operationalize Data & AI outperform peers in efficiency, resilience, and growth.',
    whyMattersNow: [
      'Global data volumes exceeding 175 zettabytes, increasing complexity and opportunity',
      'AI influencing or automating up to 50% of enterprise decisions',
      'Organizations adopting AI achieving 20-40% operational efficiency gains',
      'Data-driven companies 19x more likely to be profitable',
      'Average data breach cost exceeding $4M, making governance critical',
      'Growing regulatory pressure on AI transparency, security, and accountability',
    ],
    asAService: {
      title: 'Data & Artificial Intelligence as a Service',
      features: [
        'End-to-end ownership of the Data & AI lifecycle',
        'Strategy, build, deployment, and continuous optimization',
        'Production-ready AI, not experimental pilots',
        'Embedded governance, security, and compliance',
        'Scalable solutions designed for complex and regulated environments',
      ],
    },
    capabilities: [
      {
        title: 'Data & AI Strategy',
        items: [
          'Enterprise Data & AI roadmaps aligned to business goals',
          'Use-case prioritization based on ROI and feasibility',
          'Data ownership, stewardship, and operating models',
          'KPIs tied to measurable business outcomes',
        ],
      },
      {
        title: 'Modern Data Platforms',
        items: [
          'Cloud and hybrid data architectures',
          'Secure data ingestion, integration, and transformation',
          'Data quality management, metadata, and lineage',
          'Privacy-by-design and access controls',
        ],
      },
      {
        title: 'Analytics & Decision Intelligence',
        items: [
          'Executive and operational dashboards',
          'Predictive and prescriptive analytics',
          'Forecasting, scenario modeling, and anomaly detection',
          'Insights embedded directly into business workflows',
        ],
      },
      {
        title: 'Artificial Intelligence Solutions',
        items: [
          'Predictive models for risk, demand, and performance',
          'Generative AI copilots and knowledge assistants',
          'Retrieval-Augmented Generation (RAG) solutions',
          'Intelligent automation and AI agents for complex workflows',
        ],
      },
      {
        title: 'Governance, Security & Responsible AI',
        items: [
          'AI model monitoring and performance tracking',
          'Bias detection and explainability',
          'Audit trails and regulatory readiness',
          'Responsible AI frameworks aligned with global standards',
        ],
      },
      {
        title: 'Enablement & Adoption',
        items: [
          'Data and AI literacy for business teams',
          'Adoption frameworks and change management',
          'Documentation, playbooks, and operating procedures',
          'Capability transfer for long-term sustainability',
        ],
      },
    ],
    benefits: [
      'Shift from reactive to predictive decision-making',
      'Automate high-volume, high-impact processes',
      'Break down data silos safely and securely',
      'Personalize customer and employee experiences at scale',
      'Turn governance and compliance into enablers of innovation',
      'Build intelligent systems that learn and improve over time',
    ],
    useCases: [
      {
        title: 'Customer personalization and churn prediction',
        impact: '5-10% improvement in retention',
      },
      {
        title: 'Fraud detection and risk analytics',
        impact: '15-30% reduction in losses',
      },
      {
        title: 'Demand forecasting and operational optimization',
        impact: '20%+ improvement in accuracy',
      },
      {
        title: 'Process automation and intelligent workflows',
        impact: '30-60% reduction in cycle time',
      },
      {
        title: 'Financial forecasting and anomaly detection',
        impact: 'Improved visibility and control',
      },
    ],
    successMetrics: [
      'Time-to-insight reduction',
      'Decision automation rate',
      'Data quality and reliability scores',
      'AI model accuracy, latency, and drift',
      'Cost savings and revenue uplift',
      'Security posture and audit readiness',
    ],
    process: {
      steps: [
        {
          title: 'Data & AI Strategy',
          description: 'Enterprise Data & AI roadmaps aligned to business goals with use-case prioritization based on ROI and feasibility.',
        },
        {
          title: 'Platform & Architecture Design',
          description: 'Build secure, scalable data platforms with cloud and hybrid architectures, data quality management, and privacy-by-design.',
        },
        {
          title: 'AI Development & Deployment',
          description: 'Develop and deploy production-ready AI models, generative AI solutions, and intelligent automation.',
        },
        {
          title: 'Governance & Continuous Optimization',
          description: 'Implement AI governance, monitoring, and continuous optimization to ensure sustained value and compliance.',
        },
      ],
    },
    deliverables: [
      'Data & AI strategy and roadmap',
      'Secure, scalable data platform',
      'Deployed AI models and applications',
      'Governance and monitoring frameworks',
      'Executive dashboards and insights',
      'Enablement and adoption resources',
    ],
    whyChooseUs: [
      'Business-first approach focused on outcomes, not tools or trends',
      'Integrated expertise across strategy, data, security, governance, and AI',
      'Proven experience in complex and regulated environments',
      'Emphasis on production-ready Data & AI, not endless pilots',
      'Governance, security, and responsible AI embedded from day one',
      'Clear accountability across the full Data & AI lifecycle',
      'Measurable impact through defined KPIs and value tracking',
      'Collaborative delivery model that builds internal capability',
      'Vendor-agnostic approach guided by fit, risk, and scalability',
      'Long-term partnership mindset focused on trust, resilience, and growth',
    ],
  },
  {
    id: 'tech-transformation',
    title: 'Technology Transformation',
    shortDescription: 'Business-led evolution from fragmented, legacy-driven environments to connected, intelligent, and secure digital platforms.',
    detailedDescription: 'Technology transformation is the shift from using technology as support to using it as a core business driver. Modern organizations don\'t just adopt new systems - they redesign how work gets done, how decisions are made, and how value is delivered. Through technology transformation, businesses build flexible platforms, embed intelligence into operations, reduce friction, and continuously adapt to change without disrupting the core.',
    icon: '/images/icons/tech-transformation.png',
    whatItIs: 'Technology transformation is the shift from using technology as support to using it as a core business driver. At Dovetop Digital, we view technology transformation as a business-led evolution. We help organizations move from fragmented, manual, and legacy-driven environments to connected, intelligent, and secure digital platforms that support growth, resilience, and innovation over the long term.',
    todaySection: {
      title: 'What Technology Transformation means today',
      description: 'Modern technology transformation is about continuous improvement and business-led redesign.',
      focus: [
        'Business-led redesign of technology, processes, and operating models',
        'Continuous improvement, not one-time modernization',
        'Technology aligned directly to measurable business outcomes',
        'Platforms built for scalability, security, and adaptability',
      ],
      conclusion: 'Technology transformation is now a strategic imperative for competitive advantage.',
    },
    asAService: {
      title: 'Technology Transformation as a Service',
      description: 'Dovetop Digital delivers Technology Transformation as an end-to-end, ongoing service supporting organizations from strategy through execution and continuous optimization.',
      features: [
        'Technology and digital strategy development',
        'Architecture and platform modernization',
        'Cloud, data, and AI enablement',
        'Intelligent automation and workflow optimization',
        'Security, governance, and compliance integration',
        'Change management and adoption support',
      ],
    },
    stats: [
      {
        value: '20-40%',
        description: 'Reduction in operational costs through automation and consolidation',
      },
      {
        value: '2-5x',
        description: 'Faster deployment and release cycles',
      },
      {
        value: '30-60%',
        description: 'Improvement in time-to-market',
      },
      {
        value: '50%',
        description: 'Reduction in incident recovery time',
      },
      {
        value: '6-18 mo',
        description: 'Average ROI timeline',
      },
      {
        value: '25-45%',
        description: 'Productivity gains across technology and operations teams',
      },
    ],
    benefits: [
      'Shift from project-based IT to product-led delivery models',
      'Replace siloed systems with integrated digital platforms',
      'Automate manual processes to reduce friction and cost',
      'Turn data into real-time, actionable insights',
      'Enable AI responsibly across business operations',
      'Embed security, resilience, and scalability by design',
    ],
    shapingNow: [
      'AI embedded directly into core business workflows',
      'Platform engineering and reusable internal platforms',
      'Cloud cost optimization and FinOps practices',
      'Zero-trust security and security-by-design',
      'Responsible AI governance and compliance',
      'Automation of operational and decision-making processes',
    ],
    services: [
      {
        title: 'Legacy systems slowing innovation and execution',
        description: 'Modernize legacy environments to accelerate innovation and reduce technical debt.',
      },
      {
        title: 'Disconnected platforms and data silos',
        description: 'Integrate systems and break down data silos for unified operations.',
      },
      {
        title: 'Rising operational costs and growing technical debt',
        description: 'Optimize costs and reduce technical debt through platform consolidation.',
      },
      {
        title: 'Long delivery cycles and slow time-to-market',
        description: 'Accelerate delivery with modern DevOps and automation practices.',
      },
      {
        title: 'Difficulty adopting AI and automation at scale',
        description: 'Enable responsible AI adoption with governance and scalable platforms.',
      },
    ],
    process: {
      steps: [
        {
          title: 'Discover',
          description: 'Assess current-state technology, capabilities, risks, and opportunities to establish baseline.',
        },
        {
          title: 'Design',
          description: 'Define target architecture, operating model, and transformation roadmap aligned to business goals.',
        },
        {
          title: 'Build',
          description: 'Implement modern platforms, integrations, and automation with minimal disruption.',
        },
        {
          title: 'Scale',
          description: 'Optimize performance, security, reliability, and cost as systems mature.',
        },
        {
          title: 'Evolve',
          description: 'Continuously improve through data, analytics, and feedback loops.',
        },
      ],
    },
    deliverables: [
      'Clear, actionable technology transformation roadmap',
      'Modern, scalable, and secure digital platforms',
      'Integrated data and analytics foundations',
      'Faster and more reliable delivery pipelines',
      'Reduced technical debt and operational complexity',
      'Improved governance, visibility, and control',
      'Future-ready foundation for AI and innovation',
    ],
    whyChooseUs: [
      'Business-first, not tool-first',
      'Strategy and execution combined',
      'Built for complex and regulated environments',
      'Outcome-driven and measurable delivery',
      'Scalable platforms designed to evolve',
      'Responsible data and AI adoption',
      'Change management that drives adoption',
      'Long-term transformation partnership',
    ],
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    shortDescription: 'Integrated, data-driven sustainability capabilities embedded across strategy, operations, technology, and governance.',
    detailedDescription: 'Sustainability is reshaping how modern organizations create value, manage risk, and remain competitive. As regulatory expectations rise and stakeholders demand transparency, sustainability has become a core business discipline, one that requires the same level of rigor, data integrity, and execution as financial and operational performance. At Dovetop Digital, we help organizations move beyond fragmented sustainability efforts to build integrated, data-driven sustainability capabilities embedded across strategy, operations, technology, and governance.',
    icon: '/images/icons/sustainability.png',
    whatItIs: 'Sustainability is reshaping how modern organizations create value, manage risk, and remain competitive. As regulatory expectations rise and stakeholders demand transparency, sustainability has become a core business discipline, one that requires the same level of rigor, data integrity, and execution as financial and operational performance. Today, leading organizations are embedding sustainability into decision-making, operations, and technology to drive efficiency, resilience, and long-term growth. When treated as an integrated, data-driven capability, sustainability moves beyond compliance to become a catalyst for transformation and sustained enterprise value.',
    todaySection: {
      title: 'Sustainability Today',
      description: 'Modern sustainability is operational, measurable, and continuous. Organizations today face increasing pressure from regulators, investors, customers, and partners to demonstrate real progress - not intent. Sustainability now requires the same rigor as financial and operational performance.',
      focus: [
        'Managing climate and environmental risk alongside business risk',
        'Reducing emissions while improving operational efficiency',
        'Building resilient and transparent supply chains',
        'Embedding sustainability data into enterprise decision-making',
        'Meeting evolving regulatory and disclosure requirements',
      ],
      conclusion: 'Sustainability has become an enterprise transformation priority.',
    },
    asAService: {
      title: 'Sustainability As a Service',
      description: 'Dovetop Digital delivers Sustainability as a Service as a managed, end-to-end capability, not a one-off engagement. Our approach combines strategy, execution, data, and governance to ensure sustainability programs are scalable, auditable, and aligned with business objectives.',
      enables: [
        'Accelerate sustainability maturity without heavy internal overhead',
        'Maintain continuous compliance readiness',
        'Translate sustainability data into actionable insights',
        'Deliver measurable outcomes year over year',
      ],
    },
    benefits: [
      'Reduce costs through efficiency and smarter resource management',
      'Strengthen resilience against regulatory, climate, and supply-chain risks',
      'Improve transparency and executive decision-making',
      'Build trust with investors, customers, and partners',
      'Turn sustainability into a driver of innovation and competitive advantage',
    ],
    services: [
      {
        title: 'Sustainability strategy & transformation roadmap',
        description: 'We work with leadership teams to define sustainability priorities aligned with business goals, regulatory expectations, and stakeholder requirements. This includes materiality assessments, target setting, and practical roadmaps with clear milestones, ownership, and KPIs.',
      },
      {
        title: 'Sustainability data, measurement & ESG foundations',
        description: 'We design and implement enterprise-grade sustainability and ESG data frameworks. This includes Scope 1, Scope 2, and Scope 3 emissions accounting, data governance, quality controls, and audit-ready documentation to support confident decision-making.',
      },
      {
        title: 'Decarbonization & operational sustainability',
        description: 'We support practical initiatives that reduce emissions while improving efficiency and cost performance. This includes energy optimization, renewable energy strategies, operational process improvements, and supplier engagement to address value-chain emissions.',
      },
      {
        title: 'Sustainability reporting & regulatory readiness',
        description: 'We prepare organizations for evolving disclosure requirements by aligning sustainability reporting to global standards, including CSRD and ISSB-aligned frameworks under the IFRS Foundation. Our focus is consistency, accuracy, and long-term audit readiness.',
      },
      {
        title: 'Governance, operating model & change enablement',
        description: 'We help organizations embed sustainability into daily operations through governance design, operating models, training, and cross-functional alignment across finance, operations, procurement, IT, risk, and compliance.',
      },
    ],
    stats: [
      {
        value: '53B+',
        description: 'Global greenhouse gas emissions exceed 53 billion tonnes CO₂e annually',
      },
      {
        value: '38B',
        description: 'Energy-related CO₂ emissions are at a record high of nearly 38 billion tonnes',
      },
      {
        value: '90%+',
        description: 'Over 90% of new global power capacity added in 2024 came from renewable sources',
      },
      {
        value: '70-90%',
        description: 'For most organizations, 70-90% of emissions reside in Scope 3 (the value chain)',
      },
      {
        value: '10-30%',
        description: 'Organizations implementing structured sustainability programs achieve 10-30% reductions in energy and operational costs',
      },
      {
        value: '€150M+',
        description: 'Sustainability reporting requirements are expanding to organizations with €150M+ turnover',
      },
    ],
    shapingNow: [
      'Sustainability reporting moving from annual exercises to continuous, controlled processes',
      'Global convergence around standardized sustainability disclosures',
      'Greater scrutiny of Scope 3 emissions and supplier accountability',
      'Integration of sustainability data into finance, risk, and enterprise platforms',
      'Increased focus on sustainable technology, efficient infrastructure, and responsible AI',
      'Stronger links between sustainability performance, access to capital, and enterprise value',
    ],
    process: {
      steps: [
        {
          title: 'Sustainability Assessment',
          description: 'Comprehensive evaluation of current sustainability maturity, regulatory requirements, and stakeholder expectations.',
        },
        {
          title: 'Strategy & Roadmap Development',
          description: 'Define sustainability priorities, targets, and practical roadmaps with clear milestones and KPIs.',
        },
        {
          title: 'Data & Measurement Implementation',
          description: 'Build enterprise-grade sustainability data frameworks with audit-ready documentation.',
        },
        {
          title: 'Continuous Optimization & Reporting',
          description: 'Ongoing monitoring, reporting, and optimization to ensure sustained progress and compliance.',
        },
      ],
    },
    deliverables: [
      'Clear sustainability strategy and transformation roadmap',
      'Defined KPIs and performance measurement frameworks',
      'Centralized, trusted sustainability and ESG data',
      'Reporting and regulatory readiness',
      'Actionable decarbonization and efficiency initiatives',
      'Continuous advisory and optimization support',
    ],
    whyChooseUs: [
      'Built for execution, scale, and measurable impact',
      'Sustainability as transformation, not reporting',
      'Enterprise-first, data-driven delivery',
      'Integrated across the digital ecosystem',
      'Execution-focused consulting',
      'Regulatory and future-ready by design',
      'Designed for scale and long-term value',
    ],
  },
  {
    id: 'learning',
    title: 'Learning',
    shortDescription: 'Scalable, data-driven learning ecosystems that continuously equip people with the skills they need to perform, adapt, and grow.',
    detailedDescription: 'Learning is no longer about moving classrooms online. It is about building a scalable, data-driven learning ecosystem that continuously equips people with the skills they need to perform, adapt, and grow today and tomorrow. As technology evolves and roles continuously change, organizations face a simple reality: skills now age faster than structures. An estimated 39% of core job skills are expected to change by 2030, making continuous, skills-based learning a business necessity - not an HR initiative.',
    icon: '/images/icons/learning.png',
    whatItIs: 'Learning is no longer about moving classrooms online. It is about building a scalable, data-driven learning ecosystem that continuously equips people with the skills they need to perform, adapt, and grow today and tomorrow. Modern Learning connects strategy to execution by ensuring people have the capabilities required to deliver outcomes, today and tomorrow. At Dovetop Digital, Learning is not an isolated training function. It is a strategic engine that enables organizations to adapt faster, adopt technology with confidence, and build the skills required to compete in an AI-driven economy.',
    whyMattersNow: [
      'Accelerated skill obsolescence in digital, data, AI, and leadership roles',
      'High cost of employee replacement, estimated at 30-200% of annual salary',
      'Increasing pressure to upskill existing teams rather than continuously recruit',
      'Strong correlation between learning culture and performance, retention, and internal mobility',
      'Over 80% of professionals actively seeking AI and future-ready skills',
    ],
    asAService: {
      title: 'Learning As a Service (LaaS)',
      description: 'Dovetop Digital delivers Learning as a Service, a fully managed, continuously evolving learning capability aligned to business strategy. Rather than one-off training programs, LaaS provides an end-to-end learning operating model that scales with organizational needs. Learning becomes embedded into how the business runs, evolves, and performs.',
      enables: [
        'Close priority skill gaps faster',
        'Standardize capability development across teams and regions',
        'Support digital and AI transformation initiatives',
        'Measure learning impact using business-relevant metrics',
      ],
    },
    services: [
      {
        title: 'Learning strategy and capability design',
        description: 'Skills gap analysis and capability assessments, role-based competency and skills frameworks, and learning roadmaps aligned to business priorities.',
      },
      {
        title: 'Learning experience and journey design',
        description: 'Structured learning pathways mapped to real job outcomes, microlearning, blended learning, and cohort-based programs, and applied, skills-focused learning models.',
      },
      {
        title: 'Content development and enablement',
        description: 'Custom learning content and onboarding academies, playbooks, SOPs, and performance support assets, and AI-enabled content development where appropriate.',
      },
      {
        title: 'Learning platforms and operations',
        description: 'LMS and LXP design, configuration, and optimization, embedded learning within daily workflows, and governance and learning operations support.',
      },
      {
        title: 'Measurement and learning analytics',
        description: 'Skills progression and proficiency tracking, adoption, engagement, and completion hygiene metrics, and business impact and performance reporting.',
      },
    ],
    benefits: [
      'Shift from role-based development to skills-based growth',
      'Accelerate adoption of new technologies and operating models',
      'Build internal talent pipelines and reduce hiring dependency',
      'Create cultures of continuous improvement and adaptability',
      'Faster time-to-productivity for new hires and reskilled teams',
      'Reduced skill gaps in critical and emerging roles',
    ],
    successMetrics: [
      'Skill acquisition and proficiency progression',
      'Learning adoption and engagement rates',
      'Time-to-competency by role',
      'Retention and internal mobility indicators',
      'Performance improvement linked to learning initiatives',
      'Learning ROI aligned with organizational KPIs',
    ],
    process: {
      steps: [
        {
          title: 'Learning Needs Analysis',
          description: 'Assess current learning requirements, skills gaps, and identify improvement opportunities aligned with business priorities.',
        },
        {
          title: 'Solution Design',
          description: 'Design customized learning solutions, pathways, and educational technology platforms mapped to real job outcomes.',
        },
        {
          title: 'Development & Implementation',
          description: 'Build and deploy learning management systems, training programs, and custom content with governance support.',
        },
        {
          title: 'Evaluation & Optimization',
          description: 'Monitor learning effectiveness, track business impact, and continuously improve programs based on performance data.',
        },
      ],
    },
    deliverables: [
      'Clearly defined Learning strategy and roadmap',
      'Role-based skills frameworks and learning pathways',
      'Custom learning content and enablement assets',
      'Optimized learning platforms and governance support',
      'Ongoing performance insights and impact reporting',
    ],
    whyChooseUs: [
      'Learning directly connected to business strategy and execution',
      'Strong alignment between people, technology, and operating models',
      'Skills-first, outcome-driven approach not course-led training',
      'Deep experience supporting digital, data, and AI transformation programs',
      'Learning designed to accelerate adoption of new platforms and processes',
      'Data-driven measurement focused on performance, productivity, and impact',
      'Scalable Learning as a Service model built for speed and consistency',
      'Practical, real-world learning experiences embedded into daily workflows',
      'Governance, structure, and clarity for regulated and complex environments',
      'Built to evolve continuously as business priorities and skill needs change',
    ],
  },
]
