"use client";
import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";
import React from "react";
import { nextui } from "@nextui-org/react";
import SectionTitle from "../Common/SectionTitle";
import { Accordion, AccordionItem } from "@nextui-org/react";

const DomainIntegration = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-full" data-wow-delay=".15s">
              <div className="mx-auto mb-14 max-w-full text-start">
                <h2 className="font-Title mb-4 text-start text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  Integration
                </h2>
              </div>
              <Accordion>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="integration"
                  className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                >
                  <p>
                    Our range of services covers everything from the integration
                    of System Infrastructure, Network & Security, Energy &
                    Datacenter and Cloud solutions. We provide our customers
                    with the support they need to ensure their autonomy and
                    peace of mind. All our integration assignments are monitored
                    via specially designed channels. We rely on :
                  </p>
                  <div className="mt-3 grid grid-cols-2">
                    <div className="col-span-2 md:col-span-1">
                      <p className="group flex items-center">
                        <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                        Tailor-made integration in specific areas of expertise
                      </p>
                      <p className="group flex items-center">
                        <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                        Certified engineers
                      </p>
                      <p className="group flex items-center">
                        <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                        Quality control on every integration project
                      </p>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <p className="group flex items-center">
                        <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                        Landmark documentation
                      </p>
                      <p className="group flex items-center">
                        <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                        24/7 support during and after integration and we
                        integrate
                      </p>
                    </div>
                  </div>
                </AccordionItem>
              </Accordion>
              <div className="mt-4" data-wow-delay=".15s">
                <div className="mx-auto mb-14 max-w-full text-start">
                  <h2 className="font-Title mb-4 text-start text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                    Our service offerings
                  </h2>
                </div>
                <Accordion defaultExpandedKeys={["1"]}>
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="Study (OPEX, CAPEX)"
                    className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                  >
                    <p>
                      Provide an essential first layer to short, medium and
                      long-term IT budget control...
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="Study (OPEX, CAPEX)"
                    className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                  >
                    <p>
                      Provide an essential first layer to short, medium and
                      long-term IT budget control...
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="Study (OPEX, CAPEX)"
                    className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                  >
                    <p>
                      Provide an essential first layer to short, medium and
                      long-term IT budget control...
                    </p>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-full" data-wow-delay=".15s">
              <div className="mx-auto mb-14 max-w-full text-start">
                <h2 className="font-Title mb-4 text-start text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  Our advantages
                </h2>
              </div>
              <Accordion defaultExpandedKeys={["1"]}>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Our advantages"
                  className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                >
                  <p>
                    All our services and achievements are closely monitored by
                    an after-sales service...
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

export default DomainIntegration;
