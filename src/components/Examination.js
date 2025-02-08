import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClipboardList, FaChartLine, FaExclamationCircle } from "react-icons/fa";

const Examination = () => {
  const [selectedTab, setSelectedTab] = useState("schedule");

  const examinationData = {
    schedule: [
      { date: "2023-12-10", subject: "Mathematics", time: "10:00 AM - 12:00 PM" },
      { date: "2023-12-12", subject: "Science", time: "10:00 AM - 12:00 PM" },
      { date: "2023-12-15", subject: "English", time: "10:00 AM - 12:00 PM" },
      { date: "2023-12-18", subject: "Social Studies", time: "10:00 AM - 12:00 PM" },
    ],
    rules: [
      "Students must carry their admit cards to the examination hall.",
      "No electronic devices are allowed inside the examination hall.",
      "Students must arrive at least 30 minutes before the exam starts.",
      "Any form of malpractice will result in immediate disqualification.",
    ],
    results: [
      { student: "John Doe", grade: "A", percentage: "92%" },
      { student: "Jane Smith", grade: "A+", percentage: "96%" },
      { student: "Alice Johnson", grade: "B", percentage: "85%" },
      { student: "Bob Brown", grade: "A", percentage: "90%" },
    ],
    announcements: [
      "The final examination schedule has been released. Check the schedule tab for details.",
      "Results for the mid-term exams will be published on December 20, 2023.",
      "Students are advised to strictly follow the examination rules.",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.header
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-purple-800 mb-2">Examinations</h1>
        <p className="text-lg text-gray-600">
          Stay updated with the latest examination schedules, rules, and results.
        </p>
      </motion.header>

      {/* Tabs */}
      <motion.div
        className="flex justify-center space-x-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {["schedule", "rules", "results", "announcements"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              selectedTab === tab
                ? "bg-purple-600 text-white"
                : "bg-white text-purple-600 hover:bg-purple-50"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </motion.div>

      {/* Content */}
      <motion.div
        className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {selectedTab === "schedule" && (
          <div>
            <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
              <FaCalendarAlt className="text-purple-600" /> Examination Schedule
            </h2>
            <div className="space-y-4">
              {examinationData.schedule.map((exam, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <p className="text-lg font-semibold text-gray-800">{exam.subject}</p>
                  <p className="text-sm text-gray-600">{exam.date} | {exam.time}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === "rules" && (
          <div>
            <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
              <FaClipboardList className="text-purple-600" /> Examination Rules
            </h2>
            <ul className="space-y-3">
              {examinationData.rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <p className="text-gray-700">{rule}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {selectedTab === "results" && (
          <div>
            <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
              <FaChartLine className="text-purple-600" /> Examination Results
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="px-4 py-2 text-left text-purple-800">Student</th>
                    <th className="px-4 py-2 text-left text-purple-800">Grade</th>
                    <th className="px-4 py-2 text-left text-purple-800">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {examinationData.results.map((result, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{result.student}</td>
                      <td className="px-4 py-3 text-gray-700">{result.grade}</td>
                      <td className="px-4 py-3 text-gray-700">{result.percentage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedTab === "announcements" && (
          <div>
            <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
              <FaExclamationCircle className="text-purple-600" /> Announcements
            </h2>
            <div className="space-y-4">
              {examinationData.announcements.map((announcement, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <p className="text-gray-700">{announcement}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Examination;