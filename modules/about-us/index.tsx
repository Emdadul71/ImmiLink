import React from "react";
import AboutHero from "./@components/about-hero";
import WhyImmilink from "./@components/why-immilink";
import Benefited from "./@components/benefited";
import Testimonials from "../@common/testimonials";
import RecentBlog from "../@common/recent-blog";
import GrowingBusiness from "../@common/growing-business";

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <WhyImmilink />
      <Benefited />
      <Testimonials />
      <RecentBlog />
      <GrowingBusiness />
    </>
  );
};

export default AboutUs;
