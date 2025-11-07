'use client';

import { createSPASassClient } from '@/lib/supabase/client';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError('');
      setLoading(true);

      try {
          const client = await createSPASassClient();
          const { error: signInError } = await client.loginEmail(email, password);

          console.log('Sign-in error:', signInError);

          if (signInError) throw signInError;

          router.push('/admin');
          return;
      } catch (err) {
          if (err instanceof Error) {
              setError(err.message);
          } else {
              setError('An unknown error occurred');
          }
      } finally {
          setLoading(false);
      }
  };

  return (
    <>
      <>
        <div className='mb-10'>
          <h1 className='text-4xl font-bold'>Sign in to your account</h1>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          {error && (
                <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg">
                    {error}
                </div>
            )}
          <div className='space-y-4'>
            <div>
              <label
                className='mb-1 block text-sm font-medium text-gray-700'
                htmlFor='email'
              >
                Email
              </label>
              <input
                id='email'
                name="email"
                className='form-input w-full py-2'
                type='email'
                placeholder='corybarker@email.com'
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                className='mb-1 block text-sm font-medium text-gray-700'
                htmlFor='password'
              >
                Password
              </label>
              <input
                id='password'
                name="password"
                autoComplete="current-password"
                className='form-input w-full py-2'
                type='password'
                placeholder='••••••••'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className='mt-6'>
            <button disabled={loading} className='btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]'>
                {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
        {/* Bottom link */}
        <div className='mt-6 text-center'>
          <Link
            className='text-sm text-gray-700 underline hover:no-underline'
            href='/reset-password'
          >
            Forgot password
          </Link>
        </div>
      </>
    </>
  )
}
