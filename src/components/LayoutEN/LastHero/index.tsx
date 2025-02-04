"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const LastHero = () => {
  const slides = [
    {
      id: 1,
      image: "/images/slider/new/infrastructure.jpg",
      title: "Welcome to",
      title2: "DATALYS",
      title3: "Infrastructure & Systems",
      description: "Revitalize your System Infrastructure, identify crucial optimization points.",
      buttons: [
        { text: "Talk to an expert", link: "/contact" },
        { text: "Ask for a quote", link: "/contact" },
      ],
    },
    {
      id: 2,
      image: "/images/slider/Cloud_Accueil.PNG",
      title2: "DATALYS",
      title3: "Cloud",
      description: "Benefit from your investment in the Cloud. Control your invoices, simplify your Cloud migrations.",
      buttons: [
        { text: "Talk to an expert", link: "/contact" },
        { text: "Ask for a quote", link: "/contact" },
      ],
    },
    {
      id: 3,
      image: "/images/slider/new/datacenter1.jpg",
      title2: "DATALYS",
      title3: "Data Center",
      description: "Opt for an urbanized, perfectly structured data center to guarantee IS performance and security.",
      buttons: [
        { text: "Talk to an expert", link: "/contact" },
        { text: "Ask for a quote", link: "/contact" },
      ],
    },
    {
      id: 4,
      image: "/images/slider/new/energie.jpg",
      title2: "DATALYS",
      title3: "Energy",
      description: "Reduce your energy costs by choosing standardized energy solutions",
      buttons: [
        { text: "Talk to an expert", link: "/contact" },
        { text: "Ask for a quote", link: "/contact" },
      ],
    },
    {
      id: 5,
      image: "/images/slider/new/reseau&securite2.jpg",
      title2: "DATALYS",
      title3: "Network & Security",
      description: "The security of your information system is its most important link. Clarify your architectures, optimize your security rules and facilitate network administration.",
      buttons: [
        { text: "Talk to an expert", link: "/contact" },
        { text: "Ask for a quote", link: "/contact" },
      ],
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div
      className="relative h-[650px] w-full overflow-hidden pt-20 md:h-[700px] md:pt-36 lg:h-[800px]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.7 }}
          className="absolute h-full w-full"
        >
          <div
            className="relative h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-700"
            style={{
              backgroundImage: `url(${slides[currentIndex].image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40">
              <div className="-mt-14 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pointer-events-none mb-2 bg-clip-text text-3xl font-extralight leading-tight text-transparent dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:tracking-wide"
                >
                  {slides[currentIndex].title}
                </motion.h2>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-2 text-3xl font-extralight leading-tight dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:font-bold lg:tracking-wide"
                >
                  {slides[currentIndex].title2}{" "}
                  <span className="font-extralight leading-tight text-[#f5c034]">
                    Consulting
                  </span>
                </motion.h2>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pointer-events-none mb-2 bg-clip-text text-xl font-semibold capitalize leading-tight text-transparent dark:text-white sm:text-2xl md:text-3xl lg:text-4xl"
                >
                  {slides[currentIndex].title3}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-9 text-base font-extralight text-center !leading-relaxed dark:text-white sm:text-lg md:text-xl"
                >
                  {slides[currentIndex].description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col gap-4 sm:flex-row"
                >
                  {slides[currentIndex].buttons.map((button, index) => (
                    <a
                      key={index}
                      href={button.link}
                      className={`rounded-full px-6 py-3 text-sm transition-all duration-300 md:text-base ${
                        index === 0
                          ? "bg-[#f5c034] text-white hover:bg-opacity-90"
                          : "border-2 border-white hover:bg-white hover:text-black"
                      }`}
                    >
                      {button.text}
                    </a>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 transition-all duration-200"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-2xl text-gray-800" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 transition-all duration-200"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-2xl text-gray-800" />
      </button> */}

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-4 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default LastHero
