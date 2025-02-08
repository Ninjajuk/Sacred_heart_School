// import React from 'react';
// import Header from '../components/Header';
// import CopyrightFooter from '../components/CopyrightFooter';
// import { motion } from 'framer-motion';

// const IntroductionPage = () => {
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
        
//         {/* Content Section */}
//         <motion.div
//           className="flex flex-col md:flex-row gap-8 items-center"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           <div className="flex-1">
//             <motion.h2
//               className="text-red-600 text-3xl md:text-4xl font-bold pb-6"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               Introduction
//             </motion.h2>

//             <motion.p
//               className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <strong className='text-purple-800'>Sacred Heart Higher Secondary School, Umrangso</strong>, affiliated to the state Board of Education, Assam,
//               is situated at 14KM, Umrangso, in Dima Hasao Autonomous District. The school was established in 1969
//               by the unforgettable and saintly missionary educator, Rev. Fr. John Mariae. Over the years, the institution
//               has grown to become a premier educational institute. Indeed, it can boast of having more than 5 decades
//               of rich experience in building dreams and shaping lives of youngsters, imparting holistic and value-based
//               education to thousands of students of Dima Hasao and the neighbouring districts. In 2004, the school was
//               upgraded to a higher secondary school.
//             </motion.p>
//           </div>

//           <motion.div
//             className="flex-1"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             <img
//               src="https://www.donboscohsdiphu.in/Images/innerbg/about.jpg"
//               alt="School Image"
//               className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
//             />
//           </motion.div>
//         </motion.div>
//       </motion.section>

//       <div className="mt-auto">
//         <CopyrightFooter />
//       </div>
//     </>
//   );
// };

// export default IntroductionPage;

import React from 'react';
import Header from '../components/Header';
import CopyrightFooter from '../components/CopyrightFooter';
import { motion } from 'framer-motion';

const IntroductionPage = () => {
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
            Welcome to Sacred Heart
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
              Introduction
            </motion.h2>

            <motion.p
              className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <strong className="text-purple-800">Sacred Heart Higher Secondary School, Umrangso</strong>, affiliated to the state Board of Education, Assam,
              is situated at 14KM, Umrangso, in Dima Hasao Autonomous District. The school was established in 1969
              by the unforgettable and saintly missionary educator, Rev. Fr. John Mariae. Over the years, the institution
              has grown to become a premier educational institute. Indeed, it can boast of having more than 5 decades
              of rich experience in building dreams and shaping lives of youngsters, imparting holistic and value-based
              education to thousands of students of Dima Hasao and the neighbouring districts. In 2004, the school was
              upgraded to a higher secondary school.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition-colors"
            >
              Learn More About Us
            </motion.button>
          </div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <img
              src="https://www.donboscohsdiphu.in/Images/innerbg/about.jpg"
              alt="School Image"
              className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">
            Our Journey
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold">
                1969
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  School Established
                </h4>
                <p className="text-gray-600">
                  Founded by Rev. Fr. John Mariae, the school began its journey with a mission to provide quality education.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold">
                2004
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Upgraded to Higher Secondary
                </h4>
                <p className="text-gray-600">
                  The school expanded its offerings to include higher secondary education, catering to more students.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold">
                2023
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Celebrating 50+ Years
                </h4>
                <p className="text-gray-600">
                  Over five decades of excellence in education, shaping thousands of lives.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <div className="mt-auto">
        <CopyrightFooter />
      </div>
    </>
  );
};

export default IntroductionPage;