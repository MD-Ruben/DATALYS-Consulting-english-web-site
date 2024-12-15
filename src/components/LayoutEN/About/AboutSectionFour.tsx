"use client"

import { useRef } from "react"
import SectionTitle from "../Common/SectionTitle"
import { motion } from "framer-motion"

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
)

const AboutSectionFour = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-lg font-light text-slate-300">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  )

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 mt-[45px] md:mt-[175px]">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div
              className="font-Title w-full px-4 text-start lg:w-1/2"
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
                Founded in 2023, by committed Consultants with a passion for
                Digitization, Datalys Consulting is an IT Service Company that
                brings reinvented expertise. We specialize in Cloud, IT
                Infrastructure and Networks & Security: the key topics impacting
                the world of IT and Digitization. The transformation and
                management of IT & Cloud infrastructures, the energy
                optimization of Data Centers and the efficient deployment of IT
                Network & Security systems are all part of our cutting-edge
                skills. At DATALYS, our commitment is to offer innovative
                solutions that propel your business into the digital future and
                help you achieve your strategic objectives.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.6px] md:text-lg"
              >
                Our dedicated team works tirelessly to design reliable,
                high-performance and eco-responsible IT environments. Drawing on
                our expertise in cloud, energy and networks & security, we
                reinvent our expertise to tailor it to your specific needs. At
                DATALYS, innovation is at the heart of our DNA. We offer our
                customers next-generation solutions and best practices to give
                them a competitive edge in a constantly changing world.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.6px] md:text-lg"
              >
                Working with Datalys means being supported by a dynamic,
                experienced, agile, motivated, committed and passionate team,
                capable of helping you with your digital transformation,
                optimizing your energy consumption and strengthening the
                robustness of your IT network. We provide you with clear,
                precise optimization paths for your entire IS. Team up with us
                to shape the future of your business. Welcome to Datalys, we
                look forward to working with you on this journey.
              </motion.p>
            </div>

            <div className="w-full px-4 lg:mr-0 lg:w-1/2" ref={scrollRef}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative mx-auto max-w-[500px] rounded-full bg-[#294666] p-4 shadow-lg"
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSectionFour
