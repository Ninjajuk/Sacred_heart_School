// import React from 'react';
// import { motion } from 'framer-motion';
// import Header from '../components/Header';
// import CopyrightFooter from '../components/CopyrightFooter';
// import { FaBullseye, FaLightbulb, FaHandsHelping, FaUsers, FaHeart } from 'react-icons/fa'; // Import icons from react-icons

// const VisionMission = () => {
//   const missionItems = [
//     {
//       icon: <FaBullseye className="text-red-600 text-2xl" />,
//       text: "To nurture excellence in Education and foster a holistic growth of the students in the region.",
//     },
//     {
//       icon: <FaLightbulb className="text-red-600 text-2xl" />,
//       text: "To empower the students with innovative skills and methods to improve and make their learning process interesting.",
//     },
//     {
//       icon: <FaHandsHelping className="text-red-600 text-2xl" />,
//       text: "To provide a place where the students can access resources, referrals, and support when they are in need.",
//     },
//     {
//       icon: <FaUsers className="text-red-600 text-2xl" />,
//       text: "To promote innovation and creativity and enhance the talents of the students by involving and providing opportunities for the development of social, cultural, academic, arts, and sports skills.",
//     },
//     {
//       icon: <FaHeart className="text-red-600 text-2xl" />,
//       text: "To promote ethnic harmony and solidarity.",
//     },
//   ];

//   return (
//     <>
//       <Header />

//       {/* Top Banner Image */}
//       <motion.div
//         className="w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg mb-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <img
//           src="/images/innerbg.jpg"
//           alt="Top Banner"
//           className="w-full h-full object-cover"
//         />
//       </motion.div>

//       <motion.section
//         className="bg-white p-6 md:p-12 max-w-6xl mx-auto rounded-lg shadow-2xl"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="">
//           <motion.h2
//             className="text-red-600 text-3xl md:text-4xl font-bold pb-6"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Vision & Mission
//           </motion.h2>
//           <motion.p
//             className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <strong className="text-purple-800">Sacred Heart Higher Secondary School, Umrangso</strong>, stands for academic excellence, development of skills, and character formation based on the love of God and service of man as modelled in Jesus Christ, with a view to training students remarkable for all-round development and sincere commitment to God and the country.
//           </motion.p>
//         </div>

//         {/* Content Section */}
//         <motion.div
//           className="flex flex-col md:flex-row gap-8 items-center"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           <div className="flex-1">
//             {/* Vision Section */}
//             <motion.div
//               className="mt-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h3>
//               <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
//                 To create a transformative educational environment that empowers students to become leaders, innovators, and compassionate individuals committed to serving society.
//               </p>
//             </motion.div>

//             {/* Mission Section */}
//             <motion.div
//               className="mt-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h3>
//               <ul className="space-y-4">
//                 {missionItems.map((item, index) => (
//                   <motion.li
//                     key={index}
//                     className="flex items-start space-x-4"
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
//                   >
//                     <div className="flex-shrink-0">{item.icon}</div>
//                     <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//                       {item.text}
//                     </p>
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//           </div>

//           <motion.div
//             className="flex-1"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             <img
//               src="/images/vision.jpg"
//               alt="School Image"
//               className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
//             />
//           </motion.div>
//         </motion.div>
//       </motion.section>

//       {/* Additional Section for Testimonials or Gallery */}
//       <motion.section
//         className="bg-white p-6 md:p-12 max-w-6xl mx-auto rounded-lg shadow-2xl my-8"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h3 className="text-2xl font-semibold text-gray-800 mb-6">Testimonials</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <motion.div
//             className="bg-gray-50 p-6 rounded-lg shadow-md"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//               "Sacred Heart School has been a second home to me. The values and education I received here have shaped my life."
//             </p>
//             <p className="text-gray-600 text-sm mt-4">- Alumni Student</p>
//           </motion.div>
//           <motion.div
//             className="bg-gray-50 p-6 rounded-lg shadow-md"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//               "The school's focus on holistic development has helped my child grow not just academically but also as a responsible individual."
//             </p>
//             <p className="text-gray-600 text-sm mt-4">- Parent</p>
//           </motion.div>
//         </div>
//       </motion.section>

//       <div className="mt-auto">
//         <CopyrightFooter />
//       </div>
//     </>
//   );
// };

// export default VisionMission;


import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import CopyrightFooter from '../components/CopyrightFooter';
import { FaBullseye, FaLightbulb, FaHandsHelping, FaUsers, FaHeart } from 'react-icons/fa'; // Import icons from react-icons
import Footer from '../components/Footer';

const VisionMission = () => {
  const missionItems = [
    {
      icon: <FaBullseye className="text-red-600 text-2xl" />,
      text: "To nurture excellence in Education and foster a holistic growth of the students in the region.",
    },
    {
      icon: <FaLightbulb className="text-red-600 text-2xl" />,
      text: "To empower the students with innovative skills and methods to improve and make their learning process interesting.",
    },
    {
      icon: <FaHandsHelping className="text-red-600 text-2xl" />,
      text: "To provide a place where the students can access resources, referrals, and support when they are in need.",
    },
    {
      icon: <FaUsers className="text-red-600 text-2xl" />,
      text: "To promote innovation and creativity and enhance the talents of the students by involving and providing opportunities for the development of social, cultural, academic, arts, and sports skills.",
    },
    {
      icon: <FaHeart className="text-red-600 text-2xl" />,
      text: "To promote ethnic harmony and solidarity.",
    },
  ];

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
            Vision & Mission
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building a Brighter Future
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
        <div className="">
          <motion.h2
            className="text-red-600 text-3xl md:text-4xl font-bold pb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vision & Mission
          </motion.h2>
          <motion.p
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <strong className="text-purple-800">Sacred Heart Higher Secondary School, Umrangso</strong>, stands for academic excellence, development of skills, and character formation based on the love of God and service of man as modelled in Jesus Christ, with a view to training students remarkable for all-round development and sincere commitment to God and the country.
          </motion.p>
        </div>

        {/* Content Section */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex-1">
            {/* Vision Section */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                To create a transformative educational environment that empowers students to become leaders, innovators, and compassionate individuals committed to serving society.
              </p>
            </motion.div>

            {/* Mission Section */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h3>
              <ul className="space-y-4">
                {missionItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {item.text}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <img
              src="/images/vision.jpg"
              alt="School Image"
              className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="bg-white p-6 md:p-12 max-w-6xl mx-auto rounded-lg shadow-2xl my-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              "Sacred Heart School has been a second home to me. The values and education I received here have shaped my life."
            </p>
            <p className="text-gray-600 text-sm mt-4">- Alumni Student</p>
          </motion.div>
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              "The school's focus on holistic development has helped my child grow not just academically but also as a responsible individual."
            </p>
            <p className="text-gray-600 text-sm mt-4">- Parent</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer/>
      <div className="mt-auto">
        <CopyrightFooter />
      </div>
    </>
  );
};

export default VisionMission;