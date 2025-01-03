"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const AboutFormations = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="pt-16 md:pt-20 lg:pt-28 mt-[45px] md:mt-[105px]">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div
              className="font-Title w-full px-4 text-start lg:w-1/2"
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
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.7px] md:text-xl"
              >
                At DATALYS, we firmly believe that developing the skills of your
                resources is essential to both their personal fulfillment and
                the collective success of your organization. That's why we've
                put together a training program that adapts to your needs while
                meeting your company's strategic objectives.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-2 text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.7px] md:text-xl"
              >
                We offer tailor-made training courses in Cloud, System
                Infrastructure, Energy & Datacenter, Networks & Security and
                many others ...etc. Our training courses are offered both
                remotely and face-to-face, depending on the type of training and
                our customers' mobility requirements.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-2 text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.7px] md:text-xl"
              >
                We use a blended approach comprising face-to-face training
                e-learning and individual coaching sessions. sessions. Each
                company can benefit from a training plan. We are convinced that
                training is a valuable investment for your company.
              </motion.p>
            </div>

            <div className="w-full px-4 lg:mr-0 lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mx-auto max-w-[500px] rounded-full bg-[#294666] p-6 shadow-lg"
              >
                <img
                  src="/images/about/training.png"
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
    // <section className="relative z-10 py-16 md:py-20 lg:py-28">
    //   <div className="container">
    //     <div className="mx-auto mb-14 max-w-[560px] text-center">
    //       <h2 className="font-Title mb-4 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
    //         Training course
    //       </h2>
    //       <p className="text-center text-base !leading-relaxed text-body-color md:text-lg">
    //         In addition to our Audit and Solutions Integration offerings, one of
    //         our core businesses is Training. In this area, we offer tailor-made
    //         training courses in the areas we cover (Cloud, Infra System, Energy
    //         & Datacenter and Network & Security). Our training courses are
    //         offered both remotely and face-to-face, depending on the type of
    //         training and the mobility requirements of our customers.
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
  )
}

export default AboutFormations
