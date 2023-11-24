"use Client";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";

export const ProfileDropdown = () => {
  const items: MenuProps["items"] = [
    {
      label: (
        <Link href="/author/settings/profile">
          <div className="flex items-center gap-3 bg-[f5f6fa]">
            <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blog Card"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <span className="font-bold block">Mizanur Rahman Khan</span>
              <span className=" block">mizan@gmail.com</span>
            </div>
          </div>
        </Link>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link href="/author/settings/profile">
          <div className="flex items-center gap-2 font-semibold">
            <AiOutlineUser className="text-xl" />
            <span className="text-[13px]"> View Profile</span>
          </div>
        </Link>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link href="/author/settings/account">
          <button>
            <div className="flex items-center gap-2 font-semibold">
              <IoIosSettings className="text-xl" />
              <span className="text-[13px]"> Account Setting</span>
            </div>
          </button>
        </Link>
      ),
      key: "2",
    },
    {
      type: "divider",
    },
    {
      label: (
        <button
        // onClick={(e) => {
        //   signOut();
        //   e.preventDefault();
        // }}
        >
          <div className="flex items-center gap-2 font-semibold">
            <FiLogOut className="text-xl" />
            <span className="text-[13px]">SignOut</span>
          </div>
        </button>
      ),
      key: "4",
    },
  ];
  return (
    <div className="w-[34px] h-[34px] flex  text-white items-center justify-center rounded-full cursor-pointer">
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        placement="topRight"
        overlayClassName="profile_dropdown"
      >
        <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full cursor-pointer">
          <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Blog Card"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </Dropdown>
    </div>
  );
};

export default ProfileDropdown;
