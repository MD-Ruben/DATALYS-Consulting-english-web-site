"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import useWeb3Forms from "@web3forms/react"

const Contact = () => { 
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

  return (
    <section
      id="contact"
      className="mt-[45px] overflow-hidden py-16 md:-mt-[105px] md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-3xl">
                Contact us !
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
          <div className="relative mt-4 grid h-[500px] w-full max-w-full grid-cols-2 gap-1 overflow-hidden transition-none">
            <div
              id="embed-map-display"
              className="col-span-2 h-full w-full max-w-full md:col-span-1"
            >
              <iframe
                className="h-full w-full max-w-full border-0"
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=Rivera+Faya,+Face+du+Collège+Jules+Vernes&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              ></iframe>
            </div>
            <div
              id="embed-map-display"
              className="col-span-2 h-full w-full max-w-full md:col-span-1"
            >
              <iframe
                className="h-full w-full max-w-full border-0"
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=Almamyah+Rue+028+N°466+COMMUNE+DE+KALOUM&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
