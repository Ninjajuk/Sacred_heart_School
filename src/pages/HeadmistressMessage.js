// import React from 'react'
// import CopyrightFooter from '../components/CopyrightFooter'
// import Header from '../components/Header'
// import { motion } from 'framer-motion';
// import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaSchool, FaUser, FaUserAlt } from 'react-icons/fa';

// const HeadmistressMessage = () => {
//   return (
//     <>
//      <Header />
//             {/* Top Banner Image */}
//             <motion.div
//                 className="w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg mb-6"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 <img
//                     src="/images/innerbg.jpg"
//                     alt="Top Banner"
//                     className="w-full h-full object-cover"
//                 />
//             </motion.div>

//             <motion.section
//                 className="bg-white p-6 md:p-12 max-w-6xl mx-auto rounded-lg shadow-2xl"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 {/* Content Section */}
//                 <motion.div
//                     className="flex flex-col md:flex-row gap-8 items-center"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8, delay: 0.6 }}
//                 >
//                     <div className="flex-1">
//                         <motion.h2
//                             className="text-red-600 text-3xl md:text-4xl font-bold pb-6"
//                             initial={{ opacity: 0, x: -50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.8, delay: 0.2 }}
//                         >
//                             Headmistress's Message
//                         </motion.h2>
//                         <motion.p
//                             className="text-gray-700 text-sm md:text-md leading-relaxed mb-6"
//                             initial={{ opacity: 0, x: 50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.8, delay: 0.4 }}
//                         >
//                             Dear Parents, Teaching Staff, Non-Teaching Staff and my dear Students, As the Deadly Coronavirus has taken the world my storm, all are living in fear and trembling. We feel lost and baffled by this dreaded disease. We put our trust and confidence in God whom we call Him as our Loving Father. We believe that what is impossible for man is possible for God. Let us therefore unite ourselves together with the whole world in prayer that our Mighty God will protect our state, country and the whole world. Let us protect ourselves by observing the laws and norms given by our country in order to prevent the outbreak of the virus and to continue practice the personal hygiene. Here is a piece of advice to the students during these days of lockdown. Make a time-table wherein you spend time with the nature, family and studies. Use self-study and read more to enhance your learning experience. Keep in mind that the time that is wasted will not come back. May God protect and shield you. This is my prayer for you.
//                         </motion.p>


//                     </div>

//                     <motion.div
//                         className="flex-1"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.8, delay: 0.8 }}
//                     >
//                         <img
//                             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                             alt="School Image"
//                             className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
//                         />
//                     </motion.div>

//                 </motion.div>
//             </motion.section>
//             {/* Additional Features */}

//             <motion.div
//                 className="bg-white p-6 md:p-12 max-w-6xl mx-auto rounded-lg shadow-2xl my-8"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-4">Leslie Alexander</h3>
//                 <motion.div
//                     className="space-y-4"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.8 }}
//                 >
//                     <div className="flex items-center space-x-4">
//                         <FaUserAlt className="text-red-600 text-xl" />
//                         <p>Headmistress</p>
//                     </div>
//                     <div className="flex items-center space-x-4">
//                         <FaSchool className="text-red-600 text-xl" />
//                         <p>Sacred Heart Higher Secondary School, Umrangso</p>
//                     </div>
//                     <div className="flex items-center space-x-4">
//                         <FaMapMarkerAlt className="text-red-600 text-xl" />
//                         <p>Dima Hasao, Assam</p>
//                     </div>
//                     <div className="flex items-center space-x-4">
//                         <FaMapMarkerAlt className="text-red-600 text-xl" />
//                         <p>Pin Code: <span>788931</span></p>
//                     </div>
//                     <div className="flex items-center space-x-4">
//                         <FaPhone className="text-red-600 text-xl" />
//                         <p>Mobile: <span>9401990330 / 8638230762</span></p>
//                     </div>
//                     <div className="flex items-center space-x-4">
//                         <FaEnvelope className="text-red-600 text-xl" />
//                         <p>Email: <span>lukosesaji26@gmail.com</span></p>
//                     </div>
//                 </motion.div>
//             </motion.div>
//             <div className="mt-auto">
//                 <CopyrightFooter />
//             </div>
//     </>
//   )
// }

// export default HeadmistressMessage

import React from 'react';
import CopyrightFooter from '../components/CopyrightFooter';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaSchool, FaUserAlt } from 'react-icons/fa';
import Footer from '../components/Footer';

const HeadmistressMessage = () => {
  return (
    <>
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
            Headmistress's Message
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building Dreams, Shaping Lives
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content Section */}
      <motion.section
        className="bg-white p-6 md:p-12 max-w-6xl mx-auto rounded-lg shadow-2xl mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Content Section */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex-1">
            <motion.h2
              className="text-red-600 text-3xl md:text-4xl font-bold pb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Headmistress's Message
            </motion.h2>
            <motion.p
              className="text-gray-700 text-sm md:text-md leading-relaxed mb-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Dear Parents, Teaching Staff, Non-Teaching Staff and my dear Students, As the Deadly Coronavirus has taken the world my storm, all are living in fear and trembling. We feel lost and baffled by this dreaded disease. We put our trust and confidence in God whom we call Him as our Loving Father. We believe that what is impossible for man is possible for God. Let us therefore unite ourselves together with the whole world in prayer that our Mighty God will protect our state, country and the whole world. Let us protect ourselves by observing the laws and norms given by our country in order to prevent the outbreak of the virus and to continue practice the personal hygiene. Here is a piece of advice to the students during these days of lockdown. Make a time-table wherein you spend time with the nature, family and studies. Use self-study and read more to enhance your learning experience. Keep in mind that the time that is wasted will not come back. May God protect and shield you. This is my prayer for you.
            </motion.p>
          </div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="School Image"
              className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Contact Information Section */}
      <motion.section
        className="bg-white p-6 md:p-12 max-w-6xl mx-auto rounded-lg shadow-2xl my-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Leslie Alexander</h3>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center space-x-4">
            <FaUserAlt className="text-red-600 text-xl" />
            <p>Headmistress</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaSchool className="text-red-600 text-xl" />
            <p>Sacred Heart Higher Secondary School, Umrangso</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-red-600 text-xl" />
            <p>Dima Hasao, Assam</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-red-600 text-xl" />
            <p>Pin Code: <span>788931</span></p>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-red-600 text-xl" />
            <p>Mobile: <span>9401990330 / 8638230762</span></p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-red-600 text-xl" />
            <p>Email: <span>lukosesaji26@gmail.com</span></p>
          </div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <Footer/>
      <div className="mt-auto">
        <CopyrightFooter />
      </div>
    </>
  );
};

export default HeadmistressMessage;