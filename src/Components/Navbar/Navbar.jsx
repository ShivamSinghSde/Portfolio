import { React, useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menu = [
    { id: "About", label: "About" },
    { id: "Skills", label: "Skills" },
    { id: "Projects", label: "Projects" },
    { id: "Contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenu = (sectionId) => {
  setActiveSection(sectionId);
  setIsOpen(false);
  setTimeout(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};


  return (
    <nav
      className={`w-full transition duration-300 fixed top-0 left-0 z-40 pointer-events-auto ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white w-full px-4 flex justify-between items-center">
        {/* logo */}

        <div className="cursor-pointer">
          <img className="w-10" src="/images/logo.png" alt="" />
        </div>

        {/* Menu */}

        <ul className="hidden md:flex space-x-8 text-gray-300 cursor-pointer">
          {menu.map((item) => (
            <li
              key={item.id}
              className={`hover:text-[#f1bc71] ${
                activeSection === item.id ? "text-[#f1bc71]" : ""
              }`}
            >
              <button
                className="cursor-pointer"
                onClick={() => handleMenu(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Media */}

        <div className="hidden md:flex gap-3 items-center">
          <a
            href="https://github.com/ShivamSinghSde"
            target="blank"
            rel="noopener noreferer"
            className="text-gray-300 hover:text-[#f1bc71]"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/shivamsinghsde"
            target="blank"
            rel="noopener noreferer"
            className="text-gray-300 hover:text-[#f1bc71]"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href="https://x.com/ShivamSinghSde"
            target="blank"
            rel="noopener noreferer"
            className="text-gray-300 hover:text-[#f1bc71]"
          >
            <FaXTwitter size={25} />
          </a>
        </div>

        {/* Mobile View */}

        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#f1bc71]"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#f1bc71] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
      {/*  Mobile view Items */}
      {isOpen && (
        <div className="fixed top-20 left-32 transform -translate-x-1/3 w-3/5 bg-[#050414]/80 z-50 backdrop backdrop-blur-lg rounded-lg shadow-lg animate-fadeInLeft ">
          <ul className="flex flex-col items-center gap-3 py-4 text-gray-300 ">
            {menu.map((item) => (
              <li
                key={item.id}
                className={` hover:text-[#f1bc71] ${
                  activeSection === item.id ? "text-[#f1bc71]" : ""
                }`}
              >
                <button
                  className="cursor-pointer"
                  onClick={() => handleMenu(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div>
            <div className="flex gap-4 justify-center pb-4">
              <a
                href="https://github.com/ShivamSinghSde"
                target="blank"
                rel="noopener noreferer"
                className="text-gray-300 hover:text-[#f1bc71]"
              >
                <FaGithub size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/shivamsinghsde"
                target="blank"
                rel="noopener noreferer"
                className="text-gray-300 hover:text-[#f1bc71]"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://x.com/ShivamSinghSde"
                target="blank"
                rel="noopener noreferer"
                className="text-gray-300 hover:text-[#f1bc71]"
              >
                <FaXTwitter size={25} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
