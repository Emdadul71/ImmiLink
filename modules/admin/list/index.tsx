"use client";

import BlogCard from "@/modules/frontend/knowledge/@components/blog-card";
import { Select } from "antd";
import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
const blogData = [
  {
    imgSrc:
      "/images/blog/We’re-changing-the-way-we-identify-top-tasks-for-Canada.jpg",
    title: "We’re changing the way we identify top tasks",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
    cat: "Study In Canada",
    catSlug: "/knowledge/category/study-in-canada",
  },
  {
    imgSrc:
      "/images/blog/What-to-Do-After-PGWP-Expires-5-Ways-to-Stay-in-Canada.jpg",
    title: "What to Do After PGWP Expires? – 5 Ways to Stay in Canada",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
    cat: "Study In Canada",
    catSlug: "/knowledge/category/study-in-canada",
  },
  {
    imgSrc: "/images/blog/Is-Canada-Safe-for-Immigrants.jpg",
    title: "Is Canada Safe for Immigrants",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
    cat: "Study In Canada",
    catSlug: "/knowledge/category/study-in-canada",
  },
  {
    imgSrc:
      "/images/blog/Do-I-Need-an-eTA-for-Canada-–-Electronic-Travel-Authorization.jpg",
    title: "Do I Need an eTA for Canada? – Electronic Travel Authorization",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
    cat: "Study In Canada",
    catSlug: "/knowledge/category/study-in-canada",
  },
  {
    imgSrc:
      "/images/blog/We’re-changing-the-way-we-identify-top-tasks-for-Canada.jpg",
    title: "We’re changing the way we identify top tasks",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
    cat: "Study In Canada",
    catSlug: "/knowledge/category/study-in-canada",
  },
  {
    imgSrc:
      "/images/blog/What-to-Do-After-PGWP-Expires-5-Ways-to-Stay-in-Canada.jpg",
    title: "What to Do After PGWP Expires? – 5 Ways to Stay in Canada",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
    cat: "Study In Canada",
    catSlug: "/knowledge/category/study-in-canada",
  },
  {
    imgSrc: "/images/blog/Is-Canada-Safe-for-Immigrants.jpg",
    title: "Is Canada Safe for Immigrants",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
    cat: "Study In Canada",
    catSlug: "/knowledge/category/study-in-canada",
  },
  {
    imgSrc:
      "/images/blog/Do-I-Need-an-eTA-for-Canada-–-Electronic-Travel-Authorization.jpg",
    title: "Do I Need an eTA for Canada? – Electronic Travel Authorization",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
    cat: "Study In Canada",
    catSlug: "/knowledge/category/study-in-canada",
  },
];
const List = ({ type }: any) => {
  console.log("type", type);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <section className="bg-grey py-8">
        <div className="container">
          <div className="max-w-[770px] mx-auto w-full">
            <div className="flex items-center ">
              <Select
                defaultValue="Latest"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "Latest", label: "Latest" },
                  { value: "Tech", label: "Tech" },
                  { value: "Entertainment", label: "Entertainment" },
                ]}
              />
              <div className="max-w-[630px] w-full  mx-auto relative">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search Here"
                  className="w-full py-2 px-8 placeholder:text-sm rounded-md focus:outline-none bg-grey"
                />
                <FiSearch className="absolute top-[50%] translate-y-[-50%] left-[10px] " />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-8 pb-10">
        <div className="container">
          {/* <div className="max-w-[770px] mx-auto w-full">
            <div className="flex items-center mb-6 lg:mb-[60px]">
              <Select
                defaultValue="Latest"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "Latest", label: "Latest" },
                  { value: "Tech", label: "Tech" },
                  { value: "Entertainment", label: "Entertainment" },
                ]}
              />
              <div className="max-w-[630px] w-full  mx-auto relative">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search Here"
                  className="w-full py-2 px-8 placeholder:text-sm rounded-md focus:outline-none bg-[#F4F7FF]"
                />
                <FiSearch className="absolute top-[50%] translate-y-[-50%] left-[10px] text-tertiary" />
              </div>
            </div>
            <div>
            <div className="grid grid-cols-1 gap-[30px]">
              {blogData?.map((item: any, i: any) => {
                return (
                  <BlogCard key={i} data={item} classes={{ cat: "hidden" }} />
                );
              })}
            </div>
          </div> 
          </div> */}
          <div className="max-w-[1170px] mx-auto w-full">
            <div className="grid lg:grid-cols-[270px_1fr] gap-[30px]">
              <div>
                <p className="text-secondary font-semibold">Topics</p>
                <ul className="flex flex-col gap-[12px]">
                  <li>
                    <Link
                      href={`${
                        type == "secure"
                          ? "/author/blog/category/canadian-citizen"
                          : "/knowledge/category/canada-citizenship"
                      }`}
                      className="flex items-start gap-1 mb-3"
                    >
                      <GoPlus className="font-bold" />
                      <span className="text-sm font-bold">
                        Canada Citizenship
                      </span>
                    </Link>
                    <ul className="flex flex-col gap-3 pl-5">
                      <li>
                        <Link
                          href={`${
                            type == "secure"
                              ? "/author/blog/category/canadian-citizen"
                              : "/knowledge/category/canada-citizenship"
                          }`}
                          className="flex items-start gap-1"
                        >
                          <GoPlus className="font-bold" />
                          <span className="text-sm font-bold">
                            Canada Citizenship
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`${
                            type == "secure"
                              ? "/author/blog/category/canadian-citizen"
                              : "/knowledge/category/canada-citizenship"
                          }`}
                          className="flex items-start gap-1"
                        >
                          <GoPlus className="font-bold" />
                          <span className="text-sm font-bold">
                            Canada Citizenship
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      href={`${
                        type == "secure"
                          ? "/author/blog/category/canadian-citizen"
                          : "/knowledge/category/canada-citizenship"
                      }`}
                      className="flex items-start gap-1"
                    >
                      <GoPlus className="font-bold" />
                      <span className="text-sm font-bold">
                        Skilled Immigration programs
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${
                        type == "secure"
                          ? "/author/blog/category/canadian-citizen"
                          : "/knowledge/category/canada-citizenship"
                      }`}
                      className="flex items-start gap-1"
                    >
                      <GoPlus className="font-bold" />
                      <span className="text-sm font-bold">
                        Family / spousal sponsorship
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${
                        type == "secure"
                          ? "/author/blog/category/canadian-citizen"
                          : "/knowledge/category/canada-citizenship"
                      }`}
                      className="flex items-start gap-1"
                    >
                      <GoPlus className="font-bold" />
                      <span className="text-sm font-bold">
                        Parents and Grandparents Program (PGP)
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${
                        type == "secure"
                          ? "/author/blog/category/canadian-citizen"
                          : "/knowledge/category/canada-citizenship"
                      }`}
                      className="flex items-start gap-1"
                    >
                      <GoPlus className="font-bold" />
                      <span className="text-sm font-bold">
                        Admission and Study Permit
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${
                        type == "secure"
                          ? "/author/blog/category/canadian-citizen"
                          : "/knowledge/category/canada-citizenship"
                      }`}
                      className="flex items-start gap-1"
                    >
                      <GoPlus className="font-bold" />
                      <span className="text-sm font-bold">
                        Open Work Permit
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${
                        type == "secure"
                          ? "/author/blog/category/canadian-citizen"
                          : "/knowledge/category/canada-citizenship"
                      }`}
                      className="flex items-start gap-1"
                    >
                      <GoPlus className="font-bold" />
                      <span className="text-sm font-bold">
                        Start up visa program
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${
                        type == "secure"
                          ? "/author/blog/category/canadian-citizen"
                          : "/knowledge/category/canada-citizenship"
                      }`}
                      className="flex items-start gap-1"
                    >
                      <GoPlus className="font-bold" />
                      <span className="text-sm font-bold">Visitor visa</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-5">Blog</h2>
                <div className="flex flex-col gap-[30px]">
                  {blogData?.map((item: any, i: any) => {
                    return <BlogCard key={i} data={item} type={type} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default List;
