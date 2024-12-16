"use client"

import { Accordion, AccordionItem } from "@nextui-org/accordion"
import Link from "next/link"
import { useRef } from "react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import useWeb3Forms from "@web3forms/react"

const ArrowBox = () => (
  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-md bg-primary/20">
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
      className="text-primary"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  </div>
)

const Services = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  })
  const [isSuccess, setIsSuccess] = useState(false)
  const [message, setMessage] = useState("")

  // Please update the Access Key in the .env
  const apiKey =
    process.env.PUBLIC_ACCESS_KEY || "78a95b88-cb54-4602-b53a-549b2e94711f"

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "DATALYS Consulting Store",
      subject: "Nouveau message d'un contact à partir de votre site web",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true)
      setMessage("Message sent successfully.")
      reset()
    },
    onError: (msg, data) => {
      setIsSuccess(false)
      setMessage("Un problème s'est produit. Veuillez réessayer plus tard.")
    },
  })

  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <section
        id="features"
        className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
      >
        <div className="container">
          <div className="max-w-full" data-wow-delay=".15s" ref={scrollRef}>
            {/* <div className="mx-auto mb-14 max-w-full text-center">
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
            </div> */}

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
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              <span className="font-bold">
                                Skills Development :
                              </span>
                              Tailor-made training programs to enhance your
                              teams' technical and managerial skills.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <ArrowBox />
                          <p className="flex-1">
                          <span className="font-bold">Innovation and Adaptability :</span> Encouraging the
                            learning of new technologies and work methods.
                          </p>
                        </div>

                        <div className="flex items-start">
                          <ArrowBox />
                          <p className="flex-1">
                          <span className="font-bold">Professional fulfillment :</span> Promoting skills
                            development and career prospects.
                          </p>
                        </div>

                        <h2 className="mb-4 mt-8 text-xl font-bold dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                          Our training courses
                        </h2>
                        <div className="space-y-4 text-justify text-base font-light text-[#5793C7]">

                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              <span className="font-bold">
                                Training and Technical Workshop :
                              </span>{" "}
                              Courses on industry-specific tools, solutions and
                              software.
                            </p>
                          </div>

                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              <span className="font-bold">
                                Leadership workshops :
                              </span>{" "}
                              Programs to develop management and communication
                              skills.
                            </p>
                          </div>

                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              <span className="font-bold">Seminars :</span>{" "}
                              Initiatives to showcase products and solutions and
                              build technical skills and capabilities.
                            </p>
                          </div>

                          <p>
                            Together, let's continue to build a promising future
                            ! Do you need training or support?
                          </p>
                          {/* <div className="mt-2 flex items-end gap-2">
                            <Link
                              href="/contact"
                              className="font-semibold text-[#5793C7]"
                            >
                              ASK FOR A QUOTE
                            </Link>
                          </div> */}
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

                    <form onSubmit={handleSubmit(onSubmit)} className="my-10">
                      <div className="flex flex-wrap">
                        <input
                          type="checkbox"
                          id=""
                          className="hidden"
                          style={{ display: "none" }}
                          {...register("botcheck")}
                        ></input>
                        <div className="w-full px-4 md:w-1/2">
                          <div className="mb-5">
                            <input
                              type="text"
                              placeholder="Full Name"
                              autoComplete="false"
                              className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-primary focus:ring-4 dark:bg-gray-900 dark:text-primary   dark:placeholder:text-gray-200  ${
                                errors.name
                                  ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                                  : "border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-primary"
                              }`}
                              {...register("name", {
                                required: "Full name is required",
                                maxLength: 80,
                              })}
                            />
                            {errors.name && (
                              <div className="mt-1 text-red-600">
                                <small>{errors.name.message}</small>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="w-full px-4 md:w-1/2">
                          <div className="mb-5">
                            <label htmlFor="email_address" className="sr-only">
                              Email Address
                            </label>
                            <input
                              id="email_address"
                              type="email"
                              placeholder="Email Address"
                              name="email"
                              autoComplete="false"
                              className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-primary focus:ring-4 dark:bg-gray-900 dark:text-white   dark:placeholder:text-gray-200  ${
                                errors.email
                                  ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                                  : "border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-primary"
                              }`}
                              {...register("email", {
                                required: "Enter your email",
                                pattern: {
                                  value: /^\S+@\S+$/i,
                                  message: "Please enter a valid email",
                                },
                              })}
                            />
                            {errors.email && (
                              <div className="mt-1 text-red-600">
                                <small>{errors.email.message}</small>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="w-full px-4">
                          <div className="mb-5">
                            <label htmlFor="number" className="sr-only">
                              Mobile phone
                            </label>
                            <input
                              id="number"
                              type="tel"
                              placeholder="Mobile phone"
                              autoComplete="off"
                              className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-primary focus:ring-4 dark:bg-gray-900 dark:text-white   dark:placeholder:text-gray-200 ${
                                errors.number
                                  ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                                  : "border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-primary"
                              }`}
                              {...register("number", {
                                required: "Please enter your phone number",
                                pattern: {
                                  value: /^\+?[1-9]\d{1,14}$/,
                                  message: "Please enter a valid phone number",
                                },
                              })}
                            />
                            {errors.number && (
                              <div className="mt-1 text-red-600">
                                <small>{errors.number.message}</small>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="w-full px-4">
                          <div className="mb-3">
                            <textarea
                              name="message"
                              placeholder="Your Message"
                              className={`h-36 w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-primary   focus:ring-4 dark:bg-gray-900  dark:text-white dark:placeholder:text-gray-200  ${
                                errors.message
                                  ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                                  : "border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-primary"
                              }`}
                              {...register("message", {
                                required: "Enter your Message",
                              })}
                            />
                            {errors.message && (
                              <div className="mt-1 text-red-600">
                                {" "}
                                <small>{errors.message.message}</small>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="w-full px-4">
                          <button
                            type="submit"
                            className="rounded-sm bg-primary px-9 py-4 font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-offset-2 dark:bg-primary dark:text-white dark:shadow-submit-dark "
                          >
                            {isSubmitting ? (
                              <svg
                                className="mx-auto h-5 w-5 animate-spin text-white dark:text-black"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                            ) : (
                              "Contact us"
                            )}
                          </button>
                        </div>
                      </div>
                    </form>

                    {isSubmitSuccessful && isSuccess && (
                      <div className="mt-3 text-center text-sm text-green-500">
                        {message || "Success. Message sent successfully"}
                      </div>
                    )}
                    {isSubmitSuccessful && !isSuccess && (
                      <div className="mt-3 text-center text-sm text-red-500">
                        {message || "Something went wrong. Please try later."}
                      </div>
                    )}
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
