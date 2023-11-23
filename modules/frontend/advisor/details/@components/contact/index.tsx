import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_270px] max-w-[970px] w-full gap-[25px]">
          <div>
            <h3 className="text-[22px]">Contact Info</h3>
            <div className="flex flex-col gap-3 mb-8">
              <div className="grid grid-cols-[230px_1fr] gap-[50px]">
                <p className="mb-0">Phone Number</p>
                <p className="mb-0">: 0353309567</p>
              </div>
              <div className="grid grid-cols-[230px_1fr] gap-[50px]">
                <p className="mb-0">Email Address</p>
                <p className="mb-0">: rachael.hall@aapa.net.au</p>
              </div>
              <div className="grid grid-cols-[230px_1fr] gap-[50px]">
                <p className="mb-0">Office Location</p>
                <p className="mb-0">
                  : 86 River Road, Sydney, New South Wales 2750, Australia
                </p>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2818364065506!2d90.38491307594232!3d23.73732708927694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c780d8921d%3A0x548a98b9b05efa42!2sM4YOURS%20IT!5e0!3m2!1sen!2sbd!4v1700744014827!5m2!1sen!2sbd"
                width="600"
                height="522"
                loading="lazy"
              ></iframe>
            </div>
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
