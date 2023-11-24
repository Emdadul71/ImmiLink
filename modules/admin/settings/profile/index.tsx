"use client";
import { Checkbox, DatePicker, DatePickerProps, Select } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import React from "react";

const Profile = () => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChange2 = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
  };

  const plainOptions = ["English", "French", "Spanish"];
  const plainOptions2 = ["Yes", "No"];
  return (
    <section>
      <div className="container">
        <div className="max-w-[770px] w-full mx-auto mb-8">
          <h3>Personal Details</h3>
          <div className="grid grid-cols-2 gap-[24px]">
            <div className="w-full">
              <input
                type="text"
                name=""
                id=""
                placeholder="Last Name"
                className="w-full py-2 px-3 border focus:outline-none rounded-md"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                name=""
                id=""
                placeholder="First Name"
                className="w-full py-2 px-3 border focus:outline-none rounded-md"
              />
            </div>
            <DatePicker
              onChange={onChange}
              size="large"
              placeholder="Date of Birth"
            />

            <Select
              placeholder="Select Country of Birth"
              style={{ width: "100%" }}
              size="large"
              className="settings_form"
              onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
            <Select
              placeholder="Select City of Birth"
              style={{ width: "100%" }}
              size="large"
              className="settings_form"
              onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
            <Select
              placeholder="Select Country of Citizenship "
              mode="multiple"
              style={{ width: "100%" }}
              size="large"
              className="settings_form"
              onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
            <Select
              placeholder="Select Countries with Permanent Resident  "
              mode="multiple"
              style={{ width: "100%" }}
              size="large"
              className="settings_form"
              onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
            <div></div>
            <div className="w-full flex items-center justify-between col-span-2">
              <p className="mb-0">Language Proficiency:</p>
              <div>
                <Checkbox.Group
                  options={plainOptions}
                  defaultValue={["Apple"]}
                  onChange={onChange2}
                />
              </div>
            </div>
            <div className="w-full flex items-start justify-between gap-5 col-span-2">
              <p className="mb-0 w-[50%]">
                Have you taken a test from a designated testing agency to assess
                your proficiency in English or French?{" "}
              </p>
              <div className="w-[50%] flex justify-end">
                <Checkbox.Group
                  options={plainOptions2}
                  defaultValue={["Apple"]}
                  onChange={onChange2}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[770px] w-full mx-auto mb-8">
          <h3>Contact Details</h3>
          <div className="grid grid-cols-2 gap-[24px]">
            <div className="w-full col-span-2">
              <textarea
                name=""
                id=""
                cols={30}
                rows={3}
                placeholder="Current residential address"
                className="w-full py-2 px-3 border focus:outline-none rounded-md"
              />
              {/* <input
                type="text"
                name=""
                id=""
                placeholder="Current residential address"
                className="w-full py-2 px-3 border focus:outline-none rounded-md"
              /> */}
            </div>
            <div className="w-full col-span-2">
              <textarea
                name=""
                id=""
                cols={30}
                rows={3}
                placeholder="Current mailing address"
                className="w-full py-2 px-3 border focus:outline-none rounded-md"
              />
              {/* <input
                type="text"
                name=""
                id=""
                placeholder="Current mailing address "
                className="w-full py-2 px-3 border focus:outline-none rounded-md"
              /> */}
            </div>
            <div className="w-full ">
              <input
                type="email"
                name=""
                id=""
                placeholder="Email Address"
                className="w-full py-2 px-3 border focus:outline-none rounded-md"
              />
            </div>
            <div className="w-full ">
              <input
                type="number"
                name=""
                id=""
                placeholder="Home Phone Number"
                className="w-full py-2 px-3 border focus:outline-none rounded-md"
              />
            </div>
            <div className="w-full ">
              <input
                type="number"
                name=""
                id=""
                placeholder="Cell Phone Number"
                className="w-full py-2 px-3 border focus:outline-none rounded-md"
              />
            </div>
            <div className="w-full ">
              <input
                type="number"
                name=""
                id=""
                placeholder="Work Phone Number"
                className="w-full py-2 px-3 border focus:outline-none rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="max-w-[770px] w-full mx-auto mb-8">
          <h3>Admissibility Details</h3>
          <div className="grid grid-cols-2 gap-[24px]">
            <div className="w-full flex items-start justify-between gap-5 col-span-2 border-b pb-5">
              <p className="mb-0 w-[70%]">
                Within the past two years, have you or a family member ever had
                tuberculosis of the lungs or been in contact with a person with
                tuberculosis?
              </p>
              <div className="w-[30%] flex justify-end">
                <Checkbox.Group
                  options={plainOptions2}
                  defaultValue={["Apple"]}
                  onChange={onChange2}
                />
              </div>
            </div>
            <div className="w-full flex items-start justify-between gap-5 col-span-2 border-b pb-5">
              <p className="mb-0 w-[70%]">
                Do you have any physical or mental disorder that would require
                social and/or health services, other than medication, during a
                stay in Canada?
              </p>
              <div className="w-[30%] flex justify-end">
                <Checkbox.Group
                  options={plainOptions2}
                  defaultValue={["Apple"]}
                  onChange={onChange2}
                />
              </div>
            </div>
            <div className="w-full flex items-start justify-between gap-5 col-span-2 border-b pb-5">
              <p className="mb-0 w-[70%]">
                Have you ever remained beyond the validity of your status,
                attended school without authorization or worked without
                authorization in Canada? Keep in mind that if you ever had to
                restore your status in Canada, then the answer to this question
                would be “yes”.
              </p>
              <div className="w-[30%] flex justify-end">
                <Checkbox.Group
                  options={plainOptions2}
                  defaultValue={["Apple"]}
                  onChange={onChange2}
                />
              </div>
            </div>
            <div className="w-full flex items-start justify-between gap-5 col-span-2 border-b pb-5">
              <p className="mb-0 w-[70%]">
                Have you ever applied for OR been refused refugee status in ANY
                country?
              </p>
              <div className="w-[30%] flex justify-end">
                <Checkbox.Group
                  options={plainOptions2}
                  defaultValue={["Apple"]}
                  onChange={onChange2}
                />
              </div>
            </div>
            <div className="w-full flex items-start justify-between gap-5 col-span-2 border-b pb-5">
              <p className="mb-0 w-[70%]">
                Have you ever applied for OR been refused a permanent resident
                visa in ANY country?
              </p>
              <div className="w-[30%] flex justify-end">
                <Checkbox.Group
                  options={plainOptions2}
                  defaultValue={["Apple"]}
                  onChange={onChange2}
                />
              </div>
            </div>
            <div className="w-full flex items-start justify-between gap-5 col-span-2 border-b pb-5">
              <p className="mb-0 w-[70%]">
                Have you ever applied for OR been refused a visitor or temporary
                resident visa in ANY country?
              </p>
              <div className="w-[30%] flex justify-end">
                <Checkbox.Group
                  options={plainOptions2}
                  defaultValue={["Apple"]}
                  onChange={onChange2}
                />
              </div>
            </div>
            <div className="w-full flex items-start justify-between gap-5 col-span-2 border-b pb-5">
              <p className="mb-0 w-[70%]">
                Have you ever applied for OR been refused a work permit in ANY
                country?
              </p>
              <div className="w-[30%] flex justify-end">
                <Checkbox.Group
                  options={plainOptions2}
                  defaultValue={["Apple"]}
                  onChange={onChange2}
                />
              </div>
            </div>
            <div className="w-full flex items-start justify-between gap-5 col-span-2 border-b pb-5">
              <p className="mb-0 w-[70%]">
                Have you ever applied for OR been refused a study permit in ANY
                country?
              </p>
              <div className="w-[30%] flex justify-end">
                <Checkbox.Group
                  options={plainOptions2}
                  defaultValue={["Apple"]}
                  onChange={onChange2}
                />
              </div>
            </div>
            <div className="w-full flex items-start justify-between gap-5 col-span-2 border-b pb-5">
              <p className="mb-0 w-[70%]">
                Have you ever applied for OR been refused for ANY other type of
                visa, permit, etc. than those listed above, in ANY country?
              </p>
              <div className="w-[30%] flex justify-end">
                <Checkbox.Group
                  options={plainOptions2}
                  defaultValue={["Apple"]}
                  onChange={onChange2}
                />
              </div>
            </div>
            <div className="w-full flex items-start justify-between gap-5 col-span-2 border-b pb-5">
              <p className="mb-0 w-[70%]">
                Have you ever been refused admission to (i.e. stopped at the
                border and not allowed to enter), or ordered to leave, Canada or
                ANY other country?
              </p>
              <div className="w-[30%] flex justify-end">
                <Checkbox.Group
                  options={plainOptions2}
                  defaultValue={["Apple"]}
                  onChange={onChange2}
                />
              </div>
            </div>
            <div className="w-full flex items-start justify-between gap-5 col-span-2 border-b pb-5">
              <p className="mb-0 w-[70%]">
                Have you EVER applied to enter or remain in Canada? Applied
                could mean applying for a visa OR if you are visa-exempt it
                could mean arriving at a border (land or airport) and not being
                allowed to enter the country.
              </p>
              <div className="w-[30%] flex justify-end">
                <Checkbox.Group
                  options={plainOptions2}
                  defaultValue={["Apple"]}
                  onChange={onChange2}
                />
              </div>
            </div>
            <div className="w-full flex items-start justify-between gap-5 col-span-2 border-b pb-5">
              <p className="mb-0 w-[70%]">
                Have you ever committed, been arrested for, been charged with or
                convicted of any criminal offence in any country?
              </p>
              <div className="w-[30%] flex justify-end">
                <Checkbox.Group
                  options={plainOptions2}
                  defaultValue={["Apple"]}
                  onChange={onChange2}
                />
              </div>
            </div>
            <div className="w-full flex items-start justify-between gap-5 col-span-2 border-b pb-5">
              <p className="mb-0 w-[70%]">
                Did you ever serve in any military, militia, or civil defense
                unit or serve in a security organization or police force
                (including non-obligatory national service, reserve or volunteer
                units?
              </p>
              <div className="w-[30%] flex justify-end">
                <Checkbox.Group
                  options={plainOptions2}
                  defaultValue={["Apple"]}
                  onChange={onChange2}
                />
              </div>
            </div>
            <div className="w-full flex items-start justify-between gap-5 col-span-2 border-b pb-5">
              <p className="mb-0 w-[70%]">
                Are you, or have you ever been, a member or associated with any
                political party, or other group or organization which has
                engaged in or advocated violence as a means to achieving a
                political or religious objective, or which has been associated
                with criminal activity at any time?
              </p>
              <div className="w-[30%] flex justify-end">
                <Checkbox.Group
                  options={plainOptions2}
                  defaultValue={["Apple"]}
                  onChange={onChange2}
                />
              </div>
            </div>
            <div className="w-full flex items-start justify-between gap-5 col-span-2 border-b pb-5">
              <p className="mb-0 w-[70%]">
                Have you ever witnessed or participated in the ill treatment of
                prisoners or civilians, looting or desecration of religious
                buildings?
              </p>
              <div className="w-[30%] flex justify-end">
                <Checkbox.Group
                  options={plainOptions2}
                  defaultValue={["Apple"]}
                  onChange={onChange2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
