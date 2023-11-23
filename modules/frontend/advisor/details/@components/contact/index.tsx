import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_328px] max-w-[1028px] w-full gap-[25px]">
          <div>
            <h3 className="text-[22px]">Contact Info</h3>
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

export default Contact;
