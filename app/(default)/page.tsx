export const metadata = {
  title: 'Dovetop Digital',
  description: 'Official website for Dovetop Digital Ltd., a Tech consultancy based out of London, UK',
}

import Hero from '@/components/hero-home'
import BusinessCategories from '@/components/business-categories'
import FeaturesPlanet from '@/components/features-planet'
import LargeTestimonial from '@/components/large-testimonial'
import FeaturesBlocks from '@/components/craco/features-blocks'
import Accordion from '@/components/accordion'
import Banner from '@/components/banner'
import Cta from '@/components/cta'
import Footer from '@/components/ui/footer'
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPlanet />
      <FeaturesBlocks />
      <BusinessCategories />
      <Cta />
      {/* <Accordion title='Test' id='test-1'>
        <p>Some test babies</p>
      </Accordion> */}
      {/* <LargeTestimonial /> */}
      {/* <Banner /> */}
    </>
  )
}
