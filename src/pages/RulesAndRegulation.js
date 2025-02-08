// import React from 'react'
// import CopyrightFooter from '../components/CopyrightFooter'
// import Header from '../components/Header'
// import { FaBullseye, FaLightbulb, FaHandsHelping, FaUsers, FaHeart, FaBan, FaTools, FaBookOpen, FaGavel, FaUserShield } from 'react-icons/fa'; // Import icons from react-icons
// import {motion} from 'framer-motion'
// const RulesAndRegulation = () => {
//     const disciplineItems = [
//         {
//             icon: <FaUserShield className="text-red-600 text-2xl" />,
//             text: "Students who are admitted to Don Bosco Higher Secondary School, Diphu, will be under the discipline of the Principal, Vice Principal, Headmistress and other staff of the institution.",
//         },
//         {
//             icon: <FaGavel className="text-red-600 text-2xl" />,
//             text: "Students are expected to keep all the rules and regulations of the Institute in letter and spirit and maintain decorum in their behaviour on the campus as well as when they are at home. They will take care, not only, not to bring disgrace to the Institution but also to uphold its honour and prestige.",
//         },
//         {
//             icon: <FaBookOpen className="text-red-600 text-2xl" />,
//             text: "Anyone using unfair means in Tests/Examinations will be debarred from further examinations. He/she will be declared to have failed and may even be expelled from the Institution.",
//         },
//         {
//             icon: <FaTools className="text-red-600 text-2xl" />,
//             text: "Any damage done to the Institution’s property must be made good by the pupils.",
//         },
//         {
//             icon: <FaBan className="text-red-600 text-2xl" />,
//             text: "Strictly forbidden to use of tobacco products, alcohol and drugs in the campus.",
//         },
//     ];
    
//   return (
//     <>
//      <Header />

// {/* Top Banner Image */}
// <motion.div
//   className="w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg mb-6"
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   transition={{ duration: 0.8 }}
// >
//   <img
//     src="/images/innerbg.jpg"
//     alt="Top Banner"
//     className="w-full h-full object-cover"
//   />
// </motion.div>

// <motion.section
//   className="bg-white p-6 md:p-12 max-w-6xl mx-auto rounded-lg shadow-2xl"
//   initial={{ opacity: 0, y: 50 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8 }}
// >
//   <div className="">
//     <motion.h2
//       className="text-red-600 text-3xl md:text-4xl font-bold pb-6"
//       initial={{ opacity: 0, x: -50 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8, delay: 0.2 }}
//     >
//       Rules & Regulations
//     </motion.h2>

//   </div>

//   {/* Content Section */}
//   <motion.div
//     className="flex flex-col md:flex-row gap-8 items-center"
//     initial={{ opacity: 0, scale: 0.8 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.8, delay: 0.6 }}
//   >
//     <div className="flex-1">

//       <motion.div
//         className="mt-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//       >
//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">ATTENDANCE</h3>
//         <p className="text-gray-700 text-base md:text-md leading-relaxed mb-6">
//         Daily attendance is compulsory. Students having less than 85% attendance are liable to be debarred from Unit Test and Selection Test. Every absence must be accounted for by a leave letter. A student who absents himself/herself for over a week will have his/her name removed from the School Register. However, if a student is delegated by the school to participate in seminars, workshops, or games and sports, such absence would not be considered for computing the minimum required attendance.
//         </p>
//       </motion.div>

//       <motion.div
//         className="mt-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//       >
//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">EXAMINATION</h3>
//         <p className="text-gray-700 text-base md:text-md leading-relaxed mb-6">
//         The School regularly conducts Tutorial Classes, Unit Tests and Selection Tests. The marks secured by the students at the Unit Tests and Tutorial Classes are taken into consideration at the time of selection.
//         </p>
//       </motion.div>
//     </div>

//     <motion.div
//       className="flex-1"
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.8, delay: 0.8 }}
//     >
//       <img
//         src="https://www.donboscohsdiphu.in/Images/innerbg/about.jpg"
//         alt="School Image"
//         className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
//       />
//     </motion.div>
//   </motion.div>
// </motion.section>

// {/* Additional Section for Testimonials or Gallery */}
//           <motion.section
//               className="bg-white p-6 md:p-12 max-w-6xl mx-auto rounded-lg shadow-2xl my-8"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//           >
//               <h3 className="text-2xl font-semibold text-gray-800 mb-6">General Discipline</h3>
//               <ul className="space-y-4">
//                   {disciplineItems.map((item, index) => (
//                       <motion.li
//                           key={index}
//                           className="flex items-start space-x-4"
//                           initial={{ opacity: 0, x: -20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
//                       >
//                           <div className="flex-shrink-0">{item.icon}</div>
//                           <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//                               {item.text}
//                           </p>
//                       </motion.li>
//                   ))}
//               </ul>
//           </motion.section>

// <div className="mt-auto">
//   <CopyrightFooter />
// </div>
//     </>
//   )
// }

// export default RulesAndRegulation


import React from 'react';
import CopyrightFooter from '../components/CopyrightFooter';
import Header from '../components/Header';
import { FaBullseye, FaLightbulb, FaHandsHelping, FaUsers, FaHeart, FaBan, FaTools, FaBookOpen, FaGavel, FaUserShield } from 'react-icons/fa'; // Import icons from react-icons
import { motion } from 'framer-motion';

const RulesAndRegulation = () => {
    const disciplineItems = [
        {
            icon: <FaUserShield className="text-red-600 text-2xl" />,
            text: "Students who are admitted to Don Bosco Higher Secondary School, Diphu, will be under the discipline of the Principal, Vice Principal, Headmistress and other staff of the institution.",
        },
        {
            icon: <FaGavel className="text-red-600 text-2xl" />,
            text: "Students are expected to keep all the rules and regulations of the Institute in letter and spirit and maintain decorum in their behaviour on the campus as well as when they are at home. They will take care, not only, not to bring disgrace to the Institution but also to uphold its honour and prestige.",
        },
        {
            icon: <FaBookOpen className="text-red-600 text-2xl" />,
            text: "Anyone using unfair means in Tests/Examinations will be debarred from further examinations. He/she will be declared to have failed and may even be expelled from the Institution.",
        },
        {
            icon: <FaTools className="text-red-600 text-2xl" />,
            text: "Any damage done to the Institution’s property must be made good by the pupils.",
        },
        {
            icon: <FaBan className="text-red-600 text-2xl" />,
            text: "Strictly forbidden to use of tobacco products, alcohol and drugs in the campus.",
        },
    ];

    return (
        <>
            <Header />

            {/* Hero Section */}
            <motion.div
                className="w-full h-96 bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('/images/innerbg.jpg')" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="text-center bg-black bg-opacity-50 p-6 rounded-lg">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Rules & Regulations
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-white mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Ensuring discipline and excellence in education.
                    </motion.p>
                    <motion.a
                        href="/contact"
                        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Contact Us
                    </motion.a>
                </div>
            </motion.div>

            {/* Main Content Section */}
            <motion.section
                className="bg-white p-6 md:p-12 max-w-6xl mx-auto rounded-lg shadow-2xl"
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
                        Rules & Regulations
                    </motion.h2>
                </div>

                {/* Content Section */}
                <motion.div
                    className="flex flex-col md:flex-row gap-8 items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="flex-1">
                        <motion.div
                            className="mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">ATTENDANCE</h3>
                            <p className="text-gray-700 text-base md:text-md leading-relaxed mb-6">
                                Daily attendance is compulsory. Students having less than 85% attendance are liable to be debarred from Unit Test and Selection Test. Every absence must be accounted for by a leave letter. A student who absents himself/herself for over a week will have his/her name removed from the School Register. However, if a student is delegated by the school to participate in seminars, workshops, or games and sports, such absence would not be considered for computing the minimum required attendance.
                            </p>
                        </motion.div>

                        <motion.div
                            className="mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">EXAMINATION</h3>
                            <p className="text-gray-700 text-base md:text-md leading-relaxed mb-6">
                                The School regularly conducts Tutorial Classes, Unit Tests and Selection Tests. The marks secured by the students at the Unit Tests and Tutorial Classes are taken into consideration at the time of selection.
                            </p>
                        </motion.div>
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
            </motion.section>

            {/* General Discipline Section */}
            <motion.section
                className="bg-white p-6 md:p-12 max-w-6xl mx-auto rounded-lg shadow-2xl my-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">General Discipline</h3>
                <ul className="space-y-4">
                    {disciplineItems.map((item, index) => (
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

            {/* Footer */}
            <div className="mt-auto">
                <CopyrightFooter />
            </div>
        </>
    );
};

export default RulesAndRegulation;