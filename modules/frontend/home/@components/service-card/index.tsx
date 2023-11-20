import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

interface propsType {
  data?: any;
}

const ServiceCard = ({ data }: propsType) => {
  return (
    <Link href="/knowledge" className="flex flex-col group bg-[#F8FAFF]">
      <div>
        <Image
          src={data?.imgSrc}
          alt="CEO"
          width={270}
          height={290}
          className="w-full"
        />
      </div>

      <div className="flex flex-col gap-4 h-full p-[30px] text-center rounded-b-md  mt-auto relative">
        <div>
          <h4 className="mb-1 group-hover:text-primary transition-all">
            {data?.title}
          </h4>
          <p className="mb-0 mt-auto group-hover:text-body">{data?.desc}</p>
        </div>
        <div className="relative pb-7 mt-auto">
          <div className="flex justify-center mt-auto  relative">
            <FiArrowRight className="text-2xl text-primary absolute left-[50%] translate-x-[-50%] absolute group-hover:left-[calc(100%-15px)] transition-all duration-[350ms]" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
