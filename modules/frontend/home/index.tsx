import React from "react";
import HomeHero from "./@components/home-hero";
import ServiceSection from "./@components/services-section";
import ImmigrationAdvisors from "./@components/immigration-advisors";
import WhyImmilink from "./@components/why-immilink";
import LatestNews from "./@components/latest-news";

const Home = () => {
  return (
    <>
      <HomeHero />
      <ServiceSection />
      <ImmigrationAdvisors />
      <LatestNews />
      <WhyImmilink />
    </>
  );
};

export default Home;
