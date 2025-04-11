'use client'

import { useState } from 'react'

const CustomForm = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [enquiry, setEnquiry] = useState('')
  const [status, setStatus] = useState<string|null>(null)
  const [loading, setLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const response = await fetch('/api/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullName, email, companyName, phoneNumber, enquiry }),
    });

    if (response.ok) {
      setStatus('Success! You are now subscribed.');
    } else {
      setStatus('Something went wrong. Please try again.');
    }
    setLoading(false);
	}

  return (
    <form
      className='max-w-xs mx-auto sm:max-w-lg'
      data-aos='zoom-y-out'
      data-aos-delay='300'
      onSubmit={handleSubmit}
    >
      {loading && (
				<svg style={{color:"#1BA9BB"}} className="animate-spin h-5 w-5" viewBox="0 0 24 24" />
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
							disabled={loading}
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
