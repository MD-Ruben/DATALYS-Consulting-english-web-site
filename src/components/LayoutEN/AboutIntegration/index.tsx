"use client";

import React, { useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link";
import Image from "next/image";

const AboutIntegration = () => { 
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="pt-16 md:pt-20 lg:pt-28 mt-[45px] md:-mt-[105px]">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="font-Title w-full px-4 text-start lg:w-1/2 mb-10 lg:mb-0" ref={scrollRef}>
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
                className="text-justify text-base leading-relaxed font-light text-slate-300 [word-spacing:-1.7px] md:text-xl"
              >
                At DATALYS, we redefine solution integration to perfectly match
                your needs. Our primary mission is to simplify the operation of
                services after implementation, ensuring that they are
                meticulously configured to your specific requirements. Our
                services cover a broad spectrum, including the integration of
                infrastructures solutions for system, networks and security, as
                well as energy, datacenters and the cloud.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-2 text-justify text-base leading-relaxed font-light text-slate-300 [word-spacing:-1.7px] md:text-xl"
              >
                We provide our customers with rigorous support, with the aim of
                making them autonomous and confident in the management of their
                solutions. All our integrations are monitored via dedicated
                tools and channels, specially designed to offer you optimum
                service.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-2 text-justify text-base leading-relaxed font-light text-slate-300 [word-spacing:-1.7px] md:text-xl"
              >
                Our expertise is based on key principles that ensure the success
                of every project.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-2 text-justify text-base leading-relaxed font-light text-slate-300 [word-spacing:-1.7px] md:text-xl"
              >
                Our personalized approach and technical expertise enable us to
                meet your specific needs and support you throughout the
                integration process. We firmly believe that every project is
                unique, and we are committed to providing customized solutions
                that reflect your vision and objectives. Let's work together to
                create a powerful and effective market presence that takes your
                business to new heights.
              </motion.p>
            </div>

            <div className="w-full px-4 lg:mr-0 lg:w-1/2" ref={scrollRef}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mx-auto p-2 max-w-[550px] rounded-full bg-[#294666] shadow-lg"
              >
                <Image
                  src="/images/integration/aaabout_integration.jpeg"
                  alt="Integration Image"
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
    // <section className="relative z-10 py-16 md:py-20 lg:py-28">
    //   <div className="container">
    //     <div className="mx-auto mb-14 max-w-[660px] text-center">
    //       <h2 className="font-Title mb-4 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
    //         Integration
    //       </h2>
    //       <p className="text-start text-base !leading-relaxed text-body-color md:text-lg">
    //         At DATALYS, we redefine solution integration to perfectly match your
    //         needs. Our primary mission is to simplify the operation of services
    //         after implementation, ensuring that they are meticulously configured
    //         to your specific requirements. Our services cover a broad spectrum,
    //         including the integration of infrastructure solutions for systems,
    //         networks and security, as well as energy, datacenters and the cloud.
    //       </p>
    //     </div>
    //     <div className="-mx-4 flex flex-wrap">
    //       <div className="w-full px-4">
    //         <div
    //           className="mx-auto max-w-[770px] overflow-hidden rounded-md"
    //           data-wow-delay=".15s"
    //         >
    //           <div className="relative aspect-[77/40] items-center justify-center">
    //             <img
    //               src="/images/audit-title.jpg"
    //               className="h-full w-full object-cover object-center"
    //               alt="audit image"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    // </section>
  );
};

export default AboutIntegration;
