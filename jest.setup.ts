/* eslint-disable @typescript-eslint/no-unused-vars */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import React from 'react'

// Mock IntersectionObserver for animation tests
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
  root: null,
  rootMargin: '0px',
  thresholds: [],
}))

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock performance for animation testing
Object.defineProperty(window, 'performance', {
  writable: true,
  value: {
    now: jest.fn(() => Date.now()),
    mark: jest.fn(),
    measure: jest.fn(),
    getEntriesByType: jest.fn(() => []),
    getEntriesByName: jest.fn(() => []),
  },
})

// Mock scrollIntoView
Element.prototype.scrollIntoView = jest.fn()

// Mock Next.js navigation hooks and functions
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
  })),
  useSearchParams: jest.fn(() => new URLSearchParams()),
  usePathname: jest.fn(() => '/'),
  useParams: jest.fn(() => ({})),
  notFound: jest.fn(() => {
    throw new Error('NEXT_NOT_FOUND')
  }),
  redirect: jest.fn(() => {
    throw new Error('NEXT_REDIRECT')
  }),
}))

// Mock Next.js Image component
jest.mock('next/image', () => {
  const MockImage = (props: Record<string, unknown>) => {
    // Filter out Next.js specific props that aren't valid HTML attributes
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      fill: _fill,
      priority: _priority,
      quality: _quality,
      placeholder: _placeholder,
      blurDataURL: _blurDataURL,
      loader: _loader,
      unoptimized: _unoptimized,
      onLoad: _onLoad,
      onError: _onError,
      ...htmlProps
    } = props

    // Return a standard img element with only valid HTML attributes
    return React.createElement('img', {
      ...htmlProps,
      'data-testid': props['data-testid'] || 'next-image',
    })
  }

  MockImage.displayName = 'NextImage'
  return MockImage
})

// Mock Next.js Link component
jest.mock('next/link', () => {
  const MockLink = ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode
    href: string
    [key: string]: unknown
  }) => {
    return React.createElement('a', { href, ...props }, children)
  }
  MockLink.displayName = 'NextLink'
  return MockLink
})
