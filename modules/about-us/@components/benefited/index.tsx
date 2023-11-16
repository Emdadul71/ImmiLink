"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Benefited = () => {
  const [focus, setFocus] = React.useState(false);

  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-[30px] items-center mb-5 lg:mb-[60px]">
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
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          <div className="px-[27px] py-[44px] text-center bg-grey rounded-md">
            <h2 className="text-secondary mb-[6px]">
              <CountUp
                start={focus ? 0 : undefined}
                end={20000}
                duration={2}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <VisibilitySensor
                      onChange={(isVisible: any) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span>+</span>
                    </VisibilitySensor>
                  </div>
                )}
              </CountUp>
            </h2>
            <p className="text-lg font-medium">best-fit Student</p>
          </div>
          <div className="px-[27px] py-[44px] text-center bg-grey rounded-md">
            <h2 className="text-secondary mb-[6px]">
              <CountUp
                start={focus ? 0 : undefined}
                end={50}
                duration={2}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <VisibilitySensor
                      onChange={(isVisible: any) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span>+</span>
                    </VisibilitySensor>
                  </div>
                )}
              </CountUp>
            </h2>
            <p className="text-lg font-medium">University Partners</p>
          </div>
          <div className="px-[27px] py-[44px] text-center bg-grey rounded-md">
            <h2 className="text-secondary mb-[6px]">
              <CountUp
                start={focus ? 0 : undefined}
                end={2}
                duration={2}
                redraw={true}
                suffix=" Million"
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <VisibilitySensor
                      onChange={(isVisible: any) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span>+</span>
                    </VisibilitySensor>
                  </div>
                )}
              </CountUp>
            </h2>
            <p className="text-lg font-medium">Student Counselling's</p>
          </div>
          <div className="px-[27px] py-[44px] text-center bg-grey rounded-md">
            <h2 className="text-secondary mb-[6px]">
              {" "}
              <CountUp
                start={focus ? 0 : undefined}
                end={80}
                duration={2}
                redraw={true}
                suffix=" Million"
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <VisibilitySensor
                      onChange={(isVisible: any) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span>+</span>
                    </VisibilitySensor>
                  </div>
                )}
              </CountUp>
            </h2>
            <p className="text-lg font-medium">Website Users</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefited;
