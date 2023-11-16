import Image from "next/image";
import React from "react";

const AdvisorDetails = () => {
  return (
    <section className="py-5 lg:py-[60px]">
      <div className="container">
        <div className="max-w-[970px]">
          <Image
            src="/images/misc/advisor-details.png"
            alt="Advisor Details"
            width={960}
            height={690}
          />
          <div className="flex items-end gap-[30px] px-[30px] pb-[30px] -mt-[40px] rounded-md">
            <div className="w-[125px] h-[125px] z-10 relative rounded-md border border-[4px] border-white rounded-[6px] bg-white">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Advisor Details"
                width={125}
                height={125}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div>
              <h3 className="mb-0">Belle Ferguson</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorDetails;
