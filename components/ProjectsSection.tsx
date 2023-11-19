import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Online College Booking",
    description:
      "College booking is a comprehensive educational platform with various user-specific dashboards: Home, College, Admission, Dashboard, all integrated with a robust Registration & Login System using Firebase. For students, the platform provides a college information. Students can explore and know about different college information using this platform. After selecting a college, students can proceed with the enrollment process. Additionally, a student can give feedback about college.",
    image: "/college-booking.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://college-booking-299bb.web.app/",
  },
  {
    name: "Language School",
    description:
      "Lingua is a comprehensive language learning platform with various user-specific dashboards: Home, Instructors, Classes, Admin Dashboard, Instructor Dashboard, and Student Dashboard, all integrated with a robust Registration & Login System using Firebase.",
    image: "/language-school.png",
    github: "https://github.com/shariarmdimtiaz/lingua-summer-camp",
    link: "https://language-school-a1223.web.app/",
  },
  {
    name: "TOYLAND",
    description:
      "Toyland is an interactive project that showcases a wide range of educational toys. Users can contribute by adding toys, search for specific items, explore the entire collection, delete items and enjoy a personalized experience with secure login and registration. With a focus on inspiring learning and fostering creativity, Toyland offers a platform where educators, parents, and learners can find and share educational toys that promote curiosity, critical thinking, and skill development. From science kits to puzzles and interactive games, Toyland is a go-to resource for those seeking educational toys to enhance the learning journey of children and learners of all ages.",
    image: "/toyland.png",
    github: "https://github.com/shariarmdimtiaz/toy-land-client",
    link: "https://toyland-c3380.web.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28">
      <h1 className="py-10 text-center font-bold text-4xl dark:text-neutral-100">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="dark:text-neutral-100 text-4xl font-bold mb-6">
                      {project.name}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4 dark:text-neutral-100">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
