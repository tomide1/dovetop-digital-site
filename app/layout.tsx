import './css/style.css'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Dovetop Digital | Digital Transformation & Technology Solutions',
  description: 'Leading digital transformation partner delivering cloud, AI, cybersecurity, and technology solutions for modern enterprises.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body 
				className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`} suppressHydrationWarning={true}>
        <div className='flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip'>
          {children}
        </div>
      </body>
    </html>
  )
}
