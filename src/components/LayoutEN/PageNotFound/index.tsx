"use client"

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PageNotFound = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const imageData = [
    {
      url: "/images/slider/new/infrastructure.jpg",
      title: "Infrastructure & System"
    },
    {
      url: "/images/slider/new/datacenter1.jpg",
      title: "Data Center"
    },
    {
      url: "/images/slider/new/energie.jpg",
      title: "Energy"
    },
    {
      url: "/images/slider/Cloud_Accueil.PNG",
      title: "Cloud"
    },
    {
      url: "/images/slider/new/reseau&securite2.jpg",
      title: "Network & Security"
    }
  ];

  const slides = [
    {
      url: "/images/404/1.webp",
      title: "Infrastructure & System"
    },
    {
      url: "/images/404/2.webp",
      title: "Network & Security"
    },
    {
      url: "/images/404/3.webp",
      title: "Data Center & Energy"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen mt-10 md:-mt-6">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-[#f5c034] bg-clip-text text-transparent">
              404
            </h2>
            <h3 className="text-2xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
            Coming soon
            </h3>
            {/* <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              {"We're working hard to give you a better experience."}
            </p> */}
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <Button
              className="bg-[#f5c034] hover:bg-[#f5c034]/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2"
              as={Link}
              href="/"
            >
              Retour à l&apos;accueil
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
          </motion.div> */}

          {/* Image Slider */}
          <div className="relative mt-12">
            <div className="flex justify-center gap-6 flex-wrap">
              {imageData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: currentImage === index ? 1 : 0.5,
                    scale: currentImage === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.5 }}
                  className="relative my-4 md:py-0"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {currentImage === index && (
                    <>
                      <motion.div
                        className="absolute -inset-2 border-2 border-[#f5c034] rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                      >
                        <span className="bg-[#f5c034] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                          {item.title}
                        </span>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-[#f5c034]/10 rounded-full"
                style={{
                  width: Math.random() * 50 + 10,
                  height: Math.random() * 50 + 10,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
