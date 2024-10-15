import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionThree = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] rounded-full bg-[#294666] shadow-lg">
                <img
                  src="/images/about/8033207-nobg.png"
                  alt="about-image"
                  className="h-full w-full"
                />
              </div>
            </div>

            <div className="font-Title relative z-10 w-full px-4 text-start lg:mr-0 lg:w-1/2">
              <div className="absolute bottom-20 hidden w-full px-4 md:block">
                <div className="mx-auto max-w-[700px]">
                  <img
                    src="/images/logo/logo.png"
                    alt="about-image"
                    className="h-full w-full opacity-10"
                  />
                </div>
              </div>
              <h2 className="font-Title mb-4 text-start text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                About us
              </h2>
              <p className="text-justify text-base leading-relaxed text-body-color [word-spacing:-1.6px] md:text-lg">
                Founded in 2023, by committed Consultants with a passion for
                Digitization, DATALYS Consulting is an IT Service Company that
                brings reinvented expertise. We specialize in Cloud, IT
                Infrastructure and Networks & Security: the key topics impacting
                the world of IT and Digitization.
              </p>
              <p className="mt-2 text-justify text-base leading-relaxed text-body-color [word-spacing:-1.6px] md:text-lg">
                Transformation, IT & cloud infrastructure management, data
                center energy optimization and efficient deployment of IT
                network and security systems are all part of our core
                competencies. At DATALYS, our commitment is to offer innovative
                solutions that propel your business into the digital future and
                help you achieve your strategic objectives.
              </p>
              <p className="mt-2 text-justify text-base leading-relaxed text-body-color [word-spacing:-1.6px] md:text-lg">
                At DATALYS, innovation is at the heart of our DNA. We offer our
                customers next-generation solutions and best practices to give
                them a competitive edge in a constantly changing world.
              </p>
              {/* <SectionTitle
                title="About us"
                paragraph="Founded in 2023, by committed Consultants with a passion for Digitization, DATALYS Consulting is an IT Service Company that brings reinvented expertise. We specialize in Cloud, IT Infrastructure and Networks & Security: the key topics impacting the world of IT and Digitization."
                mb="24px"
                secondparagraph="Transformation, IT & cloud infrastructure management, data center energy optimization and efficient deployment of IT network and security systems are all part of our core competencies. At DATALYS, our commitment is to offer innovative solutions that propel your business into the digital future and help you achieve your strategic objectives."
                thirdparagraph="At DATALYS, innovation is at the heart of our DNA. We offer our customers next-generation solutions and best practices to give them a competitive edge in a constantly changing world."
              /> */}
              <div className="mt-4 flex items-center space-y-4 sm:space-y-0">
                <Button
                  className="flex items-center justify-center rounded-xl border-2 dark:border-body-color-dark"
                  as={Link}
                  href="/apropos"
                >
                  {" "}
                  <span className="text-sm !leading-relaxed dark:text-body-color-dark sm:text-base md:text-lg">
                    Read more
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#959CB1"
                      d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
