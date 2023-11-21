"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiBookmark,
  FiChevronRight,
  FiFileText,
  FiSearch,
  FiSidebar,
} from "react-icons/fi";
import { Popover } from "antd";
import { FiEdit } from "react-icons/fi";
import { IoMdStarOutline } from "react-icons/io";
import { LuListTodo } from "react-icons/lu";

const SideBar = () => {
  const text = <span>Title</span>;

  const [isExpand, setIsExpand] = useState(false);

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return (
    <div className="flex">
      <div className="flex flex-col border overflow-auto h-[100vh] scroll ">
        <Link
          href="/author/dashboard"
          className="flex justify-center items-center py-3 sticky top-0 bg-white"
        >
          <Image
            src="/images/home/sidebar-logo.png"
            alt="Blog Card"
            width={40}
            height={40}
          />
        </Link>

        <div className="flex flex-col justify-between px-3 py-3 h-[calc(100%-64px)] z-10 relative bg-white">
          <div className="flex justify-center items-center">
            <Link
              href="#"
              className="p-3"
              onClick={() => setIsExpand((prev) => !prev)}
            >
              <FiSidebar className="text-xl" />
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link href="#" className="p-3">
              <FiEdit className="text-xl" />
            </Link>
            <Link href="#" className="p-3">
              <FiSearch className="text-xl" />
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <Popover placement="right" title={text} content={content}>
              <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Blog Card"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </Popover>
          </div>
        </div>
      </div>

      {isExpand ? (
        <div className="h-full bg-grey w-[180px] transition-all duration-[300ms] overflow-auto ">
          <ul className="flex flex-col items-start gap-3 lg:mt-[86px] overflow-auto h-[calc(100vh-86px)] scroll">
            <li className="px-5 w-full">
              <Link href="/author/today" className="flex items-center gap-3">
                <FiFileText className="text-lg" />
                <span>Today</span>
              </Link>
            </li>
            <li className="px-5 w-full">
              <Link href="#" className="flex items-center gap-3">
                <FiBookmark className="text-lg" />
                <span className="whitespace-nowrap	">Read Letter</span>
              </Link>
            </li>
            <li className="px-5 w-full">Favorites</li>
            <li className="px-5 w-full">
              <Link href="#" className="flex items-center gap-4">
                <IoMdStarOutline className="text-lg" />
                <span className="whitespace-nowrap	">Tech News</span>
              </Link>
            </li>
            <li className="px-5 w-full">
              <Link href="#" className="flex items-center gap-3">
                <IoMdStarOutline className="text-lg" />
                <span className="whitespace-nowrap	">Latest News</span>
              </Link>
            </li>
            <li className="px-5 w-full">FEED</li>
            <li className="px-5 w-full">
              <Link href="#" className="flex items-center gap-3">
                <LuListTodo className="text-lg" />
                <span className="whitespace-nowrap	">All</span>
              </Link>
            </li>
            <li className="px-5 w-full">
              <Link href="#" className="flex items-center gap-3">
                <FiChevronRight className="text-lg" />
                <span className="whitespace-nowrap	">Test</span>
              </Link>
            </li>
            <li className="px-5 w-full">
              <Link href="#" className="flex items-center gap-3">
                <FiChevronRight className="text-lg" />
                <span className="whitespace-nowrap	">Test 2</span>
              </Link>
            </li>
            <li className="px-5 w-full">
              <Link href="#" className="flex items-center justify-center gap-3">
                <span className="whitespace-nowrap	">Create folder</span>
              </Link>
            </li>
            <li className="px-5 w-full">Boards</li>
            <li className="px-5 w-full">
              <Link href="#" className="flex items-center gap-3">
                <IoMdStarOutline className="text-lg" />
                <span className="whitespace-nowrap	">Tech News</span>
              </Link>
            </li>
            <li className="px-5 w-full">
              <Link href="#" className="flex items-center gap-3">
                <IoMdStarOutline className="text-lg" />
                <span className="whitespace-nowrap	">Latest News</span>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="w-0 transition-all duration-[350ms]"></div>
      )}
    </div>
  );
};

export default SideBar;
