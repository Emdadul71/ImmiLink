"use client";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import {
  FiBookmark,
  FiChevronRight,
  FiFileText,
  FiSearch,
  FiSidebar,
} from "react-icons/fi";
import navData from "@/helpers/data/nav.json";
import { BiMenuAltLeft } from "react-icons/bi";

import { Drawer, DrawerProps, Popover, RadioChangeEvent, Tooltip } from "antd";
import { FiEdit } from "react-icons/fi";
import { IoMdStarOutline } from "react-icons/io";
import { LuListTodo } from "react-icons/lu";
import { MdOutlineExplore, MdOutlineHelpOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { RiDiscussLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import ProfileDropdown from "@/modules/admin/@common/profileDropdown";

const CommonSideBar = ({ setOpen, open, isDrawerTrue = false }: any) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <>
      <div
        className={`block lg:hidden fixed top-0 py-4 w-full !bg-white z-20 px-0 ${
          isDrawerTrue ? `hidden` : ``
        }`}
        onClick={() => setOpen((prev: any) => !prev)}
      >
        <span className="px-5 inline-block">
          <BiMenuAltLeft className="text-2xl" />
        </span>
      </div>

      <div className="flex">
        <div
          className={`flex-col border overflow-auto  scroll ${
            isDrawerTrue ? `h-[calc(100vh-70px)]` : `hidden lg:flex h-[100vh]`
          }`}
        >
          <Link
            href="/author/dashboard"
            className="flex justify-center items-center py-3 sticky top-0  bg-white "
          >
            <Image
              src="/images/home/sidebar-logo.png"
              alt="Blog Card"
              width={40}
              height={40}
            />
          </Link>

          <div className="flex flex-col justify-between px-3 py-3 h-[calc(100%-64px)] z-30 relative bg-white">
            <div className="flex justify-center items-center">
              <Link
                href="#"
                className="p-3"
                onClick={() => setIsExpand((prev) => !prev)}
              >
                <FiSidebar className="text-xl" />
              </Link>
            </div>

            <div className="flex flex-col items-center bg-white">
              <Tooltip placement="right" title={"Create Post"}>
                <Link
                  href="/author/add-post"
                  className="p-3"
                  onClick={() => setOpen(() => false)}
                >
                  <FiEdit className="text-xl" />
                </Link>
              </Tooltip>

              <Tooltip placement="right" title={"Discussion"}>
                <Link
                  href="/author/discussion"
                  className="p-3"
                  onClick={() => setOpen(() => false)}
                >
                  <RiDiscussLine className="text-xl" />
                </Link>
              </Tooltip>

              <Tooltip placement="right" title={"Explore"}>
                <Link
                  href="/author/today"
                  className="p-3"
                  onClick={() => setIsExpand(() => false)}
                >
                  <MdOutlineExplore className="text-[22px]" />
                </Link>
              </Tooltip>
              <Tooltip placement="right" title={"Member"}>
                <Link
                  href="/author/advisors"
                  className="p-3"
                  onClick={() => setOpen(() => false)}
                >
                  <FaRegUser className="text-[20px]" />
                </Link>
              </Tooltip>

              <Tooltip placement="right" title={"Help"}>
                <Link
                  href="/author/help"
                  className="p-3"
                  title="Help"
                  onClick={() => setOpen(() => false)}
                >
                  <MdOutlineHelpOutline className="text-[22px]" />
                </Link>
              </Tooltip>
            </div>

            {/* <div className="flex justify-center items-center pb-3">
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
          </div> */}
            <ProfileDropdown />
          </div>
        </div>

        {isExpand ? (
          <div
            className={`h-full bg-grey  transition-all duration-[300ms] overflow-auto ${
              isDrawerTrue ? `w-[calc(100vw-64px)]` : `w-[180px]`
            }`}
          >
            <ul className="flex flex-col items-start gap-3 mt-[80px] lg:mt-[86px] overflow-auto h-[calc(100vh-86px)] scroll pb-3">
              <li className="px-5 w-full">
                <Link
                  href="/author/today"
                  className="flex items-center gap-3"
                  onClick={() => setOpen(() => false)}
                >
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
                <Link href="/author/all" className="flex items-center gap-3">
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
                <Link
                  href="#"
                  className="flex items-center justify-center gap-3"
                >
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
              <li className="px-5 w-full">
                <Link href="/author/list" className="flex items-center gap-3">
                  <IoMdStarOutline className="text-lg" />
                  <span className="whitespace-nowrap	">List</span>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="w-0 transition-all duration-[350ms]"></div>
        )}
      </div>
    </>
  );
};

export default CommonSideBar;
