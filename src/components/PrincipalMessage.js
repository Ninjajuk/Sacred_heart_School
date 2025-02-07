import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const messages = [
    {
        name: "Dr. John Doe",
        title: "Principal, Sacred Heart Secondary School",
        message:
            "The School aims to create a supportive and inclusive environment where every student is encouraged to explore their potential and achieve their personal best in all aspects of their life. Students will be confronted and engaged through authentic learning opportunities that stimulated them to develop creatively, confidence and resourcefulness to become independent and ethically life-long learners.",
        img: "https://www.donboscohsdiphu.in/Images/principal.jpg",
    },
    {
        name: "Ms. Jane Smith",
        title: "Headmistress, Sacred Heart Secondary School",
        message:
            "Our goal at XYZ School is to create a nurturing environment where students feel valued and empowered. Education is a lifelong journey, and we strive to make it as enriching and inspiring as possible.",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
];

const PrincipalMessage = () => {
    const [index, setIndex] = useState(0);

    const nextMessage = () => {
        setIndex((prev) => (prev + 1) % messages.length);
    };

    const prevMessage = () => {
        setIndex((prev) => (prev - 1 + messages.length) % messages.length);
    };

    return (
        <div className="bg-gray-200 min-h-[500px] flex flex-col justify-center">
            <h2 className="text-xl md:text-3xl font-extrabold text-center
                   text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 
                    " aria-label="Skills Section">
                Message from the School
            </h2>
            <div className="container mx-auto py-4 lg:px-[10rem]">
                <div className="hidden md:flex gap-4">
                    {messages.map((msg, i) => (
                        <motion.div
                            key={i}
                            className="bg-white p-6 rounded-md shadow-md flex flex-col items-center w-1/2 min-h-[400px] border-1 border-gray-300"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.3 }}
                        >
                            <img
                                src={msg.img}
                                alt={msg.name}
                                className="w-32 h-32 object-cover rounded-full border-2 border-gray-700"
                            />
                            <h2 className="text-2xl font-bold mt-4 text-purple-800">{msg.name}</h2>
                            <p className="text-md text-blue-800">{msg.title}</p>
                            <p className="mt-4 text-sm text-gray-600 leading-relaxed text-center">
                                "{msg.message}"
                            </p>
                            <motion.button 
                                whileHover={{ scale: 1.1 }} 
                                whileTap={{ scale: 0.9, rotate: -2 }}
                                className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                            >
                                Read More
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View */}
                <div className="md:hidden relative overflow-hidden min-h-[400px]">
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src={messages[index].img}
                            alt={messages[index].name}
                            className="w-32 h-32 object-cover rounded-full border-1"
                        />
                        <h2 className="text-2xl text-purple-800 font-bold mt-4">{messages[index].name}</h2>
                        <p className="text-sm font-semibold text-blue-800">{messages[index].title}</p>
                        <p className="mt-4 text-md leading-relaxed text-center">
                            "{messages[index].message}"
                        </p>
                        <motion.button 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9, rotate: -2 }}
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        >
                            Read More
                        </motion.button>
                    </motion.div>

                    <button
                        onClick={prevMessage}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full"
                    >
                        <FiChevronLeft size={24} className="text-white" />
                    </button>
                    <button
                        onClick={nextMessage}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full"
                    >
                        <FiChevronRight size={24} className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrincipalMessage;
