import DailySalesChart from './Charts/DailySalesChart';
import MonthlySalesChart from './Charts/MonthlySalesChart';
import YearlySalesChart from './Charts/YearlySalesChart';
import MedicineCategoryChart from './Charts/MedicineCategoryChart';

export default function Dashboard() {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Medicine Sales Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-colors duration-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Today's Medicine Sales</h3>
          <DailySalesChart />
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-colors duration-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Monthly Medicine Sales</h3>
          <MonthlySalesChart />
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-colors duration-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Yearly Medicine Sales</h3>
          <YearlySalesChart />
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-colors duration-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Sales by Medicine Category</h3>
          <MedicineCategoryChart />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-colors duration-200">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Total Sales Today</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">$1,880</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-colors duration-200">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Total Sales This Month</h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">$14,600</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-colors duration-200">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Top Selling Medicine</h3>
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">Paracetamol</p>
        </div>
      </div>
    </div>
  );
}