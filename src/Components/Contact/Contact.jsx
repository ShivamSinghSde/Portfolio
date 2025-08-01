import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, replace with your actual backend/form endpoint
    // Example: using fetch or axios
    // For demo, just clear and show toast
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }, 500);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="Contact" className="bg-[#050414] text-white px-[7vw] py-20 font-sans">
      <ToastContainer />

      <motion.div
        className="max-w-3xl mx-auto text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">
          Get in <span className="text-[#f1bc71]">Touch</span>
        </h2>
        <p className="text-gray-400 mb-10">
          Have a project idea or want to work together? Feel free to drop a message!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-black">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="px-5 py-3 rounded-md outline-none w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="px-5 py-3 rounded-md outline-none w-full"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="px-5 py-3 rounded-md outline-none w-full h-40"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#f1bc71] text-black font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 hover:bg-[#e3a94e]"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
