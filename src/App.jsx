import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import BlurBlob from "./BlurBlob";

function App() {
  return (
    <>
      <div className="bg-[#050512] text-white ">
        <BlurBlob
          position={{ top: "35%", left: "25%" }}
          size={{ width: "30%", height: "40%" }}
        ></BlurBlob>
        <div className="absolute inset-0 bg-[linear-gradient(to-right,#4f4f4f2e_1px, transparent_1px), linear-gradient(to-bottom, #4f4f4f2e_1px, transparent_1px)], bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="relative pt-20"></div>
        <div>
          <Navbar />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
