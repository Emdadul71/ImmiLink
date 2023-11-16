import Image from "next/image";
import React from "react";
import { MdOutlineStar } from "react-icons/md";

interface propTypes {
  classes?: {
    root?: any;
  };
  data?: any;
}
const TestimonialCard = ({ classes }: propTypes) => {
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
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="sdgsv"
                width={80}
                height={80}
                className="w-full object-cover h-full rounded-full"
              />
            </div>
            <p className="mb-0 text-xl font-bold text-black">
              Cameron Williamson
            </p>
          </div>
          <p className="mb-0">
            Aku cocok menggunakan produk night cream white secret dari wardah
            ini. Buat kulit wajahku terasa lem
          </p>
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
