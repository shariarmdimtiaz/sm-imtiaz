"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";
import { FaHandPointDown } from "react-icons/fa";

const HeroSection = () => {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/u/1/uc?id=1JfwcRiIIqDvSr_EnaceSNa18qq8rhR-M&export=download"
    );
  };

  return (
    <section id="home">
      <div className="">
        <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-20 py-16 sm:py-32 md:py-10 md:flex-row md:space-x-4 md:text-left">
          <div className="md:mt-2 md:py-14 md:w-full">
            <Image
              src="/shariar.png"
              alt=""
              width={325}
              height={325}
              className="mx-auto rounded-full shadow-2xl"
            />
            <div className="pt-4 text-center">
              <p className="text-2xl font-semibold pt-2 dark:text-neutral-100">
                Shariar Md Imtiaz, Ph.D.
              </p>
              <p className="py-2 dark:text-neutral-100">
                Postdoctoral Researcher
              </p>
              <p className="dark:text-neutral-100">
                Department of Information and Communication Engineering,
              </p>
              <p className="dark:text-neutral-100">
                Chungbuk National University, Cheongju, South Korea.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex justify-around px-20 pt-5 md:max-w-xl">
                <a
                  href="https://www.linkedin.com/in/shariar-md-imtiaz/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image src="/linkedin.png" alt="" width={72} height={72} />
                </a>
                <a
                  href="https://scholar.google.com/citations?user=Ik7_T3kAAAAJ&hl=en"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    src="/google-scholar.png"
                    alt=""
                    width={72}
                    height={72}
                  />
                </a>
                <a
                  href="https://www.researchgate.net/profile/Shariar-Md-Imtiaz"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    src="/research-gate.png"
                    alt=""
                    width={72}
                    height={72}
                  />
                </a>
                <a
                  href="https://sciprofiles.com/profile/ShariarMdImtiaz"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image src="/sci.png" alt="" width={72} height={72} />
                </a>
                <a
                  href="https://orcid.org/0000-0002-7001-1667"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image src="/orcid.png" alt="" width={72} height={72} />
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-4/5">
            <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-4xl dark:text-neutral-100">
              Hi, I&#39;m{" "}
              <span className="text-teal-600 uppercase">Shariar Md Imtiaz</span>
            </h1>
            <p className="text-lg text-justify mt-4 mb-6 md:text-2xl dark:text-neutral-100">
              I am working in the Optical Information Processing (
              <a
                className="hover:text-blue-700"
                href="http://osp.chungbuk.ac.kr/"
              >
                OIP
              </a>
              ) Laboratory at Chungbuk National University (
              <a
                className="hover:text-blue-700"
                href="https://www.chungbuk.ac.kr/site/english/main.do"
              >
                CBNU
              </a>
              ) as a
              <span className="font-semibold text-teal-600">
                {" "}
                Postdoctoral Researcher
              </span>
              .
            </p>
            <div>
              <h1 className="text-teal-600 font-bold text-3xl py-4">
                Biography:
              </h1>
              <p className="text-justify text-xl leading-9 dark:text-neutral-100">
                As a Graduate Research Assistant, I have worked under the
                supervision of Prof. Dr. Nam Kim at the Information and
                Communication Engineering Department of Chungbuk National
                University (CBNU) in Cheongju, South Korea. During my Ph.D.
                program, I dedicated my studies to delving into the extensive
                possibilities of deep learning and machine learning in the areas
                of depth estimation and 3D image visualization techniques.
                Through this program, I gained significant knowledge in computer
                vision, image reconstruction, and human-computer interaction.
              </p>
              <div className="py-3">
                <span className="text-teal-600 text-2xl font-bold">
                  Research Interests:
                </span>
                <p className="text-justify text-xl leading-9 dark:text-neutral-100">
                  Human-computer Interaction, 3D Image Processing, Image
                  Classification, Deep Learning Application, and Machine
                  Learning.
                </p>
              </div>
            </div>
            {/* <Link
              to="projects"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link> */}
            <div className="pt-3">
              <button
                onClick={handleDownload}
                className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              >
                <span className="flex gap-3">
                  <FaDownload />
                  Download CV
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center text-center justify-center ">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            {/* <FaHandPointDown
              size={35}
              className="animate-bounce text-black dark:text-neutral-100"
            /> */}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
