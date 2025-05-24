'use client'

import React from 'react'
import Image from 'next/image'

const FullWidthImageWithOverlay: React.FC = () => {
  return (
    <div className='relative w-full h-80'>
      <Image
        src='https://via.placeholder.com/1200x500' // Replace with your image URL
        alt='Example Image'
        fill
        className='object-cover'
      />
      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white'>
        <h1 className='text-4xl font-bold'>Your Overlay Text</h1>
      </div>
    </div>
  )
}

export default FullWidthImageWithOverlay
