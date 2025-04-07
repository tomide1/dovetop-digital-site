import Link from 'next/link'
import Logo from './logo'

export default function Header() {
  return (
    <header className='fixed top-0 z-30 w-full bg-white/70 backdrop-blur-md border-b border-gray-200/60 shadow-sm'>
      <div className='mx-auto w-full px-4 sm:px-6'>
        <div className='flex h-16 items-center justify-between'>
          {/* Site branding */}
          <div className='flex items-center'>
            <Link href='/' className='flex items-center gap-2'>
              <Logo />
              <span className='text-gray-900 font-bold text-xl tracking-wide'>
                Dovetop Digital
              </span>
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className='hidden md:flex'>
            <ul className='flex items-center space-x-8'>
              <li>
                <Link
                  href='/services'
                  className='text-gray-700 hover:text-gray-900 cursor-pointer'
                >
                  Services
                </Link>
              </li>
              <li>
                <span className='text-gray-700 hover:text-gray-900 cursor-pointer'>
                  Case Studies
                </span>
              </li>
              <li>
                <span className='text-gray-700 hover:text-gray-900 cursor-pointer'>
                  Insights
                </span>
              </li>
              <li>
                <span className='text-gray-700 hover:text-gray-900 cursor-pointer'>
                  About Us
                </span>
              </li>
              <li>
                <span className='text-gray-700 hover:text-gray-900 cursor-pointer'>
                  Contact
                </span>
              </li>
            </ul>
          </nav>

          {/* Desktop sign in links */}
          {/* <ul className='flex items-center gap-3'>
            <li>
              <Link
                href='/signin'
                className='btn-sm bg-white/80 text-gray-800 shadow-sm hover:bg-white'
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href='/signup'
                className='btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900'
              >
                Register
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    </header>
  )
}
