// import React from 'react'
// import {motion } from 'framer-motion'
// import CopyrightFooter from '../components/CopyrightFooter'
// import Header from '../components/Header'

// const ApplicationProcessPage = () => {
//   return (
//     <>
//       <Header />

// {/* Top Banner Image */}
// <motion.div
//     className="w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg mb-6"
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     transition={{ duration: 0.8 }}
// >
//     <img
//         src="/images/innerbg.jpg"
//         alt="Top Banner"
//         className="w-full h-full object-cover"
//     />
// </motion.div>

// <motion.section
//     className="bg-white p-6 md:p-12 max-w-6xl mx-auto rounded-lg shadow-2xl"
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8 }}
// >
//     {/* Content Section */}
//     <motion.div
//         className="flex flex-col md:flex-row gap-8 items-center"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//     >
//         <div className="flex-1">
//             <motion.h2
//                 className="text-red-600 text-3xl md:text-4xl font-bold pb-6"
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//             >
//                 Application Procedure
//             </motion.h2>



//             {/* Additional Features */}
//             <motion.div
//                 className="mt-6"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//             >
//                 {/* <h3 className="text-2xl font-semibold text-gray-800 mb-4">Eligibility Criteria</h3> */}
//                 <ul className="list-disc list-inside text-gray-700 text-base md:text-md leading-relaxed">
//                     <li className="mb-2">Application forms for admission to Higher Secondary School are accepted after the declaration of results of High School Leaving Certificate Examination from SEBA or equivalent examinations.</li>
//                     <li className="mb-2">APPLICATION FORM and PROSPECTUS can be downloaded or obtained from the School Office on payment of Rs. 200.00 (Non-refundable).</li>
//                     <li className="mb-2">Application form, complete in all respects and with all the stipulated documents, should reach the School Office on or before the date mentioned on the application form.</li>
//                     <li className="mb-2">Incomplete application forms will be rejected.</li>

//                 </ul>
//             </motion.div>
//         </div>

//         <motion.div
//             className="flex-1"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//         >
//             <img
//                 src="https://www.donboscohsdiphu.in/Images/innerbg/about.jpg"
//                 alt="School Image"
//                 className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
//             />
//         </motion.div>
//     </motion.div>
// </motion.section>

//  {/* Admission Process Timeline */}
//             <motion.section
//                 className="bg-white p-6 md:p-12 max-w-6xl mx-auto mt-10 rounded-lg shadow-2xl"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 <h3 className="text-3xl font-semibold text-gray-900 text-center mb-8">
//                     Admission Process
//                 </h3>
//                 <div className="flex flex-col md:flex-row justify-between gap-6">
//                     {[
//                         { step: "Step 1", title: "Application Submission", desc: "Fill out the online application form and submit required documents." },
//                         { step: "Step 2", title: "Entrance Test", desc: "Appear for an entrance test (if applicable) based on stream selection." },
//                         { step: "Step 3", title: "Interview", desc: "Qualified candidates will be called for a personal interview." },
//                         { step: "Step 4", title: "Final Admission", desc: "Selected students will be notified to complete fee payment and admission." },
//                     ].map((item, index) => (
//                         <motion.div
//                             key={index}
//                             className="flex-1 bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.3 * index }}
//                         >
//                             <h4 className="text-red-600 text-lg font-bold">{item.step}</h4>
//                             <h5 className="text-xl font-semibold text-gray-800 mt-2">{item.title}</h5>
//                             <p className="text-gray-700 mt-2">{item.desc}</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </motion.section>

// <div className="mt-auto">
//     <CopyrightFooter />
// </div>
//     </>
//   )
// }

// export default ApplicationProcessPage

import React from 'react';
import { motion } from 'framer-motion';
import CopyrightFooter from '../components/CopyrightFooter';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ApplicationProcessPage = () => {
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
                        Application Procedure
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-white mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Join our community of excellence and innovation.
                    </motion.p>
                    <motion.a
                        href="/apply"
                        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Apply Now
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
                <motion.div
                    className="flex flex-col md:flex-row gap-8 items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {/* Left Content */}
                    <div className="flex-1">
                        <motion.h2
                            className="text-red-600 text-3xl md:text-4xl font-bold pb-6"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Application Procedure
                        </motion.h2>

                        {/* Additional Features */}
                        <motion.div
                            className="mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <ul className="list-disc list-inside text-gray-700 text-base md:text-md leading-relaxed">
                                <li className="mb-2">Application forms for admission to Higher Secondary School are accepted after the declaration of results of High School Leaving Certificate Examination from SEBA or equivalent examinations.</li>
                                <li className="mb-2">APPLICATION FORM and PROSPECTUS can be downloaded or obtained from the School Office on payment of Rs. 200.00 (Non-refundable).</li>
                                <li className="mb-2">Application form, complete in all respects and with all the stipulated documents, should reach the School Office on or before the date mentioned on the application form.</li>
                                <li className="mb-2">Incomplete application forms will be rejected.</li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Right Image Section */}
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

            {/* Admission Process Timeline */}
            <motion.section
                className="bg-white p-6 md:p-12 max-w-6xl mx-auto mt-10 rounded-lg shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-3xl font-semibold text-gray-900 text-center mb-8">
                    Admission Process
                </h3>
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    {[
                        { step: "Step 1", title: "Application Submission", desc: "Fill out the online application form and submit required documents." },
                        { step: "Step 2", title: "Entrance Test", desc: "Appear for an entrance test (if applicable) based on stream selection." },
                        { step: "Step 3", title: "Interview", desc: "Qualified candidates will be called for a personal interview." },
                        { step: "Step 4", title: "Final Admission", desc: "Selected students will be notified to complete fee payment and admission." },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex-1 bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 * index }}
                        >
                            <h4 className="text-red-600 text-lg font-bold">{item.step}</h4>
                            <h5 className="text-xl font-semibold text-gray-800 mt-2">{item.title}</h5>
                            <p className="text-gray-700 mt-2">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
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
                                comment: "The admission process was smooth and transparent. Highly recommended!",
                            },
                            {
                                id: 2,
                                name: "Jane Smith",
                                comment: "The school provides excellent support for new students and parents.",
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
                                question: "What documents are required for admission?",
                                answer: "You need to submit the HSLC mark sheet, transfer certificate, and a passport-sized photograph.",
                            },
                            {
                                id: 2,
                                question: "Is there an entrance exam for admission?",
                                answer: "No, admission is based on the HSLC or equivalent examination marks.",
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
            <Footer/>
            <div className="mt-auto">
                <CopyrightFooter />
            </div>
        </>
    );
};

export default ApplicationProcessPage;