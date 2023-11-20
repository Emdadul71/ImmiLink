import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";

const HomeHero = () => {
  return (
    <section className="relative z-0 py-[80px] h-[calc(100vh-74px)] grid place-items-center mb-5 lg:mb-[80px]">
      <div className=" absolute left-0 top-0 w-full h-full  overlay z-[0]"></div>
      <Image
        className="absolute left-0 top-0 z-[-1] w-full h-full object-cover"
        src="/images/home/home-hero-bg.png"
        alt="Find Universities Abroad"
        width={2000}
        height={800}
        priority
      />
      <div className="container relative z-10">
        <div className="flex flex-col items-start justify-start lg:max-w-[495px]  w-full   z-10 mt-[-16px] h-full">
          <p className="text-sm text-white mb-1">GLOBAL EXPERIENCE</p>
          <div className="flex flex-col gap-6">
            <h1 className=" text-white mb-0 lg:leading-[58px]">
              Explore the
              <span className="inline-block text-tertiary">
                Canadian Dream
              </span>{" "}
              through our platform
            </h1>
            <p className="text-white mb-0">
              We merge imagination and technology to help thousands of brands
              grow in an age of digital transformation.
            </p>
            <div className="relative">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search Here"
                className="w-full py-2 px-8 placeholder:text-sm rounded-md focus:outline-none"
              />
              <FiSearch className="absolute top-[50%] translate-y-[-50%] left-[10px] text-tertiary" />
            </div>
            <div>
              <Link
                href=""
                className="btn btn-primary text-sm py-[15px] px-[30px]"
              >
                Book free Counselling
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
