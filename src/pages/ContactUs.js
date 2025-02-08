// import React from 'react'
// import { motion } from "framer-motion";
// import Header from '../components/Header'
// import CopyrightFooter from '../components/CopyrightFooter'
// import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// const ContactusPage = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-1 container py-4 lg:px-[10rem]">
//         <section className="h-full">
//                   <div className='m-2 rounded-2xl shadow-2xl bg-white'>
//                       <h1 className="text-2xl font-extrabold text-purple-800 px-2">Contact Us</h1>
//                       <p className="p-4 text-sm md:text-md text-gray-600 font-bold leading-relaxed">
//                           Sacred Heart Higher Secondary School is situated at 14 Km, Umrangso, in Dima Hasao Autonomous District in the state of Assam, India.
//                       </p>
//                   </div>


//           <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 p-2">
//             {/* Address Section */}
//             <motion.div
//               className="flex-1 bg-white p-6 rounded-2xl shadow-2xl border-gray-800"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="p-6 h-full md:h-80">
//                 <h2 className="text-lg font-bold">POSTAL ADDRESS</h2>
//                 <p className="text-red-600 font-semibold">Sacred Heart Higher Secondary School</p>
//                 <p>Post Box No. 24</p>
//                 <p>Umrangso – 788 931</p>
//                 <p>Dima Hasao (Assam)</p>

//                 <h3 className="font-bold mt-4">Mobile Numbers</h3>
//                 <p><span className="font-semibold">Principal:</span> +91 9401990330</p>
//                 <p><span className="font-semibold">Headmistress:</span> +91 9435471727</p>

//                 <h3 className="font-bold mt-4">Follow Us</h3>

//           <div className="flex justify-center lg:justify-start gap-6 mt-2">
//             <motion.a
//               href="https://www.linkedin.com/in/samsuddin-ansari-232904143/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-4xl text-blue-400 hover:text-blue-600 transition-colors duration-300"
//               whileHover={{ scale: 1.2, rotate: 15 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <FaFacebook />
//             </motion.a>
//             <motion.a
//               href="https://github.com/Ninjajuk"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-4xl text-gray-400 hover:text-gray-900 transition-colors duration-300"
//               whileHover={{ scale: 1.2, rotate: 15 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <FaTwitter />
//             </motion.a>
//             <motion.a
//               href="https://www.instagram.com/samsu_same?igsh=djZmMGlzMmJzZ2N1"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-4xl text-pink-400 hover:text-pink-700 transition-colors duration-300"
//               whileHover={{ scale: 1.2, rotate: 15 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <FaInstagram />
//             </motion.a>

//           </div>
//               </div>
//             </motion.div>

//             {/* Map Section */}
//             <motion.div
//               className="flex-1 p-6 bg-white rounded-2xl overflow-hidden shadow-2xl"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <iframe
//                 title="Sacred Heart School Location"
//                 className="w-full h-full md:h-80 rounded-lg"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.525879335129!2d92.68754477477883!3d25.517112877459377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374ea83582b1f11f%3A0xc3c6e9d8c5f9b20a!2sSacred%20Heart%20Higher%20Secondary%20School%20Umrangso!5e0!3m2!1sen!2sin!4v1700000000000"
//                 allowFullScreen
//                 loading="lazy"
//               ></iframe>
//             </motion.div>
//           </div>
//         </section>
//       </main>
//       <CopyrightFooter />
//     </div>
//   );
// };

// export default ContactusPage;


import React from 'react';
import { motion } from "framer-motion";
import Header from '../components/Header';
import CopyrightFooter from '../components/CopyrightFooter';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactusPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Top Banner Section */}
      <motion.div
        className="w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg mb-6 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/images/innerbg.jpg"
          alt="Top Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/80 to-blue-800/80 flex flex-col justify-center items-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We are here to help you with any questions or concerns.
          </motion.p>
        </div>
      </motion.div>
      <main className="flex-1 container py-4 lg:px-[10rem]">
        <section className="h-full">
          <div className='m-2 rounded-2xl shadow-2xl bg-white'>
            <h1 className="text-2xl font-extrabold text-purple-800 px-2">Contact Us</h1>
            <p className="p-4 text-sm md:text-md text-gray-600 font-bold leading-relaxed">
              Sacred Heart Higher Secondary School is situated at 14 Km, Umrangso, in Dima Hasao Autonomous District in the state of Assam, India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 p-2">
            {/* Address Section */}
            <motion.div
              className="flex-1 bg-white p-6 rounded-2xl shadow-2xl border-gray-800"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-6 h-full md:h-80">
                <h2 className="text-lg font-bold">POSTAL ADDRESS</h2>
                <p className="text-red-600 font-semibold">Sacred Heart Higher Secondary School</p>
                <p>Post Box No. 24</p>
                <p>Umrangso – 788 931</p>
                <p>Dima Hasao (Assam)</p>

                <h3 className="font-bold mt-4">Mobile Numbers</h3>
                <p><span className="font-semibold">Principal:</span> +91 9401990330</p>
                <p><span className="font-semibold">Headmistress:</span> +91 9435471727</p>

                <h3 className="font-bold mt-4">Follow Us</h3>

                <div className="flex justify-center lg:justify-start gap-6 mt-2">
                  <motion.a
                    href="https://www.linkedin.com/in/samsuddin-ansari-232904143/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-blue-400 hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaFacebook />
                  </motion.a>
                  <motion.a
                    href="https://github.com/Ninjajuk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-gray-400 hover:text-gray-900 transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTwitter />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/samsu_same?igsh=djZmMGlzMmJzZ2N1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-pink-400 hover:text-pink-700 transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaInstagram />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
              className="flex-1 p-6 bg-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <iframe
                title="Sacred Heart School Location"
                className="w-full h-full md:h-80 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.525879335129!2d92.68754477477883!3d25.517112877459377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374ea83582b1f11f%3A0xc3c6e9d8c5f9b20a!2sSacred%20Heart%20Higher%20Secondary%20School%20Umrangso!5e0!3m2!1sen!2sin!4v1700000000000"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>

          {/* Contact Form Section */}
          <motion.section
            className="bg-white p-6 md:p-12 max-w-6xl mx-auto rounded-lg shadow-2xl my-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
              <button
                type="submit"
                className="bg-purple-800 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.section>

          {/* Testimonials Section */}
          <motion.section
            className="bg-gray-100 py-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-8">What Parents Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    id: 1,
                    name: "John Doe",
                    comment: "The school's discipline and rules have helped my child grow into a responsible individual.",
                  },
                  {
                    id: 2,
                    name: "Jane Smith",
                    comment: "The strict adherence to rules ensures a safe and productive environment for students.",
                  },
                ].map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    className="bg-white p-6 rounded-lg shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <p className="text-gray-700 mb-4">{testimonial.comment}</p>
                    <p className="text-gray-900 font-semibold">- {testimonial.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            className="bg-white py-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    question: "What happens if a student violates the rules?",
                    answer: "Depending on the severity of the violation, the student may face disciplinary action, suspension, or even expulsion.",
                  },
                  {
                    id: 2,
                    question: "Can parents visit the school to discuss disciplinary issues?",
                    answer: "Yes, parents are encouraged to visit the school and discuss any concerns with the Principal or Vice Principal.",
                  },
                ].map((faq) => (
                  <motion.div
                    key={faq.id}
                    className="bg-gray-100 p-6 rounded-lg shadow-sm"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Video Section */}
          <motion.section
            className="bg-gray-100 py-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-8">Watch Our School in Action</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.section>
        </section>
      </main>

      <CopyrightFooter />
    </div>
  );
};

export default ContactusPage;


