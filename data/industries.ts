export interface Industry {
  id: string
  name: string
  description: string
  heroImage: string
  cta: {
    title: string
    description: string
  }
}

export const industries: Industry[] = [
  {
    id: 'legal',
    name: 'Legal',
    description:
      'We provide tailored technology solutions for the legal sector, enhancing security, compliance, and efficiency. Our services help law firms and legal departments manage data securely, streamline workflows, and leverage technology for a competitive advantage.',
    heroImage: '/images/industries/legal-hero.jpg',
    cta: {
      title: 'Modernize Your Legal Practice',
      description:
        'Discover how our technology solutions can transform your legal operations, from data security to practice management.',
    },
  },
  {
    id: 'finance',
    name: 'Finance',
    description:
      'In the fast-paced world of finance, we deliver robust technology solutions that ensure data integrity, security, and regulatory compliance. Our expertise in cloud solutions and data analytics helps financial institutions innovate and thrive.',
    heroImage: '/images/industries/finance-hero.jpg',
    cta: {
      title: 'Innovate Your Financial Services',
      description:
        'Explore our specialized technology services for the finance industry to enhance security, efficiency, and customer trust.',
    },
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description:
      'We empower healthcare organizations with secure and compliant technology solutions. From protecting patient data to enabling telehealth services, we help providers improve patient care and operational efficiency.',
    heroImage: '/images/industries/healthcare-hero.jpg',
    cta: {
      title: 'Advance Healthcare with Technology',
      description:
        'Learn how our tailored solutions for healthcare can help you meet compliance standards and improve patient outcomes.',
    },
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    description:
      'We bring cutting-edge technology to the agriculture sector, helping businesses optimize operations, improve crop management, and leverage data for sustainable growth. Our solutions support the entire agricultural value chain.',
    heroImage: '/images/industries/agriculture-hero.jpg',
    cta: {
      title: 'Cultivate Growth with Smart Agriculture',
      description:
        'See how our technology solutions can help you increase yield, improve efficiency, and drive sustainability in agriculture.',
    },
  },
  {
    id: 'education',
    name: 'Education',
    description:
      'We support educational institutions in their digital transformation journey. Our solutions enhance learning experiences, improve administrative efficiency, and provide secure platforms for online education.',
    heroImage: '/images/industries/education-hero.jpg',
    cta: {
      title: 'Transform Learning with Digital Solutions',
      description:
        'Discover our technology solutions for education to create more engaging and effective learning environments.',
    },
  },
  {
    id: 'e-commerce',
    name: 'E-commerce',
    description:
      'We help e-commerce businesses scale and succeed with our expert technology solutions. From building robust online stores to analyzing customer data, we provide the tools you need to grow your online presence.',
    heroImage: '/images/industries/e-commerce-hero.jpg',
    cta: {
      title: 'Elevate Your E-commerce Business',
      description:
        'Find out how our e-commerce solutions can help you enhance user experience, secure transactions, and boost sales.',
    },
  },
  {
    id: 'government',
    name: 'Government',
    description:
      'We assist government agencies in modernizing their services and infrastructure. Our secure and reliable technology solutions improve efficiency, transparency, and citizen engagement.',
    heroImage: '/images/industries/government-hero.jpg',
    cta: {
      title: 'Modernize Public Services',
      description:
        'Explore our technology solutions for government to build more efficient, secure, and citizen-centric services.',
    },
  },
]
