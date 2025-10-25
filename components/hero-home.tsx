import Image from 'next/image'
import PageIllustration from '@/components/page-illustration'
import Avatar01 from '@/public/images/avatar-01.jpg'
import Avatar02 from '@/public/images/avatar-02.jpg'
import Avatar03 from '@/public/images/avatar-03.jpg'
import Avatar04 from '@/public/images/avatar-04.jpg'
import Avatar05 from '@/public/images/avatar-05.jpg'
import Avatar06 from '@/public/images/avatar-06.jpg'

export default function HeroHome() {
  return (
    <section className='relative bg-gray-900'>
      <PageIllustration />
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Hero content */}
        <div className='pb-12 pt-32 md:pb-20 md:pt-40'>
          {/* Section header */}
          <div className='pb-12 text-center md:pb-16'>
            <div
              className='mb-8'
              data-aos='fade-up'
              data-aos-duration='600'
              data-aos-once='true'
            >
              <div className='-mx-0.5 flex justify-center -space-x-3'>
                {[Avatar01, Avatar02, Avatar03, Avatar04, Avatar05, Avatar06].map((avatar, index) => (
                  <Image
                    key={index}
                    className='box-content rounded-full border-2 border-gray-50 transition-transform hover:scale-110'
                    src={avatar}
                    width={32}
                    height={32}
                    alt={`Avatar ${index + 1}`}
                    data-aos='zoom-in'
                    data-aos-delay={100 + index * 50}
                    data-aos-duration='400'
                    data-aos-once='true'
                  />
                ))}
              </div>
            </div>
            
            <div className='mx-auto max-w-4xl'>
              <h1 className='mb-8 text-5xl font-bold text-white md:text-6xl lg:text-7xl'>
                <span
                  className='block'
                  data-aos='fade-up'
                  data-aos-delay={150}
                  data-aos-duration='600'
                  data-aos-once='true'
                >
                  Evolutionary development
                </span>
                <span
                  className='block text-blue-400'
                  data-aos='fade-up'
                  data-aos-delay={250}
                  data-aos-duration='600'
                  data-aos-once='true'
                >
                  Incremental Delivery
                </span>
              </h1>
              <p
                className='mx-auto max-w-2xl text-xl text-gray-300 leading-relaxed'
                data-aos='fade-up'
                data-aos-delay={300}
                data-aos-duration='600'
                data-aos-once='true'
              >
                We help businesses adapt to the ever-changing digital landscape through evolutionary development and incremental delivery of systems and applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}