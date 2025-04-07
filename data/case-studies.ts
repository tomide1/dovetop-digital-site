export interface CaseStudy {
  id: string
  title: string
  serviceId: string
  description: string
  results: string[]
  imageUrl: string
  client: string
  industry: string
  duration: string
  technologies: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'case-study-1',
    title: 'E-commerce Platform Redesign',
    serviceId: 'web-development',
    description:
      'A complete overhaul of an e-commerce platform to improve user experience and increase conversion rates.',
    results: [
      'Increased conversion rate by 45%',
      'Reduced cart abandonment by 30%',
      'Improved page load speed by 60%',
    ],
    imageUrl:
      'https://placehold.co/600x400/blue/white?text=E-commerce+Redesign',
    client: 'Fashion Retail Co.',
    industry: 'E-commerce',
    duration: '6 months',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
  },
  {
    id: 'case-study-2',
    title: 'Digital Marketing Campaign',
    serviceId: 'digital-marketing',
    description:
      'A comprehensive digital marketing campaign to increase brand awareness and lead generation.',
    results: [
      'Increased website traffic by 200%',
      'Generated 150% more qualified leads',
      'Improved social media engagement by 80%',
    ],
    imageUrl:
      'https://placehold.co/600x400/purple/white?text=Marketing+Campaign',
    client: 'Tech Solutions Inc.',
    industry: 'Technology',
    duration: '12 months',
    technologies: [
      'SEO',
      'Content Marketing',
      'Social Media',
      'Email Marketing',
    ],
  },
  {
    id: 'case-study-3',
    title: 'Digital Transformation Strategy',
    serviceId: 'digital-strategy',
    description:
      'A comprehensive digital strategy to transform a traditional business into a digital-first organization.',
    results: [
      'Increased digital revenue by 120%',
      'Reduced operational costs by 35%',
      'Improved customer satisfaction scores by 40%',
    ],
    imageUrl: 'https://placehold.co/600x400/green/white?text=Digital+Strategy',
    client: 'Global Manufacturing Corp.',
    industry: 'Manufacturing',
    duration: '9 months',
    technologies: [
      'Business Analysis',
      'Digital Roadmapping',
      'Change Management',
    ],
  },
  {
    id: 'case-study-4',
    title: 'Mobile App UX Redesign',
    serviceId: 'ux-design',
    description:
      'A complete redesign of a mobile banking application focused on improving usability and customer satisfaction.',
    results: [
      'Improved user satisfaction by 85%',
      'Reduced support tickets by 60%',
      'Increased mobile transaction volume by 45%',
    ],
    imageUrl: 'https://placehold.co/600x400/orange/white?text=UX+Redesign',
    client: 'Financial Services Inc.',
    industry: 'Banking',
    duration: '4 months',
    technologies: [
      'User Research',
      'Prototyping',
      'Usability Testing',
      'Design Systems',
    ],
  },
  // Add more case studies as needed
]
