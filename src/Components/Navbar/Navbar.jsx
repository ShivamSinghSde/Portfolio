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
  };

  return (
    <nav
      className={` top-0 w-full z-50 transition-duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="fixed text-white w-full px-5 flex justify-between items-center">
        {/* logo */}

        <div className="text-lg font-semibold cursor-pointer">
          <img
            className="cursor-pointer w-8"
            src="./src/Images/SSLogo.png"
            alt=""
          />
        </div>

        {/* Menu */}

        <ul className="hidden md:flex gap-6 text-gray-300 cursor-pointer">
          {menu.map((item) => (
            <li
              key={item.id}
              className={`hover:text-[#f1bc71] ${
                activeSection === item.id ? "text-[#f1bc71]" : ""
              }`}
            >
              <button className="cursor-pointer" onClick={() => handleMenu(item.id)}>{item.label}</button>
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
        <div className="fixed top-16 left-1/2 transform -translate-x-1/3 w-3/5 bg-[#050414]/50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center gap-3 py-4 text-gray-300 ">
            {menu.map((item) => (
              <li
                key={item.id}
                className={` hover:text-[#f1bc71] ${
                  activeSection === item.id ? "text-[#f1bc71]" : ""
                }`}
              >
                <button className="cursor-pointer" onClick={() => handleMenu(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div class="social">
            <div className="flex gap-4 justify-center">
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
