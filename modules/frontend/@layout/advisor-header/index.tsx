"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineTags } from "react-icons/ai";
import { HiLanguage } from "react-icons/hi2";
import { RiMapPinLine } from "react-icons/ri";

const AdvisorHeader = ({ type }: any) => {
  const path = usePathname();
  const pathName = path.split("/");
  const finalPathFrontend = pathName[3];
  const finalPathAdmin = pathName[4];
  const finalPathName =
    type && type == "secure" ? finalPathAdmin : finalPathFrontend;

  return (
    <section className="py-5 lg:pt-[60px]">
      <div className="container">
        <div className="max-w-[970px] w-full">
          <Image
            src="/images/misc/advisor-details.png"
            alt="Advisor Details"
            width={960}
            height={690}
            className="w-full"
          />
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-3 lg:gap-[30px] px-[30px] pb-[30px] -mt-[40px] rounded-md border border-t-0">
            <div className="w-[125px] h-[125px]  z-10 relative rounded-md border border-[4px] border-white rounded-[6px] bg-white shrink-0	">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Advisor Details"
                width={125}
                height={125}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-3">
              <div>
                <h3 className="mb-2 text-center lg:text-start">
                  Belle Ferguson
                </h3>
                <div className="flex justify-center lg:justify-start flex-wrap gap-2 lg:gap-5">
                  <div className="flex items-center gap-2">
                    <AiOutlineTags />
                    <span>RCIC (R100200)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiMapPinLine />
                    <span>Ontario, Canada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiLanguage />
                    <span>English, French</span>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary">Follow</button>
            </div>
          </div>
          <div className="max-w-[675px]">
            <ul className="flex gap-5 lg:gap-[30px] overflow-auto">
              <li>
                <Link
                  href={`${
                    type == "secure"
                      ? `/author/advisors/${`ascdascd`}/all-post`
                      : `/advisors/${`hereWillBeName`}/all-post`
                  }`}
                  className={`inline-block py-[10px] whitespace-nowrap ${
                    finalPathName == "all-post" ? `text-primary` : ``
                  }`}
                >
                  All Post
                </Link>
              </li>
              <li>
                <Link
                  href={`${
                    type == "secure"
                      ? `/author/advisors/${`ascdascd`}/about`
                      : `/advisors/${`hereWillBeName`}/about`
                  }`}
                  className={`inline-block py-[10px] ${
                    finalPathName == "about" ? `text-primary` : ``
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={`${
                    type == "secure"
                      ? `/author/advisors/${`ascdascd`}/services`
                      : `/advisors/${`hereWillBeName`}/services`
                  }`}
                  className={`inline-block py-[10px] ${
                    finalPathName == "services" ? `text-primary` : ``
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={`${
                    type == "secure"
                      ? `/author/advisors/${`ascdascd`}/contact`
                      : `/advisors/${`hereWillBeName`}/contact`
                  }`}
                  className={`inline-block py-[10px] whitespace-nowrap ${
                    finalPathName == "contact" ? `text-primary` : ``
                  }`}
                >
                  Contact Info
                </Link>
              </li>
            </ul>
            <div className="w-full h-[2px] bg-[#f1f1f1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorHeader;
