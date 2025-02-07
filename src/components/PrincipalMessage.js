import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const messages = [
  {
    name: "Dr. John Doe",
    title: "Principal, Sacred Heart Secondary School",
    message:
      "At XYZ School, we are dedicated to fostering an environment where students can excel academically and personally. Our mission is to provide quality education, instill moral values, and nurture innovative minds.",
    img: "https://www.donboscohsdiphu.in/Images/principal.jpg",
  },
  {
    name: "Ms. Jane Smith",
    title: "Headmistress, XYZ School",
    message:
      "Our goal at XYZ School is to create a nurturing environment where students feel valued and empowered. Education is a lifelong journey, and we strive to make it as enriching and inspiring as possible.",
    img: "https://via.placeholder.com/150",
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
    <div className="bg-gray-100">
             <h2 className="text-3xl md:text-6xl font-extrabold text-center
                   text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 
                   drop-shadow-lg " aria-label="Skills Section">
          Message from the School 
        </h2>
            <div className="max-w-5xl mx-auto  p-6 ">
      <div className="hidden md:flex gap-4 ">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-md shadow-md flex flex-col items-center w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
          >
            <img
              src={msg.img}
              alt={msg.name}
              className="w-32 h-32 object-cover rounded-full border-4 border-gray-700"
            />
            <h2 className="text-2xl font-bold mt-4">{msg.name}</h2>
            <p className="text-sm ">{msg.title}</p>
            <p className="mt-4  text-lg leading-relaxed text-center">
              "{msg.message}"
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative overflow-hidden">
        <motion.div
          key={index}
          className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={messages[index].img}
            alt={messages[index].name}
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-700"
          />
          <h2 className="text-2xl font-bold mt-4">{messages[index].name}</h2>
          <p className="text-sm text-gray-400">{messages[index].title}</p>
          <p className="mt-4 text-gray-300 text-lg leading-relaxed text-center">
            "{messages[index].message}"
          </p>
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
