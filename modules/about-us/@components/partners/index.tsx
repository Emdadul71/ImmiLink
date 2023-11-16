import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-[30px]">
          <div className=" max-w-[460px] mx-auto">
            <h3 className="font-medium mb-0">
              Loved by 15 million teams and individuals
            </h3>
          </div>
          <div className="grid grid-cols-5 gap-[30px] items-center max-w-[850px] mx-auto">
            <Image
              src="/images/about/asana.png"
              alt="Lmmi Link Partner"
              className="object-cover"
              width={132}
              height={50}
              priority
            />
            <Image
              src="/images/about/google-logo.png"
              alt="Lmmi Link Partner"
              className="object-cover"
              width={120}
              height={50}
              priority
            />
            <Image
              src="/images/about/sonos.png"
              alt="Lmmi Link Partner"
              className="object-cover"
              width={120}
              height={50}
              priority
            />
            <Image
              src="/images/about/rp.png"
              alt="Lmmi Link Partner"
              className="object-cover"
              width={200}
              height={50}
              priority
            />
            <Image
              src="/images/about/cb.png"
              alt="Lmmi Link Partner"
              className="object-cover"
              width={140}
              height={50}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
