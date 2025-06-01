import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights | Dovetop Digital',
  description:
    'Explore our latest insights on cloud solutions, user-centered design, data analytics, and security governance.',
}

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
