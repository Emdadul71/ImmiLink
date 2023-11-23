import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";

const AddPost = () => {
  return (
    <section className="py-[60px]">
      <div className="container">
        <div className="max-w-[770px] w-full mx-auto">
          <div className="flex items-center justify-between mb-[30px]">
            <div className="flex gap-3">
              <p className="mb-0 text-xs">Draft in Mohammad Mamun Hossain</p>
              <p className="mb-0 text-xs">Saving</p>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="btn btn-primary rounded-md">
                Publish
              </Link>
              <div className="flex items-center gap-3">
                <Link href="#">
                  <HiOutlineDotsHorizontal className="text-xl" />
                </Link>
                <Link href="#">
                  <IoMdNotificationsOutline className="text-xl" />
                </Link>
              </div>
              <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Blog Card"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[14px]">
            <div>
              <input
                type="text"
                name=""
                id=""
                className="w-full border py-2 px-3 focus:outline-none rounded-md"
                placeholder="Title Start Hare"
              />
            </div>
            <div>
              <Link href="#" className="btn border rounded-md">
                <CiImageOn className="text-xl" />
                <span>Add Media</span>
              </Link>
            </div>
            <div>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                className="w-full focus:outline-none border rounded-md p-3"
                placeholder="Type Here"
              />
            </div>
            <div>
              <input
                type="text"
                name=""
                id=""
                className="w-full border py-2 px-3 focus:outline-none rounded-md"
                placeholder="Meta Tags"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddPost;
