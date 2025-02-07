import { motion, useAnimation } from "framer-motion";
import { FaPaperclip } from "react-icons/fa";
import { useEffect } from "react";

const FloatingNewsList = () => {
  const controls = useAnimation();

  const newsData = [
    { title: "NCC Boys", description: "On the way to Jorhat for the camp", link: "#" },
    { title: "ANNUAL SPORTS MEET", description: "Sports teach you Life skills, Discipline and Leadership", link: "#" },
    { title: "NCC GIRLS", description: "Camp at Jorhat under the leadership of Miss Gracy", link: "#" },
  ];

  useEffect(() => {
    controls.start({
      y: ["0%", "-100%"],
      transition: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" },
    });
  }, [controls]);

  return (
    <div className="relative w-full max-w-lg mx-auto bg-gray-50 p-6 rounded-lg shadow-xl border border-gray-200 overflow-hidden">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center sticky  bg-gray-50 p-4 shadow-md z-20">Latest News</h2>
      <div 
        className="relative h-72 overflow-hidden"
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() => controls.start({ y: ["0%", "-100%"], transition: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" } })}
      >
        <motion.div 
          className="absolute w-full flex flex-col items-center space-y-4"
          animate={controls}
          initial={{ y: "0%" }}
        >
          {newsData.concat(newsData).map((news, index) => (
            <a
              key={index}
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-3/4 bg-white p-4 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100 transition duration-300"
            >
              <div>
                <h3 className="text-lg font-bold text-red-600">{news.title}</h3>
                <p className="text-gray-700 text-sm">{news.description}</p>
              </div>
              <div className="bg-yellow-400 p-3 rounded-full">
                <FaPaperclip className="text-white text-xl" />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FloatingNewsList;
