export interface QuickStat {
  label: string
  value: number
  suffix?: string
}

export const quickStats: QuickStat[] = [
  {
    label: 'Years of Excellence',
    value: 10,
    suffix: '+',
  },
  {
    label: 'Projects Delivered',
    value: 250,
    suffix: '+',
  },
  {
    label: 'Happy Clients',
    value: 150,
    suffix: '+',
  },
  {
    label: 'Team Members',
    value: 45,
    suffix: '+',
  },
  {
    label: 'Client Satisfaction',
    value: 98,
    suffix: '%',
  },
  {
    label: 'Countries Served',
    value: 12,
  },
]
