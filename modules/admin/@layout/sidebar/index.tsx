"use Client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiSearch, FiSidebar } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import ProfileDropdown from "../../@common/profileDropdown";
import { Button, Popover } from "antd";
import { AiOutlineUser } from "react-icons/ai";

const SideBar = () => {
  const text = <span>Title</span>;

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return (
    <div className="flex flex-col border overflow-auto h-[100vh] scroll">
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

      <div className="flex flex-col justify-between px-3 py-3 h-[calc(100%-64px)]">
        <div className="flex justify-center items-center">
          <Link href="/" className="p-3">
            <FiSidebar className="text-xl" />
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/" className="p-3">
            <FiEdit className="text-xl" />
          </Link>
          <Link href="/" className="p-3">
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
  );
};

export default SideBar;
