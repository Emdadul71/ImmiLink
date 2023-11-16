import Image from "next/image";
import React from "react";

const Opportunities = () => {
  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-[30px] items-center lg:mb-[60px]">
          <div>
            <Image
              src="/images/about/benefited.png"
              alt="Lmmi Link Partner"
              className="object-cover"
              width={570}
              height={570}
              priority
            />
          </div>
          <div className="flex flex-col gap-[22px]">
            <div>
              <span className="text-sm py-1 px-2 bg-[#FDE6E8] rounded-full text-tertiary inline">
                Immilink
              </span>
            </div>
            <h2 className="mb-0">About us</h2>
            <p className="text-lg mb-0">
              This is just a simple text made for Essentials.
            </p>
            <p className="text-lg mb-0">
              Embark on a transformative journey with us at Moves International!
              Our passion is guiding you towards world-class education in
              Australia. Experience cultural diversity, academic excellence, and
              unforgettable memories. Your global future starts here, as we
              ensure your study abroad dreams become a successful reality.
              Welcome to boundless opportunities!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
