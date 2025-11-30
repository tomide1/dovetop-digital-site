export const metadata = {
  title: 'Contact Us - Dovetop Digital',
  description: 'Get in touch with Dovetop Digital. We&apos;re here to help transform your business with innovative technology solutions.',
}

import Cta from '@/components/cta'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-32 pb-16">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center pb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-6 text-white">
              Get in{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Let&apos;s discuss how we can help you achieve your digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="relative bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Visit Our{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Head Office
              </span>
            </h2>
            <p className="text-lg text-gray-600">Located in London, United Kingdom</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Location Card */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-700 font-medium">151 Picardy Road<br />Belvedere DA17 5QL<br />London, UK</p>
            </div>

            {/* Email Card */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:info@dovetopdigital.com" className="text-teal-600 hover:text-teal-700 font-medium break-all">
                info@dovetopdigital.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:07525048364" className="text-purple-600 hover:text-purple-700 font-medium">
                07525 048364
              </a>
            </div>

            {/* Hours Card */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-700 font-medium">Monday - Friday<br />8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  )
}