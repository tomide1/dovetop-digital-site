'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PageIllustration from '@/components/page-illustration'

const boardMembers = [
  {
    name: 'Tomide Fasugba',
    role: 'Chief Technology Officer',
    image: '/images/team/tomide.png',
    email: 'tomide@dovetopdigital.com',
    linkedin: 'https://www.linkedin.com/in/tomide-fasugba-253b869b',
    profile: 'Tomide Fasugba serves as the Chief Technology Officer (CTO) at Dovetop Digital, a role he has held for the past three years. As a strategic technology leader, Tomide drives the company\'s technical vision, oversees innovation initiatives, and ensures the delivery of scalable, secure, and future-ready digital solutions for clients across diverse industries. With a strong background in software engineering, systems architecture, and digital transformation leadership, Tomide plays a central role in shaping Dovetop Digital\'s approach to evolutionary development and incremental delivery. He is responsible for guiding the technical direction of all client engagements—from solution design to implementation ensuring that every system aligns with modern standards for performance, usability, and sustainability. Throughout his tenure, Tomide has championed the adoption of cloud-native technologies, automation solutions, and modern engineering practices that have strengthened Dovetop Digital\'s delivery capabilities and enhanced client outcomes. Under his guidance, the company has expanded its technical portfolio, streamlined solution delivery frameworks, and deepened its commitment to sustainable digital innovation. A strong advocate for responsible technology development, Tomide actively promotes the integration of accessibility, data privacy, and environmental stewardship into system design and execution. His forward-thinking perspective helps clients navigate the rapidly evolving digital environment with confidence and clarity.'
  },
  {
    name: 'Victor Ogunmuyiwa',
    role: 'Chief Executive Officer', 
    image: '/images/team/victor.png',
    email: 'victor@dovetopdigital.com',
    linkedin: 'https://www.linkedin.com/in/victor-o-612b232a4',
    profile: 'Victor Ogunmuyiwa is the Chief Executive Officer (CEO) of Dovetop Digital, where he provides strategic leadership, oversees organizational growth, and drives the company\'s mission to help businesses adapt to an ever-changing digital landscape through innovative IT solutions and sustainable system development. As CEO, Victor is responsible for shaping the overall vision and long-term strategy of Dovetop Digital. He leads the company\'s executive team, guides major business decisions, and ensures the organization remains focused on delivering high-quality, adaptive, and future-ready digital solutions that meet the evolving needs of clients. Victor is recognized for his strong leadership style, which blends strategic foresight with an inclusive and collaborative approach. He has been instrumental in establishing Dovetop Digital as a trusted partner in digital transformation, championing service excellence, modern engineering practices, and client-centered innovation. A strong advocate for ethical and responsible technology, Victor emphasizes transparency, data protection, and sustainable business practices across all organizational operations. He fosters a culture where innovation, accountability, and integrity guide decision-making and technical execution. Victor\'s forward-thinking mindset and ability to inspire teams have positioned Dovetop Digital as a dynamic and resilient technology partner. By aligning strategic vision with practical execution, he ensures the company remains adaptable, competitive, and focused on delivering measurable value to clients and stakeholders.'
  },
  {
    name: 'Raheel Bashir',
    role: 'Chief Operating Officer', 
    image: '/images/team/raheel.png',
    email: 'raheel@dovetopdigital.com',
    linkedin: 'https://linkedin.com/in/raheel-bashir',
    profile: 'Raheel Bashir serves as the Chief Operating Officer (COO) of Dovetop Digital, where he oversees the company\'s operational strategy, organizational performance, and execution excellence across all service lines. As COO, Raheel plays a pivotal role in ensuring that Dovetop Digital delivers consistent, high-quality, and scalable IT solutions that align with both client expectations and the company\'s long-term strategic goals. Raheel brings a strong foundation in operational leadership, process optimization, and cross-functional management. He is responsible for translating Dovetop Digital\'s vision into actionable operational frameworks—ensuring that teams, processes, and resources work seamlessly together to support efficient delivery and measurable client outcomes. His operational philosophy is centered on efficiency, accountability, and continuous improvement. Raheel champions the development of robust internal systems, standardized delivery methodologies, and performance-driven cultures that enable Dovetop Digital to adapt quickly to evolving project demands and emerging industry trends.'
  },
  {
    name: 'Lindalene Okoye',
    role: 'Delivery Lead',
    image: '/images/team/lindalene.png', 
    email: 'lindalene@dovetopdigital.com',
    linkedin: 'https://linkedin.com/in/lindalene-okoye',
    profile: 'Lindalene Okoye serves as a Delivery Lead and Director at Dovetop Digital, where she plays a central role in overseeing the successful execution of complex digital transformation programs. With a strong focus on delivery excellence, strategic coordination, and stakeholder alignment, Lindalene ensures that every client engagement is executed with precision, transparency, and measurable value. As a senior leader within the organization, Lindalene is responsible for shaping and managing the full delivery lifecycle from project initiation and planning to execution, quality assurance, and continuous improvement. She leads cross-functional teams, aligns technical and business objectives, and ensures that delivery frameworks reflect the company\'s commitment to evolutionary development and incremental system enhancement. Lindalene is known for her exceptional ability to balance strategic oversight with hands-on operational leadership. Her strengths lie in building delivery environments that foster collaboration, accountability, and predictable outcomes. She consistently cultivates trust with clients through clear communication, strong governance practices, and a deep understanding of how to navigate project risks in dynamic digital environments. A champion of delivery maturity and organizational efficiency, Lindalene drives initiatives aimed at improving delivery methodologies, optimizing resource allocation, and enhancing performance measurement across the company. Her leadership ensures that Dovetop Digital maintains a high standard of execution quality, ultimately enabling clients to achieve sustainable digital growth.'
  },
  {
    name: 'Temi Alao',
    role: 'Engineering Lead',
    image: '/images/team/temi.png',
    email: 'temi@dovetopdigital.com',
    linkedin: 'https://www.linkedin.com/in/temi-alao-2a627215a',
    profile: 'Temi Alao serves as an Engineering Lead and Director at Dovetop Digital, where he provides strategic technical leadership, oversees engineering excellence, and drives the development of robust, scalable, and future-ready digital solutions for clients across diverse sectors. In his role, Temi is responsible for guiding the technical direction of engineering teams, establishing high-quality development standards, and ensuring the delivery of systems that align with Dovetop Digital\'s principles of evolutionary development and incremental delivery. He works closely with cross-functional stakeholders to translate business objectives into actionable engineering strategies that are efficient, secure, and sustainable. Temi is known for his deep technical insight, strong architectural thinking, and ability to solve complex engineering challenges with clarity and precision. He champions modern engineering practices—such as cloud-native development, automation, continuous delivery, and modular architecture ensuring that solutions remain adaptable in a rapidly evolving digital landscape. As a Director, Temi plays a key role in strengthening internal capabilities by mentoring engineers, promoting knowledge sharing, and fostering a culture of innovation and continuous improvement. His leadership emphasizes collaboration, technical rigor, and responsible engineering ensuring that every solution built by Dovetop Digital meets the highest standards of performance, security, and reliability.'
  },
  {
    name: 'Benjamin Agu',
    role: 'Programme Manager',
    image: '/images/team/benjamin.png',
    email: 'benjamin@dovetopdigital.com',
    linkedin: 'https://linkedin.com/in/benjamin-agu',
    profile: 'Benjamin Agu serves as a Programme Manager and Director at Dovetop Digital, where he leads the strategic planning, coordination, and execution of large-scale digital transformation programmes. With a strong focus on delivery governance, stakeholder alignment, and value-driven outcomes, Benjamin ensures that complex initiatives are executed efficiently, transparently, and in alignment with organizational and client objectives. As a senior leader, Benjamin oversees multi-project environments and drives programme structures that support Dovetop Digital\'s commitment to evolutionary development and incremental system delivery. He is responsible for defining programme roadmaps, managing dependencies, mitigating risks, and ensuring that all workstreams operate cohesively to achieve timely and measurable results. Benjamin is recognized for his ability to bridge the gap between technical execution and business strategy. His leadership style emphasizes communication, clarity, and collaboration enabling him to manage diverse stakeholder groups, resolve challenges proactively, and maintain programme momentum even in dynamic or high-pressure environments. With expertise in delivery governance, resource coordination, and performance management, Benjamin has played a key role in strengthening Dovetop Digital\'s delivery capability. He works closely with engineering leads, delivery teams, and executive leadership to ensure that programmes are equipped with the structures, tools, and talent required for success.'
  }
]

export default function AboutUs() {
  const [selectedMember, setSelectedMember] = useState<typeof boardMembers[0] | null>(null)

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
                At Dovetop Digital, we empower businesses to thrive in an ever-changing digital landscape. 
                As an innovative IT solutions partner, we specialize in the evolutionary development and 
                incremental delivery of systems that drive long-term value, resilience, and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission_vision" className='relative bg-white'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='py-12 md:py-20'>
            <div className='max-w-4xl mx-auto'>
              <div 
                className='bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg shadow-xl p-8 mb-8' 
                data-aos='fade-up'
                data-aos-duration='600'
              >
                <h2 className='text-3xl font-bold text-gray-900 mb-4'>Our Vision</h2>
                <p className='text-gray-700 text-lg'>
                  To be a trusted catalyst for digital evolution empowering businesses around the world to 
                  innovate confidently, operate sustainably, and thrive in an ever-changing technological landscape. 
                  We envision a future where adaptive, human-centered digital systems enhance every organization's 
                  ability to grow, compete, and create lasting positive impact.
                </p>
              </div>
              
              <div 
                className='bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg shadow-xl p-8' 
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='600'
              >
                <h2 className='text-3xl font-bold text-gray-900 mb-4'>Our Mission</h2>
                <p className='text-gray-700 text-lg mb-4'>
                  Our mission at Dovetop Digital is to deliver intelligent, scalable, and sustainable IT solutions 
                  that help businesses navigate continuous change. We achieve this by:
                </p>
                <ul className='text-gray-700 text-lg space-y-2 list-disc list-inside'>
                  <li>Developing adaptive digital systems through evolutionary design and incremental delivery.</li>
                  <li>Partnering closely with clients to understand their unique challenges and unlock long-term strategic value.</li>
                  <li>Driving innovation responsibly with secure, ethical, and future-ready technologies.</li>
                  <li>Building solutions that enhance efficiency, elevate user experiences, and strengthen organizational resilience.</li>
                  <li>Fostering a culture of collaboration, transparency, and continuous improvement across all engagements.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className='relative bg-gray-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='py-12 md:py-20'>
            <div className='max-w-4xl mx-auto'>
              <h2 
                className='text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-8 text-center text-white' 
                data-aos='fade-up'
                data-aos-duration='600'
              >
                Our Commitment to{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400'>
                  Sustainability
                </span>
              </h2>
              <p 
                className='text-xl text-gray-300 mb-8 text-center'
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='600'
              >
                Dovetop Digital is committed to advancing sustainability through responsible digital innovation. 
                We believe that technology should not only accelerate business success but also contribute positively 
                to communities and the environment.
              </p>
              
              <div className='grid gap-6 md:grid-cols-3'>
                <div 
                  className='bg-white/10 backdrop-blur-sm rounded-lg p-6' 
                  data-aos='fade-up'
                  data-aos-delay='300'
                  data-aos-duration='600'
                >
                  <h3 className='text-2xl font-bold text-white mb-3'>Environmental Responsibility</h3>
                  <p className='text-gray-300'>
                    We prioritize energy-efficient solutions, cloud-native architectures, and optimized resource usage 
                    to help reduce the environmental footprint of the systems we build.
                  </p>
                </div>
                
                <div 
                  className='bg-white/10 backdrop-blur-sm rounded-lg p-6' 
                  data-aos='fade-up'
                  data-aos-delay='400'
                  data-aos-duration='600'
                >
                  <h3 className='text-2xl font-bold text-white mb-3'>Ethical and Inclusive Innovation</h3>
                  <p className='text-gray-300'>
                    We uphold the highest standards of integrity, data responsibility, and ethical technology use. 
                    Our practices emphasize accessibility, inclusivity, and fairness in system design.
                  </p>
                </div>
                
                <div 
                  className='bg-white/10 backdrop-blur-sm rounded-lg p-6' 
                  data-aos='fade-up'
                  data-aos-delay='500'
                  data-aos-duration='600'
                >
                  <h3 className='text-2xl font-bold text-white mb-3'>Sustainable Partnerships</h3>
                  <p className='text-gray-300'>
                    We work collaboratively with our clients to create long-lasting, adaptable solutions that support 
                    business resilience through incremental delivery and continuous improvement.
                  </p>
                </div>
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
                  Board of Directors
                </span>
              </h2>
              <p 
                className='text-xl text-gray-600'
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='600'
              >
                Dovetop Digital Board of Directors drives innovation and ensures technological excellence.
              </p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {boardMembers.map((member, index) => (
                <div 
                  key={member.name} 
                  className='text-center transform hover:scale-105 transition-all duration-300 cursor-pointer' 
                  data-aos='fade-up' 
                  data-aos-delay={index * 150}
                  data-aos-duration='600'
                  onClick={() => setSelectedMember(member)}
                >
                  <div className='w-48 h-48 md:w-40 md:h-40 mx-auto mb-4 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gray-100'>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={192}
                      height={192}
                      className='w-full h-full object-cover object-top'
                    />
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-1'>
                    {member.name}
                  </h3>
                  <p className='text-gray-600 text-sm font-medium'>
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Profile Modal */}
      {selectedMember && (
        <div 
          className='fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4'
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className='bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='relative'>
              <button
                onClick={() => setSelectedMember(null)}
                className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold z-10'
              >
                ×
              </button>
              
              <div className='p-8'>
                <div className='flex flex-col md:flex-row gap-6 mb-6'>
                  <div className='w-32 h-32 rounded-xl overflow-hidden shadow-lg flex-shrink-0 mx-auto md:mx-0'>
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      width={128}
                      height={128}
                      className='w-full h-full object-cover object-top'
                    />
                  </div>
                  
                  <div className='flex-1 text-center md:text-left'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-2'>{selectedMember.name}</h2>
                    <p className='text-lg text-gray-600 mb-4'>{selectedMember.role}</p>
                    
                    <div className='flex gap-4 justify-center md:justify-start'>
                      <a
                        href={`mailto:${selectedMember.email}`}
                        className='flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors'
                      >
                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                          <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                          <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                        </svg>
                        <span className='text-sm'>{selectedMember.email}</span>
                      </a>
                      
                      <a
                        href={selectedMember.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors'
                      >
                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                        </svg>
                        <span className='text-sm'>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className='prose max-w-none'>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>Profile</h3>
                  <p className='text-gray-700 leading-relaxed whitespace-pre-line text-justify'>
                    {selectedMember.profile}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Location Section */}
      <section id="locations" className='relative bg-gray-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='py-12 md:py-20'>
            <div className='max-w-3xl mx-auto text-center pb-12'>
              <h2 
                className='text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-white' 
                data-aos='fade-up'
                data-aos-duration='600'
              >
                Our{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400'>
                  Location
                </span>
              </h2>
            </div>
            
            <div className='max-w-2xl mx-auto'>
              <div 
                className='bg-white rounded-lg shadow-xl p-8 text-center'
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='600'
              >
                <h3 className='text-2xl font-bold text-gray-900 mb-6'>Head Office</h3>
                <div className='space-y-4 text-gray-600'>
                  <p className='text-lg'>Our head office is located in London</p>
                  <div className='border-t pt-4'>
                    <p className='font-semibold text-gray-900 mb-2'>Address</p>
                    <p>151 Picardy Road<br />Belvedere DA17 5QL</p>
                  </div>
                  <div className='border-t pt-4'>
                    <p className='font-semibold text-gray-900 mb-2'>Phone</p>
                    <p>07525 048364</p>
                  </div>
                  <div className='border-t pt-4'>
                    <p className='font-semibold text-gray-900 mb-2'>Opening Hours</p>
                    <p>8am - 6pm<br />Monday - Friday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}