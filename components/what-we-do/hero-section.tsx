import React from 'react'

export default function HeroSection() {
  return (
    <section className='bg-gradient-to-b from-blue-50 to-white py-20 md:py-28'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-blue-600 mb-4'>
          What We Do
        </h1>
        <p className='text-lg md:text-xl text-gray-700 max-w-3xl mx-auto'>
          We deliver cutting-edge digital solutions tailored to your
          industry&apos;s unique needs. Explore our services to see how we can
          help you achieve your goals.
        </p>
      </div>
    </section>
  )
}
