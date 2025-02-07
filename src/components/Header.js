import { motion } from "framer-motion";
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
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <motion.h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
          Sacred Heart School
        </motion.h1>

        {/* Navigation Menu */}
        <nav className="relative">
          <ul
            className={`md:flex space-x-2 ${
              isMenuOpen ? "block" : "hidden"
            } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-purple-800 md:bg-transparent text-center md:text-left rounded-md md:rounded-none shadow-lg md:shadow-none transition-all duration-500 ease-in-out`}
          >
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
                className={`absolute left-0 mt-1 bg-purple-800 text-white rounded-lg shadow-lg w-48 ${
                  openSubMenu === "academics" ? "block" : "hidden"
                } md:group-hover:block`}
              >
                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                  Courses
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
                className={`absolute left-0 mt-1 bg-purple-800 text-white rounded-lg shadow-lg w-48 ${
                  openSubMenu === "admissions" ? "block" : "hidden"
                } md:group-hover:block`}
              >
                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                  Application Process
                </li>
                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                  Eligibility
                </li>
                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300">
                  Important Dates
                </li>
              </motion.ul>
            </li>

            {/* Other Menu Items */}
            <li>
              <a
                href="#events"
                className="block py-2 px-4 text-white hover:text-yellow-400 transition-colors duration-300"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#news"
                className="block py-2 px-4 text-white hover:text-yellow-400 transition-colors duration-300"
              >
                News
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
    </motion.header>
  );
};

export default Header;