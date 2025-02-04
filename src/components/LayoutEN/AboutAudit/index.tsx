"use client"

import { RxArrowTopRight } from "react-icons/rx"
import React, { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const AboutAudit = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="pt-16 md:pt-20 lg:pt-28 mt-[45px] md:-mt-[105px]">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div
              className="font-Title w-full px-4 text-start -mt-0 lg:-mt-32 lg:w-1/2 mb-10 lg:mb-0"
              ref={scrollRef}
            >
              {/* <div className="absolute bottom-40 hidden w-full px-4 md:block">
                <div className="mx-auto max-w-[700px]">
                  <img
                    src="/images/logo/logo.png"
                    alt="about-image"
                    className="h-full w-full opacity-10"
                  />
                </div>
              </div> */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.2px] md:text-xl"
              >
                Adopting the best techniques to build governance around a{" "}
                <span className="font-semibold">reliable</span>,{" "}
                <span className="font-semibold">secure</span> and
                <span className="ml-1 font-semibold">standardized</span>{" "}
                Information System (IS) is not a given. Datalys Consulting, with
                its strong skills in the field of Audit, brings a reinvented
                expertise aimed at adding value to the standardization,
                reliability and security of IS.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-2 text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.7px] md:text-lg"
              >
                Our Audit offer covers the following points:
              </motion.p>

              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="py-2"
              >
                <li className="group flex items-center font-light text-slate-300">
                  <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  Process Auditing
                </li>
                <li className="group flex items-center font-light text-slate-300">
                  <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  Service Configuration Auditing
                </li>
                <li className="group flex items-center font-light text-slate-300">
                  <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  Architecture Audit
                </li>
                <li className="group flex items-center font-light text-slate-300">
                  <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  Safety Audit
                </li>
              </motion.ul>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-2 text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.7px] md:text-lg"
              >
                Coverage of the various perimeters we cover:
              </motion.p>

              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="py-2"
              >
                <li className="group flex items-center font-light text-slate-300">
                  <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  System & Cloud Infrastructure
                </li>
                <li className="group flex items-center font-light text-slate-300">
                  <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  Datacenter & Energy
                </li>
                <li className="group flex items-center font-light text-slate-300">
                  <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  Network & Security
                </li>
              </motion.ul>
            </div>

            <div className="w-full px-4 lg:mr-0 lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mx-auto p-2 max-w-[550px] rounded-full bg-[#294666] shadow-lg"
              >
                <Image
                  src="/images/audit/iiiStock-1048592652.jpg"
                  alt="Audit Image"
                  width={600} 
                  height={600}
                  className="rounded-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutAudit
