"use client";
import { RxArrowTopRight } from "react-icons/rx";
import React from "react";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import { Accordion, AccordionItem } from "@nextui-org/react";

const DomainFormations = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-full" data-wow-delay=".15s">
              <div className="mx-auto mb-14 max-w-full text-start">
                <h2 className="font-Title mb-4 text-start text-2xl font-bold !leading-tight text-black dark:text-white sm:text-3xl md:text-[35px]">
                  Our training objectives :
                </h2>
              </div>
              <Accordion>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Our training objectives :"
                  className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                >
                  <p>
                    1.
                    <span className="text-extrabold">Skills Development</span>:
                    Offering customized training courses to strengthen technical
                    and managerial skills.
                  </p>
                  <p className="mt-2">
                    2.{" "}
                    <span className="text-extrabold">
                      Innovation & Adaptability
                    </span>{" "}
                    : Encourage the learning of new technologies and work
                    methods.
                  </p>
                  <p className="mt-2">
                    3.{" "}
                    <span className="text-extrabold">
                      Professional Development
                    </span>{" "}
                    : Promoting skills development and career prospects career
                    prospects.
                  </p>
                  <h3 className="font-Title mt-2 text-start text-xl font-bold !leading-tight text-black dark:text-white sm:text-3xl md:text-[35px]">
                    Our training courses :
                  </h3>
                  <p className="mt-2">
                    <span className="text-extrabold">
                      • Training and Technical Workshop :
                    </span>{" "}
                    Courses on industry-specific tools, solutions and software,
                    specific to our industry.
                  </p>
                  <p className="mt-2">
                    <span className="text-extrabold">
                      • Workshops on Leadership :
                    </span>{" "}
                    Programs to develop management and communication skills.
                  </p>
                  <p className="mt-2">
                    <span className="text-extrabold">• Seminars :</span>{" "}
                    Initiatives to showcase products and solutions and build
                    technical skills and capabilities.
                  </p>
                  <p className="mt-2">
                    Together, let's continue to build a promising future!
                  </p>
                  <p className="mt-2">Do you need training or support?</p>
                  <p className="mt-2">
                    TALK TO AN EXPERT --{" "}
                    <Link href="/contact" className="text-primary">
                      REQUEST A QUOTE
                    </Link>
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-full" data-wow-delay=".15s">
              <div className="mx-auto mb-14 max-w-full text-start">
                <h2 className="font-Title mb-4 text-start text-2xl font-bold !leading-tight text-black dark:text-white sm:text-3xl md:text-[35px]">
                  Technology solutions integration
                </h2>
              </div>

              <Accordion defaultExpandedKeys={["1"]}>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Intégration de solutions technologiques"
                  className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                >
                  <p className="text-justify [word-spacing:-1.7px]">
                    At DATALYS, our commitment is to offer you innovative
                    solutions tailored to your needs, while guaranteeing
                    impeccable quality of service. Since our creation, we have
                    always placed customer satisfaction at the heart of our
                    strategy. This approach has enabled us to build solid,
                    long-lasting relationships with our partners.
                  </p>
                  <p className="mt-2 text-justify [word-spacing:-1.7px]">
                    We firmly believe that the integration of technological
                    solutions should be simple, fluid and, above all,
                    end-user-centric. That's why we make a point of supporting
                    you every step of the way, from design to implementation and
                    ongoing support. Our teams of experts are dedicated to
                    making your projects a success, providing you with
                    personalized support and ensuring that your services run
                    smoothly.
                  </p>
                  <p className="mt-2 text-justify [word-spacing:-1.7px]">
                    DATALYS doesn't just meet your expectations, we aim to
                    exceed them. Our proactive approach and our ability to
                    anticipate your future needs make us a trusted partner,
                    capable of propelling you towards innovation and
                    performance.
                  </p>
                  <p className="mt-2 text-justify [word-spacing:-1.7px]">
                    I would like to thank each and every one of our customers
                    for the trust they place in us. Together, we'll build the
                    future of your business with solutions that are robust,
                    secure and perfectly integrated into your infrastructure.
                  </p>
                  <p className="mt-2 text-justify [word-spacing:-1.7px]">
                    Welcome to DATALYS, where innovation meets excellence.
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainFormations;
