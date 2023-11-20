import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhyImmilink = () => {
  return (
    <section>
      <div className="container">
        <h2 className="text-h1 mb-10">Why Immilink</h2>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0">
          <Image
            src="/images/home/why-immi.png"
            alt="Why ImmiLink"
            width={670}
            height={670}
            className="object-cover z-[-1]"
            priority
          />
          <div className="flex flex-col gap-5  lg:gap-[40px] p-[60px] bg-secondary lg:mt-[100px] lg:-mb-[50px] lg:-ml-[50px] max-w-[570px] w-full z-10 max-h-[600px]">
            <h2 className="text-white mb-0 line-clamp-3">
              Create stunning websites and landing pages in minutes!
            </h2>
            <p className="text-white mb-0 text-lg line-clamp-[8]">
              Embark on a transformative journey with us at Moves International!
              Our passion is guiding you towards world-class education in
              Australia. Experience cultural diversity, academic excellence, and
              unforgettable memories. Your global future starts here, as we
              ensure your study abroad dreams become a successful reality.
              Welcome to boundless opportunities!
            </p>
            <div>
              <Link href="#" className="btn btn-primary">
                More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyImmilink;
