/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import React, { useState } from "react";

const projects = [
  {
    title: "Hospital Management System",
    description:
      "Hospital Management System is a Java-based console application that manages patients, doctors, and appointments using a MySQL database for data storage.",
    fullDescription:
      "Hospital Management System is a Java-based console application that manages patients, doctors, and appointments using a MySQL database for data storage. It consists of four main classes—Patient, Doctor, Appointment, and HospitalManagementSystem (the driver class). Key functionalities include patient registration, viewing doctor/patient details, booking and viewing appointments. The system offers a simple interface to streamline hospital operations efficiently.",
    imageUrl: "./public/images/hospitalmgt.png",
    techStack: ["Java", "MySQL"],
    link: "https://github.com/ShivamSinghSde/Hospital-Management-System.git",
  },
  {
    title: "Gesture Control Light System",
    description:
      "Gesture-Controlled Light System is a Python-based project that uses hand gestures to control a virtual light, adjust screen brightness, and modify image colors in real-time.",
    fullDescription:
      "Gesture-Controlled Light System is a Python-based project that uses hand gestures to control a virtual light, adjust screen brightness, and modify image colors in real-time. It leverages OpenCV, MediaPipe, and NumPy to detect finger counts and map them to specific actions like toggling lights or changing visual settings.",
    imageUrl: "./public/images/gesturecontrol.png",
    techStack: ["Python"],
    link: "https://github.com/ShivamSinghSde/Gesture-Control-Light-System.git",
  },
  
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8 },
  }),
};

const Projects = () => {
  const [openProject, setOpenProject] = useState(null);

  const handleOpenProject = (project) => {
    setOpenProject(project);
  };

  const handleCloseProject = () => {
    setOpenProject(null);
  };

  return (
    <section
      id="Projects"
      className="px-[7vw] md:px-[7vw] lg:px-[12vw] py-20 bg-[#050414] text-white font-sans"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        MY PROJECTS
        <div className="w-56 h-1 bg-[#f1bc71] mx-auto mt-2" />
      </h2>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            onClick={() => handleOpenProject(project)}
            className="bg-[#1a1a1a] border border-white rounded-2xl overflow-hidden shadow-lg backdrop-blur-md cursor-pointer"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-60 object-cover rounded-t-3xl p-4"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-justify">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm bg-[#f1bc71] text-black font-semibold px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* After Open Project */}
      {openProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85 p-4">
          <div className="bg-[#1a1a1a] rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end px-4">
              <button
                onClick={handleCloseProject}
                className="text-white text-3xl font-bold hover:text-[#f1bc71]"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-1/2 flex items-center justify-center bg-[#1a1a1a] px-4 ">
                <img src={openProject.imageUrl} alt= {openProject.title} className=" lg:w-full w-[90%] object-contain rounded-xl shadow-2xl" />
              </div>
              <div>
                <div className="lg:p-8 p-6">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-md text-white">{openProject.title}</h3>
              <p className="text-gray-400 mb-6 lg:text-base text-xs text-justify">{openProject.fullDescription}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {openProject.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs inline-block bg-[#f1bc71] text-black font-semibold px-3 py-1 rounded-full mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={openProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-[#f1bc71] font-bold hover:underline pl-4"
              >
                View Project →
              </a>
            </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
