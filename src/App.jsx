import React from "react"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects"
import BlurBlob from "./BlurBlob"

function App() {
 

  return (
    <>
      <div className="bg-[#050512] text-white">
        <BlurBlob position = {{top: '35%', left: '20%'}} size = {{width: '30%', height: '40%'}} />
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
