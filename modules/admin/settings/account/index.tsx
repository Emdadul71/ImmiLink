"use client";
import { Checkbox, Select } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import Image from "next/image";
import React from "react";

const Account = () => {
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
            <div className="p-6 border-b">
              <h4>Profile Details</h4>
              <div className="flex items-center gap-7">
                <Image
                  src="/images/misc/account-avatar.png"
                  alt="Blog Card"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div className="flex flex-col gap-4 justify-between">
                  <div>
                    <button className="btn btn-primary rounded-md">
                      Upload new photo
                    </button>
                  </div>
                  <p className="mb-0">
                    Allowed JPG, GIF or PNG. Max size of 800K
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-x-[30px] gap-y-4">
                <div className="w-full">
                  <label htmlFor="" className="text-xs mb-1">
                    First Name
                  </label>
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="First Name"
                      className="w-full py-2 px-3 border focus:outline-none rounded-md"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="" className="text-xs mb-1">
                    Last Name
                  </label>
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Last Name"
                      className="w-full py-2 px-3 border focus:outline-none rounded-md"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="" className="text-xs mb-1">
                    Email
                  </label>
                  <div>
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="john.doe@gmail.com"
                      className="w-full py-2 px-3 border focus:outline-none rounded-md"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="" className="text-xs mb-1">
                    Organization
                  </label>
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="PIXINVENT"
                      className="w-full py-2 px-3 border focus:outline-none rounded-md"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="" className="text-xs mb-1">
                    Number
                  </label>
                  <div>
                    <input
                      type="number"
                      name=""
                      id=""
                      placeholder="674 758 7365"
                      className="w-full py-2 px-3 border focus:outline-none rounded-md"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="" className="text-xs mb-1">
                    Address
                  </label>
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Address"
                      className="w-full py-2 px-3 border focus:outline-none rounded-md"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label htmlFor="" className="text-xs mb-1">
                    Country
                  </label>
                  <Select
                    placeholder="Select Country"
                    style={{ width: "100%" }}
                    size="large"
                    className="settings_form"
                    onChange={handleChange}
                    options={[
                      { value: "jack", label: "Canada" },
                      { value: "lucy", label: "Australia" },
                      { value: "Yiminghe", label: "USA" },
                    ]}
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="" className="text-xs mb-1">
                    State
                  </label>
                  <Select
                    placeholder="Select Country"
                    style={{ width: "100%" }}
                    size="large"
                    className="settings_form"
                    onChange={handleChange}
                    options={[
                      { value: "jack", label: "California" },
                      { value: "lucy", label: "New York" },
                      { value: "Yiminghe", label: "New Jersey" },
                    ]}
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="" className="text-xs mb-1">
                    Language
                  </label>
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="English"
                      className="w-full py-2 px-3 border focus:outline-none rounded-md"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="" className="text-xs mb-1">
                    Zip Code
                  </label>
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="34753"
                      className="w-full py-2 px-3 border focus:outline-none rounded-md"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="" className="text-xs mb-1">
                    Timezone
                  </label>
                  <Select
                    placeholder="Select Timezone"
                    style={{ width: "100%" }}
                    size="large"
                    className="settings_form"
                    onChange={handleChange}
                    options={[
                      { value: "jack", label: "Canada" },
                      { value: "lucy", label: "Australia" },
                      { value: "Yiminghe", label: "USA" },
                    ]}
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="" className="text-xs mb-1">
                    Currency
                  </label>
                  <Select
                    placeholder="Select Currency"
                    style={{ width: "100%" }}
                    size="large"
                    className="settings_form"
                    onChange={handleChange}
                    options={[
                      { value: "jack", label: "California" },
                      { value: "lucy", label: "New York" },
                      { value: "Yiminghe", label: "New Jersey" },
                    ]}
                  />
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
            <h4 className="mb-0">Delete Account</h4>
            <div>
              <div className="bg-[#fcd7da] py-3 px-4 rounded-md mb-4">
                <h4 className="text-primary mb-[10px]">
                  Are you sure you want to delete your account?
                </h4>
                <p className="mb-0 text-primary">
                  Once you delete your account, there is no going back. Please
                  be certain.
                </p>
              </div>
              <Checkbox onChange={onChange}>
                I confirm my account deactivation
              </Checkbox>
            </div>
            <div>
              <button className="btn btn-primary rounded-md" disabled>
                Deactivate Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
