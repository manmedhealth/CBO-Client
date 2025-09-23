// import Listing from './Listingcom'

import React, { useState } from 'react';
import {
  FiHome,
  FiTrendingUp,
  FiUsers,
  FiBell,
  FiSearch,
  FiMenu,
  FiX,
  FiDollarSign,
  FiHeart,
  FiCalendar,
  FiBox
} from 'react-icons/fi';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = ({ settoken }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [darkMode, setDarkMode] = useState(false);

  // Mock data for the dashboard
  const stats = [
    { label: 'Total Revenue', value: '$45,231.89', change: '+20.1%', icon: FiDollarSign, color: 'bg-blue-100 text-blue-600' },
    { label: 'Patients Today', value: '42', change: '+12.5%', icon: FiUsers, color: 'bg-green-100 text-green-600' },
    { label: 'Prescriptions', value: '128', change: '+8.2%', icon: FiHeart, color: 'bg-red-100 text-red-600' },
    { label: 'Inventory Items', value: '2,348', change: '-3.1%', icon: FiBox, color: 'bg-purple-100 text-purple-600' },
  ];

  const recentActivity = [
    { name: 'paracitamol', category: 'pain relief', amount: 'Cardiology Consultation', stock: 15 },
    { name: 'dcold total', category: 'pain relief', amount: 'Prescription Refill', stock: 30 },
    { name: 'qunine', category: 'use for maleria', amount: 'Lab Results Review', stock: 40 },
    { name: 'comoflame', category: 'pain relief', amount: 'Patient Follow-up', stock: 30 },
    { name: 'benzoyl', category: 'to remove acne', amount: 'Vital Signs Check', stock: 20 },
  ];

  const navigation = [
    { name: 'Overview', href: '/', icon: FiHome, current: true },
    // { name: 'Medicins', href: 'listing', icon: FiBox, current: false },
    { name: 'Gen Bill', href: 'billing', icon: FiCalendar, current: false },
    { name: 'All list', href: 'alllist', icon: FiUsers, current: false },
    { name: 'Analytics', href: 'analays', icon: FiTrendingUp, current: false },
    { name: 'History', href: 'history', icon: FiTrendingUp, current: false },
  ];

  const upcomingAppointments = [
    { name: 'dcold total', time: '9:00 AM', category: 'pain relief', quantity: 1000 },
    { name: 'paracitamol', time: '10:30 AM', category: 'pain relief', quantity: 1500 },
    { name: 'qunine', time: '1:15 PM', category: 'maleria tablet', quantity: 3000 },
  ];

  return (
    <div className={`min-h-screen  ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} flex`}>
      {/* Sidebar */}
      <div className={` my-6 rounded-tr-xl mr-4 fixed inset-y-0 left-0 z-50 w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
          <div className="text-xl font-bold text-blue-600">MediDashboard</div>
          <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-md text-gray-400 hover:text-gray-500">
            <FiX className="w-6 h-6" />
          </button>
        </div>

        <nav className="">
          <div className="px-4 space-y-2 ">

            <div className='flex flex-col py-2 pt-5 items-center'>
              <div className=' h-35 w-40 rounded-lg overflow-hidden mb-3 shadow-xl'>
                <img
                  className=""
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                />
              </div>
              <span>name</span>
            </div>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${activeTab === item.name.toLowerCase()
                    ? `${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-700'}`
                    : `${darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`
                  }`}
                onClick={() => setActiveTab(item.name.toLowerCase())}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>

            ))}


            <button className={`flex cursor-pointer w-full px-4 py-1 rounded-md ${darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`} onClick={() => settoken("")}>
              <svg xmlns="http://www.w3.org/2000/svg" className=" w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>

          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className='w-full'>

        <div className=" pt-10">
          <div className={`sticky top-0 z-40 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl rounded-full`}>
            <div className="flex items-center justify-between p-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 lg:hidden"
              >
                <FiMenu className="w-6 h-6" />
              </button>

              <div className="flex-1 max-w-2xl mx-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FiSearch className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search patients, medications, reports..."
                    className={`w-full pl-10 pr-4 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'} rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
              </div>

              <div className=" flex items-center mr-5 space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
                >
                  {darkMode ? '☀️' : '🌙'}
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-500 relative">
                  <FiBell className="w-6 h-6" />
                  <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
              </div>
            </div>
          </div>

          <Outlet />

        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;




