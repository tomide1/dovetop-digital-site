export const metadata = {
  title: 'Dovetop Digital',
  description:
    'Official website for Dovetop Digital Ltd., a Tech consultancy based out of London, UK',
}

import Hero from '@/components/hero-home'
// import BusinessCategories from '@/components/business-categories'
import FeaturesBlocks from '@/components/craco/features-blocks'
import CaseStudiesSection from '@/components/case-studies-section'
import ProjectsSection from '@/components/projects-section'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <FeaturesPlanet /> */}
      <FeaturesBlocks />
      <ProjectsSection />
      {/* <BusinessCategories /> */}
      <CaseStudiesSection />
      {/* <LargeTestimonial /> */}
      {/* <Cta /> */}
      {/* <Accordion title='Test' id='test-1'>
        <p>Some test babies</p>
      </Accordion> */}
      {/* <Banner /> */}
    </>
  )
}
