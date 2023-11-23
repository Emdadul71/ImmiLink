import React, { useState, Fragment } from "react";
import styles from "./faq.module.scss";

const Faq = ({ data }: any) => {
  const [selected, setSelected] = useState(null);
  const toggle = (i: any) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="flex flex-col gap-[10px]">
      {data.map((item: any, i: any) => {
        return (
          <div key={i}>
            <button
              onClick={() => toggle(i)}
              className={`${styles.question} bg-[#F0F1F2] flex justify-between w-full rounded-[6px]`}
            >
              <span>{item.question}</span>
              <span>+</span>
            </button>

            <div
              className={`${styles.answer} ${
                selected === i ? styles.auth_height : ""
              } pl-6 mt-[15px]`}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
