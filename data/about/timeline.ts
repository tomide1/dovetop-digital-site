export interface TimelineEvent {
  year: string
  title: string
  description: string
  image?: string
}

export const companyTimeline: TimelineEvent[] = [
  {
    year: '2014',
    title: 'The Beginning',
    description:
      'Dovetop Digital was founded with a vision to transform how businesses approach digital solutions, starting with a small team of passionate developers and designers.',
  },
  {
    year: '2016',
    title: 'First Major Milestone',
    description:
      'Reached 25 successful projects and expanded our team to include specialized cloud architects and data scientists.',
  },
  {
    year: '2018',
    title: 'Industry Recognition',
    description:
      'Received our first industry award for innovation in digital transformation and established partnerships with major cloud providers.',
  },
  {
    year: '2020',
    title: 'Remote-First Transformation',
    description:
      'Successfully transitioned to a remote-first company, allowing us to attract top talent globally and better serve clients worldwide.',
  },
  {
    year: '2022',
    title: 'Expanding Horizons',
    description:
      'Launched our AI and machine learning practice, helping clients leverage cutting-edge technologies for competitive advantage.',
  },
  {
    year: '2024',
    title: 'Today & Beyond',
    description:
      'Continuing to innovate and grow, with a focus on sustainable technology solutions and ethical AI development.',
  },
]
