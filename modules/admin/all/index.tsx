"use client";
import { Select, Tabs, TabsProps } from "antd";
import React from "react";
import { FiSearch } from "react-icons/fi";
import CategoryCard from "../@common/category-card";
import BlogCard from "@/modules/frontend/knowledge/@components/blog-card";
import Link from "next/link";

const catCardData = [
  {
    imgSrc: "/images/misc/case.png",
    title: "Case",
  },
  {
    imgSrc: "/images/misc/cat-card-2.png",
    title: "Statutesand Regulations",
  },
  {
    imgSrc: "/images/misc/cat-card-3.png",
    title: "Board and Tribunal Decisions",
  },
  {
    imgSrc: "/images/misc/cat-card-4.png",
    title: "Rules",
  },
  {
    imgSrc: "/images/misc/cat-card-5.png",
    title: "Case",
  },
  {
    imgSrc: "/images/misc/cat-card-6.png",
    title: "Statutesand Regulations",
  },
  {
    imgSrc: "/images/misc/cat-card-7.png",
    title: "Canadian Encyclopedic Digest",
  },
  {
    imgSrc: "/images/misc/cat-card-8.png",
    title: "Texts and Annotations",
  },
];

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
];
const All = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "All Content",
      children: (
        <div className="grid grid-cols-4 gap-[30px]">
          {catCardData?.map((item: any, i: any) => {
            return <CategoryCard data={item} key={i} />;
          })}
        </div>
      ),
    },
    {
      key: "2",
      label: "Find and KeyCite by Name",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "McGill Guide",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "International",
      children: "Content of Tab Pane 3",
    },
    {
      key: "5",
      label: "Products and Features",
      children: "Content of Tab Pane 3",
    },
  ];
  return (
    <section className="pt-[60px]">
      <div className="container">
        <div className="max-w-[770px] w-full mx-auto ">
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
          <div className="mb-10">
            <Tabs
              tabBarGutter={60}
              defaultActiveKey="1"
              items={items}
              className="immi_tab"
              onChange={onChange}
            />
          </div>
          <div className="mb-10">
            <h3 className="mb-[30px]"> What news on Immilink Canada</h3>
            <div className="grid grid-cols-4 gap-[30px]">
              {blogData?.map((item: any, i: any) => {
                return (
                  <BlogCard
                    key={i}
                    data={item}
                    classes={{
                      root: "!grid-cols-1",
                      title: "hidden",
                      author: "hidden",
                      cat: "text-sm",
                    }}
                  />
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-[30px]">
              <div>
                <h3 className="mb-2"> What news on Immilink Canada</h3>
                <p>The insights you need to keepahead </p>
              </div>
              <Link href="/author/list" className="btn btn-primary rounded-md">
                View All
              </Link>
            </div>
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

export default All;
