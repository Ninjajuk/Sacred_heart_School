// import React from 'react'
// import CopyrightFooter from '../components/CopyrightFooter'
// import Header from '../components/Header'
// import { motion } from 'framer-motion';
// import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaSchool, FaUser, FaUserAlt } from 'react-icons/fa';
// const PrincipalMessagePage = () => {
//     return (
//         <>
//             <Header />
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
//                             Principal’s Message
//                         </motion.h2>
//                         <motion.p
//                             className="text-gray-700 text-sm md:text-md leading-relaxed mb-6"
//                             initial={{ opacity: 0, x: 50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.8, delay: 0.4 }}
//                         >
//                             <strong className='text-purple-800'>Sacred Heart Higher Secondary School, Umrangso</strong>, is marching towards its Golden years of its existence. It had a very humble beginning in the year 1969 by the unforgettable and saintly missionary educator, Rev. Fr. John Mariae. The School aims to create a supportive and inclusive environment where every student is encouraged to explore their potential and achieve their personal best in all aspects of their life. Students will be confronted and engaged through authentic learning opportunities that stimulated them to develop creatively, confidence and resourcefulness to become independent and ethically life-long learners. we offer a broad of curriculum and a range of opportunities for the students to achieve excellence in academic, spiritual, social, cultural, sporting and community development. We value relationships and connection with the community. we encourage our students to develop respectful relationships with their friends, parents, teachers and the students of different communities. We inculcate in them a keen social conscience and the capacity to make ethical decisions. We maintain productive relationship and connection with our parents, local schools, businesses and leading institutions. The institution has spear headed education process in the district as well as imparted ethical and moral values into its students and Staff. Many of our Alumnus are well placed and the school feels proud of them and their services to the society at large. we are proud to be a high performing school and aim to be the selective school of the first choice for all families in the districts of Karbi Anglong and Dima Hasau.
//                         </motion.p>


//                     </div>

//                     <motion.div
//                         className="flex-1"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.8, delay: 0.8 }}
//                     >
//                         <img
//                             src="https://www.donboscohsdiphu.in/Images/principal.jpg"
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
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fr. SAJI LUKOSE</h3>
//                 <motion.div
//                     className="space-y-4"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.8 }}
//                 >
//                     <div className="flex items-center space-x-4">
//                         <FaUserAlt className="text-red-600 text-xl" />
//                         <p>Principal</p>
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
//         </>
//     )
// }
// export default PrincipalMessagePage

import React from 'react';
import CopyrightFooter from '../components/CopyrightFooter';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaSchool, FaUserAlt } from 'react-icons/fa';

const PrincipalMessagePage = () => {
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
                        Principal’s Message
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
                            Principal’s Message
                        </motion.h2>
                        <motion.p
                            className="text-gray-700 text-sm md:text-md leading-relaxed mb-6"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <strong className="text-purple-800">Sacred Heart Higher Secondary School, Umrangso</strong>, is marching towards its Golden years of its existence. It had a very humble beginning in the year 1969 by the unforgettable and saintly missionary educator, Rev. Fr. John Mariae. The School aims to create a supportive and inclusive environment where every student is encouraged to explore their potential and achieve their personal best in all aspects of their life. Students will be confronted and engaged through authentic learning opportunities that stimulated them to develop creatively, confidence and resourcefulness to become independent and ethically life-long learners. we offer a broad of curriculum and a range of opportunities for the students to achieve excellence in academic, spiritual, social, cultural, sporting and community development. We value relationships and connection with the community. we encourage our students to develop respectful relationships with their friends, parents, teachers and the students of different communities. We inculcate in them a keen social conscience and the capacity to make ethical decisions. We maintain productive relationship and connection with our parents, local schools, businesses and leading institutions. The institution has spear headed education process in the district as well as imparted ethical and moral values into its students and Staff. Many of our Alumnus are well placed and the school feels proud of them and their services to the society at large. we are proud to be a high performing school and aim to be the selective school of the first choice for all families in the districts of Karbi Anglong and Dima Hasau.
                        </motion.p>
                    </div>

                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <img
                            src="https://www.donboscohsdiphu.in/Images/principal.jpg"
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
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fr. SAJI LUKOSE</h3>
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="flex items-center space-x-4">
                        <FaUserAlt className="text-red-600 text-xl" />
                        <p>Principal</p>
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
            <div className="mt-auto">
                <CopyrightFooter />
            </div>
        </>
    );
};

export default PrincipalMessagePage;



