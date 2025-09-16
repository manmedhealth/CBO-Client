// import { NavLink } from "react-router-dom";

// export default function Navbar({settoken}) {
//   return (
//     <header className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         <h1 className="text-xl font-bold text-gray-800 dark:text-white">Medicine Store Admin Panel</h1>
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={()=>settoken("")}
//             className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition-colors duration-200"
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="container mx-auto px-4">
//         <div className="flex border-b border-gray-200 dark:border-gray-700">
//           <NavLink to={'/'}
//             className={`py-2 px-4 font-medium transition-colors duration-200`}>
//             Dashboard
//           </NavLink>
          
//           <NavLink to={'/list'}
//             className={`py-2 px-4 font-medium transition-colors duration-200`}>
//             Medicines
//           </NavLink>
          
//           <NavLink to={'/alllist'}
//             className={`py-2 px-4 font-medium transition-colors duration-200`}>
//             All List
//           </NavLink>
//           <NavLink to={'/billing'}
//             className={`py-2 px-4 font-med transition-colors duration-200`}>
//               Get-Bill
//           </NavLink>
//           <NavLink to={'/history'}
//             className={`py-2 px-4 font-medi transition-colors duration-200`}>
//             Sales History
//           </NavLink>

//         </div>
//       </div>
//     </header>
//   );
// }






import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ settoken }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-8 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg> */}
          <h1 className="text-xl font-bold">PharmaAdmin</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink 
            to="/"
            className={({ isActive }) => 
              `py-2 px-4 rounded-md transition-all duration-200 flex items-center ${isActive ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'}`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </NavLink>
          
          <NavLink 
            to="/list"
            className={({ isActive }) => 
              `py-2 px-4 rounded-md transition-all duration-200 flex items-center ${isActive ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'}`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Medicines
          </NavLink>
          
          <NavLink 
            to="/alllist"
            className={({ isActive }) => 
              `py-2 px-4 rounded-md transition-all duration-200 flex items-center ${isActive ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'}`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            All List
          </NavLink>
          
          <NavLink 
            to="/billing"
            className={({ isActive }) => 
              `py-2 px-4 rounded-md transition-all duration-200 flex items-center ${isActive ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'}`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M2 12.5h5m-5 4h5m10-4h5m-5 4h5M12 12a3 3 0 01-3-3V5a3 3 0 116 0v4a3 3 0 01-3 3z" />
            </svg>
            Get Bill
          </NavLink>
          
          <NavLink 
            to="/history"
            className={({ isActive }) => 
              `py-2 px-4 rounded-md transition-all duration-200 flex items-center ${isActive ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'}`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Sales History
          </NavLink>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => settoken("")}
            className="hidden md:flex items-center bg-white/20 py-1.5 px-4 rounded-md hover:bg-white/30 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>

          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-4 pt-2">
          <nav className="flex flex-col space-y-2">
            <NavLink 
              to="/"
              className={({ isActive }) => 
                `py-2 px-4 rounded-md transition-all duration-200 flex items-center ${isActive ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </NavLink>
            
            <NavLink 
              to="/list"
              className={({ isActive }) => 
                `py-2 px-4 rounded-md transition-all duration-200 flex items-center ${isActive ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Medicines
            </NavLink>
            
            <NavLink 
              to="/alllist"
              className={({ isActive }) => 
                `py-2 px-4 rounded-md transition-all duration-200 flex items-center ${isActive ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              All List
            </NavLink>
            
            <NavLink 
              to="/billing"
              className={({ isActive }) => 
                `py-2 px-4 rounded-md transition-all duration-200 flex items-center ${isActive ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M2 12.5h5m-5 4h5m10-4h5m-5 4h5M12 12a3 3 0 01-3-3V5a3 3 0 116 0v4a3 3 0 01-3 3z" />
              </svg>
              Get Bill
            </NavLink>
            
            <NavLink 
              to="/history"
              className={({ isActive }) => 
                `py-2 px-4 rounded-md transition-all duration-200 flex items-center ${isActive ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Sales History
            </NavLink>
            
            <button
              onClick={() => {
                settoken("");
                setIsMenuOpen(false);
              }}
              className="py-2 px-4 rounded-md bg-white/20 hover:bg-white/30 transition-colors duration-200 flex items-center mt-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}