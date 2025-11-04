'use client'

import Image from 'next/image'
import Link from 'next/link'
import PageIllustration from '@/components/page-illustration'

const teamMembers = [
  {
    name: 'Tomide Fasugba',
    role: 'CO-FOUNDER/DIRECTOR',
    image: '/images/team/tomide.png',
    bgColor: 'bg-blue-500'
  },
  {
    name: 'Victor Ogunmuyiwa',
    role: 'CO-FOUNDER/DIRECTOR', 
    image: '/images/team/victor.png',
    bgColor: 'bg-green-400'
  },
  {
    name: 'Lindalene Okoye',
    role: 'DELIVERY LEAD',
    image: '/images/team/lindalene.png', 
    bgColor: 'bg-purple-400'
  },
  {
    name: 'TEMI ALAO',
    role: 'FOUNDING ENGINEER',
    image: '/images/team/temi.png',
    bgColor: 'bg-yellow-400'
  },
  {
    name: 'Benjamin Agu',
    role: 'PROJECT MANAGER',
    image: '/images/team/benjamin.png',
    bgColor: 'bg-purple-400'
  }
]

export default function AboutUs() {
  return (
    <>
      {/* About Us Section */}
      <section className='relative bg-gray-900'>
        <PageIllustration />
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='pb-12 md:pb-20 pt-36 md:pt-40'>
            <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
              <h1 
                className='text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-white' 
                data-aos='fade-up'
                data-aos-duration='600'
              >
                About{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400'>
                  Dovetop Digital
                </span>
              </h1>
              <p 
                className='text-xl text-gray-300'
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='600'
              >
                Dovetop Digital helps organizations tackle their most complex challenges by delivering solutions 
                across strategy, consulting, and technology. We combine expertise in cloud systems, data, 
                engineering, and AI to design solutions that are secure, reliable, and practical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission_vision" className='relative bg-white'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='py-12 md:py-20'>
            <div className='max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:max-w-none'>
              <div 
                className='bg-white rounded-lg shadow-xl p-8 transform hover:scale-105 transition-all duration-300' 
                data-aos='fade-right'
                data-aos-duration='600'
              >
                <h2 className='text-3xl font-bold text-gray-900 mb-4'>Our Mission</h2>
                <p className='text-gray-600 text-lg'>
                  To design and deliver innovations that simplify complex technology challenges, 
                  improve efficiency, and create opportunities for growth and scale.
                </p>
              </div>
              
              <div 
                className='bg-white rounded-lg shadow-xl p-8 transform hover:scale-105 transition-all duration-300' 
                data-aos='fade-left'
                data-aos-delay='200'
                data-aos-duration='600'
              >
                <h2 className='text-3xl font-bold text-gray-900 mb-4'>Our Vision</h2>
                <p className='text-gray-600 text-lg'>
                  To be the trusted technology partner for regulated industries seeking to operate 
                  efficiently, sustainably, and intelligently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className='relative bg-gray-900'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 opacity-90'></div>
        <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='py-12 md:py-20'>
            <div className='max-w-3xl mx-auto text-center pb-12'>
              <h2 
                className='text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-white' 
                data-aos='fade-up'
                data-aos-duration='600'
              >
                Our Value{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400'>
                  Proposition
                </span>
              </h2>
              <p 
                className='text-xl text-gray-300 mb-8'
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='600'
              >
                We believe 6 months is all it takes to transform your organization. Our approach 
                is to first understand your unique challenges, then design and implement solutions that fit 
                your operations and goals.
              </p>
              
              <div 
                className='flex justify-center'
                data-aos='fade-up'
                data-aos-delay='400'
                data-aos-duration='600'
              >
                <Link 
                  href='/contact'
                  className='bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-600 transition-all duration-300 transform hover:scale-105'
                >
                  Experience Transformation in 6 months
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className='relative bg-white'>
        <div className='max-w-6xl mx-auto px-2 sm:px-6'>
          <div className='py-12 md:py-20'>
            <div className='max-w-3xl mx-auto text-center pb-12'>
              <h2 
                className='text-4xl md:text-5xl font-extrabold mb-4' 
                data-aos='fade-up'
                data-aos-duration='600'
              >
                Meet Our{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>
                  Team
                </span>
              </h2>
              <p 
                className='text-xl text-gray-600'
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='600'
              >
                Dovetop's team drives innovation and ensures technological excellence.
              </p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name} 
                  className='text-center transform hover:scale-105 transition-all duration-300' 
                  data-aos='fade-up' 
                  data-aos-delay={index * 150}
                  data-aos-duration='600'
                >
                  <div className='w-48 h-48 md:w-40 md:h-40 mx-auto mb-4 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gray-100'>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className='w-full h-full object-cover object-top'
                    />
                  </div>
                  <div className={`inline-block ${member.bgColor} text-black px-4 py-2 rounded-full font-semibold mb-2 transform hover:scale-110 transition-transform duration-200`}>
                    {member.name}
                  </div>
                  <p className='text-gray-600 text-sm font-medium'>
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}