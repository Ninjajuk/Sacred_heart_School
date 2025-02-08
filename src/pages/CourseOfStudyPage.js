// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaBook, FaLaptopCode, FaFlask, FaChartLine, FaPalette, FaGlobe, FaAtom, FaCalculator, FaPenFancy, FaCode, FaPaintBrush, FaLandmark } from 'react-icons/fa';
// import Header from '../components/Header';
// import CopyrightFooter from '../components/CopyrightFooter';

// const courses = [
//   {
//     id: 1,
//     title: 'Science',
//     description: 'Explore the wonders of the natural world through physics, chemistry, and biology.',
//     icon: <FaFlask className="text-4xl text-blue-600" />,
//     subjects: [
//       { name: 'Physics', icon: <FaAtom className="text-xl text-blue-500" /> },
//       { name: 'Chemistry', icon: <FaFlask className="text-xl text-blue-500" /> },
//       { name: 'Biology', icon: <FaGlobe className="text-xl text-blue-500" /> },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Mathematics',
//     description: 'Master the language of numbers, logic, and problem-solving.',
//     icon: <FaChartLine className="text-4xl text-green-600" />,
//     subjects: [
//       { name: 'Algebra', icon: <FaCalculator className="text-xl text-green-500" /> },
//       { name: 'Geometry', icon: <FaChartLine className="text-xl text-green-500" /> },
//       { name: 'Calculus', icon: <FaCalculator className="text-xl text-green-500" /> },
//     ],
//   },
//   {
//     id: 3,
//     title: 'Literature',
//     description: 'Dive into the world of classic and contemporary literature.',
//     icon: <FaBook className="text-4xl text-purple-600" />,
//     subjects: [
//       { name: 'English', icon: <FaPenFancy className="text-xl text-purple-500" /> },
//       { name: 'History', icon: <FaLandmark className="text-xl text-purple-500" /> },
//       { name: 'Poetry', icon: <FaBook className="text-xl text-purple-500" /> },
//     ],
//   },
//   {
//     id: 4,
//     title: 'Computer Science',
//     description: 'Learn programming, algorithms, and software development.',
//     icon: <FaLaptopCode className="text-4xl text-red-600" />,
//     subjects: [
//       { name: 'Programming', icon: <FaCode className="text-xl text-red-500" /> },
//       { name: 'Data Structures', icon: <FaLaptopCode className="text-xl text-red-500" /> },
//       { name: 'Web Development', icon: <FaCode className="text-xl text-red-500" /> },
//     ],
//   },
//   {
//     id: 5,
//     title: 'Arts',
//     description: 'Express creativity through painting, music, and performing arts.',
//     icon: <FaPalette className="text-4xl text-yellow-600" />,
//     subjects: [
//       { name: 'Painting', icon: <FaPaintBrush className="text-xl text-yellow-500" /> },
//       { name: 'Music', icon: <FaPalette className="text-xl text-yellow-500" /> },
//       { name: 'Drama', icon: <FaPalette className="text-xl text-yellow-500" /> },
//     ],
//   },
//   {
//     id: 6,
//     title: 'Social Studies',
//     description: 'Understand society, culture, and global perspectives.',
//     icon: <FaGlobe className="text-4xl text-indigo-600" />,
//     subjects: [
//       { name: 'History', icon: <FaLandmark className="text-xl text-indigo-500" /> },
//       { name: 'Geography', icon: <FaGlobe className="text-xl text-indigo-500" /> },
//       { name: 'Civics', icon: <FaLandmark className="text-xl text-indigo-500" /> },
//     ],
//   },
// ];

// const CourseOfStudyPage = () => {
//   return (
//     <>
//       <Header />
//       <motion.section
//         className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Course of Study
//           </motion.h2>
//           <p className="text-center text-gray-600 py-2 mb-8">
//             The course of instruction is as per the regulation of Higher Secondary Courses in “ARTS, SCIENCE, COMMERCE STREAMS” of Assam Higher Secondary Education Council, Guwahati.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {courses.map((course, index) => (
//               <motion.div
//                 key={course.id}
//                 className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 hover:bg-gray-50"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
//               >
//                 <div className="flex flex-col items-center text-center">
//                   <div className="mb-4">{course.icon}</div>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
//                   <p className="text-gray-600 mb-4">{course.description}</p>
//                   <div className="w-full border-t border-gray-200 pt-4">
//                     <h4 className="text-lg font-semibold text-gray-700 mb-3">Subjects</h4>
//                     <div className="flex flex-wrap justify-center gap-2">
//                       {course.subjects.map((subject, idx) => (
//                         <div
//                           key={idx}
//                           className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full"
//                         >
//                           {subject.icon}
//                           <span className="text-sm text-gray-700">{subject.name}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>
//       <CopyrightFooter />
//     </>
//   );
// };

// export default CourseOfStudyPage;

import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaChartLine, FaFlask, FaPalette, FaCalculator, FaLandmark, FaPenFancy, FaGlobe } from 'react-icons/fa';
import Header from '../components/Header';
import CopyrightFooter from '../components/CopyrightFooter';

const courses = [
  {
    id: 1,
    title: 'Science',
    description: 'Explore the wonders of the natural world through physics, chemistry, and mathematics.',
    icon: <FaFlask className="text-4xl text-blue-600" />,
    subjects: [
      { name: 'English', icon: <FaPenFancy className="text-xl text-blue-500" /> },
      { name: 'Alternative English', icon: <FaPenFancy className="text-xl text-blue-500" /> },
      { name: 'Physics', icon: <FaFlask className="text-xl text-blue-500" /> },
      { name: 'Chemistry', icon: <FaFlask className="text-xl text-blue-500" /> },
      { name: 'Economics', icon: <FaChartLine className="text-xl text-blue-500" /> },
      { name: 'Mathematics', icon: <FaCalculator className="text-xl text-blue-500" /> },
      { name: 'EVS', icon: <FaGlobe className="text-xl text-blue-500" /> },
    ],
  },
  {
    id: 2,
    title: 'Commerce',
    description: 'Master the principles of business, finance, and economics.',
    icon: <FaChartLine className="text-4xl text-green-600" />,
    subjects: [
      { name: 'English', icon: <FaPenFancy className="text-xl text-green-500" /> },
      { name: 'Alternative English', icon: <FaPenFancy className="text-xl text-green-500" /> },
      { name: 'Business Studies', icon: <FaChartLine className="text-xl text-green-500" /> },
      { name: 'Accountancy', icon: <FaCalculator className="text-xl text-green-500" /> },
      { name: 'Economics', icon: <FaChartLine className="text-xl text-green-500" /> },
      { name: 'Mathematics / Banking', icon: <FaCalculator className="text-xl text-green-500" /> },
      { name: 'EVS', icon: <FaGlobe className="text-xl text-green-500" /> },
    ],
  },
  {
    id: 3,
    title: 'Arts',
    description: 'Dive into the world of literature, history, and creative arts.',
    icon: <FaPalette className="text-4xl text-purple-600" />,
    subjects: [
      { name: 'English', icon: <FaPenFancy className="text-xl text-purple-500" /> },
      { name: 'Alternative English', icon: <FaPenFancy className="text-xl text-purple-500" /> },
      { name: 'Economics', icon: <FaChartLine className="text-xl text-purple-500" /> },
      { name: 'Education', icon: <FaBook className="text-xl text-purple-500" /> },
      { name: 'Political Science', icon: <FaLandmark className="text-xl text-purple-500" /> },
      { name: 'History', icon: <FaLandmark className="text-xl text-purple-500" /> },
      { name: 'EVS', icon: <FaGlobe className="text-xl text-purple-500" /> },
    ],
  },
];

const CourseOfStudyPage = () => {
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
            Course of Study
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore the streams of Arts, Commerce, and Science
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content Section */}
      <motion.section
        className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
        <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Course of Study
          </motion.h2>
          <p className="text-center text-gray-600 py-2 mb-8">
            The course of instruction is as per the regulation of Higher Secondary Courses in “ARTS, SCIENCE, COMMERCE STREAMS” of Assam Higher Secondary Education Council, Guwahati.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 hover:bg-gray-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{course.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="w-full border-t border-gray-200 pt-4">
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">Subjects</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {course.subjects.map((subject, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full"
                        >
                          {subject.icon}
                          <span className="text-sm text-gray-700">{subject.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <div className="mt-auto">
        <CopyrightFooter />
      </div>
    </>
  );
};

export default CourseOfStudyPage;