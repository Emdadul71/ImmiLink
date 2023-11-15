import React from "react";
import AdvisorCard from "../advisor-card";
import Link from "next/link";

const advisorsData = [
  {
    name: "Courtney Henry",
    imgSrc: "/images/home/advisor-1.png",
    timeLine: "Member Since October 4, 2023",
  },
  {
    name: "Courtney Henry",
    imgSrc: "/images/home/advisor-2.png",
    timeLine: "Member Since October 4, 2023",
  },
  {
    name: "Courtney Henry",
    imgSrc: "/images/home/advisor-3.png",
    timeLine: "Member Since October 4, 2023",
  },
  {
    name: "Courtney Henry",
    imgSrc: "/images/home/advisor-4.png",
    timeLine: "Member Since October 4, 2023",
  },
  {
    name: "Courtney Henry",
    imgSrc: "/images/home/advisor-2.png",
    timeLine: "Member Since October 4, 2023",
  },
  {
    name: "Courtney Henry",
    imgSrc: "/images/home/advisor-3.png",
    timeLine: "Member Since October 4, 2023",
  },
  {
    name: "Courtney Henry",
    imgSrc: "/images/home/advisor-4.png",
    timeLine: "Member Since October 4, 2023",
  },
  {
    name: "Courtney Henry",
    imgSrc: "/images/home/advisor-1.png",
    timeLine: "Member Since October 4, 2023",
  },
];
const ImmigrationAdvisors = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-[770px] mx-auto flex flex-col justify-center items-center lg:mb-[50px]">
          <h2 className="text-h2 text-center font-semibold">
            Our Enlisted Immigration Advisors
          </h2>
          <p className="text-lg">Experts, Visionaries and ACHIEVERS</p>
        </div>
        <div className="grid lg:grid-cols-4 gap-[30px] lg:mb-[50px]">
          {advisorsData?.map((item: any, i: any) => {
            return <AdvisorCard data={item} key={i} />;
          })}
        </div>
        <div className="flex justify-center">
          <Link href="#" className="btn btn-primary">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImmigrationAdvisors;
