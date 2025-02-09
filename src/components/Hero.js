// import { motion } from "framer-motion";
// import { SparklesIcon } from "@heroicons/react/24/solid";
// import { useEffect, useState } from "react";

// export default function HeroSection() {
//     const jobProfiles = [
//         "Sacred Heart School",
//         "Best School in Umrangso",
//         "Best Performer"
//       ];
    
//       const [headerText, setHeaderText] = useState("");
//       const [currentIndex, setCurrentIndex] = useState(0);
//       const [charIndex, setCharIndex] = useState(0);
//       const [isDeleting, setIsDeleting] = useState(false);
      
//       useEffect(() => {
//         const currentWord = jobProfiles[currentIndex];
//         const typingSpeed = isDeleting ? 50 : 100; // Faster when deleting
    
//         const timeout = setTimeout(() => {
//           if (!isDeleting && charIndex < currentWord.length) {
//             // Typing effect
//             setHeaderText((prev) => prev + currentWord[charIndex]);
//             setCharIndex(charIndex + 1);
//           } else if (isDeleting && charIndex > 0) {
//             // Deleting effect
//             setHeaderText((prev) => prev.slice(0, -1));
//             setCharIndex(charIndex - 1);
//           } else if (!isDeleting && charIndex === currentWord.length) {
//             // Pause before starting to delete
//             setTimeout(() => setIsDeleting(true), 1000);
//           } else if (isDeleting && charIndex === 0) {
//             // Move to the next word after deleting
//             setIsDeleting(false);
//             setCurrentIndex((prev) => (prev + 1) % jobProfiles.length);
//           }
//         }, typingSpeed);
    
//         return () => clearTimeout(timeout);
//       }, [charIndex, isDeleting, currentIndex]);

//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600  text-white overflow-hidden">
//       {/* Background Glow */}
//       <motion.div
//         className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       />

//       {/* Floating School Icon */}
//       <motion.div
//         className="absolute top-10 left-10 bg-white p-4 rounded-full shadow-lg"
//         initial={{ y: -20 }}
//         animate={{ y: 20 }}
//         transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
//       >
//         🎓
//       </motion.div>

//       {/* Title */}
//       <motion.h1
//         className="text-4xl md:text-6xl font-bold text-center"
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         Welcome to <span className="text-yellow-300">{headerText}</span>
//       </motion.h1>

//       {/* Subtitle */}
//       <motion.p
//         className="mt-4 text-lg text-center max-w-lg"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.8 }}
//       >
//         A place where knowledge meets creativity. Shape your future with quality education.
//       </motion.p>

//       {/* CTA Buttons */}
//       {/* <motion.div
//         className="mt-6 flex space-x-4"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.8, duration: 0.8 }}
//       >
//         <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 text-lg font-semibold rounded-lg">
//           Get Started
//         </button>
//         <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black px-6 py-3 text-lg font-semibold rounded-lg">
//           Learn More
//         </button>
//       </motion.div> */}

//       {/* Animated Sparkles */}
//       <motion.div
//         className="absolute bottom-10 right-10 text-yellow-300"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//       >
//         <SparklesIcon className="w-12 h-12" />
//       </motion.div>
//     </div>
//   );
// }


import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const jobProfiles = [
        "Sacred Heart School",
        "Your Second Home",
        "Best School in Umrangso",
        "the Heart of Learning",
        // "a legacy of Excellence"
    ];

    const [headerText, setHeaderText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = jobProfiles[currentIndex];
        const typingSpeed = isDeleting ? 50 : 100; // Faster when deleting

        const timeout = setTimeout(() => {
            if (!isDeleting && charIndex < currentWord.length) {
                // Typing effect
                setHeaderText((prev) => prev + currentWord[charIndex]);
                setCharIndex(charIndex + 1);
            } else if (isDeleting && charIndex > 0) {
                // Deleting effect
                setHeaderText((prev) => prev.slice(0, -1));
                setCharIndex(charIndex - 1);
            } else if (!isDeleting && charIndex === currentWord.length) {
                // Pause before starting to delete
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && charIndex === 0) {
                // Move to the next word after deleting
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % jobProfiles.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentIndex]);

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white overflow-hidden">
            {/* Dynamic Background Animation */}
            <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />

            {/* Floating Icons */}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-4xl pointer-events-none"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 20, opacity: 1 }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: Math.random() * 2 + 2,
                        delay: Math.random() * 2,
                    }}
                >
                    {["📚", "🎓", "🌟"][i % 3]}
                </motion.div>
            ))}

            {/* Title */}
            <motion.h1
                className="text-4xl md:text-6xl font-bold text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Welcome to{" "}
                <span className="text-yellow-500">
                    {headerText}
                    <span className="ml-1 inline-block w-1 h-8 bg-yellow-300 animate-blink">|</span>
                </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="mt-4 text-lg text-center max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                A place where knowledge meets creativity. Shape your future with quality education.
            </motion.p>

            {/* CTA Buttons */}
     {/* CTA Buttons */}
<div className="mt-6 flex space-x-4 z-50">
    <motion.a
        href="/admission-application-procedure"
        className="bg-yellow-500 text-black hover:bg-yellow-800 px-6 py-3 text-lg font-semibold rounded-lg cursor-pointer"
        whileTap={{ scale: 0.95 }}
        // onClick={() => console.log("Apply Now clicked")}
    >
        Apply Now
    </motion.a>
    <motion.a
        href="/introduction"
        className="bg-transparent border-2 border-white hover:bg-white hover:text-black px-6 py-3 text-lg font-semibold rounded-lg"
        whileTap={{ scale: 0.95 }}
      
    >
        Learn More
    </motion.a>
</div>


            {/* Animated Sparkles */}
            <motion.div
                className="absolute bottom-10 right-10 text-yellow-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <SparklesIcon className="w-12 h-12" />
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <div className="animate-bounce w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                    <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </motion.div>
        </div>
    );
}