"use client";
import AdvertisementLeftSide from "@/modules/frontend/@common/advertisement/left_side";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiEdit, FiEdit2, FiSearch } from "react-icons/fi";
import { RiQuestionnaireLine } from "react-icons/ri";

const Today = () => {
  return (
    <section className="pt-[60px] ">
      <div className="container">
        <div className="max-w-[670px] mx-auto relative mb-10">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Here"
            className="w-full py-2 px-8 placeholder:text-sm rounded-md focus:outline-none bg-[#F4F7FF]"
          />
          <FiSearch className="absolute top-[50%] translate-y-[-50%] left-[10px] text-tertiary" />
        </div>
        <div className="grid grid-cols-[270px_1fr_170px] gap-[30px] ">
          <div className="p-5 bg-[#FFF] border border-[#FFF2F2] rounded-md self-start">
            <div className="flex items-center justify-between mb-5">
              <p className="mb-0 font-semibold text-black">Topics</p>
              <Link href="#">See All</Link>
            </div>
            <ul className="flex flex-col gap-3 list-decimal pl-4 test1">
              <li>
                <Link href="#" className="text-sm">
                  Cases
                </Link>
                <span className="block w-full h-[1px] bg-[#FFF2F2] -pl-5 my-[10px]"></span>
              </li>
              <li>
                <Link href="#" className="text-sm">
                  Statutes and Regulations
                </Link>
                <span className="block w-full h-[1px] bg-[#FFF2F2] -pl-5 my-[10px]"></span>
              </li>
              <li>
                <Link href="#" className="text-sm">
                  Board and Tribunal Decisions
                </Link>
                <span className="block w-full h-[1px] bg-[#FFF2F2] -pl-5 my-[10px]"></span>
              </li>
              <li>
                <Link href="#" className="text-sm">
                  Rules
                </Link>
                <span className="block w-full h-[1px] bg-[#FFF2F2] -pl-5 my-[10px]"></span>
              </li>
              <li>
                <Link href="#" className="text-sm">
                  Securities Regulatory Materials and Bulletins
                </Link>
                <span className="block w-full h-[1px] bg-[#FFF2F2] -pl-5 my-[10px]"></span>
              </li>
              <li>
                <Link href="#" className="text-sm">
                  Policy Documents and Directives
                </Link>
                <span className="block w-full h-[1px] bg-[#FFF2F2] -pl-5 my-[10px]"></span>
              </li>
              <li>
                <Link href="#" className="text-sm">
                  Canadian Encyclopaedic Digest
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#FFF5F6] p-5 rounded-md">
              <p className="mb-0 font-medium text-[#460208]">28562+ Members</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white border border-[#FFF5F6] rounded-md">
              <div className="w-[32px] h-[32px]">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  width={32}
                  height={32}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="w-full">
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=" What do you want to ask or share?"
                    className="w-full py-2 px-3 bg-[#F4F7FF] rounded-md mb-4 focus:outline-none"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px]">
                    <RiQuestionnaireLine className="text-xs" />
                    <span className="text-xs">Ask</span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <FiEdit className="text-xs" />
                    <span className="text-xs">Answer</span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <FiEdit2 className="text-xs" />
                    <span className="text-xs">Post</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <AdvertisementLeftSide />
        </div>
      </div>
    </section>
  );
};

export default Today;
