import React from 'react'
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

import Dashboard from '../components/Dashboard';

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

  // const [medicines, setMedicines] = useState([
  //   { id: 1, name: 'Paracetamol', price: 5, stock: 150, category: 'Pain Relief', description: 'Short Description1' },
  //   { id: 2, name: 'Amoxicillin', price: 12, stock: 80, category: 'Antibiotic', description: 'Short Description2' },
  //   { id: 3, name: 'Atorvastatin', price: 15, stock: 60, category: 'Cholesterol', description: 'Short Description3' },
  //   { id: 4, name: 'Metformin', price: 8, stock: 100, category: 'Diabetes', description: 'Short Description4' },
  //   { id: 5, name: 'Aspirin', price: 6, stock: 120, category: 'Pain Relief', description: 'Short Description5' },
  //   { id: 6, name: 'Omeprazole', price: 10, stock: 90, category: 'Acid Reflux', description: 'Short Description6' },
  // ]);
  // const [sales, setSales] = useState([
  //   { id: 1, medicine: 'Paracetamol', quantity: 20, total: 100, date: '2023-10-01' },
  //   { id: 2, medicine: 'Amoxicillin', quantity: 15, total: 180, date: '2023-10-05' },
  //   { id: 3, medicine: 'Atorvastatin', quantity: 10, total: 150, date: '2023-10-10' },
  //   { id: 4, medicine: 'Metformin', quantity: 12, total: 96, date: '2023-10-15' },
  //   { id: 5, medicine: 'Aspirin', quantity: 18, total: 108, date: '2023-10-20' },
  //   { id: 6, medicine: 'Omeprazole', quantity: 8, total: 80, date: '2023-10-25' },
  // ]);

  return (
    <div className="min-h-screen bg-white transition-colors duration-200">
      <div className="container mx-auto px-4 py-6">
        <Dashboard/>
      </div>
    </div>
  );
}


export default HomePage;

