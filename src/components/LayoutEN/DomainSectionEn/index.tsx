"use client"

import { Accordion, AccordionItem } from "@nextui-org/accordion"
import { motion } from "framer-motion"
import { useRef } from "react"

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
                    Infrastructure & Systems
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
                      className="mb-1 mt-4 text-xl font-bold dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
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
                      <div className="mb-1 text-justify text-base font-light leading-relaxed text-[#5793C7] [word-spacing:-1.7px] md:text-[17px]">
                        <p>
                          - <span className="font-bold">SI maturity</span>
                        </p>
                        <p>
                          - The
                          <span className="font-bold">
                            maturity of the environment's end-users
                          </span>{" "}
                        </p>
                        <p>- Service and application security configurations</p>
                        <p>
                          - Controls relating to business processes supported by
                          applications
                        </p>
                        <p>
                          - La{" "}
                          <span className="font-bold">
                            Compliance of information systems
                          </span>
                          with standardization requirements
                        </p>
                        <p>
                          -{" "}
                          <span className="font-bold">Cloud Environment :</span>{" "}
                          from the financial to the technical aspects, including
                          Cloud solution design, resource sizing, monitoring and
                          much more.
                        </p>
                      </div>
                      <div className="text-justify text-base font-light leading-relaxed text-[#5793C7] [word-spacing:-1.8px] md:text-[17px]">
                        <p>
                          Our main vocation is to provide all types of
                          information systems with the best practices and the
                          best security, in order to make the most of the
                          services and applications that are at the heart of our
                          business.
                        </p>
                        <p>
                          Our Infra & Cloud system audit offer covers both
                          applications and hardware.
                        </p>
                      </div>
                    </motion.div>
                    {/* <div className="mt-1 flex flex-col items-center justify-center space-y-4 sm:space-y-0">
                      <Accordion>
                        <AccordionItem
                          key="1"
                          aria-label="Accordion 1"
                          title="For this purpose, we evaluate"
                          className="text-start text-sm font-bold text-[#5793C7] sm:text-base lg:text-lg xl:text-xl"
                        >
                          <div className="mb-1 text-justify text-base font-light text-[#5793C7]">
                            <p>
                              - <span className="font-bold">SI maturity</span>
                            </p>
                            <p>
                              - The
                              <span className="font-bold">
                                maturity of the environment's end-users
                              </span>{" "}
                            </p>
                            <p>
                              - Service and application security configurations
                            </p>
                            <p>
                              - Controls relating to business processes
                              supported by applications
                            </p>
                            <p>
                              - La{" "}
                              <span className="font-bold">
                                Compliance of information systems
                              </span>
                              with standardization requirements
                            </p>
                            <p>
                              -{" "}
                              <span className="font-bold">
                                Cloud Environment :
                              </span>{" "}
                              from the financial to the technical aspects,
                              including Cloud solution design, resource sizing,
                              monitoring and much more.
                            </p>
                          </div>
                          <div className="text-base font-light text-[#5793C7]">
                            <p>
                              Our main vocation is to provide all types of
                              information systems with the best practices and
                              the best security, in order to make the most of
                              the services and applications that are at the
                              heart of our business.
                            </p>
                            <p>
                              Our Infra & Cloud system audit offer covers both
                              applications and hardware.
                            </p>
                          </div>
                        </AccordionItem>
                      </Accordion>
                    </div> */}
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
                      className="pr-[10px] text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.1px] md:text-[18px]"
                    >
                      Network and security audits play a crucial role in
                      protecting an organization's IT infrastructures. Its aim
                      is to identify potential vulnerabilities and risks, in
                      order to guarantee the security, performance and
                      compliance of networks and information systems. We offer a
                      range of services to assess, strengthen and protect
                      corporate network and security infrastructures.
                    </motion.p>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="mb-1 mt-4 text-xl font-bold dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
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
                      <div className="mb-1 text-justify text-base font-light leading-relaxed text-[#5793C7] [word-spacing:-1.7px] md:text-[17px]">
                        <p>- Architecture audit </p>
                        <p>- Network maturity analysis</p>
                        <p>- Configuration audit</p>
                        <p>- Performance analysis</p>
                        <p>- Resilience analysis</p>
                        <p>- Load tests</p>
                      </div>
                      <div className="text-base font-light text-[#5793C7]">
                        <span className="my-1 font-bold">
                          SI security audit
                        </span>{" "}
                        <p>- Inspection of firewalls and security equipment</p>
                        <p>- Network segmentation analysis</p>
                        <p>
                          - Compliance audits (ISO 27001, RGPD, PCI DSS, etc.)
                        </p>
                        <p>- Vulnerability audits</p>
                        <p>- Audit security policies</p>
                        <p>- Analysis of web and mobile applications</p>
                        <p>- Intrusion testing (Pentesting)</p>
                        <p>- Access and identity audits</p>
                      </div>
                      <div className="text-base font-light text-[#5793C7]">
                        <span className="my-1 font-bold">
                          Governance and risk management audit
                        </span>{" "}
                        <p>- IT Risk Management Audit</p>
                        <p>- Business continuity audits and recovery plans</p>
                      </div>
                    </motion.div>
                    {/* <div className="mt-1 flex flex-col items-center justify-center space-y-4 sm:space-y-0">
                      <Accordion>
                        <AccordionItem
                          key="1"
                          aria-label="Accordion 1"
                          title="Network audit"
                          className="text-start text-sm font-bold text-[#5793C7] sm:text-base lg:text-lg xl:text-xl"
                        >
                          
                        </AccordionItem>
                      </Accordion>
                    </div> */}
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
                    Datacenter & Energy
                  </motion.h3>
                  <div className="inline-block">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="pr-[10px] text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.6px] md:text-[18px]"
                    >
                      To improve our customers' positioning within the scope of
                      an Energy and Data Center audit, we start with a global
                      analysis that brings together three crucial issues, namely
                      :
                    </motion.p>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="mb-1 mt-4 text-xl font-bold dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Data Center Energy Management
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="mb-1 pr-[10px] text-justify text-base font-light leading-relaxed text-[#5793C7] [word-spacing:-1.7px] md:text-[17px]"
                    >
                      <div className="my-1">
                        <p>- Energy efficiency </p>
                        <p>- Energy sources</p>
                        <p>- Cooling systems</p>
                        <p>- Supervision and energy monitoring</p>
                      </div>
                      <div className="my-1">
                        <span className="my-1 font-bold">
                          Systems Resilience Audit
                        </span>{" "}
                        <p>
                          - Power supply design / Verification of redundancy
                          infrastructures
                        </p>
                        <p>
                          - Analysis of data backup systems for service
                          continuity in the event of an incident
                        </p>
                        <p>- Network Optimization Analysis </p>
                      </div>
                      <div className="my-1">
                        <span className="my-1 font-bold">
                          Safety and Compliance Management
                        </span>{" "}
                        <p>
                          - Ensure that the Data Center complies with current
                          standards such as ISO 27001 (information security
                          management), ISO 50001 (energy management) or the
                          TIA-942 standard for Data Center infrastructure, as
                          well as Uptime Institute requirements.
                        </p>
                        <p>
                          - Assessment of physical and logical security measures
                          (access controls, surveillance cameras, etc.).
                        </p>
                        <p>- Encryption and data protection</p>
                        <p className="my-1">
                          By carrying out a detailed audit and focusing on these
                          aspects, we can enhance{" "}
                          <span className="font-bold">the efficiency</span>,
                          <span className="font-bold">safety</span> and{" "}
                          <span className="font-bold">sustainability</span> of
                          the infrastructure (Energy and Data Center) while
                          ensuring compliance with standards and optimal
                          management of energy resources for all our customers.
                        </p>
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
