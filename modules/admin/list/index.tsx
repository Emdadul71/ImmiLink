"use client";

import BlogCard from "@/modules/frontend/knowledge/@components/blog-card";
import { Select } from "antd";
import React from "react";
import { FiSearch } from "react-icons/fi";
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
const List = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <section className="pt-8 pb-10">
      <div className="container">
        <div className="max-w-[770px] mx-auto w-full">
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
        </div>
      </div>
    </section>
  );
};

export default List;
