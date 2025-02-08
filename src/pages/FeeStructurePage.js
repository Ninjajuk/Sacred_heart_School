// import React from 'react';
// import Header from '../components/Header';
// import CopyrightFooter from '../components/CopyrightFooter';
// import { motion } from 'framer-motion';
// import { FaPalette, FaChartLine, FaFlask } from 'react-icons/fa'; // Import icons for streams

// const FeeStructurePage = () => {
//     const fees = [
//         { stream: "Arts", icon: <FaPalette className="text-4xl text-purple-600" />, admission: 5000, tuition: 9600, total: 14600 },
//         { stream: "Commerce", icon: <FaChartLine className="text-4xl text-blue-600" />, admission: 5000, tuition: 9600, total: 14600 },
//         { stream: "Science", icon: <FaFlask className="text-4xl text-red-600" />, admission: 5000, tuition: 12000, total: 17000 },
//     ];

//     return (
//         <>
//             <div className='flex flex-col min-h-screen'>
//                 <Header />
//                 <main className='flex-1'>
//                     {/* Fee Structure Section */}
//                     <motion.section
//                         className="relative bg-white max-w-6xl mx-auto p-6 md:p-12 rounded-lg shadow-2xl overflow-hidden mt-8"
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <motion.h2
//                             className="text-center text-red-600 text-3xl font-bold mb-8"
//                             initial={{ opacity: 0, x: -50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.8, delay: 0.2 }}
//                         >
//                             Fee Structure
//                         </motion.h2>
//                         <p className="text-center text-gray-600 mb-8">
//                             FEE STRUCTURE FOR THE HIGHER SECONDARY SCHOOL
//                         </p>

//                         {/* Fee Cards */}
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                             {fees.map((fee, index) => (
//                                 <motion.div
//                                     key={index}
//                                     className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-xl border border-gray-200 text-center hover:scale-105 transition-transform duration-300"
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6, delay: 0.2 * index }}
//                                 >
//                                     <div className="mb-4">{fee.icon}</div>
//                                     <h3 className="text-xl font-semibold text-gray-900">{fee.stream}</h3>
//                                     <hr className="my-4 border-t-2 border-gray-300 w-1/2 mx-auto" />
//                                     <p className="text-gray-700">
//                                         <strong>Admission Fee:</strong> ₹{fee.admission}
//                                     </p>
//                                     <p className="text-gray-700">
//                                         <strong>Tuition Fee (Per Annum):</strong> ₹{fee.tuition}
//                                     </p>
//                                     <p className="text-lg font-bold text-red-600 mt-4">
//                                         Total Per Annum: ₹{fee.total}
//                                     </p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </motion.section>

//                     {/* Comparison Table */}
//                     <motion.section
//                         className="bg-white p-6 md:p-12 max-w-6xl mx-auto rounded-lg shadow-2xl my-8"
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <h3 className="text-2xl font-semibold text-gray-800 mb-6">Fee Comparison</h3>
//                         <div className="overflow-x-auto">
//                             <table className="min-w-full bg-white border border-gray-200">
//                                 <thead>
//                                     <tr className="bg-gray-100">
//                                         <th className="py-3 px-4 border-b text-left">Stream</th>
//                                         <th className="py-3 px-4 border-b text-left">Admission Fee</th>
//                                         <th className="py-3 px-4 border-b text-left">Tuition Fee</th>
//                                         <th className="py-3 px-4 border-b text-left">Total Per Annum</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {fees.map((fee, index) => (
//                                         <motion.tr
//                                             key={index}
//                                             className="hover:bg-gray-50 transition-colors duration-200"
//                                             initial={{ opacity: 0, x: -20 }}
//                                             animate={{ opacity: 1, x: 0 }}
//                                             transition={{ duration: 0.6, delay: 0.2 * index }}
//                                         >
//                                             <td className="py-3 px-4 border-b">{fee.stream}</td>
//                                             <td className="py-3 px-4 border-b">₹{fee.admission}</td>
//                                             <td className="py-3 px-4 border-b">₹{fee.tuition}</td>
//                                             <td className="py-3 px-4 border-b font-bold text-red-600">₹{fee.total}</td>
//                                         </motion.tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </motion.section>

//                     {/* Notes Section */}
//                     <motion.section
//                         className="bg-white p-6 md:p-12 max-w-6xl mx-auto rounded-lg shadow-2xl my-8"
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <h3 className="text-2xl font-semibold text-gray-800 mb-6">Please Note</h3>
//                         <p className="text-gray-700">
//                             The above fee structure does not include the expenses the student may have to incur for co-curricular activities such as games and sports, excursion, picnic, and celebrations. All fees must be paid in the Diphu Branch of HDFC or IDBI Bank from the 1st to the 30th of every month.
//                         </p>
//                     </motion.section>

//                     {/* Call-to-Action Button */}
//                     <motion.div
//                         className="flex justify-center my-8"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.4 }}
//                     >
//                         <a
//                             href="/download-fee-structure"
//                             className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-300"
//                         >
//                             Download Fee Structure
//                         </a>
//                     </motion.div>
//                 </main>

//                 <div className='mt-auto'>
//                     <CopyrightFooter />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default FeeStructurePage;


import React from 'react';
import Header from '../components/Header';
import CopyrightFooter from '../components/CopyrightFooter';
import { motion } from 'framer-motion';
import { FaPalette, FaChartLine, FaFlask } from 'react-icons/fa'; // Import icons for streams
import Footer from '../components/Footer';

const FeeStructurePage = () => {
    const fees = [
        { stream: "Arts", icon: <FaPalette className="text-4xl text-purple-600" />, admission: 5000, tuition: 9600, total: 14600 },
        { stream: "Commerce", icon: <FaChartLine className="text-4xl text-blue-600" />, admission: 5000, tuition: 9600, total: 14600 },
        { stream: "Science", icon: <FaFlask className="text-4xl text-red-600" />, admission: 5000, tuition: 12000, total: 17000 },
    ];

    return (
        <>
            <div className='flex flex-col min-h-screen'>
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
                            Fee Structure
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-2xl text-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Explore the fee structure for Arts, Commerce, and Science streams
                        </motion.p>
                    </div>
                </motion.div>

                <main className='flex-1'>
                    {/* Fee Structure Section */}
                    <motion.section
                        className="relative bg-white max-w-6xl mx-auto p-6 md:p-12 rounded-lg shadow-2xl overflow-hidden mt-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="text-center text-red-600 text-3xl font-bold mb-8"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Fee Structure
                        </motion.h2>
                        <p className="text-center text-gray-600 mb-8">
                            FEE STRUCTURE FOR THE HIGHER SECONDARY SCHOOL
                        </p>

                        {/* Fee Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {fees.map((fee, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-xl border border-gray-200 text-center hover:scale-105 transition-transform duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 * index }}
                                >
                                    <div className="mb-4">{fee.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-900">{fee.stream}</h3>
                                    <hr className="my-4 border-t-2 border-gray-300 w-1/2 mx-auto" />
                                    <p className="text-gray-700">
                                        <strong>Admission Fee:</strong> ₹{fee.admission}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Tuition Fee (Per Annum):</strong> ₹{fee.tuition}
                                    </p>
                                    <p className="text-lg font-bold text-red-600 mt-4">
                                        Total Per Annum: ₹{fee.total}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Comparison Table */}
                    <motion.section
                        className="bg-white p-6 md:p-12 max-w-6xl mx-auto rounded-lg shadow-2xl my-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Fee Comparison</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="py-3 px-4 border-b text-left">Stream</th>
                                        <th className="py-3 px-4 border-b text-left">Admission Fee</th>
                                        <th className="py-3 px-4 border-b text-left">Tuition Fee</th>
                                        <th className="py-3 px-4 border-b text-left">Total Per Annum</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fees.map((fee, index) => (
                                        <motion.tr
                                            key={index}
                                            className="hover:bg-gray-50 transition-colors duration-200"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.2 * index }}
                                        >
                                            <td className="py-3 px-4 border-b">{fee.stream}</td>
                                            <td className="py-3 px-4 border-b">₹{fee.admission}</td>
                                            <td className="py-3 px-4 border-b">₹{fee.tuition}</td>
                                            <td className="py-3 px-4 border-b font-bold text-red-600">₹{fee.total}</td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.section>

                    {/* Notes Section */}
                    <motion.section
                        className="bg-white p-6 md:p-12 max-w-6xl mx-auto rounded-lg shadow-2xl my-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Please Note</h3>
                        <p className="text-gray-700">
                            The above fee structure does not include the expenses the student may have to incur for co-curricular activities such as games and sports, excursion, picnic, and celebrations. All fees must be paid in the Diphu Branch of HDFC or IDBI Bank from the 1st to the 30th of every month.
                        </p>
                    </motion.section>

                    {/* Call-to-Action Button */}
                    <motion.div
                        className="flex justify-center my-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a
                            href="/download-fee-structure"
                            className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-300"
                        >
                            Download Fee Structure
                        </a>
                    </motion.div>
                </main>
                <Footer/>
                <div className='mt-auto'>
                    <CopyrightFooter />
                </div>
            </div>
        </>
    );
};

export default FeeStructurePage;