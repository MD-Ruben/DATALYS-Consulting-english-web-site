"use client"

import Image from "next/image"
import { Button } from "@nextui-org/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRef } from "react"

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
)

const AboutSectionThree = () => { 
  const scrollRef = useRef<HTMLDivElement>(null)

  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  )

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2" ref={scrollRef}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ root: scrollRef }}
                transition={{ duration: 0.5 }}
                className="relative mx-auto p-4 max-w-[500px] rounded-full bg-[#294666] shadow-lg"
              >
                <img
                  src="/images/about/pexels.jpg"
                  alt="About Us Image"
                  width={500}
                  height={500}
                  className="rounded-full"
                />
              </motion.div>
            </div>

            <div
              className="font-Title w-full px-4 text-start lg:mr-0 lg:w-1/2"
              ref={scrollRef}
            >
              {/* <div className="absolute bottom-20 hidden w-full px-4 md:block">
                <div className="mx-auto max-w-[700px]">
                  <img
                    src="/images/logo/logo.png"
                    alt="about-image"
                    className="h-full w-full opacity-10"
                  />
                </div>
              </div> */}
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                // viewport={{ root: scrollRef }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="font-Title mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]"
              >
                About us
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-base font-light leading-relaxed text-justify text-slate-300 [word-spacing:-1.2px] md:text-xl"
              >
                Founded in 2023, by committed Consultants with a passion for
                Digitization, DATALYS Consulting is an IT Service Company that
                brings reinvented expertise. We specialize in Cloud, IT
                Infrastructure and Networks & Security: the key topics impacting
                the world of IT and Digitization.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-2 text-base font-light leading-relaxed text-justify text-slate-300 [word-spacing:-1.2px] md:text-xl"
              >
                Transformation, IT & cloud infrastructure management, data
                center energy optimization and efficient deployment of IT
                network and security systems are all part of our core
                competencies. At DATALYS, our commitment is to offer innovative
                solutions that propel your business into the digital future and
                help you achieve your strategic objectives.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-2 text-base font-light leading-relaxed text-justify text-slate-300 [word-spacing:-1.2px] md:text-xl"
              >
                At DATALYS, innovation is at the heart of our DNA. We offer our
                customers next-generation solutions and best practices to give
                them a competitive edge in a constantly changing world.
              </motion.p>
              {/* Call to Action Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-4 flex items-center"
              >
                <Button
                  as={Link}
                  href="/apropos"
                  className="flex items-center justify-center rounded-xl border-2 dark:border-body-color-dark"
                >
                  <span className="text-sm sm:text-base md:text-lg dark:text-slate-300">
                    Read more
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    className="ml-2"
                  >
                    <path
                      fill="#959CB1"
                      d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"
                    />
                  </svg>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSectionThree
