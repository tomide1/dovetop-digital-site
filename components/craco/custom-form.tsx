'use client'

import { useState, useEffect } from 'react'

const CustomForm = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [enquiry, setEnquiry] = useState('')
  const [status, setStatus] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!fullName || !email || !companyName || email.indexOf('@') <= -1) {
      setStatus('error')
      setMessage('Please fill out all required fields correctly.')
      return
    }

    setStatus('sending')
    console.log('--submitted--')

    fetch(
      `https://dovetopdigital.us14.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_REACT_APP_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_REACT_APP_MAILCHIMP_ID}&MERGE0=${email}&MERGE1=${companyName}&MERGE2=${fullName}&MERGE3=${phoneNumber}`,
      {
        method: 'POST',
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setStatus('success')
        setMessage('Your enquiry has been received!')
      })
      .catch((error) => {
        setStatus('error')
        setMessage('There was an error sending your query!')
        console.error(error)
      })
  }

  useEffect(() => {
    if (status === 'success') {
      setFullName('')
      setCompanyName('')
      setPhoneNumber('')
      setEmail('')
      setEnquiry('')
    }
  }, [status])

  return (
    <form
      className='max-w-xs mx-auto sm:max-w-lg'
      data-aos='zoom-y-out'
      data-aos-delay='300'
      onSubmit={handleSubmit}
    >
      {/* Status messages */}
      {status === 'sending' && (
        <div className='flex justify-center mb-4'>
          <svg
            className='animate-spin h-5 w-5 text-blue-500'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
        </div>
      )}

      {status === 'error' && (
        <div className='text-center text-xl font-bold text-red-500 mb-4'>
          {message}
        </div>
      )}

      {status === 'success' && (
        <div className='text-center font-bold text-xl text-blue-500 mb-4'>
          {message}
        </div>
      )}

      {status !== 'success' && (
        <div className='space-y-4'>
          {/* Name and Company*/}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <input
                name='fullName'
                id='fullName'
                type='text'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className='w-full appearance-none border border-gray-700 focus:border-gray-600 rounded-md px-4 py-3 placeholder-gray-500'
                placeholder='Full Name'
                aria-label='Your Full Name'
                required
              />
            </div>
            <div>
              <input
                name='companyName'
                id='companyName'
                type='text'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className='w-full appearance-none border border-gray-700 focus:border-gray-600 rounded-md px-4 py-3 placeholder-gray-500'
                placeholder='Company'
                aria-label='Your Company Name'
                required
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <input
                id='email'
                name='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full appearance-none border border-gray-700 focus:border-gray-600 rounded-md px-4 py-3 placeholder-gray-500'
                placeholder='Email Address'
                aria-label='Your Email Address'
                autoComplete='email'
                required
              />
            </div>
            <div>
              <input
                id='phoneNumber'
                name='phoneNumber'
                type='tel'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className='w-full appearance-none border border-gray-700 focus:border-gray-600 rounded-md px-4 py-3 placeholder-gray-500'
                placeholder='Phone Number'
                aria-label='Your Phone Number'
              />
            </div>
          </div>

          {/* Enquiry */}
          <div>
            <textarea
              id='enquiry'
              name='enquiry'
              value={enquiry}
              onChange={(e) => setEnquiry(e.target.value)}
              className='w-full appearance-none border border-gray-700 focus:border-gray-600 rounded-md px-4 py-3 placeholder-gray-500'
              placeholder='Tell us about your project'
              rows={4}
              aria-label='Your Enquiry'
            />
          </div>

          {/* Submit Button */}
          <div className='flex justify-center'>
            <button
              type='submit'
              className='btn text-white shadow bg-gradient-to-r from-blue-500 to-teal-400 px-8 py-3 rounded-md'
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </form>
  )
}

export default CustomForm
