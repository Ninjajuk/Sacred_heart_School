import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 to-indigo-900 text-white lg:px-[10rem] py-12 md:px-16 lg:flex lg:items-center lg:justify-between overflow-hidden">
      {/* Background Diagonal Shape */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-900 via-purple-800 to-blue-900 bg-pattern-dots z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Welcome to Sacred Heart Higher Secondary School
        </motion.h1>
        <motion.p 
          className="mt-4 text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          Sacred Heart Higher Secondary School, Umrangso, affiliated to the state Board of Education, Assam, is situated at Rongkhelan, Umrangso, in Dima Hasao Autonomous District. The school was established in 1969 by the unforgettable and saintly, missionary educator, Rev. Fr. John Mariae.
        </motion.p>
        <motion.button
          className="mt-6 bg-yellow-400 text-red-900 px-6 py-3 rounded-md shadow-lg hover:bg-yellow-500 transition duration-300"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        >
          READ MORE
        </motion.button>
      </div>

      {/* Image */}
      <motion.div 
        className="relative mt-8 lg:mt-0 lg:w-1/2"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
      >
        <img 
          src="https://www.donboscohsdiphu.in/images/1.png" 
          alt="Students" 
          className="w-full max-w-md mx-auto"
        />
      </motion.div>

      {/* Tailwind Custom Styles */}
      <style>{`
        .clip-path-diagonal {
          clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
};

export default WelcomeSection;
