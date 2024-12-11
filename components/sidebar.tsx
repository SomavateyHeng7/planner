import React from 'react';
import { FaCalendarAlt, FaTasks, FaBook, FaChartBar, FaHome } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <h1 className="text-lg font-bold">Study Planner</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow">
        <ul className="space-y-4 mt-6">
          <li className="flex items-center px-6 py-3 hover:bg-gray-700">
            <FaHome className="mr-3" />
            <a href="/dashboard" className="flex-grow">Dashboard</a>
          </li>
          <li className="flex items-center px-6 py-3 hover:bg-gray-700">
            <FaCalendarAlt className="mr-3" />
            <a href="/calendar" className="flex-grow">Calendar</a>
          </li>
          <li className="flex items-center px-6 py-3 hover:bg-gray-700">
            <FaTasks className="mr-3" />
            <a href="/tasks" className="flex-grow">Tasks</a>
          </li>
          <li className="flex items-center px-6 py-3 hover:bg-gray-700">
            <FaBook className="mr-3" />
            <a href="/subjects" className="flex-grow">Subjects</a>
          </li>
          <li className="flex items-center px-6 py-3 hover:bg-gray-700">
            <FaChartBar className="mr-3" />
            <a href="/progress" className="flex-grow">Progress</a>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="h-16 flex items-center justify-center bg-gray-900">
        <p className="text-sm">&copy; 2024 Study Planner</p>
      </div>
    </div>
  );
};

export default Sidebar;
