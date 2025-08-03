/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";

const projects = [
  {
    title: "Online Book Store",
    description:
      "A full-stack web app with Google login, book uploads, admin verification, and JWT authentication.",
    imageUrl: "/src/Images/BookStore.jpeg",
    techStack: ["React", "Spring Boot", "MySQL", "JWT", "TailwindCSS"],
    link: "#",
  },
  {
    title: "IoT Smart Ambulance",
    description:
      "Monitors vitals and sends real-time patient/location data to hospital using Java + Android + IoT sensors.",
    imageUrl: "/src/Images/ambulance-preview.jpg",
    techStack: ["Java", "Android", "IoT", "Spring Boot", "Firebase"],
    link: "#",
  },
  {
    title: "IoT Smart Ambulance",
    description:
      "Monitors vitals and sends real-time patient/location data to hospital using Java + Android + IoT sensors.",
    imageUrl: "/src/Images/ambulance-preview.jpg",
    techStack: ["Java", "Android", "IoT", "Spring Boot", "Firebase"],
    link: "#",
  },
  {
    title: "IoT Smart Ambulance",
    description:
      "Monitors vitals and sends real-time patient/location data to hospital using Java + Android + IoT sensors.",
    imageUrl: "/src/Images/ambulance-preview.jpg",
    techStack: ["Java", "Android", "IoT", "Spring Boot", "Firebase"],
    link: "#",
  },
  {
    title: "IoT Smart Ambulance",
    description:
      "Monitors vitals and sends real-time patient/location data to hospital using Java + Android + IoT sensors.",
    imageUrl: "/src/Images/ambulance-preview.jpg",
    techStack: ["Java", "Android", "IoT", "Spring Boot", "Firebase"],
    link: "#",
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
  return (
    <section
      id="Projects"
      className="px-[7vw] md:px-[7vw] lg:px-[12vw] py-20 bg-[#050414] text-white font-sans"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        MY PROJECTS
        <div className="w-56 h-1 bg-[#f1bc71] mx-auto mt-2" />
      </h2>

      <div className="grid gap-12 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
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
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-[#f1bc71] font-bold hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;



