import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propsType {
  data?: any;
}
const AdvisorCard = ({ data }: propsType) => {
  return (
    <Link href="#" className="flex flex-col group">
      <div>
        <Image
          src={data?.imgSrc}
          alt="CEO"
          width={270}
          height={290}
          className="w-full"
        />
      </div>
      <div className="flex flex-col h-full p-5 text-center rounded-b-md  mt-auto">
        <h4 className="mb-1 group-hover:text-primary transition-all">
          {data?.name}
        </h4>
        <p className="mb-0 mt-auto text-lg group-hover:text-body">
          Member Since October 4, 2023
        </p>
      </div>
    </Link>
  );
};

export default AdvisorCard;
