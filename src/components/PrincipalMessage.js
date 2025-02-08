// import { motion } from "framer-motion";
// import { useState } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { HiRefresh } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";

// const messages = [
//     {
//         name: "Dr. John Doe",
//         title: "Principal, Sacred Heart Secondary School",
//         message:
//             "The School aims to create a supportive and inclusive environment where every student is encouraged to explore their potential and achieve their personal best in all aspects of their life.",
//         img: "https://www.donboscohsdiphu.in/Images/principal.jpg",
//         href:'/principal-message'
//     },
//     {
//         name: "Ms. Jane Smith",
//         title: "Headmistress, Sacred Heart Secondary School",
//         message:
//             "Our goal at XYZ School is to create a nurturing environment where students feel valued and empowered. Education is a lifelong journey, and we strive to make it as enriching and inspiring as possible.",
//         img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//         href:'/headmistress-message'
//     },
// ];

// const PrincipalMessage = () => {
//     const [index, setIndex] = useState(0);

//     const nextMessage = () => {
//         setIndex((prev) => (prev + 1) % messages.length);
//     };

//     const prevMessage = () => {
//         setIndex((prev) => (prev - 1 + messages.length) % messages.length);
//     };
//     const navigate = useNavigate()

//     const handleNavigate = (msg) => {
//         navigate(msg.href); 
//     };
    

//     return (
//         <div className="bg-gray-200 min-h-[500px] flex flex-col justify-center">
//                   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-900 via-purple-800 to-blue-900 bg-pattern-dots z-0"></div>
//             <h2 className="text-xl md:text-3xl font-extrabold text-center
//                    text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 
//                     " aria-label="Skills Section">
//                 Message from the School
//             </h2>
//             <div className="container mx-auto py-4 lg:px-[10rem]">
//                 <div className="hidden md:flex gap-4">
//                     {messages.map((msg, i) => (
//                         <motion.div
//                             key={i}
//                             className="bg-white p-6 rounded-md shadow-md flex flex-col items-center w-1/2 min-h-[400px] border-1 border-gray-300"
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.8, delay: i * 0.3 }}
//                         >
//                             <img
//                                 src={msg.img}
//                                 alt={msg.name}
//                                 className="w-32 h-32 object-cover rounded-full border-2 border-gray-700"
//                             />
//                             <h2 className="text-2xl font-bold mt-4 text-purple-800">{msg.name}</h2>
//                             <p className="text-md text-blue-800">{msg.title}</p>
//                             <p className="mt-4 text-sm text-gray-600 leading-relaxed text-center">
//                                 "{msg.message}"
//                             </p>
//                             <motion.button 
//                                 whileHover={{ scale: 1.1 }} 
//                                 whileTap={{ scale: 0.9, rotate: -2 }}
//                                 onClick={() => handleNavigate(msg)}
//                                 className="mt-auto px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-blue-700 transition"
//                             >
//                                 Read More
//                             </motion.button>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Mobile View */}
//                 <div className="md:hidden relative overflow-hidden min-h-[400px]">
//                     <motion.div
//                         key={index}
//                         className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
//                         initial={{ opacity: 0, x: 100 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: -100 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <img
//                             src={messages[index].img}
//                             alt={messages[index].name}
//                             className="w-32 h-32 object-cover rounded-full border-1"
//                         />
//                         <h2 className="text-2xl text-purple-800 font-bold mt-4">{messages[index].name}</h2>
//                         <p className="text-sm font-semibold text-blue-800">{messages[index].title}</p>
//                         <p className="mt-4 text-md leading-relaxed text-center">
//                             "{messages[index].message}"
//                         </p>
//                         <motion.button 
//                             whileHover={{ scale: 1.1 }} 
//                             whileTap={{ scale: 0.9, rotate: -2 }}
//                             className="mt-4 px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition"
//                         >
//                             Read More
//                         </motion.button>
//                     </motion.div>

//                     <button
//                         onClick={prevMessage}
//                         className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full"
//                     >
//                         <FiChevronLeft size={24} className="text-white" />
//                     </button>
//                     <button
//                         onClick={nextMessage}
//                         className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full"
//                     >
//                         <FiChevronRight size={24} className="text-white" />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PrincipalMessage;


import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const messages = [
    {
        name: "Dr. John Doe",
        title: "Principal, Sacred Heart Secondary School",
        message:
            "The School aims to create a supportive and inclusive environment where every student is encouraged to explore their potential and achieve their personal best in all aspects of their life.",
        img: "https://www.donboscohsdiphu.in/Images/principal.jpg",
        href: "/principal-message",
    },
    {
        name: "Ms. Jane Smith",
        title: "Headmistress, Sacred Heart Secondary School",
        message:
            "Our goal at XYZ School is to create a nurturing environment where students feel valued and empowered. Education is a lifelong journey, and we strive to make it as enriching and inspiring as possible.",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        href: "/headmistress-message",
    },
];

const PrincipalMessage = () => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    const nextMessage = () => {
        setIndex((prev) => (prev + 1) % messages.length);
    };

    const prevMessage = () => {
        setIndex((prev) => (prev - 1 + messages.length) % messages.length);
    };

    const handleNavigate = (msg) => {
        navigate(msg.href);
    };

    return (
        <div className="bg-gray-100 min-h-[500px] flex flex-col justify-center py-12">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 mb-8">
                    Message from the School
                </h2>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Div - Carousel */}
                    <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-xl bg-white">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                className="absolute inset-0 flex flex-col items-center justify-center p-8"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src={messages[index].img}
                                    alt={messages[index].name}
                                    className="w-40 h-40 object-cover rounded-full border-4 border-purple-200 shadow-lg"
                                />
                                <h2 className="text-2xl font-bold text-purple-800 mt-6">
                                    {messages[index].name}
                                </h2>
                                <p className="text-md text-blue-800 font-semibold">
                                    {messages[index].title}
                                </p>
                                <p className="mt-4 text-gray-600 text-center max-w-md">
                                    "{messages[index].message}"
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleNavigate(messages[index])}
                                    className="mt-6 px-6 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition-colors"
                                >
                                    Read More
                                </motion.button>
                            </motion.div>
                        </AnimatePresence>

                        <button
                            onClick={prevMessage}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-purple-800 p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
                        >
                            <FiChevronLeft size={24} className="text-white" />
                        </button>
                        <button
                            onClick={nextMessage}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-purple-800 p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
                        >
                            <FiChevronRight size={24} className="text-white" />
                        </button>
                    </div>

                    {/* Right Div - School Mission and Values */}
                    <div className="h-[500px] w-full rounded-2xl shadow-xl bg-gradient-to-r from-purple-800 to-blue-800 p-8 flex flex-col justify-center items-center text-white">
                        <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
                        <p className="text-lg text-center mb-6">
                            At Sacred Heart Secondary School, we are committed to fostering a culture of excellence, integrity, and compassion.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-lg">
                            <li>Empowering students to achieve their full potential.</li>
                            <li>Promoting a culture of respect and inclusivity.</li>
                            <li>Encouraging innovation and critical thinking.</li>
                            <li>Building strong character and leadership skills.</li>
                        </ul>
                        <button
                            onClick={() => navigate("/about-us")}
                            className="mt-8 px-6 py-2 bg-white text-purple-800 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            Discover More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrincipalMessage;