import React from 'react'
import Header from '../components/Header'
import CopyrightFooter from '../components/CopyrightFooter'
import { motion } from "framer-motion";

const facultyMembers = [
    {
        name: "Dr. Rajesh Kumar",
        designation: "Principal",
        subject: "Administration",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Ms. Anjali Sharma",
        designation: "Vice Principal",
        subject: "English",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Samsuddin Ansari",
        designation: "Lecturer",
        subject: "Computer",
        image: "https://avatars.githubusercontent.com/u/108830220?v=4",
    },
    {
        name: "Mr. Ravi Verma",
        designation: "Senior Lecturer",
        subject: "Mathematics",
        image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Ms. Pooja Singh",
        designation: "Lecturer",
        subject: "Physics",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Mr. Aman Gupta",
        designation: "Lecturer",
        subject: "Commerce",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },

];
const FacultyPage = () => {
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
                        Faculty Members
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-2xl text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Our best faculty in the town
                    </motion.p>
                </div>
            </motion.div>
            <motion.section
                className="bg-white max-w-6xl mx-auto p-6 md:p-12 "
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
                    Our Faculty Members
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {facultyMembers.map((faculty, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 text-center hover:scale-105 transition-transform duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 * index }}
                        >
                            <img
                                src={faculty.image}
                                alt={faculty.name}
                                className="w-24 h-24 mx-auto rounded-full border-4 border-gray-300 shadow-md"
                            />
                            <h3 className="text-lg font-semibold text-gray-900 mt-4">{faculty.name}</h3>
                            <p className="text-gray-600">{faculty.designation}</p>
                            <p className="text-sm text-gray-500">{faculty.subject}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
            <CopyrightFooter />
        </>
    )
}

export default FacultyPage