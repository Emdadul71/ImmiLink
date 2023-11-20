import React from "react";

const AboutHero = () => {
  return (
    <section className="pt-5 lg:pt-[80px] bg-grey mb-5 lg:mb-[80px]">
      <div className="container">
        <div className="max-w-[900px] w-full">
          <span className="text-sm py-1 px-2 bg-[#FDE6E8] rounded-full text-tertiary inline-block mb-4">
            Immilink
          </span>
          <h1 className="text-headerLg">About us</h1>
          <p className="text-xl">
            You tell Immilink AI what’s important to you and it flags the
            important insights from everywhere, including news sites, blogs, and
            newsletters
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
