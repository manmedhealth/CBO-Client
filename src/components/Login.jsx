// import React from 'react'

// function Login() {

//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = (e) => {
//     e.preventDefault();
//     // Simple validation - in real app, connect to backend
//     if (email && password) {
//       setIsLoggedIn(true);
//     }
//   };

//         {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
//         <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-96 transition-colors duration-200">
//           <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Medicine Store Admin Login</h2>
//           <form onSubmit={handleLogin}>
//             <div className="mb-4">
//               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
//                 placeholder="admin@medstore.com"
//                 required
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
//                 placeholder="********"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//             >
//               Login
//             </button>
//           </form>
//           <div className="mt-4 flex justify-center">
//             {/* <button
//               onClick={toggleDarkMode}
//               className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
//             >
//               {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//             </button> */}
//           </div>
//         </div>
//       </div>
//     );
//   }
  
    
// }

// export default Login



import { useState } from 'react';

export default function Login({ onLogin, darkMode, toggleDarkMode }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-96 transition-colors duration-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Medicine Store Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="admin@medstore.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
        <div className="mt-4 flex justify-center">
          <button
            onClick={toggleDarkMode}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          >
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </div>
    </div>
  );
}