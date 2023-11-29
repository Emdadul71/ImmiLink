"use client";
import React, { Fragment, useState } from "react";
import {
  BsCreditCard2BackFill,
  BsDice3Fill,
  BsDisplayFill,
} from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import paymentFaq from "../../../../helpers/data/payments.json";
import monitoringFaq from "../../../../helpers/data/monitoring.json";
import notificationsFaq from "../../../../helpers/data/notification.json";
import statusFaq from "../../../../helpers/data/status.json";
import otherFaq from "../../../../helpers/data/other.json";
import Faq from "@/modules/admin/@common/faq";

const tabData = [
  {
    id: 1,
    title: "Payments (5)",
    slug: "payments",
    icon: <BsCreditCard2BackFill />,
  },
  {
    id: 2,
    title: "Monitoring (9)",
    slug: "monitoring",
    icon: <BsDisplayFill />,
  },
  {
    id: 3,
    title: "Notifications (21)",
    slug: "notifications",
    icon: <IoMdNotifications />,
  },
  {
    id: 4,
    title: "Status Page (12)",
    slug: "status",
    icon: <HiOutlineStatusOnline />,
  },
  {
    id: 5,
    title: "Other (13)",
    slug: "other",
    icon: <BsDice3Fill />,
  },
];

const FaqModule = () => {
  const [tab, setTab] = useState("payments");
  const [activeNumber, setActiveNumber] = useState(0);

  return (
    <Fragment>
      <section className="relative">
        <div
          className="absolute w-[40vw] h-3/4 left-0 top-[50px] bg-primary opacity-[.07] blur-[158px] z-[-1]"
          style={{ filter: "blur(158px)" }}
        ></div>
        <div
          className="absolute w-[40vw] h-3/4 right-0 top-[50px] bg-secondary opacity-[.07] blur-[158px] z-[-1]"
          style={{ filter: "blur(158px)" }}
        ></div>

        <div className="container">
          <div className="max-w-[1110px] w-full mx-auto">
            <div className="heading_wrapper flex flex-col justify-center items-center pt-[100px] pb-5 lg:pb-[60px]">
              <h1 className="text-primary mb-[30px] text-center lg:text-start">
                How can we<span className="text-secondary"> help you?</span>{" "}
              </h1>
              <div className="max-w-[500px] w-full relative">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Type keywords to find an aswer..."
                  className="py-[10px] pl-[50px] pr-4 w-full outline-none shadow-[0_10px_46px_rgba(0,0,0,0.05)]"
                />
                <FiSearch className="absolute top-[14px] left-[24px]" />
              </div>
            </div>
            <div className="grid lg:grid-cols-[270px_1fr] gap-5 lg:gap-[40px] z-50">
              <div className="flex flex-col gap-[20px] cursor-pointer p-5 lg:p-[40px] bg-[#ffffff] rounded-[6px] self-start">
                {tabData.map((item, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        setTab(item.slug);
                        setActiveNumber(i);
                      }}
                      className={`${
                        activeNumber === i ? "text-primary font-bold" : ""
                      } flex items-center gap-[15px]  transition-all`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <p className="text-lg mb-0">{item.title}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                {tab === "payments" && <Faq data={paymentFaq} />}
                {tab === "monitoring" && <Faq data={monitoringFaq} />}
                {tab === "notifications" && <Faq data={notificationsFaq} />}
                {tab === "status" && <Faq data={statusFaq} />}
                {tab === "other" && <Faq data={otherFaq} />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FaqModule;
