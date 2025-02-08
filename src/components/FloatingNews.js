// import { motion, useAnimation } from "framer-motion";
// import { FaPaperclip } from "react-icons/fa";
// import { useEffect } from "react";

// const FloatingNewsEvents = () => {
//   const controlsNews = useAnimation();
//   const controlsEvents = useAnimation();

//   const newsData = [
//     { title: "NCC Boys", description: "On the way to Jorhat for the camp", link: "#" },
//     { title: "ANNUAL SPORTS MEET", description: "Sports teach you Life skills, Discipline and Leadership", link: "#" },
//     { title: "NCC GIRLS", description: "Camp at Jorhat under the leadership of Miss Gracy", link: "#" },
//   ];

//   const eventsData = [
//     { title: "Tech Conference 2025", description: "Join industry leaders for a discussion on AI and Innovation.", link: "#" },
//     { title: "Cultural Fest", description: "Experience music, dance, and drama performances.", link: "#" },
//     { title: "Hackathon", description: "Solve real-world problems in an overnight coding competition.", link: "#" },
//   ];

//   useEffect(() => {
//     const animation = {
//       y: ["0%", "-100%"],
//       transition: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" },
//     };
//     controlsNews.start(animation);
//     controlsEvents.start(animation);
//   }, [controlsNews, controlsEvents]);

//   return (
//     <div className="container mx-auto py-4 lg:px-[10rem] bg-gray-200">
//               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-900 via-purple-800 to-blue-900 bg-pattern-dots z-0"></div>
//       <h2 className="text-2xl font-extrabold text-purple-800 mb-4 text-center bg-gray-50 p-4 rounded-md">Latest Updates</h2>
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* News Section */}
//         <div className="flex-1 relative bg-white p-4 rounded-lg shadow-md border border-gray-300 overflow-hidden">
//           <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">News</h3>
//           <div 
//             className="relative h-72 overflow-hidden"
//             onMouseEnter={() => controlsNews.stop()}
//             onMouseLeave={() => controlsNews.start({ y: ["0%", "-100%"], transition: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" } })}
//           >
//             <motion.div className="absolute w-full flex flex-col space-y-2" animate={controlsNews} initial={{ y: "0%" }}>
//               {newsData.concat(newsData).map((news, index) => (
//                 <a key={index} href={news.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full bg-gray-100 p-4 rounded-lg shadow border border-gray-300 hover:bg-gray-200 transition duration-300">
//                   <div>
//                     <h4 className="text-md font-bold text-red-600">{news.title}</h4>
//                     <p className="text-gray-700 text-sm">{news.description}</p>
//                   </div>
//                   <div className="bg-yellow-400 p-3 rounded-full">
//                     <FaPaperclip className="text-white text-xl" />
//                   </div>
//                 </a>
//               ))}
//             </motion.div>
//           </div>
//         </div>

//         {/* Events Section */}
//         <div className="flex-1 relative bg-white p-4 rounded-lg shadow-md border border-gray-300 overflow-hidden ">
//           <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">Events</h3>
//           <div 
//             className="relative h-72 overflow-hidden"
//             onMouseEnter={() => controlsEvents.stop()}
//             onMouseLeave={() => controlsEvents.start({ y: ["0%", "-100%"], transition: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" } })}
//           >
//             <motion.div className="absolute w-full flex flex-col space-y-2" animate={controlsEvents} initial={{ y: "0%" }}>
//               {eventsData.concat(eventsData).map((event, index) => (
//                 <a key={index} href={event.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full bg-gray-100 p-4 rounded-lg shadow border border-gray-300 hover:bg-gray-200 transition duration-300">
//                   <div>
//                     <h4 className="text-md font-bold text-blue-600">{event.title}</h4>
//                     <p className="text-gray-700 text-sm ">{event.description}</p>
//                     <p className="ext-md pt-1">
//                         <span> 09 dec 2025</span>
//                         <span className="px-4">School Campus</span>
//                         <span>8:0</span>
//                     </p>
//                   </div>

//                 </a>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FloatingNewsEvents;


import { motion, useAnimation } from "framer-motion";
import { FaPaperclip, FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
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
        { title: "Tech Conference 2025", description: "Join industry leaders for a discussion on AI and Innovation.", date: "09 Dec 2025", time: "8:00 AM", location: "School Campus", link: "#" },
        { title: "Cultural Fest", description: "Experience music, dance, and drama performances.", date: "15 Dec 2025", time: "10:00 AM", location: "Auditorium", link: "#" },
        { title: "Hackathon", description: "Solve real-world problems in an overnight coding competition.", date: "20 Dec 2025", time: "6:00 PM", location: "Computer Lab", link: "#" },
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
        <div className="container mx-auto py-12 lg:px-[10rem] bg-gradient-to-r from-purple-50 to-blue-50">
            <h2 className="text-3xl font-extrabold text-purple-800 mb-8 text-center">Latest Updates</h2>
            <div className="flex flex-col md:flex-row gap-8">
                {/* News Section */}
                <div className="flex-1 relative bg-white p-6 rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-2">
                        <FaPaperclip className="text-red-600" /> News
                    </h3>
                    <div
                        className="relative h-80 overflow-hidden"
                        onMouseEnter={() => controlsNews.stop()}
                        onMouseLeave={() => controlsNews.start({ y: ["0%", "-100%"], transition: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" } })}
                    >
                        <motion.div className="absolute w-full flex flex-col space-y-4" animate={controlsNews} initial={{ y: "0%" }}>
                            {newsData.concat(newsData).map((news, index) => (
                                <a
                                    key={index}
                                    href={news.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between w-full bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-purple-300 transition-all duration-300"
                                >
                                    <div>
                                        <h4 className="text-lg font-bold text-red-600">{news.title}</h4>
                                        <p className="text-gray-700 text-sm">{news.description}</p>
                                    </div>
                                    <div className="bg-yellow-400 p-3 rounded-full">
                                        <FaPaperclip className="text-white text-xl" />
                                    </div>
                                </a>
                            ))}
                        </motion.div>
                    </div>
                    <div className="mt-4 text-center">
                        <a
                            href="/news"
                            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                        >
                            View All News
                        </a>
                    </div>
                </div>

                {/* Events Section */}
                <div className="flex-1 relative bg-white p-6 rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-2">
                        <FaCalendarAlt className="text-blue-600" /> Events
                    </h3>
                    <div
                        className="relative h-80 overflow-hidden"
                        onMouseEnter={() => controlsEvents.stop()}
                        onMouseLeave={() => controlsEvents.start({ y: ["0%", "-100%"], transition: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" } })}
                    >
                        <motion.div className="absolute w-full flex flex-col space-y-4" animate={controlsEvents} initial={{ y: "0%" }}>
                            {eventsData.concat(eventsData).map((event, index) => (
                                <a
                                    key={index}
                                    href={event.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col w-full bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all duration-300"
                                >
                                    <h4 className="text-lg font-bold text-blue-600">{event.title}</h4>
                                    <p className="text-gray-700 text-sm mb-2">{event.description}</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <FaCalendarAlt className="text-blue-500" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaClock className="text-blue-500" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaMapMarkerAlt className="text-blue-500" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </motion.div>
                    </div>
                    <div className="mt-4 text-center">
                        <a
                            href="/events"
                            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            View All Events
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FloatingNewsEvents;