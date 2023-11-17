import BlogCard from "@/modules/knowledge/@components/blog-card";
import Link from "next/link";
import React from "react";

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
];

const AllPost = () => {
  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_328px] max-w-[1028px] w-full gap-[25px]">
          <div className="flex flex-col gap-[30px]">
            {blogData?.map((item: any, i: any) => {
              return (
                <div key={i}>
                  {i % 2 == 0 ? <p>28th May 2023</p> : null}
                  <BlogCard data={item} />
                </div>
              );
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

export default AllPost;
