import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
4

const About = () => {
  return (
    <section
      id="About"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[14vw] font-sans md:mt-12 lg:mt-20 lg:mb-16"
    >
      <div className="flex flex-col-reverse md:flex-row justify-around sm:gap-5 lg:gap-28 items-center">
        {/* Title Left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 animate-fadeInRight">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm-text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Shivam Singh
          </h2>
          <h3 className="text-xl sm:text-3xl font-semibold mb-4 text-white leading-tight">
            <span>I am a </span>

            <span className="text-[#f1bc71] text-3.5xl">
              <TypeAnimation
                sequence={[
                  " Software Engineer",
                  2000,
                  " Full Stack Developer",
                  2000,
                  " Java Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h3>
          <p className="text-justify sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed animate-fadeInUp">
            I'm a passionate Software Engineer with a strong foundation in Java,
            Spring Boot, MySQL, and web development. I enjoy building scalable
            and efficient solutions, applying my skills through real-world
            academic projects. I’m committed to writing clean, maintainable code
            and continuously improving through hands-on experience.
          </p>
          <a
            href="https://drive.google.com/file/d/147yK7Cmd7T6Ifdm31seTSVzmteG6OupM/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-110 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #f1bc71 0%, #f1bc71 100%)",
              boxShadow:
                "0 4px 10px rgba(241, 188, 113, 0.6), 0 0 10px rgba(241, 188, 113, 0.5)",
              color: "white",
              textShadow: "0 1px 1px rgba(255, 255, 255, 0.2)",
              letterSpacing: "0.5px",
            }}
          >
            Download CV
          </a>
        </div>
        {/* Photo Right side */}
        <div className="md:w-1/2 flex justify-center md:justify-end animate-fadeInLeft">
            <Tilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-[#f1bc71] rounded-full" tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            transitionSpeed={1500}
            perspective={1500}
            scale={1.1}>
              <img src="/src/Images/photo1.jpg" alt="Shivam Singh" className="rounded-full w-full h-full object-cover drop-shadow-[0_10px_20px_rgba(241,188,113,0.6)]" />
            </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
