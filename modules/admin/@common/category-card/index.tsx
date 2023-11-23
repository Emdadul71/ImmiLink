import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ data }: any) => {
  return (
    <Link href="#" className="relative ">
      <div className="cat_card w-full h-full absolute top-0 left-0 rounded-md"></div>
      <Image src={data?.imgSrc} alt="Blog Card" width={170} height={220} />
      <div className="flex justify-center">
        <p className="absolute bottom-0 p-4 mb-0 text-center font-medium text-white">
          {data?.title}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
