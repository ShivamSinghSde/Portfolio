import React from "react"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects"

function App() {
 

  return (
    <>
      <div className="bg-[#050512] text-white">
        <div>

        </div>
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
  )
}

export default App
