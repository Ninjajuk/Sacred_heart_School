// import React, { useState } from 'react'
// import Header from '../components/Header'
// import CopyrightFooter from '../components/CopyrightFooter'
// import { motion, AnimatePresence } from "framer-motion";


// const images = [
//     "https://www.donboscohsdiphu.in/Images/innerbg/Uniform-1.jpg",
//     "https://www.donboscohsdiphu.in/Images/innerbg/Uniform-2.jpg",
//     "https://www.donboscohsdiphu.in/Images/innerbg/Uniform-3.jpg",
//     // "https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc",
//     // "https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o",
//     // "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g",
//     // "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4",
//     // "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
// ];
// const UniformPage = () => {
//      const [selectedImage, setSelectedImage] = useState(null);
//     return (
//         <>
//             <main className='flex flex-col min-h-screen'>
//                 <Header />
//                 <section className='flex-1'>
//                     {/* Top Banner Image */}
//                     <motion.div
//                         className="w-full h-64 md:h-64 overflow-hidden rounded-lg shadow-lg mb-6"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <img
//                             src="/images/innerbg.jpg"
//                             alt="Top Banner"
//                             className="w-full h-full object-cover"
//                         />
//                     </motion.div>
//                     <motion.section
//                         className="bg-white max-w-6xl mx-auto p-6  "
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <motion.h2
//                             className=" text-red-600 text-3xl font-bold mb-2"
//                             initial={{ opacity: 0, x: -50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.8, delay: 0.2 }}
//                         >
//                             Uniform
//                         </motion.h2>
//                         <motion.p
//                             className="text-gray-700 text-base md:text-lg leading-relaxed "
//                             initial={{ opacity: 0, x: 50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.8, delay: 0.4 }}
//                         >
//                             Uniform will be provided by the school at on time of admission.
//                         </motion.p>
//                         <motion.p
//                             className="text-gray-700 text-base md:text-lg leading-relaxed "
//                             initial={{ opacity: 0, x: 50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.8, delay: 0.4 }}
//                         >
//                             Uniform includes: Pants, Shirts, Blazer, Belt, Tie, Black shoe and socks.
//                         </motion.p>
//                         <motion.p
//                             className="text-gray-700 text-base md:text-lg leading-relaxed "
//                             initial={{ opacity: 0, x: 50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.8, delay: 0.4 }}
//                         >
//                             Both Boys and girls will have the same uniform. The amount for the uniform will be made known during admission and has to be paid together with admission fee.
//                         </motion.p>
//                         <motion.div className='py-4'>
//                                              {/* Image Grid */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
//                             {images.map((image, index) => (
//                                 <motion.div
//                                     key={index}
//                                     className="relative overflow-hidden rounded-lg cursor-pointer"
//                                     whileHover={{ scale: 1.05 }}
//                                     transition={{ type: "spring", stiffness: 300 }}
//                                     onClick={() => setSelectedImage(image)}
//                                 >
//                                     <motion.img
//                                         src={image}
//                                         alt={`Gallery Image ${index + 1}`}
//                                         className="w-full h-full object-cover rounded-lg"
//                                         initial={{ opacity: 0 }}
//                                         animate={{ opacity: 1 }}
//                                         transition={{ duration: 0.5 }}
//                                     />
//                                 </motion.div>
//                             ))}
//                         </div>

//                         {/* Lightbox Modal */}
//                         <AnimatePresence>
//                             {selectedImage && (
//                                 <motion.div
//                                     className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
//                                     initial={{ opacity: 0 }}
//                                     animate={{ opacity: 1 }}
//                                     exit={{ opacity: 0 }}
//                                     onClick={() => setSelectedImage(null)}
//                                 >
//                                     <motion.div
//                                         className="relative max-w-full max-h-full"
//                                         initial={{ scale: 0.8 }}
//                                         animate={{ scale: 1 }}
//                                         exit={{ scale: 0.8 }}
//                                         transition={{ type: "spring", stiffness: 300 }}
//                                     >
//                                         <img
//                                             src={selectedImage}
//                                             alt="Selected Image"
//                                             className="max-w-full max-h-[90vh] rounded-lg"
//                                         />
//                                         <button
//                                             className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors"
//                                             onClick={() => setSelectedImage(null)}
//                                         >
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 className="h-6 w-6"
//                                                 fill="none"
//                                                 viewBox="0 0 24 24"
//                                                 stroke="currentColor"
//                                             >
//                                                 <path
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                     strokeWidth={2}
//                                                     d="M6 18L18 6M6 6l12 12"
//                                                 />
//                                             </svg>
//                                         </button>
//                                     </motion.div>
//                                 </motion.div>
//                             )}
//                         </AnimatePresence>
//                         </motion.div>
       

//                     </motion.section>
//                 </section>

//                 <div className='mt-auto'>
//                     <CopyrightFooter />
//                 </div>
//             </main>

//         </>
//     )
// }

// export default UniformPage


import React, { useState } from 'react';
import Header from '../components/Header';
import CopyrightFooter from '../components/CopyrightFooter';
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "https://www.donboscohsdiphu.in/Images/innerbg/Uniform-1.jpg",
    "https://www.donboscohsdiphu.in/Images/innerbg/Uniform-2.jpg",
    "https://www.donboscohsdiphu.in/Images/innerbg/Uniform-3.jpg",
];

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        comment: "The school uniform is very comfortable and of high quality. My child loves wearing it!",
    },
    {
        id: 2,
        name: "Jane Smith",
        comment: "The uniform policy is well thought out and ensures a sense of equality among students.",
    },
];

const faqs = [
    {
        id: 1,
        question: "What is included in the school uniform?",
        answer: "The uniform includes pants, shirts, blazer, belt, tie, black shoes, and socks.",
    },
    {
        id: 2,
        question: "Is the uniform the same for boys and girls?",
        answer: "Yes, both boys and girls have the same uniform.",
    },
    {
        id: 3,
        question: "When do we need to pay for the uniform?",
        answer: "The amount for the uniform has to be paid together with the admission fee.",
    },
];

const UniformPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <main className='flex flex-col min-h-screen'>
                <Header />
                <section className='flex-1'>
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
                                            School Uniform
                                        </motion.h1>
                                        <motion.p
                                            className="text-lg md:text-2xl text-center"
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.4 }}
                                        >
                                             High-quality uniforms for a confident and unified look.
                                        </motion.p>
                                    </div>
                                </motion.div>
     

                    {/* Uniform Details Section */}
                    <motion.section
                        className="bg-white max-w-6xl mx-auto p-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="text-red-600 text-3xl font-bold mb-2"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Uniform
                        </motion.h2>
                        <motion.p
                            className="text-gray-700 text-base md:text-lg leading-relaxed"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Uniform will be provided by the school at the time of admission.
                        </motion.p>
                        <motion.p
                            className="text-gray-700 text-base md:text-lg leading-relaxed"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Uniform includes: Pants, Shirts, Blazer, Belt, Tie, Black shoes, and socks.
                        </motion.p>
                        <motion.p
                            className="text-gray-700 text-base md:text-lg leading-relaxed"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Both boys and girls will have the same uniform. The amount for the uniform will be made known during admission and has to be paid together with the admission fee.
                        </motion.p>

                        {/* Image Grid */}
                        <motion.div className='py-4'>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {images.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative overflow-hidden rounded-lg cursor-pointer"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        onClick={() => setSelectedImage(image)}
                                    >
                                        <motion.img
                                            src={image}
                                            alt={`Gallery Image ${index + 1}`}
                                            className="w-full h-full object-cover rounded-lg"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Lightbox Modal */}
                        <AnimatePresence>
                            {selectedImage && (
                                <motion.div
                                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <motion.div
                                        className="relative max-w-full max-h-full"
                                        initial={{ scale: 0.8 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0.8 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <img
                                            src={selectedImage}
                                            alt="Selected Image"
                                            className="max-w-full max-h-[90vh] rounded-lg"
                                        />
                                        <button
                                            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors"
                                            onClick={() => setSelectedImage(null)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                        <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-2">
                                            {images.map((image, index) => (
                                                <img
                                                    key={index}
                                                    src={image}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    className="w-16 h-16 object-cover rounded-lg cursor-pointer"
                                                    onClick={() => setSelectedImage(image)}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
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
                                {testimonials.map((testimonial) => (
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
                                {faqs.map((faq) => (
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
                            <h2 className="text-3xl font-bold text-center mb-8">Watch Our Uniform in Action</h2>
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

                <div className='mt-auto'>
                    <CopyrightFooter />
                </div>
            </main>
        </>
    );
};

export default UniformPage;