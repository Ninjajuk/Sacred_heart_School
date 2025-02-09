import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const toppers = [
    {
        name: "Samsuddin Ansari",
        image: "https://avatars.githubusercontent.com/u/108830220?v=4",
        description: "Consistently ranked first in all competitive exams.",
    },
    {
        name: "Dr. Rajesh Kumar",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        description: "Topped the class with a perfect score in all subjects.",
    },
    {
        name: "Ms. Anjali Sharma",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        description: "Achieved the highest marks in the history of the department.",
    },
    {
        name: "Samsuddin Ansari",
        image: "https://avatars.githubusercontent.com/u/108830220?v=4",
        description: "Consistently ranked first in all competitive exams.",
    },
];

const Toppers = () => {
    const [index, setIndex] = useState(0);

    const nextMessage = () => {
        setIndex((prev) => (prev + 1) % toppers.length);
    };

    const prevMessage = () => {
        setIndex((prev) => (prev - 1 + toppers.length) % toppers.length);
    };

    return (
        <div className='container mx-auto py-8 lg:px-[10rem] relative bg-gray-200'>
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-purple-800 mb-2">Toppers</h1>
                <p className="text-lg text-gray-600">
                    Top Achievers
                </p>
            </header>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Div - Carousel */}
                <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl bg-white">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={index}
                            className="absolute inset-0 flex flex-col items-center justify-center p-6"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={toppers[index].image}
                                alt={toppers[index].name}
                                className="w-48 h-48 rounded-full border-4 border-purple-200 shadow-lg"
                            />
                            <h3 className="text-2xl font-semibold text-gray-900 mt-6">{toppers[index].name}</h3>
                            <p className="text-lg text-gray-600 mt-4 text-center max-w-md">
                                {toppers[index].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <button
                        onClick={prevMessage}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-purple-800 p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
                    >
                        <FiChevronLeft size={28} className="text-white" />
                    </button>
                    <button
                        onClick={nextMessage}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-purple-800 p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
                    >
                        <FiChevronRight size={28} className="text-white" />
                    </button>
                </div>

                {/* Right Div - Additional Information */}
                <div className="h-[400px] w-full rounded-2xl shadow-xl bg-white p-8 flex flex-col justify-center items-center">
                    <h2 className="text-xl lg:text-3xl font-bold text-purple-800 mb-4">Why Choose Us?</h2>
                    <p className="text-md lg:text-lg text-gray-600 text-center mb-6">
                        Our toppers have consistently achieved excellence in their fields. Join us to be part of a legacy of success.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Personalized mentorship from top educators.</li>
                        <li>Comprehensive study materials and resources.</li>
                        <li>Regular mock tests and performance analysis.</li>
                        <li>Supportive community of achievers.</li>
                    </ul>
                    <button className="mt-6 bg-purple-800 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Toppers;