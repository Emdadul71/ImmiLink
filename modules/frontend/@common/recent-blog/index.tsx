import React from "react";
import BlogCard from "../../knowledge/@components/blog-card";
const blogData = [
  {
    imgSrc:
      "/images/blog/We’re-changing-the-way-we-identify-top-tasks-for-Canada.jpg",
    title: "We’re changing the way we identify top tasks",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
    cat: "Canada Citizenship",
  },
  {
    imgSrc: "/images/blog/Is-Canada-Safe-for-Immigrants.jpg",
    title: "Is Canada Safe for Immigrants",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
    cat: "Canada Citizenship",
  },
  {
    imgSrc:
      "/images/blog/What-to-Do-After-PGWP-Expires-5-Ways-to-Stay-in-Canada.jpg",
    title: "What to Do After PGWP Expires? – 5 Ways to Stay in Canada",
    desc: " Lorem ipsum dolor sit amet consectetur. Pellentesque arcu proin ac nunc varius fringilla. Massa habitant ipsum libero porta.",
    author: "by Adrianne Pasquarelli / 1h",
    cat: "Canada Citizenship",
  },
];

const RecentBlog = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center max-w-[290px] mx-auto mb-5 lg:mb-[40px]">
          <div>
            <span className="text-sm py-1 px-2 bg-[#FDE6E8] rounded-full text-tertiary inline-block mb-4">
              Our Recent Blogs
            </span>
          </div>
          <h2 className="text-h1 mb-0 font-semibold">Recent Blogs</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {blogData?.map((item: any, i: any) => {
            return (
              <BlogCard
                data={item}
                key={i}
                classes={{
                  root: "!grid-cols-1 lg:!self-start",
                  title: "text-lg leading-[26px] font-medium !mb-auto",
                  author: "hidden",
                  desc: "lg:hidden",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
