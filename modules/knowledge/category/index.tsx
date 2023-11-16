import React from "react";
import BlogCard from "../@components/blog-card";
import Link from "next/link";
import { GoPlus } from "react-icons/go";
import { FiSearch } from "react-icons/fi";

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
const BlogCategory = () => {
  return (
    <>
      <section className="bg-grey py-8">
        <div className="container">
          <div className="relative">
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
      </section>
      <section className="py-5 lg:py-[80px]">
        <div className="container">
          <div className="grid lg:grid-cols-[270px_1fr] gap-[30px]">
            <div>
              <p className="text-secondary font-semibold">Topics</p>
              <ul className="flex flex-col gap-[12px]">
                <li>
                  <Link
                    href="/knowledge/category/canada-citizenship"
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
                        href="/knowledge/category/canada-citizenship"
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
                        href="/knowledge/category/canada-citizenship"
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
                    href="/knowledge/category/skilled-immigration-programs"
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
                    href="/knowledge/category/canada-citizenship"
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
                    href="/knowledge/category/canada-citizenship"
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
                    href="/knowledge/category/canada-citizenship"
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
                    href="/knowledge/category/canada-citizenship"
                    className="flex items-start gap-1"
                  >
                    <GoPlus className="font-bold" />
                    <span className="text-sm font-bold">Open Work Permit</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/knowledge/category/canada-citizenship"
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
                    href="/knowledge/category/canada-citizenship"
                    className="flex items-start gap-1"
                  >
                    <GoPlus className="font-bold" />
                    <span className="text-sm font-bold">Visitor visa</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6">Canada Citizenship</h3>
              <div className="flex flex-col gap-[30px]">
                {blogData?.map((item: any, i: any) => {
                  return <BlogCard key={i} data={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCategory;
