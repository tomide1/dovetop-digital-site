export const metadata = {
  title: 'Contact Us - Dovetop Digital',
  description: 'Get in touch with Dovetop Digital. We&apos;re here to help transform your business with innovative technology solutions.',
}

import Cta from '@/components/cta'

export default function ContactPage() {
  return (
    <>
      <div className="pt-28 pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center pb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4">
              Contact{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Us
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Ready to transform your business? Let&apos;s discuss how we can help you achieve your digital goals.
            </p>
          </div>
        </div>
      </div>
      <Cta />
    </>
  )
}