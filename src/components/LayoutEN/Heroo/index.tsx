"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { StaticImageData } from "next/image"
import { motion } from "framer-motion"
import TypeIt from "typeit-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

// Interface for image data
interface ImageData {
  src: string
}

// Image data array
const images: ImageData[] = [
  {
    src: "/images/slider/Infra.jpg",
  },
  {
    src: "/images/slider/Cloud_Accueil.PNG",
  },
  {
    src: "/images/slider/DC_Accueil.jpg",
  },
  {
    src: "/images/slider/Reseau_Accueil.jpg",
  },
]

const Hero = () => {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false)

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    )
  }

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }
  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide()
      }, 5000)

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval)
      }
    }
  }, [isHovered])
  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true)
  }

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false)
  }

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-gradient-to-tr from-[#29547A] to-black pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full max-w-screen px-4">
              <div className="-mt-3 grid grid-cols-2">
                <div className="col-span-2 mb-7 md:col-span-1 md:mb-0">
                  <div className="relative mx-auto mt-0 max-w-2xl text-left md:mt-12">
                    <div className="mb-3 leading-loose">
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: {
                            scale: 0.8,
                            opacity: 0,
                          },
                          visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                              delay: 0.4,
                            },
                          },
                        }}
                      >
                        <span className="pointer-events-none bg-clip-text text-3xl font-extralight leading-tight text-transparent dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:tracking-wide">
                          Welcome to
                        </span>
                        <br />{" "}
                        <h1 className="text-3xl font-extralight leading-tight dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:font-bold lg:tracking-wide">
                          DATALYS{" "}
                          <span className="font-extralight leading-tight text-[#f5c034]">
                            Consulting
                          </span>
                        </h1>
                      </motion.div>
                    </div>
                    <h2 className="mb-3">
                      <TypeIt
                        options={{
                          loop: true,
                        }}
                        className="pointer-events-none bg-clip-text text-xl font-semibold capitalize leading-tight text-transparent dark:text-white sm:text-2xl md:text-3xl lg:text-4xl"
                        getBeforeInit={(instance) => {
                          instance
                            .type("Infrastructure & Systems")
                            .pause(620)
                            .delete(24)
                            .pause(600)
                            .type("Cloud")
                            .pause(3500)
                            .delete(5)
                            .pause(800)
                            .type("Data Center & Energy")
                            .pause(750)
                            .delete(20)
                            .pause(500)
                            .type("Network & Security")
                            .pause(750)
                            .delete(18)

                          // Remember to return it!
                          return instance
                        }}
                      />
                    </h2>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {
                          scale: 0.8,
                          opacity: 0,
                        },
                        visible: {
                          scale: 1,
                          opacity: 1,
                          transition: {
                            delay: 0.4,
                          },
                        },
                      }}
                    >
                      <p className="mb-9 text-base font-extralight !leading-relaxed dark:text-white sm:text-lg md:text-xl">
                      Today, data is a growth driver for many companies.
                      </p>
                      <div className="flex flex-col items-center justify-start gap-2 space-y-4 sm:flex-row sm:space-y-0">
                        <Link
                          href="/contact"
                          className="inline-block rounded-sm bg-[#f5c034] px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out dark:text-white dark:hover:bg-[#F7CA50]"
                        >
                          Talk to an expert
                        </Link>
                        <Link
                          href="/contact"
                          className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                        >
                          Ask for a quote
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="mx-auto max-w-xl">
                    <div className="relative z-10 mx-auto w-full">
                      <div
                        className="group relative h-[460px]"
                        onMouseOver={handleMouseOver}
                        onMouseLeave={handleMouseLeave}
                      >
                        <img
                          src={images[currentIndex].src}
                          alt={`Slider Image ${currentIndex + 1}`}
                          className="h-full w-full cursor-pointer rounded-xl transition-all duration-500 ease-in-out p-4"
                        />
                      </div>
                      {/* <button
                        className="group absolute left-0 top-1/2 mx-1 -mt-[10px] -translate-y-1/2 transform rounded-xl bg-[#2e5076] p-2 text-white hover:bg-[#274868]"
                        onClick={prevSlide}
                      >
                        <ChevronLeft className="text-gray-400 group-hover:text-white" />
                      </button>
                      <button
                        className="group absolute right-0 top-1/2 mx-1 -mt-[10px] -translate-y-1/2 transform rounded-xl bg-[#2e5076] p-2 text-white hover:bg-[#274868]"
                        onClick={nextSlide}
                      >
                        <ChevronRight className="text-gray-400 group-hover:text-white" />
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  )
}

export default Hero
