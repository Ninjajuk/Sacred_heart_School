import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About School */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Sacred Heart School</h3>
            <p className="text-gray-400">
              Sacred Heart School is dedicated to providing quality education and fostering holistic development in students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/introduction" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/admission-application-procedure" className="text-gray-400 hover:text-white transition-colors">
                  Admissions
                </a>
              </li>
              <li>
                <a href="/academic-course" className="text-gray-400 hover:text-white transition-colors">
                  Academics
                </a>
              </li>
              <li>
                <a href="/rules-regulations" className="text-gray-400 hover:text-white transition-colors">
                  Rules
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-white" />
                <span>14 Km, Umrangso, Dima Hasao, Assam, India</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-white" />
                <span>+91 9401990330</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-white" />
                <span>info@sacredheartschool.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Sacred Heart School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;