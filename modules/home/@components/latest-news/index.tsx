"use client";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import TestimonialCard from "@/modules/@common/testimonial-card";
import BlogCard from "@/modules/knowledge/@components/blog-card";

const blogData = [
  {
    imgSrc: "/images/blog/blog-card-1.png",
    title: "Canadian Guide to Uniform Legal Citation (McGill Guide)",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
  },
  {
    imgSrc: "/images/blog/blog-card-1.png",
    title: "Canadian Guide to Uniform Legal Citation (McGill Guide)",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
  },
  {
    imgSrc: "/images/blog/blog-card-1.png",
    title: "Canadian Guide to Uniform Legal Citation (McGill Guide)",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
  },
  {
    imgSrc: "/images/blog/blog-card-1.png",
    title: "Canadian Guide to Uniform Legal Citation (McGill Guide)",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
  },
  {
    imgSrc: "/images/blog/blog-card-1.png",
    title: "Canadian Guide to Uniform Legal Citation (McGill Guide)",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
  },
  {
    imgSrc: "/images/blog/blog-card-1.png",
    title: "Canadian Guide to Uniform Legal Citation (McGill Guide)",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
  },
  {
    imgSrc: "/images/blog/blog-card-1.png",
    title: "Canadian Guide to Uniform Legal Citation (McGill Guide)",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
  },
  {
    imgSrc: "/images/blog/blog-card-1.png",
    title: "Canadian Guide to Uniform Legal Citation (McGill Guide)",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
  },
  {
    imgSrc: "/images/blog/blog-card-1.png",
    title: "Canadian Guide to Uniform Legal Citation (McGill Guide)",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
  },
  {
    imgSrc: "/images/blog/blog-card-1.png",
    title: "Canadian Guide to Uniform Legal Citation (McGill Guide)",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
  },
];

const LatestNews = () => {
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
    className: "believe_innovation",
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
        <div className="flex justify-between items-center mb-[-48px] lg:mb-[-70px]">
          <h2 className="text-h1 mb-0">Latest News</h2>
          <p className="text-lg mb-0">All News</p>
        </div>
        <div className="lg:mr-[-26vw] overflow-hidden pt-[60px] mt-10 ">
          <Slider {...settings}>
            {blogData.map((item, i) => {
              return (
                <BlogCard
                  data={item}
                  key={i}
                  classes={{
                    root: "mx-2 lg:m-4 !grid-cols-1",
                    title: "!text-lg",
                    desc: "hidden",
                  }}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
