import React from "react";
import Image from "next/image";
import SlideUp from "./SlideUp";

const mlSkills = [
  { skill: "Neural Network" },
  { skill: "TensorFlow" },
  { skill: "PyTorch" },
  { skill: "Keras" },
  { skill: "Numpy" },
  { skill: "Open CV" },
  { skill: "Matplotlib" },
  { skill: "Sciki-learn" },
  { skill: "Panda" },
];

const plSkills = [
  { skill: "Python" },
  { skill: "Matlab" },
  { skill: "Java" },
  { skill: "Javascript" },
  { skill: "Visual C# (.Net)" },
  { skill: "Open CV" },
  { skill: "C/C++" },
  { skill: "SQL" },
  { skill: "MongoDB" },
];

const webSkills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next JS" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "Express JS" },
  { skill: "Rest API" },
  { skill: "TanStack Query" },
];
const tools = [
  { skill: "Anaconda" },
  { skill: "PyCharm" },
  { skill: "Jupyter Notebooks" },
  { skill: "Origin" },
  { skill: "VS Code" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Firebase" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <SlideUp offset="-300px 0px -300px 0px">
        <div className="my-12 pb-12 md:pt-16 md:pb-48">
          <h1 className="text-center font-bold text-4xl dark:text-neutral-100">
            About Me
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </h1>

          <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
            <div className="md:w-1/2 ">
              <h1 className="text-teal-600 text-center text-3xl font-bold mb-6 md:text-left">
                Degrees
              </h1>
              <div className="ps-5">
                <ul className="list-disc text-xl">
                  <li className="py-4 dark:text-neutral-100">
                    <span className="font-bold ">
                      Ph.D. in Information and Communication Engineering
                    </span>{" "}
                    (Summer 2023),
                    <p>Chungbuk National University, Cheongju, South Korea.</p>
                  </li>
                  <li className="py-4 dark:text-neutral-100">
                    <span className="font-bold">
                      M.Sc. in Computer Science and Engineering
                    </span>{" "}
                    (2014),
                    <p>
                      Jashore University of Science and Technology, Jashore,
                      Bangladesh.
                    </p>
                  </li>
                  <li className="py-4 dark:text-neutral-100">
                    <span className="font-bold">
                      B.Sc. in Computer Science and Engineering
                    </span>{" "}
                    (2012),
                    <p>
                      Jashore University of Science and Technology, Jashore,
                      Bangladesh.
                    </p>
                  </li>
                  <li className="py-4 dark:text-neutral-100">
                    <span className="font-bold">
                      H.Sc. - Higher Secondary School Certificate
                    </span>{" "}
                    (2007),
                    <p>Nawabganj Govt. College, Chapainawabganj, Bangladesh.</p>
                  </li>
                  <li className="py-4 dark:text-neutral-100">
                    <span className="font-bold">
                      S.Sc. - Secondary School Certificate
                    </span>{" "}
                    (2005),
                    <p>
                      Harimohan Govt High School, Chapainawabganj, Bangladesh.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center md:w-1/2 md:text-left">
              <h1 className="text-teal-600 text-3xl font-bold mb-6">
                My Skills
              </h1>
              <h2 className="dark:text-neutral-100 font-bold text-xl pb-2">
                Machine Learning Technologies:
              </h2>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {mlSkills.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  );
                })}
              </div>
              <h2 className="dark:text-neutral-100 font-bold text-xl pt-3 pb-2">
                Programming languages:
              </h2>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {plSkills.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  );
                })}
              </div>
              <h2 className="dark:text-neutral-100 font-bold text-xl pt-3 pb-2">
                Web Technologies:
              </h2>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {webSkills.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  );
                })}
              </div>
              <h2 className="dark:text-neutral-100 font-bold text-xl pt-3 pb-2">
                Tools:
              </h2>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {tools.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  );
                })}
              </div>

              {/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};

export default AboutSection;
