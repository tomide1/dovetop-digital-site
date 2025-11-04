'use client'

export default function CookiePolicy() {
  return (
    <section className='relative bg-white'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6'>
        <div className='pb-12 md:pb-20 pt-36 md:pt-40'>
          <div className='max-w-3xl mx-auto'>
            <h1 className='text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-8' data-aos='fade-up'>
              Cookie{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>
                Policy
              </span>
            </h1>

            <div className='prose prose-lg max-w-none' data-aos='fade-up' data-aos-delay='200'>
              <h2>Introduction</h2>
              <p>
                This Cookie Policy explains how we use cookies and similar tracking technologies on our website to enhance your user experience. By continuing to browse our site, you consent to our use of cookies in accordance with this policy.
              </p>

              <h2>What are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit our website. These cookies help us recognize your device, analyze website traffic, and personalize your experience.
              </p>

              <h2>Types of Cookies We Use</h2>
              
              <h3>Essential Cookies</h3>
              <p>These cookies are necessary for the website to function properly. Without them, certain features and services may not be available.</p>

              <h3>Performance Cookies</h3>
              <p>These cookies collect information about how users interact with the website, such as which pages are visited most frequently. This helps us improve the site's performance.</p>

              <h3>Functionality Cookies</h3>
              <p>These cookies allow us to remember your preferences and personalize your experience on the site (e.g., language settings, login details).</p>

              <h3>Targeting Cookies</h3>
              <p>These cookies are used to track your browsing behavior to serve targeted ads and content relevant to you.</p>

              <h2>Managing Cookies</h2>
              <p>
                You can manage your cookie preferences by adjusting your browser settings. However, disabling cookies may affect the functionality of our website.
              </p>

              <h2>Changes to Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with the updated date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}