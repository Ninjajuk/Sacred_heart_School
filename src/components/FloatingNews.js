import { motion, useAnimation } from "framer-motion";
import { FaPaperclip } from "react-icons/fa";
import { useEffect } from "react";

const FloatingNewsEvents = () => {
  const controlsNews = useAnimation();
  const controlsEvents = useAnimation();

  const newsData = [
    { title: "NCC Boys", description: "On the way to Jorhat for the camp", link: "#" },
    { title: "ANNUAL SPORTS MEET", description: "Sports teach you Life skills, Discipline and Leadership", link: "#" },
    { title: "NCC GIRLS", description: "Camp at Jorhat under the leadership of Miss Gracy", link: "#" },
  ];

  const eventsData = [
    { title: "Tech Conference 2025", description: "Join industry leaders for a discussion on AI and Innovation.", link: "#" },
    { title: "Cultural Fest", description: "Experience music, dance, and drama performances.", link: "#" },
    { title: "Hackathon", description: "Solve real-world problems in an overnight coding competition.", link: "#" },
  ];

  useEffect(() => {
    const animation = {
      y: ["0%", "-100%"],
      transition: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" },
    };
    controlsNews.start(animation);
    controlsEvents.start(animation);
  }, [controlsNews, controlsEvents]);

  return (
    <div className="container mx-auto py-4 lg:px-[10rem] bg-gray-200">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-900 via-purple-800 to-blue-900 bg-pattern-dots z-0"></div>
      <h2 className="text-2xl font-extrabold text-purple-800 mb-4 text-center bg-gray-50 p-4 rounded-md">Latest Updates</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {/* News Section */}
        <div className="flex-1 relative bg-white p-4 rounded-lg shadow-md border border-gray-300 overflow-hidden">
          <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">News</h3>
          <div 
            className="relative h-72 overflow-hidden"
            onMouseEnter={() => controlsNews.stop()}
            onMouseLeave={() => controlsNews.start({ y: ["0%", "-100%"], transition: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" } })}
          >
            <motion.div className="absolute w-full flex flex-col space-y-2" animate={controlsNews} initial={{ y: "0%" }}>
              {newsData.concat(newsData).map((news, index) => (
                <a key={index} href={news.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full bg-gray-100 p-4 rounded-lg shadow border border-gray-300 hover:bg-gray-200 transition duration-300">
                  <div>
                    <h4 className="text-md font-bold text-red-600">{news.title}</h4>
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

        {/* Events Section */}
        <div className="flex-1 relative bg-white p-4 rounded-lg shadow-md border border-gray-300 overflow-hidden ">
          <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">Events</h3>
          <div 
            className="relative h-72 overflow-hidden"
            onMouseEnter={() => controlsEvents.stop()}
            onMouseLeave={() => controlsEvents.start({ y: ["0%", "-100%"], transition: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" } })}
          >
            <motion.div className="absolute w-full flex flex-col space-y-2" animate={controlsEvents} initial={{ y: "0%" }}>
              {eventsData.concat(eventsData).map((event, index) => (
                <a key={index} href={event.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full bg-gray-100 p-4 rounded-lg shadow border border-gray-300 hover:bg-gray-200 transition duration-300">
                  <div>
                    <h4 className="text-md font-bold text-blue-600">{event.title}</h4>
                    <p className="text-gray-700 text-sm ">{event.description}</p>
                    <p className="ext-md pt-1">
                        <span> 09 dec 2025</span>
                        <span className="px-4">School Campus</span>
                        <span>8:0</span>
                    </p>
                  </div>

                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingNewsEvents;
