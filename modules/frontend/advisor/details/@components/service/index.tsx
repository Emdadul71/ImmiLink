import ServiceCard from "@/modules/frontend/home/@components/service-card";
import Link from "next/link";
import React from "react";
const serviceCard = [
  {
    imgSrc: "/images/home/Express-Entry-Program.jpg",
    title: "Express Entry Program",
    desc: "There are many pathways to Canadian immigration: Express Entry, Provincial Nomination, Family Class, and Business Immigration. Find out more about the many options for moving to Canada permanently!",
  },
  {
    imgSrc: "/images/home/Work-Permit-in-Canada.jpg",
    title: "Work Permit in Canada ",
    desc: "There are many pathways to Canadian immigration: Express Entry, Provincial Nomination, Family Class, and Business Immigration. Find out more about the many options for moving to Canada permanently!",
  },
  {
    imgSrc: "/images/home/Higher-study-in-Canada.jpg",
    title: "Higher study in Canada",
    desc: "There are many pathways to Canadian immigration: Express Entry, Provincial Nomination, Family Class, and Business Immigration. Find out more about the many options for moving to Canada permanently!",
  },
  {
    imgSrc: "/images/home/visit-in-canada.jpg",
    title: "Visit in Canada",
    desc: "There are many pathways to Canadian immigration: Express Entry, Provincial Nomination, Family Class, and Business Immigration. Find out more about the many options for moving to Canada permanently!",
  },
];
const Service = () => {
  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_328px] max-w-[1028px] w-full gap-[25px]">
          <div className="grid  lg:grid-cols-2 gap-[30px]">
            {serviceCard?.map((item: any, i: any) => {
              return <ServiceCard data={item} key={i} />;
            })}
          </div>
          <div className="p-5 bg-grey rounded-md self-start sticky top-[74px]">
            <h5>Services I provide</h5>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#" className="text-sm font-semibold">
                  Canada Citizenship
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-semibold">
                  Skilled Immigration programs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-semibold">
                  Family / spousal sponsorship
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-semibold">
                  Parents and Grandparents Program (PGP)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-semibold">
                  Admission and Study Permit
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-semibold">
                  Open Work Permit
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-semibold">
                  Start up visa program
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-semibold">
                  Visitor visa
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
