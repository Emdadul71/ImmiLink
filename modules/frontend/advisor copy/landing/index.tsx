import React from "react";
import AdvisorCard from "../../home/@components/advisor-card";

const advisorsData = [
  {
    name: "Michael M. Walton",
    imgSrc: "/images/home/advisor-1.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
  {
    name: "Ashley E. Sanchez",
    imgSrc: "/images/home/advisor-2.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
  {
    name: "Curtis K. Focht",
    imgSrc: "/images/home/advisor-3.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
  {
    name: "Ruben S. Williams",
    imgSrc: "/images/home/advisor-4.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
  {
    name: "Cecil A. Preston",
    imgSrc: "/images/home/advisor-2.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
  {
    name: "Martin M. Brown",
    imgSrc: "/images/home/advisor-3.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
  {
    name: "Mason R. Stagg",
    imgSrc: "/images/home/advisor-4.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
  {
    name: "James C. Obrien",
    imgSrc: "/images/home/advisor-1.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
  {
    name: "Michael M. Walton",
    imgSrc: "/images/home/advisor-1.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
  {
    name: "Ashley E. Sanchez",
    imgSrc: "/images/home/advisor-2.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
  {
    name: "Curtis K. Focht",
    imgSrc: "/images/home/advisor-3.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
  {
    name: "Ruben S. Williams",
    imgSrc: "/images/home/advisor-4.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
  {
    name: "Cecil A. Preston",
    imgSrc: "/images/home/advisor-2.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
  {
    name: "Martin M. Brown",
    imgSrc: "/images/home/advisor-3.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
  {
    name: "Mason R. Stagg",
    imgSrc: "/images/home/advisor-4.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
  {
    name: "James C. Obrien",
    imgSrc: "/images/home/advisor-1.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
  {
    name: "Cecil A. Preston",
    imgSrc: "/images/home/advisor-2.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
  {
    name: "Martin M. Brown",
    imgSrc: "/images/home/advisor-3.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
  {
    name: "Mason R. Stagg",
    imgSrc: "/images/home/advisor-4.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
  {
    name: "James C. Obrien",
    imgSrc: "/images/home/advisor-1.png",
    timeLine: "Member Since October 4, 2023",
    slug: "/advisors/all-post",
  },
];
const AdvisorLanding = () => {
  return (
    <section className="py-5 lg:py-[80px]">
      <div className="container">
        <div className="max-w-[770px] mx-auto flex flex-col justify-center items-center lg:mb-[50px]">
          <h2 className="text-h1 text-center font-semibold">
            Our Enlisted Immigration Advisors
          </h2>
          <p className="text-lg">Experts, Visionaries and ACHIEVERS</p>
        </div>
        <div className="grid lg:grid-cols-4 gap-[30px] lg:mb-[50px]">
          {advisorsData?.map((item: any, i: any) => {
            return <AdvisorCard data={item} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvisorLanding;
