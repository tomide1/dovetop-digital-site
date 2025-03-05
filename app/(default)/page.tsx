export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import FeaturesBlocks from "@/components/craco/features-blocks";
import CustomForm from "@/components/craco/custom-form";
import Cta from "@/components/cta";
import Accordion from "@/components/accordion";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      {/* <BusinessCategories /> */}
			<LargeTestimonial />
			<Cta />
			<FeaturesBlocks/>
			{/* <Accordion title="Test" id="test-1">
				<p>Some test babies</p>
			</Accordion> */}
			{/* <CustomForm/> */}
      {/* <FeaturesPlanet /> */}
			<Banner/>
    </>
  );
}
