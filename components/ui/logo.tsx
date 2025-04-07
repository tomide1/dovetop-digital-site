import Image from 'next/image'

export default function Logo() {
  return (
    <Image
      src='/images/dovetop_logo.png'
      alt='Dovetop Logo'
      width={60}
      height={60}
      className='object-contain'
    />
  )
}
