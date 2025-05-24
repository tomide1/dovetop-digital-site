export const metadata = {
  title: 'Dovetop Digital',
  description:
    'Official website for Dovetop Digital Ltd., a Tech consultancy based out of London, UK',
}

import Hero from '@/components/hero-home'
import BusinessCategories from '@/components/business-categories'
import FeaturesPlanet from '@/components/features-planet'
import FeaturesBlocks from '@/components/craco/features-blocks'
import LargeTestimonial from '@/components/large-testimonial'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPlanet />
      <FeaturesBlocks />
      <BusinessCategories />
      <LargeTestimonial />
      <Cta />
      {/* <Accordion title='Test' id='test-1'>
        <p>Some test babies</p>
      </Accordion> */}
      {/* <Banner /> */}
    </>
  )
}
