import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propsType {
  classes?: {
    root?: any;
    image?: any;
    body?: any;
    title?: any;
    desc?: any;
    author?: any;
  };
  data?: any;
}
const BlogCard = ({ classes, data }: propsType) => {
  return (
    <Link
      href="/blog/canadian-guide"
      className={`grid lg:grid-cols-[270px_1fr] items-center gap-4 group hover:text-inherit ${
        classes?.root ? classes.root : ``
      }`}
    >
      <div>
        <Image
          src={data?.imgSrc}
          alt="Blog Card"
          width={270}
          height={152}
          className={`w-full ${classes?.image ? classes.image : ``}`}
        />
      </div>
      <div
        className={`flex flex-col gap-[6px] ${
          classes?.body ? classes.body : ``
        }`}
      >
        <h3
          className={`mb-0 group-hover:text-primary transition-all ${
            classes?.title ? classes.title : ``
          }`}
        >
          {data?.title}
        </h3>
        <p
          className={`text-xs mb-0 text-inherit group-hover:text-inherit ${
            classes?.desc ? classes.desc : ``
          }`}
        >
          {data?.desc}
        </p>
        <p
          className={`mb-0 text-black ${classes?.author ? classes.author : ``}`}
        >
          {data?.author}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
