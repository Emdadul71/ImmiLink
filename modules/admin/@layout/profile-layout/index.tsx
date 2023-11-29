"use client";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { LuUsers2 } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";

const profileData = [
  {
    icon: <CgProfile />,
    label: "Profile",
    slug: "profile",
  },
  {
    icon: <LuUsers2 />,
    label: "Account",
    slug: "account",
  },
  {
    icon: <MdLockOutline />,
    label: "Security",
    slug: "security",
  },
  {
    icon: <FaRegFileAlt />,
    label: "Billing & Plans",
    slug: "billing",
  },
  {
    icon: <IoMdNotificationsOutline />,
    label: "Notifications",
    slug: "notification",
  },
];
const ProfileLayout = () => {
  const path = usePathname();
  const pathName = path.split("/");
  const finalPath = pathName[3];

  return (
    <section className="py-5 lg:py-[80px]">
      <div className="container">
        <div className="flex max-w-[770px] mx-auto w-full overflow-auto pb-4 lg:pb-0">
          <div className="flex gap-5 items-center ">
            {profileData?.map((item: any, i: any) => {
              return (
                <Link
                  href={`/author/settings/${item?.slug}`}
                  key={i}
                  className={`flex gap-3 items-center  rounded-md btn ${
                    item?.slug == finalPath ? " btn-primary" : ""
                  }`}
                >
                  {item?.icon}
                  <span>{item?.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileLayout;
