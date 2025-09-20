import React,{useState} from 'react'
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


function Homecom() {

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

  const upcomingAppointments = [
    { name: 'dcold total', time: '9:00 AM', category: 'pain relief', quantity: 1000},
    { name: 'paracitamol', time: '10:30 AM', category: 'pain relief', quantity: 1500 },
    { name: 'qunine', time: '1:15 PM', category: 'maleria tablet',quantity: 3000 },
  ];



    return (
        <>
  <main className="p-6">
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
                <div key={index} className={`p-6 rounded-lg shadow-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
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
            <div className={`p-6 rounded-lg shadow-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
              <h2 className="text-lg font-semibold mb-4">Today's Medicine Sales</h2>
              <div className="h-72">
                <DailySalesChart darkMode={darkMode} />
              </div>
            </div>

            {/* Recent Activity */}
            <div className={`p-6 rounded-lg shadow-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
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
            <div className={`p-6 rounded-lg shadow-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} lg:col-span-2`}>
              <h2 className="text-lg font-semibold mb-4">Monthly Medicine Sales Trend</h2>
              <div className="h-72">
                <MonthlySalesChart darkMode={darkMode} />
              </div>
            </div>

            {/* recent history */}
            <div className={`p-6 rounded-lg shadow-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
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
  </>
    )
}

export default Homecom
