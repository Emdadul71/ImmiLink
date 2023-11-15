import React from "react";
import ServiceCard from "../service-card";
const serviceCard = [
  {
    imgSrc: "/images/home/service-card-1.png",
    title: "Express Entry Program",
    desc: "There are many pathways to Canadian immigration: Express Entry, Provincial Nomination, Family Class, and Business Immigration. Find out more about the many options for moving to Canada permanently!",
  },
  {
    imgSrc: "/images/home/service-card-2.png",
    title: "Work Permit in Canada ",
    desc: "There are many pathways to Canadian immigration: Express Entry, Provincial Nomination, Family Class, and Business Immigration. Find out more about the many options for moving to Canada permanently!",
  },
  {
    imgSrc: "/images/home/service-card-3.png",
    title: "Higher study in Canada",
    desc: "There are many pathways to Canadian immigration: Express Entry, Provincial Nomination, Family Class, and Business Immigration. Find out more about the many options for moving to Canada permanently!",
  },
  {
    imgSrc: "/images/home/service-card-3.png",
    title: "Visit in Canada",
    desc: "There are many pathways to Canadian immigration: Express Entry, Provincial Nomination, Family Class, and Business Immigration. Find out more about the many options for moving to Canada permanently!",
  },
  {
    imgSrc: "/images/home/service-card-2.png",
    title: "Family Sponsorship",
    desc: "There are many pathways to Canadian immigration: Express Entry, Provincial Nomination, Family Class, and Business Immigration. Find out more about the many options for moving to Canada permanently!",
  },
  {
    imgSrc: "/images/home/service-card-1.png",
    title: "Business in Canada",
    desc: "There are many pathways to Canadian immigration: Express Entry, Provincial Nomination, Family Class, ",
  },
];
const ServiceSection = () => {
  return (
    <section>
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {serviceCard?.map((item: any, i: any) => {
            return <ServiceCard data={item} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
