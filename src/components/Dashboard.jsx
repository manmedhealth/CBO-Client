// import DailySalesChart from './Charts/DailySalesChart';
// import MonthlySalesChart from './Charts/MonthlySalesChart';
// import YearlySalesChart from './Charts/YearlySalesChart';
// import MedicineCategoryChart from './Charts/MedicineCategoryChart';

// export default function Dashboard() {
//   return (
//     <div className="mt-6">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Medicine Sales Dashboard</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         <div className="bg-gray-300  p-4 rounded-lg shadow-md transition-colors duration-200">
//           <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Today's Medicine Sales</h3>
//           <DailySalesChart />
//         </div>
        
//         <div className="bg-gray-300 p-4 rounded-lg shadow-md transition-colors duration-200">
//           <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Monthly Medicine Sales</h3>
//           <MonthlySalesChart />
//         </div>

//         <div className="bg-gray-300 p-4 rounded-lg shadow-md transition-colors duration-200">
//           <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Yearly Medicine Sales</h3>
//           <YearlySalesChart />
//         </div>

//         <div className="bg-gray-300 p-4 rounded-lg shadow-md transition-colors duration-200">
//           <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Sales by Medicine Category</h3>
//           <MedicineCategoryChart />
//         </div>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 rounded-lg shadow-lg">
//           <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Total Sales Today</h3>
//           <p className="text-3xl font-bold text-white">$1,880</p>
//         </div>
        
//         <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 rounded-lg shadow-lg">
//           <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Total Sales This Month</h3>
//           <p className="text-3xl font-bold text-white">$14,600</p>
//         </div>
        
//         <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 rounded-lg shadow-lg">
//           <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Top Selling Medicine</h3>
//           <p className="text-2xl font-bold text-white">Paracetamol</p>
//         </div>
//       </div>
//     </div>
//   );
// }






// 2.
// import React, { useState } from 'react';
// import { 
//   FiHome, 
//   FiTrendingUp, 
//   FiUsers, 
//   FiSettings, 
//   FiBell, 
//   FiSearch,
//   FiMenu,
//   FiX,
//   FiDollarSign,
//   FiShoppingCart,
//   FiActivity
// } from 'react-icons/fi';

// const Dashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('overview');

//   // Mock data for the dashboard
//   const stats = [
//     { label: 'Total Revenue', value: '$45,231.89', change: '+20.1%', icon: FiDollarSign },
//     { label: 'Subscriptions', value: '+2350', change: '+180.1%', icon: FiUsers },
//     { label: 'Sales', value: '+12,234', change: '+19%', icon: FiShoppingCart },
//     { label: 'Active Now', value: '+573', change: '+201', icon: FiActivity },
//   ];

//   const recentActivity = [
//     { user: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '$1,999.00', status: 'completed' },
//     { user: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '$39.00', status: 'pending' },
//     { user: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '$299.00', status: 'completed' },
//     { user: 'William Kim', email: 'will@email.com', amount: '$99.00', status: 'processing' },
//     { user: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '$39.00', status: 'completed' },
//   ];

//   const navigation = [
//     { name: 'Overview', href: '#', icon: FiHome, current: true },
//     { name: 'Analytics', href: '#', icon: FiTrendingUp, current: false },
//     { name: 'Customers', href: '#', icon: FiUsers, current: false },
//     { name: 'Settings', href: '#', icon: FiSettings, current: false },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//         <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
//           <div className="text-xl font-bold text-indigo-600">Dashboard</div>
//           <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-md text-gray-400 hover:text-gray-500">
//             <FiX className="w-6 h-6" />
//           </button>
//         </div>
        
//         <nav className="mt-8">
//           <div className="px-4 space-y-2">
//             {navigation.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
//                   activeTab === item.name.toLowerCase()
//                     ? 'bg-indigo-50 text-indigo-700'
//                     : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
//                 }`}
//                 onClick={() => setActiveTab(item.name.toLowerCase())}
//               >
//                 <item.icon className="w-5 h-5 mr-3" />
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </nav>
//       </div>

//       {/* Main content */}
//       <div className="lg:pl-64">
//         <div className="sticky top-0 z-40 bg-white shadow-sm">
//           <div className="flex items-center justify-between p-4 border-b border-gray-200">
//             <button
//               onClick={() => setSidebarOpen(true)}
//               className="p-2 rounded-md text-gray-400 hover:text-gray-500 lg:hidden"
//             >
//               <FiMenu className="w-6 h-6" />
//             </button>
            
//             <div className="flex-1 max-w-2xl mx-auto">
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                   <FiSearch className="w-5 h-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>
//             </div>
            
//             <div className="flex items-center ml-4 space-x-4">
//               <button className="p-2 text-gray-400 hover:text-gray-500 relative">
//                 <FiBell className="w-6 h-6" />
//                 <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
//               </button>
//               <div className="relative">
//                 <img
//                   className="w-10 h-10 rounded-full"
//                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                   alt="Profile"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <main className="p-6">
//           {/* Header */}
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//             <p className="text-gray-600">Welcome back! Here's what's happening with your business today.</p>
//           </div>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
//             {stats.map((stat, index) => {
//               const Icon = stat.icon;
//               return (
//                 <div key={index} className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
//                   <div className="flex items-center">
//                     <div className="p-2 bg-indigo-100 rounded-lg">
//                       <Icon className="w-6 h-6 text-indigo-600" />
//                     </div>
//                     <div className="ml-4">
//                       <p className="text-sm font-medium text-gray-600">{stat.label}</p>
//                       <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
//                     </div>
//                   </div>
//                   <div className="mt-4">
//                     <p className="text-sm text-green-600">{stat.change} from last month</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Charts and Recent Activity */}
//           <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//             {/* Chart Placeholder */}
//             <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
//               <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</h2>
//               <div className="h-64 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center">
//                 <div className="text-center text-gray-500">
//                   <FiTrendingUp className="w-12 h-12 mx-auto mb-2 text-indigo-400" />
//                   <p>Revenue chart will be displayed here</p>
//                 </div>
//               </div>
//             </div>

//             {/* Recent Activity */}
//             <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
//               <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h2>
//               <div className="space-y-4">
//                 {recentActivity.map((activity, index) => (
//                   <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
//                     <div className="flex items-center">
//                       <img
//                         className="w-10 h-10 rounded-full"
//                         src={`https://ui-avatars.com/api/?name=${activity.user}&background=random`}
//                         alt={activity.user}
//                       />
//                       <div className="ml-4">
//                         <p className="text-sm font-medium text-gray-900">{activity.user}</p>
//                         <p className="text-sm text-gray-500">{activity.email}</p>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-sm font-medium text-gray-900">{activity.amount}</p>
//                       <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                         activity.status === 'completed' ? 'bg-green-100 text-green-800' :
//                         activity.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
//                         'bg-blue-100 text-blue-800'
//                       }`}>
//                         {activity.status}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Additional Content */}
//           <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
//             {/* Quick Stats */}
//             <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
//               <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h2>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="p-4 bg-blue-50 rounded-lg">
//                   <p className="text-sm text-blue-600">Conversion Rate</p>
//                   <p className="text-2xl font-bold text-blue-900">3.2%</p>
//                 </div>
//                 <div className="p-4 bg-green-50 rounded-lg">
//                   <p className="text-sm text-green-600">Bounce Rate</p>
//                   <p className="text-2xl font-bold text-green-900">24.8%</p>
//                 </div>
//                 <div className="p-4 bg-purple-50 rounded-lg">
//                   <p className="text-sm text-purple-600">Avg. Session</p>
//                   <p className="text-2xl font-bold text-purple-900">4m 12s</p>
//                 </div>
//                 <div className="p-4 bg-orange-50 rounded-lg">
//                   <p className="text-sm text-orange-600">New Users</p>
//                   <p className="text-2xl font-bold text-orange-900">1,234</p>
//                 </div>
//               </div>
//             </div>

//             {/* Upcoming Events */}
//             <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
//               <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h2>
//               <div className="space-y-3">
//                 <div className="p-3 bg-indigo-50 rounded-lg">
//                   <p className="text-sm font-medium text-indigo-900">Team Meeting</p>
//                   <p className="text-sm text-indigo-600">Today, 2:00 PM</p>
//                 </div>
//                 <div className="p-3 bg-green-50 rounded-lg">
//                   <p className="text-sm font-medium text-green-900">Product Launch</p>
//                   <p className="text-sm text-green-600">Tomorrow, 10:00 AM</p>
//                 </div>
//                 <div className="p-3 bg-purple-50 rounded-lg">
//                   <p className="text-sm font-medium text-purple-900">Client Call</p>
//                   <p className="text-sm text-purple-600">Friday, 3:30 PM</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Overlay for mobile sidebar */}
//       {sidebarOpen && (
//         <div 
//           className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default Dashboard;





3.
import Listing from './Listingcom'

import React, { useState } from 'react';
import { 
  FiHome, 
  FiTrendingUp, 
  FiUsers, 
  FiSettings, 
  FiBell, 
  FiSearch,
  FiMenu,
  FiX,
  FiDollarSign,
  FiShoppingCart,
  FiActivity,
  FiHeart,
  FiCalendar,
  FiPieChart,
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
import { Bar, Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Homecom from './Homecom';
import HomePage from '../page/HomePage';

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

// Daily Sales Chart Component
function DailySalesChart({ darkMode }) {
  const data = {
    labels: ['9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
    datasets: [
      {
        label: "Today's Medicine Sales ($)",
        data: [250, 420, 380, 510, 320],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: darkMode ? '#fff' : '#666'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: darkMode ? '#fff' : '#666'
        },
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        ticks: {
          color: darkMode ? '#fff' : '#666'
        },
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        }
      }
    }
  };

  return <Bar data={data} options={options} />;
}

// Monthly Sales Chart Component
function MonthlySalesChart({ darkMode }) {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Monthly Medicine Sales ($)',
        data: [3200, 3800, 3500, 4100],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: darkMode ? '#fff' : '#666'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: darkMode ? '#fff' : '#666'
        },
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        ticks: {
          color: darkMode ? '#fff' : '#666'
        },
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        }
      }
    }
  };

  return <Line data={data} options={options} />;
}

// Yearly Sales Chart Component
// function YearlySalesChart({ darkMode }) {
//   const data = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     datasets: [
//       {
//         label: 'Yearly Medicine Sales ($)',
//         data: [12500, 13200, 14100, 14800, 15600, 16300, 17000, 17800, 18500, 19200, 20000, 20800],
//         backgroundColor: 'rgba(153, 102, 255, 0.5)',
//         borderColor: 'rgba(153, 102, 255, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//         labels: {
//           color: darkMode ? '#fff' : '#666'
//         }
//       }
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: {
//           color: darkMode ? '#fff' : '#666'
//         },
//         grid: {
//           color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
//         }
//       },
//       x: {
//         ticks: {
//           color: darkMode ? '#fff' : '#666'
//         },
//         grid: {
//           color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
//         }
//       }
//     }
//   };

//   return <Bar data={data} options={options} />;
// }

const Dashboard = ({settoken}) => {


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
    { name: 'Medicins', href: 'listing', icon: FiBox, current: false },
    { name: 'All list', href: 'alllist', icon: FiUsers, current: false },
    { name: 'Gen Bill', href: 'billing', icon: FiCalendar, current: false },
    { name: 'Analytics', href: 'analays', icon: FiTrendingUp, current: false },
    { name: 'History', href: 'history', icon: FiTrendingUp, current: false },
  ];

  const upcomingAppointments = [
    { name: 'dcold total', time: '9:00 AM', category: 'pain relief', quantity: 1000},
    { name: 'paracitamol', time: '10:30 AM', category: 'pain relief', quantity: 1500 },
    { name: 'qunine', time: '1:15 PM', category: 'maleria tablet',quantity: 3000 },
  ];

  return (
    <div className={`min-h-screen  ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} flex justify-center`}>
      {/* Sidebar */}
      <div className={` my-6 rounded-xl mr-4 fixed inset-y-0 left-0 z-50 w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
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
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  activeTab === item.name.toLowerCase()
                    ? `${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-700'}`
                    : `${darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`
                }`}
                onClick={() => setActiveTab(item.name.toLowerCase())}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
              
            ))}
            

            <button className={`flex cursor-pointer w-full px-4 py-1 rounded-md ${darkMode? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}  onClick={() => settoken("")}>
              <svg xmlns="http://www.w3.org/2000/svg" className=" w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
            </button>
            
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className=' w-[1200px]'>

      <div className=" pt-10">
        <div className={`sticky top-0 z-40 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm rounded-full`}>
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
              {/* <div className="relative">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                />
              </div> */}
            </div>
          </div>
        </div>



         
            
            <Outlet/>
        

         


        <main className="p-6 hidden">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Medical Dashboard</h1>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome back, Dr. Smith! Here's today's overview.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className={`p-6 rounded-lg shadow-sm border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
                  <div className="flex items-center">
                    <div className={`p-2 ${stat.color} rounded-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change} from yesterday
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Charts and Recent Activity */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Daily Sales Chart */}
            <div className={`p-6 rounded-lg shadow-sm border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
              <h2 className="text-lg font-semibold mb-4">Today's Medicine Sales</h2>
              <div className="h-72">
                <DailySalesChart darkMode={darkMode} />
              </div>
            </div>

            {/* Recent Activity */}
            <div className={`p-6 rounded-lg shadow-sm border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
              <h2 className="text-lg font-semibold mb-4">Recently Finish Medician</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={`https://ui-avatars.com/api/?name=${activity.name}&background=random`}
                        alt={activity.name}
                      />
                      <div className="ml-4">
                        <p className="text-sm font-medium">{activity.name}</p>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{activity.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">need to add some more</p>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                        bg-green-100 text-green-800 
                       
                      `}>
                        {activity.stock}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-3">
            {/* Monthly Sales Chart */}
            <div className={`p-6 rounded-lg shadow-sm border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} lg:col-span-2`}>
              <h2 className="text-lg font-semibold mb-4">Monthly Medicine Sales Trend</h2>
              <div className="h-72">
                <MonthlySalesChart darkMode={darkMode} />
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className={`p-6 rounded-lg shadow-sm border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
              <h2 className="text-lg font-semibold mb-4">Recently Sales History</h2>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment, index) => (
                  <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} border-l-4 border-blue-500`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{appointment.name}</p>
                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{appointment.category}</p>
                      </div>
                      <span className={`px-3 py-2 text-xs rounded-full ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                        <button>More</button>
                      </span>
                    </div>
                    <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>With {appointment.quantity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Yearly Sales Chart */}
          {/* <div className={`mt-6 p-6 rounded-lg shadow-sm border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <h2 className="text-lg font-semibold mb-4">Yearly Medicine Sales Overview</h2>
            <div className="h-96">
              <YearlySalesChart darkMode={darkMode} />
            </div>
          </div> */}
        </main>

        
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




