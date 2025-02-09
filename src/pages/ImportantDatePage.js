import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaSchool, FaBook, FaBell } from "react-icons/fa";
import CopyrightFooter from "../components/CopyrightFooter";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ImportantDatesPage = () => {
  const [view, setView] = useState("list"); 

  const importantDates = [
    {
      id: 1,
      date: "2023-12-10",
      event: "Mid-Term Examinations Begin",
      type: "exam",
    },
    {
      id: 2,
      date: "2023-12-15",
      event: "Last Day to Submit Projects",
      type: "deadline",
    },
    {
      id: 3,
      date: "2023-12-20",
      event: "Winter Break Starts",
      type: "holiday",
    },
    {
      id: 4,
      date: "2024-01-05",
      event: "School Reopens",
      type: "event",
    },
    {
      id: 5,
      date: "2024-01-15",
      event: "Annual Sports Day",
      type: "event",
    },
    {
      id: 6,
      date: "2024-01-25",
      event: "Republic Day Celebration",
      type: "holiday",
    },
  ];

  const getEventIcon = (type) => {
    switch (type) {
      case "exam":
        return <FaBook className="text-red-600" />;
      case "deadline":
        return <FaBell className="text-blue-600" />;
      case "holiday":
        return <FaSchool className="text-green-600" />;
      default:
        return <FaCalendarAlt className="text-purple-600" />;
    }
  };

  return (
    <>
        <Header/>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.header
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-purple-800 mb-2">Important Dates</h1>
        <p className="text-lg text-gray-600">
          Stay updated with key dates for exams, events, holidays, and more.
        </p>
      </motion.header>

      {/* Toggle View Buttons */}
      <motion.div
        className="flex justify-center space-x-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <button
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
            view === "list"
              ? "bg-purple-600 text-white"
              : "bg-white text-purple-600 hover:bg-purple-50"
          }`}
          onClick={() => setView("list")}
        >
          List View
        </button>
        <button
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
            view === "calendar"
              ? "bg-purple-600 text-white"
              : "bg-white text-purple-600 hover:bg-purple-50"
          }`}
          onClick={() => setView("calendar")}
        >
          Calendar View
        </button>
      </motion.div>

      {/* Content */}
      <motion.div
        className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {view === "list" ? (
          // List View
          <div className="space-y-4">
            {importantDates.map((date) => (
              <div
                key={date.id}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">{getEventIcon(date.type)}</div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">{date.event}</p>
                  <p className="text-sm text-gray-600">{date.date}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Calendar View (Placeholder)
          <div className="text-center">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Calendar View</h2>
            <p className="text-gray-600">
              A calendar view will be implemented here to display important dates.
            </p>
          </div>
        )}
      </motion.div>
    </div>
    <Footer/>
    <CopyrightFooter/>
    </>

  );
};

export default ImportantDatesPage;