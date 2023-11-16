import GrowingBusiness from "../@common/growing-business";
import RecentBlog from "../@common/recent-blog";
import TestimonialCaresoul from "../@common/testimonial_caresoul";
import AboutHero from "./@components/about-hero";
import Benefited from "./@components/benefited";
import Opportunities from "./@components/opportunities";
import Partners from "./@components/partners";
import WhyImmilink from "./@components/why-immilink";

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <WhyImmilink />
      <Partners />
      <Benefited />
      <Opportunities />
      <TestimonialCaresoul />
      <RecentBlog />
      <GrowingBusiness />
    </>
  );
};

export default AboutUs;
