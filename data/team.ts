export interface TeamMember {
  id: string
  name: string
  title: string
  image: string
  alt: string
  bio?: string
  socialLinks?: {
    linkedin?: string
    twitter?: string
  }
  // Insights-specific properties
  isAuthor?: boolean
  authorBio?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    title: 'Cloud Solutions Architect',
    image: '/images/team/sarah-johnson.svg',
    alt: 'Sarah Johnson headshot',
    bio: 'Sarah leads our cloud transformation initiatives with over 8 years of experience in enterprise cloud architecture. She specializes in designing scalable, secure cloud solutions that drive business growth.',
    isAuthor: true,
    authorBio:
      'Sarah specializes in cloud architecture and enterprise digital transformation.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sarah-johnson',
    },
  },
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    title: 'UX Research Lead',
    image: '/images/team/michael-chen.svg',
    alt: 'Michael Chen headshot',
    bio: 'Michael brings a data-driven approach to user experience design, combining qualitative research with quantitative analytics to create user-centered digital products.',
    isAuthor: true,
    authorBio:
      'Michael leads UX research and user-centered design initiatives.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/michael-chen',
    },
  },
  {
    id: 'alex-rodriguez',
    name: 'Alex Rodriguez',
    title: 'Data Science Director',
    image: '/images/team/alex-rodriguez.svg',
    alt: 'Alex Rodriguez headshot',
    bio: 'Alex oversees our machine learning and analytics practice, helping enterprises leverage AI and data science to solve complex business challenges.',
    isAuthor: true,
    authorBio:
      'Alex directs data science and machine learning initiatives for enterprise clients.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/alex-rodriguez',
    },
  },
  {
    id: 'priya-patel',
    name: 'Priya Patel',
    title: 'Security & Compliance Lead',
    image: '/images/team/priya-patel.svg',
    alt: 'Priya Patel headshot',
    bio: 'Priya ensures our solutions meet the highest security and compliance standards, with expertise in GDPR, SOC 2, and industry-specific regulations.',
    isAuthor: true,
    authorBio: 'Priya leads security, governance, and compliance initiatives.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/priya-patel',
    },
  },
  {
    id: 'thomas-rivera',
    name: 'Thomas Rivera',
    title: 'CEO & Founder',
    image: '/images/team/thomas-rivera.svg',
    alt: 'Thomas Rivera headshot',
    bio: 'Thomas founded Dovetop Digital with a vision to help enterprises navigate digital transformation securely and efficiently. He brings 15+ years of technology leadership experience.',
    isAuthor: true,
    authorBio:
      'Thomas leads strategic technology initiatives and sustainable development practices.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/thomas-rivera',
    },
  },
  {
    id: 'jasmine-lee',
    name: 'Jasmine Lee',
    title: 'Senior Frontend Developer',
    image: '/images/team/jasmine-lee.svg',
    alt: 'Jasmine Lee headshot',
    bio: 'Jasmine creates beautiful, accessible user interfaces using modern frontend technologies. She is passionate about performance optimization and inclusive design.',
    isAuthor: true,
    authorBio:
      'Jasmine specializes in AI ethics and responsible technology development.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/jasmine-lee',
    },
  },
  {
    id: 'olivia-mitchell',
    name: 'Olivia Mitchell',
    title: 'Product Strategy Manager',
    image: '/images/team/olivia-mitchell.svg',
    alt: 'Olivia Mitchell headshot',
    bio: 'Olivia bridges the gap between business requirements and technical implementation, ensuring our solutions deliver real value to clients.',
    isAuthor: true,
    authorBio:
      'Olivia leads user-centered design and accessibility initiatives.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/olivia-mitchell',
    },
  },
  {
    id: 'david-wilson',
    name: 'David Wilson',
    title: 'Cloud Architect',
    image: '/images/team/david-wilson.svg',
    alt: 'David Wilson headshot',
    bio: 'David designs and maintains robust CI/CD pipelines and infrastructure automation, ensuring reliable and scalable deployments for our clients.',
    isAuthor: true,
    authorBio:
      'David specializes in serverless architecture and cloud infrastructure optimization.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/david-wilson',
    },
  },
]

// Helper function to get authors
export const getAuthors = (): TeamMember[] =>
  teamMembers.filter((member) => member.isAuthor === true)

// Helper function to get author by name
export const getAuthorByName = (name: string): TeamMember | undefined =>
  teamMembers.find((member) => member.name === name && member.isAuthor === true)
