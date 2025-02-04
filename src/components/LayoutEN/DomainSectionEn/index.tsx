"use client"

import { Accordion, AccordionItem } from "@nextui-org/accordion"
import { motion } from "framer-motion"
import { useRef } from "react"

const ArrowBox = () => (
  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-md bg-yellow/20">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-yellow"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  </div>
)

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <section
        id="features"
        className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
      >
        <div className="container">
          <div className="max-w-full" data-wow-delay=".15s">
            <div
              className="mx-auto mb-14 max-w-full text-center"
              ref={scrollRef}
            >
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                // viewport={{ root: scrollRef }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="font-Title mb-4 text-3xl font-bold !leading-tight dark:text-white sm:text-4xl md:text-[45px]"
              >
                We audit
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              <div className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#4aa9b8"
                        d="M18 26h12v2H18zm0-5h12v2H18zm0-5h12v2H18z"
                      />
                      <path
                        fill="#4aa9b8"
                        d="M14 25H9.5a7.496 7.496 0 0 1-1.322-14.876A10 10 0 0 1 28 12h-2a7.999 7.999 0 0 0-15.95-.87l-.09.834l-.837.056A5.496 5.496 0 0 0 9.5 23H14Z"
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
                    Infrastructure & System
                  </motion.h3>
                  <div className="inline-block">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="pr-[10px] text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.3px] md:text-[18px]"
                    >
                      Our system infrastructure and cloud audits enable us to
                      assess the overall IS environment in a strictly
                      professional and productive context. This assessment
                      enables us to identify optimization opportunities on both
                      a purely technical and organizational level.
                    </motion.p>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="mb-7 mt-4 text-xl font-bold dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      For this purpose, we evaluate
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="pr-[10px]"
                    >
                      <div className="mb-1 text-start text-base font-light leading-relaxed text-white md:text-[17px]">
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              <span className="font-bold">IS maturity</span>
                            </p>
                          </div>

                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              <span className="font-bold">
                                End-user maturity
                              </span>{" "}
                              of the environment
                            </p>
                          </div>

                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Service and application security configurations
                            </p>
                          </div>

                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Controls relating to business processes supported
                              by applications
                            </p>
                          </div>

                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              <span className="font-bold">
                                Compliance of information systems
                              </span>{" "}
                              with standardization requirements
                            </p>
                          </div>

                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              <span className="font-bold">
                                The Cloud Environment:
                              </span>{" "}
                              from the financial to the technical aspects,
                              including Cloud solution design, resource sizing,
                              monitoring and much more.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="#4aa9b8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M6 9a6 6 0 1 0 12 0A6 6 0 0 0 6 9" />
                        <path d="M12 3q2 .5 2 6c0 5.5-.667 5.667-2 6m0-12q-2 .5-2 6c0 5.5.667 5.667 2 6M6 9h12M3 20h7m4 0h7m-11 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2-5v3" />
                      </g>
                    </svg>
                  </div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mb-5 text-xl font-bold text-[#5793C7] dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    Network & Security
                  </motion.h3>
                  <div className="inline-block">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="pr-[10px] text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.3px] md:text-[18px]"
                    >
                      Network and security audits play a crucial role in
                      protecting an organization&apos;s IT infrastructures. Its aim
                      is to identify potential vulnerabilities and risks, in
                      order to guarantee the security, performance and
                      compliance of networks and information systems. We offer a
                      range of services to assess, strengthen and protect
                      corporate networks and securities infrastructures.
                    </motion.p>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="mb-7 mt-4 text-xl font-bold dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Network audit
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="pr-[10px]"
                    >
                      <div className="mb-1 text-base font-light text-white">
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">Architecture audit</p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">Network maturity analysis</p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">Configuration audit</p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">Performance analysis</p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">Resilience analysis</p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">Load tests</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-base font-light text-white mt-3">
                        <span className="my-1 font-bold">
                          IS security audit
                        </span>{" "}
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Inspection of firewalls and security equipment
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Network segmentation analysis
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Compliance audits (ISO 27001, RGPD, PCI DSS, etc.)
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">Vulnerability audits</p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">Audit security policies</p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Analysis of web and mobile applications
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Intrusion testing (Pentesting)
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">Access and identity audits</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 text-base font-light text-white">
                        <span className="my-1 font-bold">
                          Governance and risk management audit
                        </span>{" "}
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">IT Risk Management Audit</p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Business continuity audits and recovery plans
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#4aa9b8"
                        d="M2 2h20v20H2zm2 2v7h1.998v-.002h2.004V11H20V4zm16 9H8.002v.002H5.998V13H4v7h16zM5.998 6.5h2.004v2.004H5.998zm0 9h2.004v2.004H5.998z"
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
                    Data center & Energy
                  </motion.h3>
                  <div className="inline-block">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="pr-[10px] text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.3px] md:text-[18px]"
                    >
                      To improve our customers&apos; positioning within the scope of an Energy and Data Center audit, we start from a global analysis that brings together three crucial issues, namely :
                    </motion.p>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="mb-7 mt-4 text-xl font-bold dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Data Center Energy Management
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="pr-[10px]"
                    >
                      <div className="mb-1 text-left font-light text-white">
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">Energy efficiency</p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">Energy source</p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                            Cooling systems
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                            Supervision and energy monitoring
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 text-left font-light text-white">
                        <span className="my-1 font-bold">
                        Systems Resilience Audit
                        </span>{" "}
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                            Power supply design / Verification of redundancy infrastructures
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                            Analysis of data backup systems for service continuity in the event of an incident
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                            Network Optimization Analysis
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 text-left text-base font-light text-white">
                        <span className="mb-4 font-bold">
                        Safety and Compliance Management
                        </span>{" "}
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <ArrowBox />
                            <p>
                            Ensure that the Data Center complies with current standards such as ISO 27001 (information security management), ISO 50001 (energy management) or the TIA-942 standard for Data Center infrastructure, as well as Uptime Institute requirements.
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p>
                            Assessment of physical and logical security measures (access controls, surveillance cameras, etc.).
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p>Encryption and data protection</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
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
