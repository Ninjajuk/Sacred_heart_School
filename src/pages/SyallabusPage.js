import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaFlask, FaChartLine, FaGraduationCap } from "react-icons/fa";
import Header from "../components/Header";
import CopyrightFooter from "../components/CopyrightFooter";
import Footer from "../components/Footer";

const SyllabusPage = () => {
    const syllabusData = [
        {
            id: "arts",
            title: "Arts",
            description: "Explore the syllabus for Arts stream, including subjects like History, Geography, and Political Science.",
            icon: <FaBook className="text-4xl text-purple-600" />,
            link: "#",
        },
        {
            id: "science",
            title: "Science",
            description: "Discover the syllabus for Science stream, covering Physics, Chemistry, Biology, and Mathematics.",
            icon: <FaFlask className="text-4xl text-blue-600" />,
            link: "#",
        },
        {
            id: "commerce",
            title: "Commerce",
            description: "Get the syllabus for Commerce stream, including Accountancy, Business Studies, and Economics.",
            icon: <FaChartLine className="text-4xl text-green-600" />,
            link: "#",
        },
        {
            id: "matric",
            title: "Matric Exam",
            description: "Access the syllabus for Matriculation exams, covering all core subjects for Class 10.",
            icon: <FaGraduationCap className="text-4xl text-red-600" />,
            link: "#",
        },
    ];

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.header
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl font-bold text-purple-800 mb-2">Syllabus</h1>
                    <p className="text-lg text-gray-600">
                        Download the syllabus for Arts, Science, Commerce, and Matriculation exams.
                    </p>
                </motion.header>

                {/* Syllabus Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {syllabusData.map((item) => (
                        <motion.div
                            key={item.id}
                            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h2>
                            <p className="text-gray-600 mb-4">{item.description}</p>
                            <a
                                href={item.link}
                                className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                            >
                                Download Syllabus
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <Footer/>
            <CopyrightFooter />
        </>

    );
};

export default SyllabusPage;