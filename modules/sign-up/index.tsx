import Image from "next/image";
import React from "react";
import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <section className="py-0">
      <div className="container">
        <div className="grid grid-cols-2 items-center">
          <div className="signup">
            <Image
              className="w-full h-full object-cover py-[80px]"
              src="/images/misc/signup.png"
              alt="Find Universities Abroad"
              width={960}
              height={540}
              priority
            />
          </div>
          <div>
            <div className="max-w-[470px] mx-auto">
              <p className="mb-0">LET'S GET YOU STARTED</p>
              <h2>Create an Account</h2>
              <div className="flex flex-col gap-5 mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="py-2 px-3 border border-[#BDBDBD] w-full rounded-md"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="py-2 px-3 border border-[#BDBDBD] w-full rounded-md"
                />
                <input
                  type="number"
                  placeholder="Mobile "
                  className="py-2 px-3 border border-[#BDBDBD] w-full rounded-md"
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="py-2 px-3 border border-[#BDBDBD] w-full rounded-md"
                />
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="py-2 px-3 border border-[#BDBDBD] w-full rounded-md"
                />
                <button className="btn btn-primary w-full rounded-md py-2">
                  GET STARTED
                </button>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-full h-[1px] bg-[#E0E0E0]"></div>
                <p className="mb-0">Or</p>
                <div className="w-full h-[1px] bg-[#E0E0E0]"></div>
              </div>
              <div className="flex flex-col gap-4">
                <button className="flex justify-center items-center gap-4 py-[14px] bg-grey w-full border border-[#eee] rounded-md">
                  <FcGoogle />
                  <span>Sign up with Google</span>
                </button>
                <button className="flex justify-center items-center gap-4 py-[14px] bg-grey w-full border border-[#eee] rounded-md">
                  <FaFacebook className="text-[#039BE5]" />
                  <span>Sign up with Facebook</span>
                </button>
                <button className="flex justify-center items-center gap-4 py-[14px] bg-grey w-full border border-[#eee] rounded-md">
                  <FaApple />
                  <span>Sign up with Apple</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
