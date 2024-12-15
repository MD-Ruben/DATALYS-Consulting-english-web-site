"use client"

import { Accordion, AccordionItem } from "@nextui-org/accordion"
import Link from "next/link"
import { useRef } from "react"
import { motion } from "framer-motion"

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <section
        id="features"
        className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
      >
        <div className="container">
          <div className="max-w-full" data-wow-delay=".15s" ref={scrollRef}>
            <div className="mx-auto mb-14 max-w-full text-center">
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                // viewport={{ root: scrollRef }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="font-Title mb-4 text-3xl font-bold !leading-tight dark:text-white sm:text-4xl md:text-[45px]"
              >
                We provide training
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
              <div className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 18 18"
                    >
                      <path
                        fill="#4aa9b8"
                        fill-rule="evenodd"
                        d="M13.037.057A.75.75 0 0 1 13.5.75V2.5h1.75a.75.75 0 0 1 .53 1.28l-3 3a.75.75 0 0 1-.53.22h-.377a4 4 0 1 1-4.797-2.892a.75.75 0 0 1 .347 1.46A2.5 2.5 0 1 0 10.29 7h-.23L8.53 8.53a.75.75 0 1 1-1.06-1.06L9 5.94V3.75a.75.75 0 0 1 .22-.53l3-3a.75.75 0 0 1 .817-.163M10.5 4.061V5.5h1.44l1.5-1.5H12V2.56zM4.82 2.33a6.5 6.5 0 0 1 3.853-.796a.75.75 0 1 0 .155-1.492a8 8 0 1 0 7.129 7.128a.75.75 0 1 0-1.492.155A6.5 6.5 0 1 1 4.82 2.331Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mb-5 text-xl font-bold text-[#5793C7] dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    Our Training Objectives
                  </motion.h3>

                  <div className="inline-block">
                    <div className="text-justify text-base font-light leading-relaxed text-white [word-spacing:-1.8px] md:text-[17px]">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <p>
                          - Skills Development: Tailor-made training programs to
                          enhance your teams' technical and managerial skills.
                        </p>
                        <p>
                          - Innovation and Adaptability: Encouraging the
                          learning of new technologies and work methods.
                        </p>
                        <p>
                          - Professional fulfillment: Promoting skills
                          development and career prospects.
                        </p>
                        <h2 className="mb-1 mt-4 text-xl font-bold dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                        Our training courses
                        </h2>
                        <div className="mb-1 text-justify text-base font-light text-[#5793C7]">
                            <p>
                              -{" "}
                              <span className="font-bold">
                                Training and Technical Workshop :
                              </span>{" "}
                              Courses on industry-specific tools, solutions and
                              software.
                            </p>
                            <p>
                              -{" "}
                              <span className="font-bold">
                                Leadership workshops :
                              </span>{" "}
                              Programs to develop management and communication
                              skills.
                            </p>
                            <p>
                              - <span className="font-bold">Seminars :</span>{" "}
                              Initiatives to showcase products and solutions and
                              build technical skills and capabilities.
                            </p>
                            <p>
                              Together, let's continue to build a promising
                              future!
                            </p>
                            <p>Do you need training or support?</p>
                            <div className="flex items-end gap-2 mt-2">
                              <Link
                                href="/contact"
                                className="font-semibold text-[#5793C7]"
                              >
                                ASK FOR A QUOTE
                              </Link>
                            </div>
                          </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full px-4">
                  <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                    <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl">
                    Contact us for training.
                    </h2>

                    <form className="my-10">
                      <div className="flex flex-wrap">
                        <input
                          type="checkbox"
                          disabled
                          id="botcheck"
                          className="hidden"
                          style={{ display: "none" }}
                        ></input>
                        <div className="w-full px-4 md:w-1/2">
                          <div className="mb-5">
                            <input
                              type="text"
                              disabled
                              placeholder="First and last name"
                              autoComplete="off"
                              className="w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-primary focus:ring-4 dark:bg-gray-900 dark:text-primary"
                            />
                          </div>
                        </div>

                        <div className="w-full px-4 md:w-1/2">
                          <div className="mb-5">
                            <label htmlFor="email_address" className="sr-only">
                              Adresse e-mail
                            </label>
                            <input
                              id="email_address"
                              disabled
                              type="email"
                              placeholder="E-mail address"
                              autoComplete="off"
                              className="w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-primary focus:ring-4 dark:bg-gray-900 dark:text-white"
                            />
                          </div>
                        </div>

                        <div className="w-full px-4 md:w-1/2">
                          <div className="mb-5">
                            <label htmlFor="email_address" className="sr-only">
                              Adresse e-mail
                            </label>
                            <input
                              id="email_address"
                              disabled
                              type="email"
                              placeholder="Enter your training"
                              autoComplete="off"
                              className="w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-primary focus:ring-4 dark:bg-gray-900 dark:text-white"
                            />
                          </div>
                        </div>

                        <div className="w-full px-4 md:w-1/2">
                          <div className="mb-5">
                            <label htmlFor="email_address" className="sr-only">
                              Adresse e-mail
                            </label>
                            <input
                              id="email_address"
                              disabled
                              type="email"
                              placeholder="Enter the type of training"
                              autoComplete="off"
                              className="w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-primary focus:ring-4 dark:bg-gray-900 dark:text-white"
                            />
                          </div>
                        </div>

                        <div className="w-full px-4">
                          <div className="mb-3">
                            <textarea
                              name="message"
                              disabled
                              placeholder="Your message"
                              className="h-36 w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-primary focus:ring-4 dark:bg-gray-900 dark:text-white"
                            />
                          </div>
                        </div>

                        <div className="w-full px-4">
                          <button
                            type="submit"
                            disabled
                            className="rounded-sm bg-primary px-9 py-4 font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-offset-2 dark:bg-primary dark:text-white"
                          >
                            Contact us
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
