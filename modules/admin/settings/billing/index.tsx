"use client";
import { Checkbox, Radio, RadioChangeEvent, Select, Switch } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import Image from "next/image";
import React, { useState } from "react";

const Billing = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const [value, setValue] = useState(1);

  const onChange2 = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onChange3 = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <section>
      <div className="container">
        <div className="max-w-[770px] mx-auto w-full ">
          {/* Current Plan */}
          <div className="bg-white shadow-[0px_4px_18px_0px_rgba(0,0,0,0.10)] rounded-md mb-6">
            <div className="p-6">
              <h4 className="mb-6">Current Plan</h4>
              <div className="grid lg:grid-cols-2 items-center gap-3 lg:gap-0">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="mb-[6px] font-semibold">
                      Your Current Plan is Basic
                    </p>
                    <p className="mb-0">A simple start for everyone</p>
                  </div>
                  <div>
                    <p className="mb-[6px]">Active until Dec 09, 2021</p>
                    <p className="mb-0">
                      We will send you a notification upon Subscription
                      expiration
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-[6px]">
                      <p className="mb-0 font-semibold">$199 Per Month</p>
                      <span className="inline-block py-[5px] px-[10px] bg-[#7367F029] rounded-md text-primary font-semibold">
                        Popular
                      </span>
                    </div>
                    <p className="mb-0">
                      We will send you a notification upon Subscription
                      expiration
                    </p>
                  </div>
                </div>
                <div>
                  <div className="px-4 py-3 bg-[#fff0e1] rounded-md mb-4">
                    <h4 className="mb-[10px] text-[#FF9F43]">
                      We need your attention!
                    </h4>
                    <p className="mb-0 text-[#FF9F43]">
                      Your plan requires update
                    </p>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="flex justify-between">
                      <p className="mb-0 font-semibold">Days</p>
                      <p className="mb-0 font-semibold">24 of 30 Days</p>
                    </div>
                    <div className="w-full h-[10px] rounded-full bg-primary"></div>
                    <p className="mb-0">
                      6 days remaining until your plan requires update
                    </p>
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
          {/* Payment Methods */}
          <div className="bg-white shadow-[0px_4px_18px_0px_rgba(0,0,0,0.10)] rounded-md mb-6">
            <div className="p-6">
              <h4 className="mb-0">Payment Methods</h4>
              <div className="grid lg:grid-cols-2 gap-4 items-center">
                <div className="flex flex-col gap-4 order-1 lg:order-0">
                  <div>
                    <Radio.Group onChange={onChange2} value={value}>
                      <Radio value={1}>Credit/Debit/ATM Card</Radio>
                      <Radio value={2}>PayPal account</Radio>
                    </Radio.Group>
                  </div>
                  <div className="w-full">
                    <label htmlFor="" className="text-xs mb-1">
                      Card Number
                    </label>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="7563 4592 4863 9328"
                        className="w-full py-2 px-3 border focus:outline-none rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-full">
                      <label htmlFor="" className="text-xs mb-1">
                        Name
                      </label>
                      <div>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="John Doe"
                          className="w-full py-2 px-3 border focus:outline-none rounded-md"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label htmlFor="" className="text-xs mb-1">
                        EXP. Date
                      </label>
                      <div>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="MM/YY"
                          className="w-full py-2 px-3 border focus:outline-none rounded-md"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label htmlFor="" className="text-xs mb-1">
                        CVV
                      </label>
                      <div>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="455"
                          className="w-full py-2 px-3 border focus:outline-none rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch defaultChecked onChange={onChange3} size="small" />
                    <p className="mb-0">Save card for future billing?</p>
                  </div>
                  <div className="flex gap-4 pt-0">
                    <div>
                      <button className="btn btn-primary rounded-md">
                        Save Changes
                      </button>
                    </div>
                    <div>
                      <button className="btn btn-grey rounded-md">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>

                <div className="order-0 lg:order-1">
                  <div className="flex flex-col gap-[10px] px-4 py-3 bg-[#A8AAAE29] rounded-md mb-4">
                    <div className="flex items-center  justify-between mb-4">
                      <div>
                        <Image
                          src="/images/misc/mastercard.png"
                          alt=""
                          width={42}
                          height={26}
                        />
                      </div>
                      <div className="flex gap-2">
                        <button className="btn btn-primary rounded-md !py-1">
                          Edit
                        </button>
                        <button className="btn btn-grey rounded-md !py-1">
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-[10px] ">
                      <p className="mb-0">Tom McBride</p>
                      <span className="py-1 px-2 bg-[#ea051929] text-xs rounded-md font-semibold text-primary">
                        Primary
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-[10px] ">
                      <p className="mb-0">**** **** **** 9856</p>
                      <p className="mb-0">Card expires at 12/26</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[10px] px-4 py-3 bg-[#A8AAAE29] rounded-md mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Image
                          src="/images/misc/visacard.png"
                          alt=""
                          width={62}
                          height={26}
                        />
                      </div>
                      <div className="flex gap-2">
                        <button className="btn btn-primary rounded-md !py-1">
                          Edit
                        </button>
                        <button className="btn btn-grey rounded-md !py-1">
                          Delete
                        </button>
                      </div>
                    </div>

                    <p className="mb-0">Mildred Wagner</p>

                    <div className="flex items-center justify-between gap-[10px] ">
                      <p className="mb-0">**** **** **** 9856</p>
                      <p className="mb-0">Card expires at 12/26</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Billing Address */}
          <div className="bg-white shadow-[0px_4px_18px_0px_rgba(0,0,0,0.10)] rounded-md mb-6">
            <div className="p-6">
              <h4>Billing Address</h4>
              <div className="grid lg:grid-cols-2 gap-x-[30px] gap-y-4">
                <div className="w-full">
                  <label htmlFor="" className="text-xs mb-1">
                    Company Name
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
                    Billing Email
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
                    Tax ID
                  </label>
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter Tax ID"
                      className="w-full py-2 px-3 border focus:outline-none rounded-md"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="" className="text-xs mb-1">
                    Vat Number
                  </label>
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter Vat Number"
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
                <div className="w-full lg:col-span-2">
                  <label htmlFor="" className="text-xs mb-1">
                    Billing Address
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
        </div>
      </div>
    </section>
  );
};

export default Billing;
