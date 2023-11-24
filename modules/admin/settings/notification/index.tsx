"use client";
import { Checkbox, Select, Space, Table, Tag } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { ColumnsType } from "antd/es/table";
import Image from "next/image";
import React from "react";
interface DataType {
  key: string;
  type: string;
  email: any;
  browser: any;
  app: any;
}
const Notification = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "TYPE",
      dataIndex: "type",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "age",
    },
    {
      title: "BROWSER",
      dataIndex: "browser",
      key: "address",
    },
    {
      title: "APP",
      dataIndex: "app",
      key: "address",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      type: "New for you",
      email: <Checkbox onChange={onChange} defaultChecked></Checkbox>,
      browser: <Checkbox onChange={onChange} defaultChecked></Checkbox>,
      app: <Checkbox onChange={onChange} defaultChecked></Checkbox>,
    },
    {
      key: "2",
      type: "Account activity",
      email: <Checkbox onChange={onChange} defaultChecked></Checkbox>,
      browser: <Checkbox onChange={onChange} defaultChecked></Checkbox>,
      app: <Checkbox onChange={onChange}></Checkbox>,
    },
    {
      key: "3",
      type: "A new browser used to sign in",
      email: <Checkbox onChange={onChange} defaultChecked></Checkbox>,
      browser: <Checkbox onChange={onChange}></Checkbox>,
      app: <Checkbox onChange={onChange} defaultChecked></Checkbox>,
    },
    {
      key: "4",
      type: "A new device is linked",
      email: <Checkbox onChange={onChange}></Checkbox>,
      browser: <Checkbox onChange={onChange} defaultChecked></Checkbox>,
      app: <Checkbox onChange={onChange} defaultChecked></Checkbox>,
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="max-w-[770px] mx-auto w-full ">
          <div className="bg-white shadow-[0px_4px_18px_0px_rgba(0,0,0,0.10)] rounded-md mb-6">
            <div className="p-6">
              <div className="mb-6">
                <h4 className="mb-[6px]">Recent Devices</h4>
                <p className="mb-0">
                  We need permission from your browser to show notifications.
                  Request Permission
                </p>
              </div>
              <div>
                <Table
                  columns={columns}
                  dataSource={data}
                  className="notification_table"
                />
              </div>
              <div>
                <p className="mb-4">When should we send you notifications?</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Placeholder"
                  className="border py-1 px-3 rounded-md"
                />
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
export default Notification;
