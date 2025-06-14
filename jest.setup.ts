// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import React from 'react'

// Mock IntersectionObserver
// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(global as any).IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  disconnect() {}
  unobserve() {}
}

// Mock Next.js Image component to avoid test warnings
jest.mock('next/image', () => ({
  __esModule: true,
  default: (
    props: React.ImgHTMLAttributes<HTMLImageElement> & {
      fill?: boolean
      priority?: boolean
      sizes?: string
    }
  ) => {
    const {
      src,
      alt,
      width,
      height,
      className,
      fill, // eslint-disable-line @typescript-eslint/no-unused-vars
      priority, // eslint-disable-line @typescript-eslint/no-unused-vars
      sizes, // eslint-disable-line @typescript-eslint/no-unused-vars
      ...rest
    } = props
    // Filter out Next.js-specific props that don't belong on HTML img elements
    return React.createElement('img', {
      src,
      alt,
      width,
      height,
      className,
      ...rest,
    })
  },
}))
