import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#050414] text-white py-10 px-[7vw] text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-xl font-semibold">Connect with me</h3>
        <div className="flex gap-6 mt-2 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#f1bc71] transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#f1bc71] transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-[#f1bc71] transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Shivam Singh. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
