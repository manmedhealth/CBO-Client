import { NavLink } from "react-router-dom";

export default function Navbar({settoken}) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Medicine Store Admin Panel</h1>
        <div className="flex items-center space-x-4">
          {/* <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            {darkMode ? '☀️' : '🌙'}
          </button> */}
          <button
            onClick={()=>settoken("")}
            className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <NavLink to={'/'}
            className={`py-2 px-4 font-medium transition-colors duration-200`}>
            Dashboard
          </NavLink>
          
          <NavLink to={'/list'}
            className={`py-2 px-4 font-medium transition-colors duration-200`}>
            Medicines
          </NavLink>
          
          <NavLink to={'/alllist'}
            className={`py-2 px-4 font-medium transition-colors duration-200`}>
            All List
          </NavLink>
          <NavLink to={'/billing'}
            className={`py-2 px-4 font-med transition-colors duration-200`}>
              Get-Bill
          </NavLink>
          <NavLink to={'/history'}
            className={`py-2 px-4 font-medi transition-colors duration-200`}>
            Sales History
          </NavLink>

        </div>
      </div>
    </header>
  );
}