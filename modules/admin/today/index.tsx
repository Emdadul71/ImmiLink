"use client";
import AdvertisementLeftSide from "@/modules/frontend/@common/advertisement/left_side";
import { Modal, Tabs, TabsProps } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiCommentDots } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { FiEdit, FiEdit2, FiSearch, FiThumbsUp } from "react-icons/fi";
import { RiQuestionnaireLine } from "react-icons/ri";
import { TbSend } from "react-icons/tb";
import PostTabs from "../@common/post-tab";

const Today = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange = (key: string) => {
    console.log(key);
  };

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
          {/* left Side */}
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

          {/* Middle */}

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
                  <div
                    className="flex items-center gap-[6px] cursor-pointer"
                    onClick={() => setIsModalOpen((prev) => !prev)}
                  >
                    <RiQuestionnaireLine className="text-xs" />
                    <span className="text-xs">Ask</span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <FiEdit className="text-xs" />
                    <span className="text-xs">Answer</span>
                  </div>
                  <div
                    className="flex items-center gap-[6px] cursor-pointer"
                    onClick={() => setIsModalOpen((prev) => !prev)}
                  >
                    <FiEdit2 className="text-xs" />
                    <span className="text-xs">Post</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 bg-white border border-[#FFF5F6] rounded-md p-4 ">
              <div className="flex items-start gap-3  ">
                <div className="w-[50px] h-[50px] shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    width={50}
                    height={50}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="w-full">
                  <p className="mb-0 text-heading font-semibold mb-[6px]">
                    Jacob Jones
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="mb-0 text-xs">Experience in Immigration</p>
                    <div className="w-[2px] h-[2px] rounded-full bg-[#575757]"></div>
                    <p className="mb-0 text-xs">Oct 30</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="mb-0 font-semibold text-black">
                  My Client got refused what can i do?
                </p>
                <div>
                  <p>
                    A teen girl tells an older man in power she has never been
                    kissed. “I want it to be meaningful and am saving it for a
                    real relationship,” she adds.
                  </p>
                  <p>
                    She is from a conservative family and the first kiss carries
                    a lot of significance for her.
                  </p>
                  <p>
                    The man ignores it and puts the girl in an uncomfortable
                    position by asking for a kiss. The girl, pressured, goes to
                    kiss the cheek but the man turns his face last second to
                    kiss her on the lip without her consent.
                  </p>
                  <p className="mb-0">
                    The girl, shocked, literally falls back to the ground. The
                    man laughs.
                  </p>
                </div>
                <p className="mb-0 text-primary font-semibold">
                  #StudyAbroad #CanadaLaw
                </p>
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  width={960}
                  height={540}
                  className="w-full  object-cover "
                />
              </div>

              <div className="flex flex-col gap-[14px]">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[6px]">
                      <FiThumbsUp className="text-lg" />
                      <span className="text-sm">Like</span>
                    </div>
                    <div className="flex items-center gap-[6px]">
                      <BiCommentDots className="text-lg" />
                      <span className="text-sm">Comment</span>
                    </div>
                    <p className="mb-0 text-sm text-primary">42 Answer</p>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-[#F5F5F5]"></div>
                <div className="flex items-start gap-3">
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
                    <div className="relative">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder=" What do you want to ask or share?"
                        className="w-full py-2 px-3 bg-[#F4F7FF] rounded-md focus:outline-none"
                      />
                      <TbSend className="absolute right-[20px] top-[50%] translate-y-[-50%] text-primary" />
                    </div>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-[#F5F5F5]"></div>
                <div className="flex items-start gap-3">
                  <div className="w-[24px] h-[24px] shrink-0	">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      width={24}
                      height={24}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="flex items-center gap-2">
                      <p className="mb-0 text-heading font-semibold">
                        Jacob Jones
                      </p>
                      <div className="w-[4px] h-[4px] rounded-full bg-[#575757]"></div>
                      <p className="mb-0 text-xs">Oct 30</p>
                    </div>
                    <p className="mb-0 text-sm">
                      I am not sure pilots can watch movies or listen to music
                      as that will certainly dampen their situational awareness,
                      l maybe wrong on that. I enjoy your responses to aviation
                      questions.
                    </p>
                    <div className="flex gap-8 mb-[14px]">
                      <p className="mb-0 text-xs">21h</p>
                      <p className="mb-0 text-xs">Like</p>
                      <p className="mb-0 text-xs">Reply</p>
                    </div>
                    <div>
                      <div className="flex items-start gap-3">
                        <div className="w-[24px] h-[24px] shrink-0	">
                          <Image
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            width={24}
                            height={24}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                          <div className="flex items-center gap-2">
                            <p className="mb-0 text-heading font-semibold">
                              Jacob Jones
                            </p>
                            <div className="w-[4px] h-[4px] rounded-full bg-[#575757]"></div>
                            <p className="mb-0 text-xs">Oct 30</p>
                          </div>
                          <p className="mb-0 text-sm">
                            I am not sure pilots can watch movies or listen to
                            music as that will certainly dampen their
                            situational awareness, l maybe wrong on that. I
                            enjoy your responses to aviation questions.
                          </p>
                          <div className="flex gap-8">
                            <p className="mb-0 text-xs">21h</p>
                            <p className="mb-0 text-xs">Like</p>
                            <p className="mb-0 text-xs">Reply</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 bg-white border border-[#FFF5F6] rounded-md p-4 ">
              <div className="flex items-start gap-3  ">
                <div className="w-[50px] h-[50px] shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    width={50}
                    height={50}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="w-full">
                  <p className="mb-0 text-heading font-semibold mb-[6px]">
                    Jacob Jones
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="mb-0 text-xs">Experience in Immigration</p>
                    <div className="w-[2px] h-[2px] rounded-full bg-[#575757]"></div>
                    <p className="mb-0 text-xs">Oct 30</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <p className="mb-0 font-semibold text-black">
                  My Client got refused what can i do?
                </p>
                <div>
                  <p>
                    A teen girl tells an older man in power she has never been
                    kissed. “I want it to be meaningful and am saving it for a
                    real relationship,” she adds.
                  </p>
                  <p>
                    She is from a conservative family and the first kiss carries
                    a lot of significance for her.
                  </p>
                  <p>
                    The man ignores it and puts the girl in an uncomfortable
                    position by asking for a kiss. The girl, pressured, goes to
                    kiss the cheek but the man turns his face last second to
                    kiss her on the lip without her consent.
                  </p>
                  <p className="mb-0">
                    The girl, shocked, literally falls back to the ground. The
                    man laughs.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <p className="mb-0 text-xs">21h</p>
                    <p className="mb-0 text-xs">2 answer</p>
                    <p className="mb-0 text-xs">2 views</p>
                  </div>
                  <p className="mb-0 text-xs text-primary">42 Answer</p>
                </div>

                <div className="w-full h-[1px] bg-[#F5F5F5]"></div>

                <div className="flex items-start gap-3">
                  <div className="w-[24px] h-[24px] shrink-0	">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      width={24}
                      height={24}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <p className="mb-0 text-heading font-semibold">
                          Jacob Jones
                        </p>
                        <div className="w-[4px] h-[4px] rounded-full bg-[#575757]"></div>
                        <p className="mb-0 text-xs">
                          Experience in Immigration
                        </p>
                        <div className="w-[4px] h-[4px] rounded-full bg-[#575757]"></div>
                        <p className="mb-0 text-xs">Oct 30</p>
                      </div>
                      <p className="mb-0 text-primary text-xs"> Answer</p>
                    </div>
                    <p className="mb-0 text-sm">
                      I have immigrated to Canada and currently live in Toronto.
                      I feel kind of qualified to answer this question. The fact
                      is, you will not find everything satisfying in a country -
                      in your country or any other country. More....
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-[24px] h-[24px] shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      width={24}
                      height={24}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <p className="mb-0 text-heading font-semibold">
                          Jacob Jones
                        </p>
                        <div className="w-[4px] h-[4px] rounded-full bg-[#575757]"></div>
                        <p className="mb-0 text-xs">
                          Experience in Immigration
                        </p>
                        <div className="w-[4px] h-[4px] rounded-full bg-[#575757]"></div>
                        <p className="mb-0 text-xs">Oct 30</p>
                      </div>
                      <p className="mb-0 text-primary text-xs"> Answer</p>
                    </div>
                    <p className="mb-0 text-sm">
                      I have immigrated to Canada and currently live in Toronto.
                      I feel kind of qualified to answer this question. The fact
                      is, you will not find everything satisfying in a country -
                      in your country or any other country. More....
                    </p>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-[#F5F5F5]"></div>
                <div className="flex items-start gap-3">
                  <div className="w-[24px] h-[24px] shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      width={24}
                      height={24}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="w-full">
                    <div className="relative">
                      <textarea
                        name=""
                        id=""
                        cols={30}
                        rows={4}
                        className="w-full border focus:outline-none rounded-md placeholder:text-xs px-3 py-3"
                        placeholder="Write your answer..."
                      />
                      <TbSend className="absolute right-[20px] top-[16px] text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 bg-white border border-[#FFF5F6] rounded-md p-4 ">
              <div className="flex items-start gap-3  ">
                <div className="w-[50px] h-[50px] shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    width={50}
                    height={50}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="w-full">
                  <p className="mb-0 text-heading font-semibold mb-[6px]">
                    Jacob Jones
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="mb-0 text-xs">Experience in Immigration</p>
                    <div className="w-[2px] h-[2px] rounded-full bg-[#575757]"></div>
                    <p className="mb-0 text-xs">Oct 30</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="mb-0 font-semibold text-black">
                  My Client got refused what can i do?
                </p>
                <div>
                  <p>
                    A teen girl tells an older man in power she has never been
                    kissed. “I want it to be meaningful and am saving it for a
                    real relationship,” she adds.
                  </p>
                  <p>
                    She is from a conservative family and the first kiss carries
                    a lot of significance for her.
                  </p>
                  <p>
                    The man ignores it and puts the girl in an uncomfortable
                    position by asking for a kiss. The girl, pressured, goes to
                    kiss the cheek but the man turns his face last second to
                    kiss her on the lip without her consent.
                  </p>
                  <p className="mb-0">
                    The girl, shocked, literally falls back to the ground. The
                    man laughs.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-[14px]">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[6px]">
                      <FiThumbsUp className="text-lg" />
                      <span className="text-sm">Like</span>
                    </div>
                    <div className="flex items-center gap-[6px]">
                      <BiCommentDots className="text-lg" />
                      <span className="text-sm">Comment</span>
                    </div>
                    <p className="mb-0 text-sm text-primary">42 Answer</p>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-[#F5F5F5]"></div>
                <div className="flex items-start gap-3">
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
                    <div className="relative">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder=" What do you want to ask or share?"
                        className="w-full py-2 px-3 bg-[#F4F7FF] rounded-md focus:outline-none"
                      />
                      <TbSend className="absolute right-[20px] top-[50%] translate-y-[-50%] text-primary" />
                    </div>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-[#F5F5F5]"></div>
                <div className="flex items-start gap-3">
                  <div className="w-[24px] h-[24px] shrink-0	">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      width={24}
                      height={24}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="flex items-center gap-2">
                      <p className="mb-0 text-heading font-semibold">
                        Jacob Jones
                      </p>
                      <div className="w-[4px] h-[4px] rounded-full bg-[#575757]"></div>
                      <p className="mb-0 text-xs">Oct 30</p>
                    </div>
                    <p className="mb-0 text-sm">
                      I am not sure pilots can watch movies or listen to music
                      as that will certainly dampen their situational awareness,
                      l maybe wrong on that. I enjoy your responses to aviation
                      questions.
                    </p>
                    <div className="flex gap-8 mb-[14px]">
                      <p className="mb-0 text-xs">21h</p>
                      <p className="mb-0 text-xs">Like</p>
                      <p className="mb-0 text-xs">Reply</p>
                    </div>
                    <div>
                      <div className="flex items-start gap-3">
                        <div className="w-[24px] h-[24px] shrink-0	">
                          <Image
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            width={24}
                            height={24}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                          <div className="flex items-center gap-2">
                            <p className="mb-0 text-heading font-semibold">
                              Jacob Jones
                            </p>
                            <div className="w-[4px] h-[4px] rounded-full bg-[#575757]"></div>
                            <p className="mb-0 text-xs">Oct 30</p>
                          </div>
                          <p className="mb-0 text-sm">
                            I am not sure pilots can watch movies or listen to
                            music as that will certainly dampen their
                            situational awareness, l maybe wrong on that. I
                            enjoy your responses to aviation questions.
                          </p>
                          <div className="flex gap-8">
                            <p className="mb-0 text-xs">21h</p>
                            <p className="mb-0 text-xs">Like</p>
                            <p className="mb-0 text-xs">Reply</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right Side */}
          <AdvertisementLeftSide />
        </div>

        {/* modal */}
        <Modal
          className="post_modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
        >
          <PostTabs />
        </Modal>
      </div>
    </section>
  );
};

export default Today;
