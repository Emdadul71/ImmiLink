"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const tabs = ["Add Question", "Create Post"];

const PostTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <section className="pb-0 pt-8">
      <div className="container">
        <div className="max-w-[800px] mx-auto  grid grid-cols-2">
          {tabs.map((tab) => (
            <Chip
              text={tab}
              selected={selected === tab}
              setSelected={setSelected}
              key={tab}
            />
          ))}
        </div>
        <div className="max-w-[800px] mx-auto">
          {selected == tabs[0] && (
            <div className="flex flex-col gap-4 pt-6">
              <div>
                <label
                  htmlFor=""
                  className="mb-[6px] text-sm font-medium block"
                >
                  Question Title
                </label>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Example: Is it a good idea to immigrate to Canada?"
                    className="w-full py-2 px-3 border rounded-md  focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="mb-[6px] text-sm font-medium block"
                >
                  Question Title
                </label>
                <div>
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={4}
                    className="w-full border focus:outline-none rounded-md placeholder:text-xs px-3 py-3"
                    placeholder="Write your answer..."
                  />
                </div>
              </div>
              <button className="btn btn-primary w-full rounded-md">
                Ask Question
              </button>
            </div>
          )}
          {selected == tabs[1] && (
            <div className="flex flex-col gap-4 pt-6">
              <div>
                <label
                  htmlFor=""
                  className="mb-[6px] text-sm font-medium block"
                >
                  Question Title
                </label>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Example: Is it a good idea to immigrate to Canada?"
                    className="w-full py-2 px-3 border rounded-md  focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="mb-[6px] text-sm font-medium block"
                >
                  Question Title
                </label>
                <div>
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={4}
                    className="w-full border focus:outline-none rounded-md placeholder:text-xs px-3 py-3"
                    placeholder="Write your answer..."
                  />
                </div>
              </div>
              <button className="btn btn-primary w-full rounded-md">
                Ask Question
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Chip = ({ text, selected, setSelected }: any) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white border"
          : "text-primary hover:text-white hover:bg-secondary"
      } text-sm transition-colors px-2.5 py-2 border relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-primary  py-2"
        ></motion.span>
      )}
    </button>
  );
};

export default PostTabs;
