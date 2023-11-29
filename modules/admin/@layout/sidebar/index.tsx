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
import ProfileDropdown from "../../@common/profileDropdown";
import { usePathname } from "next/navigation";
import CommonSideBar from "./common-sidebar";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const path = usePathname();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  const [selected, setSelected] = useState(null);

  const toggle = (i: any) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const text = <span>Title</span>;

  return (
    <>
      <CommonSideBar setOpen={setOpen} open={open} />
      <Drawer
        title={
          <Link
            href="/author/dashboard"
            className="flex items-center sticky top-0  bg-white "
          >
            <Image
              src="/images/misc/immi-link-logo.png"
              alt="Blog Card"
              width={140}
              height={40}
            />
          </Link>
        }
        placement={placement}
        onClose={onClose}
        open={open}
        key={placement}
        className="immi_drawer"
      >
        <CommonSideBar isDrawerTrue={true} />
      </Drawer>
    </>
  );
};

export default SideBar;
