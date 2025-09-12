import React from 'react'

import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// import Login from '../components/Login';
// import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
// import SalesHistory from '../components/SalesHistory';
// import MedicineManagement from '../components/MedicineManagement';
// import ProductList from './productList';
// import Orders from './Orders';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);


const HomePage = ()=> {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [activeTab, setActiveTab] = useState('dashboard');
  // const [darkMode, setDarkMode] = useState(false);
  const [medicines, setMedicines] = useState([
    { id: 1, name: 'Paracetamol', price: 5, stock: 150, category: 'Pain Relief', description: 'Short Description1' },
    { id: 2, name: 'Amoxicillin', price: 12, stock: 80, category: 'Antibiotic', description: 'Short Description2' },
    { id: 3, name: 'Atorvastatin', price: 15, stock: 60, category: 'Cholesterol', description: 'Short Description3' },
    { id: 4, name: 'Metformin', price: 8, stock: 100, category: 'Diabetes', description: 'Short Description4' },
    { id: 5, name: 'Aspirin', price: 6, stock: 120, category: 'Pain Relief', description: 'Short Description5' },
    { id: 6, name: 'Omeprazole', price: 10, stock: 90, category: 'Acid Reflux', description: 'Short Description6' },
  ]);
  const [sales, setSales] = useState([
    { id: 1, medicine: 'Paracetamol', quantity: 20, total: 100, date: '2023-10-01' },
    { id: 2, medicine: 'Amoxicillin', quantity: 15, total: 180, date: '2023-10-05' },
    { id: 3, medicine: 'Atorvastatin', quantity: 10, total: 150, date: '2023-10-10' },
    { id: 4, medicine: 'Metformin', quantity: 12, total: 96, date: '2023-10-15' },
    { id: 5, medicine: 'Aspirin', quantity: 18, total: 108, date: '2023-10-20' },
    { id: 6, medicine: 'Omeprazole', quantity: 8, total: 80, date: '2023-10-25' },
  ]);

  // Toggle dark mode
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  // Apply dark mode class to body
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [darkMode]);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // };

  // const deleteMedicine = (id) => {
  //   setMedicines(medicines.filter(medicine => medicine.id !== id));
  // };

  // const generateBill = (sale) => {
  //   alert(`Generating PDF bill for Sale #${sale.id}\nMedicine: ${sale.medicine}\nQuantity: ${sale.quantity}\nAmount: $${sale.total}`);
  // };

  // if (!isLoggedIn) {
  //   return <Login onLogin={handleLogin} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
  // }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      {/* <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        onLogout={handleLogout} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      /> */}
      
      <div className="container mx-auto px-4 py-6">
        <Dashboard/>

        {/* {activeTab === 'dashboard' && (
          <Dashboard darkMode={darkMode} />
        )} */}
        
        {/* {activeTab === 'medicines' && (
          <MedicineManagement 
            medicines={medicines} 
            onDeleteMedicine={deleteMedicine} 
            darkMode={darkMode} 
          />
        )} */}

        {/* {activeTab === 'list' && (
          // <Dashboard darkMode={darkMode} />
          <ProductList/>
        )} */}
        {/* {activeTab === 'orders' && (
          // <Dashboard darkMode={darkMode} />
          <Orders/>
        )} */}

        {/* {activeTab === 'history' && (
          <SalesHistory sales={sales} onGenerateBill={generateBill} darkMode={darkMode} />
        )} */}
      </div>

    </div>
  );
}


export default HomePage;

