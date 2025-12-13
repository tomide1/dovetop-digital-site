import Link from 'next/link'
import PageIllustration from '@/components/page-illustration'

export const metadata = {
  title: 'Careers - Dovetop Digital',
  description: 'Join our team at Dovetop Digital. Career opportunities coming soon.',
}

export default function Careers() {
  return (
    <>
      <section className='relative bg-gray-900 min-h-screen flex items-center'>
        <PageIllustration />
        <div className='max-w-6xl mx-auto px-4 sm:px-6 relative'>
          <div className='text-center'>
            <h1 
              className='text-4xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-6 text-white'
              data-aos='fade-up'
              data-aos-duration='600'
            >
              Careers at{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400'>
                Dovetop Digital
              </span>
            </h1>
            
            <div 
              className='bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 max-w-2xl mx-auto'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='600'
            >
              <div className='text-6xl mb-6'>🚀</div>
              <h2 className='text-3xl font-bold text-white mb-4'>Coming Soon</h2>
              <p className='text-xl text-gray-300 mb-8 leading-relaxed'>
                We&apos;re building something amazing and will be expanding our team soon. 
                Stay tuned for exciting career opportunities at Dovetop Digital.
              </p>
              
              <div className='space-y-4'>
                <p className='text-gray-400'>
                  In the meantime, feel free to reach out to us:
                </p>
                <Link 
                  href='/contact'
                  className='inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-600 transition-all duration-300 transform hover:scale-105'
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}