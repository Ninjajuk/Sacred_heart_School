import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const jobProfiles = [
        "Sacred Heart School",
        "Best School in Umrangso",
        "Best Performer"
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
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600  text-white overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Floating School Icon */}
      <motion.div
        className="absolute top-10 left-10 bg-white p-4 rounded-full shadow-lg"
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
      >
        🎓
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to <span className="text-yellow-300">{headerText}</span>
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
      {/* <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 text-lg font-semibold rounded-lg">
          Get Started
        </button>
        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black px-6 py-3 text-lg font-semibold rounded-lg">
          Learn More
        </button>
      </motion.div> */}

      {/* Animated Sparkles */}
      <motion.div
        className="absolute bottom-10 right-10 text-yellow-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <SparklesIcon className="w-12 h-12" />
      </motion.div>
    </div>
  );
}
