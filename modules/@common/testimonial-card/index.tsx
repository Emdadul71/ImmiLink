import Image from "next/image";
import React from "react";
import { MdOutlineStar } from "react-icons/md";

interface propTypes {
  classes?: {
    root?: any;
  };
  data?: any;
}
const TestimonialCard = ({ classes, data }: propTypes) => {
  return (
    <div
      className={`p-5 lg:p-[30px] bg-white ${
        classes?.root ? classes.root : ``
      }`}
    >
      <div className="flex flex-col gap-[30px]">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-[80px] h-[80px] rounded-full">
              <Image
                src={data?.imgSrc}
                alt="sdgsv"
                width={80}
                height={80}
                className="w-full object-cover h-full rounded-full"
              />
            </div>
            {data?.name && (
              <p className="mb-0 text-xl font-bold text-black">{data?.name}</p>
            )}
          </div>
          <p className="mb-0">{data?.desc}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 mt-auto">
            {new Array(4).fill(1).map((_, i) => {
              return (
                <MdOutlineStar key={i} className="text-[#FBC91B] text-[26px]" />
              );
            })}
            {new Array(1).fill(1).map((_, i) => {
              return (
                <MdOutlineStar key={i} className="text-greylight text-[26px]" />
              );
            })}
          </div>
          <p className="mb-0 text-xs">15 November</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
