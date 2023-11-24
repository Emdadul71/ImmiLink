"use client";
import { Checkbox, Select } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import Image from "next/image";
import React from "react";

const SecuritySettings = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <section>
      <div className="container">
        <div className="max-w-[770px] mx-auto w-full ">
          <div className="bg-white shadow-[0px_4px_18px_0px_rgba(0,0,0,0.10)] rounded-md mb-6">
            <div className="p-6">
              <h4 className="mb-6">Profile Details</h4>
              <div className="grid grid-cols-2 gap-x-[30px] gap-y-4">
                <div className="w-full">
                  <label htmlFor="" className="text-xs mb-1">
                    Current Password
                  </label>
                  <div>
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="*******"
                      className="w-full py-2 px-3 border focus:outline-none rounded-md"
                    />
                  </div>
                </div>
                <div></div>
                <div className="w-full">
                  <label htmlFor="" className="text-xs mb-1">
                    New Password
                  </label>
                  <div>
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="*******"
                      className="w-full py-2 px-3 border focus:outline-none rounded-md"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="" className="text-xs mb-1">
                    Confirm New Password
                  </label>
                  <div>
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="*******"
                      className="w-full py-2 px-3 border focus:outline-none rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 p-6 pt-0">
              <div>
                <button className="btn btn-primary rounded-md">
                  Save Changes
                </button>
              </div>
              <div>
                <button className="btn btn-grey rounded-md">Cancel</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-6 bg-white shadow-[0px_4px_18px_0px_rgba(0,0,0,0.10)] rounded-md">
            <h4 className="mb-0">Two-steps verification</h4>
            <div className="">
              <p className=" mb-[10px]">
                Two-factor authentication is not enabled yet.
              </p>
              <p className="mb-0">
                Two-factor authentication adds a layer of security to your
                account by requiring more than just a password to log in. Learn
                more.
              </p>
            </div>
            <div>
              <button className="btn btn-primary rounded-md">
                Enable two-factor authentication
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySettings;
