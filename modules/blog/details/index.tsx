import { readingTime } from "@/helpers/utils";
import SocialShare from "@/modules/@common/social_share";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdSend } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { LiaCommentsSolid } from "react-icons/lia";

const BlogDetails = () => {
  return (
    <section className="py-5 lg:py-[80px]">
      <div className="container">
        <div className="max-w-[1070px] grid lg:grid-cols-[270px_1fr] gap-[30px]">
          <div>
            <p className="text-secondary font-semibold">Topics</p>
            <ul className="flex flex-col gap-[12px]">
              <li>
                <Link href="#" className="flex items-start gap-1 mb-3">
                  <GoPlus className="font-bold" />
                  <span className="text-sm font-bold">Canada Citizenship</span>
                </Link>
                <ul className="flex flex-col gap-3 pl-5">
                  <li>
                    <Link href="#" className="flex items-start gap-1">
                      <GoPlus className="font-bold" />
                      <span className="text-sm font-bold">
                        Canada Citizenship
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-start gap-1">
                      <GoPlus className="font-bold" />
                      <span className="text-sm font-bold">
                        Canada Citizenship
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#" className="flex items-start gap-1">
                  <GoPlus className="font-bold" />
                  <span className="text-sm font-bold">
                    Skilled Immigration programs
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-start gap-1">
                  <GoPlus className="font-bold" />
                  <span className="text-sm font-bold">
                    Family / spousal sponsorship
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-start gap-1">
                  <GoPlus className="font-bold" />
                  <span className="text-sm font-bold">
                    Parents and Grandparents Program (PGP)
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-start gap-1">
                  <GoPlus className="font-bold" />
                  <span className="text-sm font-bold">
                    Admission and Study Permit
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-start gap-1">
                  <GoPlus className="font-bold" />
                  <span className="text-sm font-bold">Open Work Permit</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-start gap-1">
                  <GoPlus className="font-bold" />
                  <span className="text-sm font-bold">
                    Start up visa program
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-start gap-1">
                  <GoPlus className="font-bold" />
                  <span className="text-sm font-bold">Visitor visa</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-7">
              <Image
                src="/images/blog/blog-deatils-feature.png"
                width={740}
                height={416}
                alt="Blog Details"
              />
            </div>
            <ul className="flex gap-4 mb-3">
              <li>
                <div className="px-2 py-1 bg-[#f860111a] rounded-full text-xs text-primary">
                  Canada Citizenship
                </div>
              </li>

              <li className="border-r pr-4">
                <div>
                  {/* <span> {moment(data?.publishedAt).format("LL")}</span> */}
                  <span> {moment().format("YYYY/MM/DD")} </span>
                  {/* <span>{moment(data?.publishedAt).format("LT")}</span> */}
                </div>
              </li>
              <li>
                <div className="border-r pr-4">Admin</div>
              </li>
              <li>
                {/* <div>{readingTime(data?.content)} Min Read</div> */}
                <div>7 Min Read</div>
              </li>
            </ul>
            <div className="from_texteditor_wrapper">
              <h1 className="font-bold mb-10">
                How to Get Canadian citizenship
              </h1>
              <p className="mb-10">
                Optimization for various types of devices and resolutions plays
                a fundamental role in modern website design. Web page layouts
                should be genuinely responsive and not rely on any fixed-size
                elements. Web designers using fluid grids and flexible images
                will guarantee that a web page will render well on a variety of
                devices, windows, and screen sizes.
              </p>
              <h2 className="mb-8">Who cannot get Canadian citizenship</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nisi porttitor malesuada
                duis mattis. Etiam semper condimentum vel amet varius vitae
                pellentesque commodo. Consequat purus libero nulla quam nulla
                nibh. Cras aliquam viverra tristique ullamcorper lorem commodo
                nec tincidunt duis. Ut arcu sed non in eget sed ut consequat.
                Suspendisse eleifend nascetur nulla nibh adipiscing quam et
                faucibus ornare. At elementum duis enim curabitur. Platea
                posuere sagittis commodo quam donec molestie ipsum. Volutpat in
                convallis fusce quam. Mi amet elementum ipsum diam adipiscing in
                cras in. Sed quis leo suspendisse adipiscing sed interdum
                commodo nec. Quis turpis fringilla tristique lectus quam arcu
                aliquet. Eget sit aliquet lobortis aliquet eu a pellentesque
                risus risus.
              </p>
              <p className="mb-[30px]">
                Aliquet est enim turpis metus. Urna etiam non felis urna. Nisi
                pharetra id nullam felis cursus proin. Massa sodales sagittis
                lorem varius massa placerat. Aliquet adipiscing lectus ut a
                aenean dictum. Nisl varius fringilla ut massa fringilla feugiat
                lectus. Leo in cras scelerisque libero duis quis purus
                scelerisque.
              </p>
              <ul className="mb-[30px]">
                <li>
                  Quis turpis fringilla tristique lectus quam arcu aliquet
                </li>
                <li>
                  Quis turpis fringilla tristique lectus quam arcu aliquet
                </li>
                <li>
                  Quis turpis fringilla tristique lectus quam arcu aliquet
                </li>
                <li>
                  Quis turpis fringilla tristique lectus quam arcu aliquet
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nisi porttitor malesuada
                duis mattis. Etiam semper condimentum vel amet varius vitae
                pellentesque commodo. Consequat purus libero nulla quam nulla
                nibh. Cras aliquam viverra tristique ullamcorper lorem commodo
                nec tincidunt duis. Ut arcu sed non in eget sed ut consequat.
                Suspendisse eleifend nascetur nulla nibh adipiscing quam et
                faucibus ornare. At elementum duis enim curabitur. Platea
                posuere sagittis commodo quam donec molestie ipsum. Volutpat in
                convallis fusce quam. Mi amet elementum ipsum diam adipiscing in
                cras in. Sed quis leo suspendisse adipiscing sed interdum
                commodo nec. Quis turpis fringilla tristique lectus quam arcu
                aliquet. Eget sit aliquet lobortis aliquet eu a pellentesque
                risus risus.
              </p>
              <p>
                Aliquet est enim turpis metus. Urna etiam non felis urna. Nisi
                pharetra id nullam felis cursus proin. Massa sodales sagittis
                lorem varius massa placerat. Aliquet adipiscing lectus ut a
                aenean dictum. Nisl varius fringilla ut massa fringilla feugiat
                lectus. Leo in cras scelerisque libero duis quis purus
                scelerisque.
              </p>
            </div>
            <div>
              <div className="w-full h-[1px] bg-[#F0F1F2]"></div>
              <div className="flex items-center justify-between my-[30px]">
                <div className="flex items-center gap-[10px]">
                  <p className="mb-0 pr-1">Tags:</p>
                  <span className="py-1 px-2 bg-[#FDE6E8] rounded-md text-tertiary">
                    Business
                  </span>
                  <span className="py-1 px-2 bg-[#FDE6E8] rounded-md text-tertiary">
                    Tech
                  </span>
                  <span className="py-1 px-2 bg-[#FDE6E8] rounded-md text-tertiary">
                    Travel
                  </span>
                </div>
                <div className="flex items-center gap-[30px]">
                  <p className="mb-0 pr-1">Share on</p>
                  <SocialShare sharedUrl="#" />
                </div>
              </div>
              <div className="w-full h-[1px] bg-[#F0F1F2] mb-[30px]"></div>
              <div>
                <div className="mb-5">
                  <div className="inline-flex items-center gap-2 bg-[#FDE6E8] px-3 py-1.5 rounded-full">
                    <LiaCommentsSolid className="text-primary text-lg" />
                    <p className="mb-0 font-semibold text-tertiary">
                      24 Comments
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-[30px]">
                  <div className="flex gap-4">
                    <div className=" w-[48px] h-[48px] rounded-full shrink-0 ">
                      <Image
                        src="/images/misc/avatar.png"
                        width={48}
                        height={48}
                        alt="Blog Segment"
                        className="object-cover w-full h-full rounded-full "
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <p className="font-medium mb-0 text-heading">
                            Mr. Anderson
                          </p>
                          <p className="text-p4 mb-0">1 Day ago</p>
                        </div>
                      </div>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas condimentum sed libero nunc et vitae, nulla
                        purus gravida. Purus amet arcu et malesuada aenean quis
                        dolor eget enim. Morbi nibh fringilla id in. Faucibus
                        dignissim convallis purus quam.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className=" w-[48px] h-[48px] rounded-full shrink-0 ">
                      <Image
                        src="/images/misc/avatar.png"
                        width={48}
                        height={48}
                        alt="Blog Segment"
                        className="object-cover w-full h-full rounded-full "
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <p className="font-medium mb-0 text-heading">
                            Mr. Anderson
                          </p>
                          <p className="text-p4 mb-0">1 Day ago</p>
                        </div>
                      </div>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas condimentum sed libero nunc et vitae, nulla
                        purus gravida. Purus amet arcu et malesuada aenean quis
                        dolor eget enim. Morbi nibh fringilla id in. Faucibus
                        dignissim convallis purus quam.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className=" w-[48px] h-[48px] rounded-full shrink-0 ">
                      <Image
                        src="/images/misc/avatar.png"
                        width={48}
                        height={48}
                        alt="Blog Segment"
                        className="object-cover w-full h-full rounded-full "
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <p className="font-medium mb-0 text-heading">
                            Mr. Anderson
                          </p>
                          <p className="text-p4 mb-0">1 Day ago</p>
                        </div>
                      </div>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas condimentum sed libero nunc et vitae, nulla
                        purus gravida. Purus amet arcu et malesuada aenean quis
                        dolor eget enim. Morbi nibh fringilla id in. Faucibus
                        dignissim convallis purus quam.
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-[#F0F1F2]"></div>
                  <button className="btn btn-primary rounded-md">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
