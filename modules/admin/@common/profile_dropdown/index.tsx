import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";

export const ProfileDropdown = ({ profileData }: any) => {
  const nameSplit = profileData?.name?.split("");

  // const localStorageToken = JSON.parse(localStorage.getItem("auth")!);

  const items: MenuProps["items"] = [
    {
      label: (
        <Link href="/settings/profile">
          <div className="flex items-center gap-3 bg-[f5f6fa]">
            <div className="flex justify-center items-center font-bold w-[40px] h-[40px] bg-primary rounded-full text-white">
              {profileData?.name && nameSplit[0]}
            </div>
            <div>
              <span className="font-bold block">{profileData?.name}</span>
              <span className=" block">{profileData?.email}</span>
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
        <Link href="/settings/profile">
          <div className="flex items-center gap-2 font-semibold">
            <AiOutlineUser className="text-xl" />
            <span className="text-[13px]"> View Profile</span>
          </div>
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link href="/settings/password">
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
        <div>
          <button>
            <div className="flex items-center gap-2 font-semibold">
              <FiLogOut className="text-xl" />
              <span className="text-[13px]">SignOut</span>
            </div>
          </button>
        </div>
      ),
      key: "4",
    },
  ];
  return (
    <div className="w-[34px] h-[34px] flex bg-primary text-white items-center justify-center rounded-full cursor-pointer">
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        placement="bottomRight"
        overlayClassName="profile_dropdown"
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <AiOutlineUser className="text-white" />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default ProfileDropdown;
