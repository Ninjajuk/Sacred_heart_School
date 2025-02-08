// import React from 'react';
// import { motion } from 'framer-motion';
// import CopyrightFooter from '../components/CopyrightFooter';
// import Header from '../components/Header';

// const AdminiatrationAndJurisdiction = () => {
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
//                             Administration & Jurisdiction
//                         </motion.h2>

//                         <motion.p
//                             className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
//                             initial={{ opacity: 0, x: 50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.8, delay: 0.4 }}
//                         >
//                             <strong className='text-purple-800'>Sacred Heart Higher Secondary School, Umrangso</strong>, It is a Catholic School administered and managed by the Catholic Diocese of Umrangso and is under the religious jurisdiction of the Bishop Most Rev. Paul Mattekkat of the said Diocese.
//                         </motion.p>

//                         {/* Additional Features */}
//                         <motion.div
//                             className="mt-6"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.8, delay: 0.6 }}
//                         >
//                             <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
//                             <ul className="list-disc list-inside text-gray-700 text-base md:text-lg leading-relaxed">
//                                 <li className="mb-2">Managed by the Catholic Diocese of Umrangso</li>
//                                 <li className="mb-2">Religious jurisdiction under Bishop Most Rev. Paul Mattekkat</li>
//                                 <li className="mb-2">Commitment to holistic education</li>
//                                 <li className="mb-2">Strong emphasis on moral and ethical values</li>
//                                 <li className="mb-2">Experienced and dedicated administrative staff</li>
//                             </ul>
//                         </motion.div>
//                     </div>

//                     <motion.div
//                         className="flex-1"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.8, delay: 0.8 }}
//                     >
//                         <img
//                             src="https://www.donboscohsdiphu.in/Images/innerbg/Administration.jpg"
//                             alt="School Image"
//                             className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
//                         />
//                     </motion.div>
//                 </motion.div>
//             </motion.section>

//             {/* Additional Section for Timeline or Gallery */}
//             <motion.section
//                 className="bg-white p-6 md:p-12 max-w-6xl mx-auto rounded-lg shadow-2xl my-8"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-6">Administrative Timeline</h3>
//                 <div className="flex flex-col space-y-4">
//                     <div className="flex items-center space-x-4">
//                         <div className="w-4 h-4 bg-red-600 rounded-full"></div>
//                         <div className="text-gray-700 text-base md:text-lg">1969: School established by Rev. Fr. John Mariae</div>
//                     </div>
//                     <div className="flex items-center space-x-4">
//                         <div className="w-4 h-4 bg-red-600 rounded-full"></div>
//                         <div className="text-gray-700 text-base md:text-lg">2004: Upgraded to Higher Secondary School</div>
//                     </div>
//                     <div className="flex items-center space-x-4">
//                         <div className="w-4 h-4 bg-red-600 rounded-full"></div>
//                         <div className="text-gray-700 text-base md:text-lg">2020: New administrative building inaugurated</div>
//                     </div>
//                 </div>
//             </motion.section>

//             <div className="mt-auto">
//                 <CopyrightFooter />
//             </div>
//         </>
//     );
// };

// export default AdminiatrationAndJurisdiction;


import React from 'react';
import { motion } from 'framer-motion';
import CopyrightFooter from '../components/CopyrightFooter';
import Header from '../components/Header';
import { FaChurch, FaUserTie, FaHandsHelping, FaSchool, FaCalendarAlt } from 'react-icons/fa';
import Footer from '../components/Footer';

const AdminiatrationAndJurisdiction = () => {
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
                        Administration & Jurisdiction
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-2xl text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Managed by the Catholic Diocese of Umrangso
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
                            Administration & Jurisdiction
                        </motion.h2>

                        <motion.p
                            className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <strong className="text-purple-800">Sacred Heart Higher Secondary School, Umrangso</strong>, It is a Catholic School administered and managed by the Catholic Diocese of Umrangso and is under the religious jurisdiction of the Bishop Most Rev. Paul Mattekkat of the said Diocese.
                        </motion.p>

                        {/* Key Features Section */}
                        <motion.div
                            className="mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-4">
                                    <FaChurch className="w-8 h-8 text-purple-700" />
                                    <p className="text-gray-700 text-base md:text-lg">Managed by the Catholic Diocese of Umrangso</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaUserTie className="w-8 h-8 text-purple-700" />
                                    <p className="text-gray-700 text-base md:text-lg">Religious jurisdiction under Bishop Most Rev. Paul Mattekkat</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaHandsHelping className="w-8 h-8 text-purple-700" />
                                    <p className="text-gray-700 text-base md:text-lg">Commitment to holistic education</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaSchool className="w-8 h-8 text-purple-700" />
                                    <p className="text-gray-700 text-base md:text-lg">Experienced and dedicated administrative staff</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <img
                            src="https://www.donboscohsdiphu.in/Images/innerbg/Administration.jpg"
                            alt="School Image"
                            className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                        />
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Timeline Section */}
            <motion.section
                className="bg-white p-6 md:p-12 max-w-6xl mx-auto rounded-lg shadow-2xl my-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Administrative Timeline</h3>
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                        <FaCalendarAlt className="w-6 h-6 text-red-600" />
                        <div className="text-gray-700 text-base md:text-lg">1969: School established by Rev. Fr. John Mariae</div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaCalendarAlt className="w-6 h-6 text-red-600" />
                        <div className="text-gray-700 text-base md:text-lg">2004: Upgraded to Higher Secondary School</div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaCalendarAlt className="w-6 h-6 text-red-600" />
                        <div className="text-gray-700 text-base md:text-lg">2020: New administrative building inaugurated</div>
                    </div>
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

export default AdminiatrationAndJurisdiction;