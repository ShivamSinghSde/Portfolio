import React from "react";
import BackgroundBubbles from "../../animations/BackgroundBubbles";
import Tilt from "react-parallax-tilt";


import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiVercel,
  SiC,
  SiCplusplus,
} from "react-icons/si";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const skills = [
  {
    title: "Programming Languages",
    items: [
      { name: "C", icon: <SiC className="text-blue-500" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
      { name: "Java", icon: <FaJava className="text-orange-600" /> },
      { name: "SQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "Python", icon: <FaPython className="text-blue-400" /> },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400 sm:-ml-3 md:-ml-2 lg:-ml-4" />,
      },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Springboot", icon: <SiSpringboot className="text-green-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600 sm:ml-10" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white -ml-3" /> },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-500 -ml-2" />,
      },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // ease-in-out cubic
    },
  },
};

const Skills = () => {
  return (
    <section
      id="Skills"
      className="py-20 px-[7vw] md:px-[7vw] lg:px-[12vw] bg-[#050414]"
    >
      <BackgroundBubbles />
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-28 h-1 bg-[#f1bc71] mx-auto mt-2" />
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((category) => (
          <motion.div
            key={category.title}
            variants={item}
            className="bg-[#0f0e1a] text-center p-6 rounded-xl shadow-md hover:shadow-[#f1bc71]/40 transition-shadow duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#f1bc71]">
              {category.title}
            </h3>
            <Tilt >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-2 hover:text-[#f1bc71] transition duration-200"
                  >
                    <span className="text-xl sm:text-2xl">{skill.icon}</span>
                    <span className="text-sm sm:text-base">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
