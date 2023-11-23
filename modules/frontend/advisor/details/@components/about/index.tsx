import Link from "next/link";
import React from "react";

const AdvisorAbout = () => {
  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_328px] max-w-[1028px] w-full gap-[25px]">
          <div>
            <h3 className="text-[22px]">About Me</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisi porttitor malesuada
              duis mattis. Etiam semper condimentum vel amet varius vitae
              pellentesque commodo. Consequat purus libero nulla quam nulla
              nibh. Cras aliquam viverra tristique ullamcorper lorem commodo nec
              tincidunt duis. Ut arcu sed non in eget sed ut consequat.
              Suspendisse eleifend nascetur nulla nibh adipiscing quam et
              faucibus ornare. At elementum duis enim curabitur. Platea posuere
              sagittis commodo quam donec molestie ipsum. Volutpat in convallis
              fusce quam. Mi amet elementum ipsum diam adipiscing in cras in.
              Sed quis leo suspendisse adipiscing sed interdum commodo nec. Quis
              turpis fringilla tristique lectus quam arcu aliquet. Eget sit
              aliquet lobortis aliquet eu a pellentesque risus risus.
            </p>
            <p>
              Aliquet est enim turpis metus. Urna etiam non felis urna. Nisi
              pharetra id nullam felis cursus proin. Massa sodales sagittis
              lorem varius massa placerat. Aliquet adipiscing lectus ut a aenean
              dictum. Nisl varius fringilla ut massa fringilla feugiat lectus.
              Leo in cras scelerisque libero duis quis purus scelerisque.
            </p>
            <p>
              Suspendisse eleifend nascetur nulla nibh adipiscing quam et
              faucibus ornare. At elementum duis enim curabitur. Platea posuere
              sagittis commodo quam donec molestie ipsum. Volutpat in convallis
              fusce quam. Mi amet elementum ipsum diam adipiscing in cras in.
              Sed quis leo suspendisse adipiscing sed interdum commodo nec.
            </p>
          </div>
          <div className="p-5 bg-grey rounded-md self-start sticky top-[74px]">
            <h5>Services I provide</h5>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#" className="text-sm font-semibold">
                  Canada Citizenship
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-semibold">
                  Skilled Immigration programs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-semibold">
                  Family / spousal sponsorship
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-semibold">
                  Parents and Grandparents Program (PGP)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-semibold">
                  Admission and Study Permit
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-semibold">
                  Open Work Permit
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-semibold">
                  Start up visa program
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-semibold">
                  Visitor visa
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorAbout;
