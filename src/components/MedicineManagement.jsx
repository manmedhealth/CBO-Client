// export default function MedicineManagement({ medicines, onDeleteMedicine, darkMode }) {
//   return (
//     <div className="mt-6">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Medicine Management</h2>
      
//       <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200">
//         <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//           <thead className="bg-gray-50 dark:bg-gray-700">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                 ID
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                 Medicine Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                 Category
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                 Price
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                 Stock
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                 Description
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
//             {medicines.map((medicine) => (
//               <tr key={medicine.id}>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
//                   {medicine.id}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
//                   {medicine.name}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
//                   {medicine.category}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
//                   ${medicine.price}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
//                   {medicine.stock}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
//                   {medicine.description}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                   <button onClick={() => onDeleteMedicine(medicine.id)} className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 transition-colors duration-200">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
      
//       <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-200">
//         <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Add New Medicine</h3>
//         <form className="grid grid-cols-1 md:grid-cols-6 gap-4">
//           <input
//             type="text"
//             placeholder="Medicine Name"
//             className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
//           />
          
//           <input
//             type="text"
//             placeholder="Category"
//             className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
//           />
//           <input
//             type="number"
//             placeholder="Price"
//             className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
//           />
//           <input
//             type="number"
//             placeholder="Stock"
//             className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
//           />
//           <input
//             type="text"
//             placeholder="Descroption"
//             className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
//           />
//           <button
//             type="button"
//             className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//           >
//             Add Medicine
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }