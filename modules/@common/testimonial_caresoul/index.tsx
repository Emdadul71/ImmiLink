"use client";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import TestimonialCard from "../testimonial-card";

const testimonialData = [
  {
    name: "Cheryl S. Coley",
    imgSrc:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Exceptional support! This immigration service provider made my journey stress-free. Their expertise and personalized attention guided me through the process effortlessly. Highly recommend their services for a smooth immigration experience.",
    url: "/country/study-in-australia",
  },
  {
    name: "Frank D. Mondy",
    imgSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Impeccable service! This immigration provider's expertise and were invaluable. They streamlined the process, offering crucial support and making my immigration journey smooth. Highly recommended for their professionalism and efficiency.",
    url: "/country/study-in-canada",
  },
  {
    name: "Mary B. Hughes",
    imgSrc:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Top-notch service! This immigration provider went above and beyond. Their expert guidance and personalized approach made my immigration process effortless. I highly recommend their services for anyone seeking a smooth transition.",
    url: "/country/study-in-denmark",
  },
  {
    name: "Carl J. Rivera",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Flawless assistance! This immigration service provider excelled in every aspect. Their expert guidance and meticulous support ensured a hassle-free immigration journey. Highly recommend their services for a seamless experience.",
    url: "/country/study-in-germany",
  },
  {
    name: "Kenneth A. Gentry",
    imgSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Outstanding assistance! This immigration service provider was a game-changer. Their expertise and unwavering support ensured a hassle-free immigration process. Highly recommend their services for a stress-free experience.",
    url: "/country/study-in-ireland",
  },
];

const TestimonialCaresoul = () => {
  const [isActive, setIsActive] = useState(0);

  const wrapperRef = useRef(null);
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsActive(0);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);

  const nexHandle = () => {
    setIsActive(1);
  };
  const prevHandle = () => {
    setIsActive(2);
  };

  interface dataTypes {
    className?: string;
    style?: string;
    onClick?: Function | any;
  }

  function NextArrow(props: dataTypes) {
    const { className, onClick } = props;

    return (
      <div
        onClick={() => {
          onClick();
          nexHandle();
        }}
        className={`${className} ${
          isActive === 1 ? `arrow_active` : ``
        } believe_innovation_slider_arrow believe_innovation_slider_arrow_next work_arrow`}
      >
        {/* <span className="pointer-events-none inline-block w-[6px] h-[6px] rounded-full absolute left-[-10px] bg-body country_custom_arrow"></span> */}
        <HiOutlineArrowSmRight />
      </div>
    );
  }

  function PrevArrow(props: dataTypes) {
    const { className, onClick } = props;
    return (
      <div
        onClick={() => {
          onClick();
          prevHandle();
        }}
        className={`${className} ${
          isActive === 2 ? `arrow_active` : ``
        } believe_innovation_slider_arrow  believe_innovation_slider_arrow_prev work_arrow`}
      >
        <HiOutlineArrowSmLeft className="text-paragraph" />
      </div>
    );
  }

  const settings = {
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "immi_testimonial",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <section className="overflow-hidden bg-grey pt-5 lg:pt-[80px] mb-5 lg:mb-[80px]">
      <div className="container ">
        <div className="max-w-[570px] mb-[-48px] lg:mb-[-70px]">
          <span className="text-sm py-1 px-2 bg-[#FDE6E8] rounded-full text-tertiary inline-block mb-4">
            Testimonials
          </span>
          <h2 className="text-h1">What our clients say</h2>
          <p className="text-lg mb-0">
            Lorem ipsum dolor sit amet consectetur. Quis massa in fringilla sit
            sagittis consequat velit semper molestie.{" "}
          </p>
        </div>
        <div className="lg:mr-[-26vw] overflow-hidden pt-[70px] mt-10 ">
          <Slider {...settings}>
            {testimonialData.map((item, i) => {
              return (
                <TestimonialCard
                  data={item}
                  key={i}
                  classes={{ root: "mx-2 lg:m-4" }}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCaresoul;
