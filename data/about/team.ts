export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  linkedIn?: string
  twitter?: string
}

export const leadershipTeam: TeamMember[] = [
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Sarah founded Dovetop Digital with over 15 years of experience in digital transformation. She leads our strategic vision and ensures we deliver exceptional value to every client. Sarah holds an MBA from Stanford and is passionate about leveraging technology for positive impact.',
    image: '/images/team/sarah-johnson.svg',
  },
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Michael oversees our technical strategy and innovation initiatives. With a background in cloud architecture and AI, he ensures we stay at the forefront of technological advancement. He holds a PhD in Computer Science from MIT.',
    image: '/images/team/michael-chen.svg',
  },
  {
    id: 'priya-patel',
    name: 'Priya Patel',
    role: 'Head of Design',
    bio: 'Priya leads our design team with a focus on user-centered solutions. She has 12 years of experience in UX/UI design and has worked with Fortune 500 companies to create intuitive digital experiences.',
    image: '/images/team/priya-patel.svg',
  },
  {
    id: 'david-wilson',
    name: 'David Wilson',
    role: 'VP of Engineering',
    bio: 'David manages our engineering teams and ensures delivery excellence. With expertise in scalable systems and DevOps practices, he helps clients build robust, maintainable solutions.',
    image: '/images/team/david-wilson.svg',
  },
  {
    id: 'olivia-mitchell',
    name: 'Olivia Mitchell',
    role: 'Head of Strategy',
    bio: 'Olivia works closely with clients to understand their business objectives and translate them into technical solutions. She has a background in management consulting and digital transformation.',
    image: '/images/team/olivia-mitchell.svg',
  },
  {
    id: 'alex-rodriguez',
    name: 'Alex Rodriguez',
    role: 'Head of Data & AI',
    bio: 'Alex leads our data science and AI initiatives, helping clients unlock insights from their data. With a PhD in Data Science, he specializes in machine learning and predictive analytics.',
    image: '/images/team/alex-rodriguez.svg',
  },
]
