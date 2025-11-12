'use client'

export default function Accessibility() {
  return (
    <section className='relative bg-white'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6'>
        <div className='pb-12 md:pb-20 pt-36 md:pt-40'>
          <div className='max-w-3xl mx-auto'>
            <h1 className='text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-8' data-aos='fade-up'>
              Accessibility{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>
                Statement
              </span>
            </h1>

            <div className='prose prose-lg max-w-none' data-aos='fade-up' data-aos-delay='200'>
              <h2>Our Commitment to Accessibility</h2>
              <p>
                At Dovetop Digital, we are committed to ensuring that our website is accessible to all users, including those with disabilities. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards to provide an inclusive online experience.
              </p>

              <h2>Improving Accessibility</h2>
              <p>We continually strive to improve the accessibility of our website. This includes:</p>
              <ul>
                <li>Ensuring compatibility with screen readers and other assistive technologies.</li>
                <li>Providing alternative text for images and multimedia content.</li>
                <li>Using a color scheme that ensures readability for those with visual impairments.</li>
              </ul>

              <h2>How to Contact Us</h2>
              <p>
                If you encounter any accessibility issues while using our website, please let us know. We will do our best to assist you and address any barriers you may face. Contact us at info@dovetopdigital.co.uk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}