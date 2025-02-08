import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white shadow-2xl sticky top-0 w-full z-50 rounded-b-2xl lg:px-[10rem]"
    >
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-900 via-purple-800 to-blue-900 bg-pattern-dots z-0"></div> */}
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <motion.h1  className="text-md lg:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
         <a href="/">Sacred Heart School</a> 
        </motion.h1>

        {/* Navigation Menu */}
        <nav className="relative">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-1 ">
            {/* About Us */}
            <li className="relative group">
              <button
                onClick={() => toggleSubMenu("about-us")}
                className="flex items-center justify-between w-full md:w-auto py-2 px-4 text-white  hover:text-yellow-400 transition-colors duration-300"
              >
                About Us
                <motion.div
                  animate={{
                    rotate: openSubMenu === "about-us" ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="w-5 h-5 ml-1" />
                </motion.div>
              </button>
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: openSubMenu === "about-us" ? 1 : 0,
                  y: openSubMenu === "about-us" ? 0 : -10,
                }}
                transition={{ duration: 0.3 }}
                className={`absolute left-0 mt-1 bg-purple-800 text-white rounded-lg shadow-lg cursor-pointer w-48 ${openSubMenu === "about-us" ? "block" : "hidden"
                  } md:group-hover:block`}
              >
                <li className="px-4 py-2 hover:bg-yellow-400  hover:text-purple-900 transition-colors duration-300">
                  <a href='/introduction'> Introduction</a>
                </li>
                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                  <a href='/administration-jurisdiction'>Administration & Jurisdiction</a>
                </li>
                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                  <a href="vission-mission">Vision & Mission</a>
                </li>
                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                  <a href="principal-message">Principal’s Message</a>
                </li>
                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                  <a href="headmistress-message">Headmistress’ Message</a>
                </li>
              </motion.ul>
            </li>
            {/* Academics Menu */}
            <li className="relative group">
              <button
                onClick={() => toggleSubMenu("academics")}
                className="flex items-center justify-between w-full md:w-auto py-2 px-4 text-white hover:text-yellow-400 transition-colors duration-300"
              >
                Academics
                <motion.div
                  animate={{
                    rotate: openSubMenu === "academics" ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="w-5 h-5 ml-1" />
                </motion.div>
              </button>
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: openSubMenu === "academics" ? 1 : 0,
                  y: openSubMenu === "academics" ? 0 : -10,
                }}
                transition={{ duration: 0.3 }}
                className={`absolute left-0 mt-1 bg-purple-800 text-white rounded-lg shadow-lg w-48 ${openSubMenu === "academics" ? "block" : "hidden"
                  } md:group-hover:block`}
              >
                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                  <a href="academic-course">Courses</a>
                </li>
                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                  <a href="academic-fee-structure">Fee Structure</a>
                </li>
                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                  <a href="academic-faculty">Faculty</a>
                </li>
                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                  <a href="academic-uniform">Uniform</a>
                </li>
                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                  Syllabus
                </li>
                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                  Examinations
                </li>
              </motion.ul>
            </li>

            {/* Admissions Menu */}
            <li className="relative group">
              <button
                onClick={() => toggleSubMenu("admissions")}
                className="flex items-center justify-between w-full md:w-auto py-2 px-4 text-white hover:text-yellow-400 transition-colors duration-300"
              >
                Admissions
                <motion.div
                  animate={{
                    rotate: openSubMenu === "admissions" ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="w-5 h-5 ml-1" />
                </motion.div>
              </button>
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: openSubMenu === "admissions" ? 1 : 0,
                  y: openSubMenu === "admissions" ? 0 : -10,
                }}
                transition={{ duration: 0.3 }}
                className={`absolute left-0 mt-1 bg-purple-800 text-white rounded-lg shadow-lg w-48 ${openSubMenu === "admissions" ? "block" : "hidden"
                  } md:group-hover:block`}
              >
                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                  <a href="admission-application-procedure">Application Process</a>
                </li>
                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                  <a href="/admission-eligibility">Eligibility</a>
                </li>
                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                  Important Dates
                </li>
              </motion.ul>
            </li>

            {/* Other Menu Items */}
            <li>
              <a
                href="/rules-regulations"
                className="block py-2 px-4 text-white hover:text-yellow-400 transition-colors duration-300"
              >
                Rules
              </a>
            </li>
            <li>
                <a
                  href="/gallary"
                  className="block py-2 px-4 text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  Gallary
                </a>
              </li>
            <li>
              <a
                href="/contact-us"
                className="block py-2 px-4 text-white hover:text-yellow-400 transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 w-64 bg-purple-900 text-white shadow-2xl z-50"
          >
            <div className="p-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="space-y-2 p-4">
              {/* About Us */}
              <li>
                <button
                  onClick={() => toggleSubMenu("about-us")}
                  className="flex items-center justify-between w-full py-2 px-4 text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  About Us
                  <motion.div
                    animate={{
                      rotate: openSubMenu === "about-us" ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDownIcon className="w-5 h-5 ml-1" />
                  </motion.div>
                </button>
                {openSubMenu === "about-us" && (
                  <ul className="pl-4">
                    <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                      <a href='/introduction'> Introduction</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                      <a href='/administration-jurisdiction'>Administration & Jurisdiction</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                      <a href="vission-mission">Vision & Mission</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                      <a href="principal-message">Principal’s Message</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                      <a href="headmistress-message">Headmistress’ Message</a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Academics */}
              <li>
                <button
                  onClick={() => toggleSubMenu("academics")}
                  className="flex items-center justify-between w-full py-2 px-4 text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  Academics
                  <motion.div
                    animate={{
                      rotate: openSubMenu === "academics" ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDownIcon className="w-5 h-5 ml-1" />
                  </motion.div>
                </button>
                {openSubMenu === "academics" && (
                  <ul className="pl-4">
                    <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                      <a href="academic-course">Courses</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                      <a href="academic-fee-structure">Fee Structure</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                      <a href="academic-faculty">Faculty</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                      <a href="academic-uniform">Uniform</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                      Syllabus
                    </li>
                    <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                      Examinations
                    </li>
                  </ul>
                )}
              </li>

              {/* Admissions */}
              <li>
                <button
                  onClick={() => toggleSubMenu("admissions")}
                  className="flex items-center justify-between w-full py-2 px-4 text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  Admissions
                  <motion.div
                    animate={{
                      rotate: openSubMenu === "admissions" ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDownIcon className="w-5 h-5 ml-1" />
                  </motion.div>
                </button>
                {openSubMenu === "admissions" && (
                  <ul className="pl-4">
                    <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                      <a href="admission-application-procedure">Application Process</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                      <a href="/admission-eligibility">Eligibility</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                      Important Dates
                    </li>
                  </ul>
                )}
              </li>

              {/* Rules */}
              <li>
                <a
                  href="/rules-regulations"
                  className="block py-2 px-4 text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  Rules
                </a>
              </li>
              <li>
                <a
                  href="/gallary"
                  className="block py-2 px-4 text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  Gallary
                </a>
              </li>

              {/* Contact Us */}
              <li>
                <a
                  href="/contact-us"
                  className="block py-2 px-4 text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;