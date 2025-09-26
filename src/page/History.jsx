// import React from 'react'

// function History() {
//     return (
//         <div>
//             <h1>History</h1>
//         </div>
//     )
// }

// export default History


import React, { useState, useEffect } from 'react';
import { FaSearch, FaEye, FaReceipt, FaShoppingCart, FaTruck, FaChartBar, } from 'react-icons/fa';
import BillItem from '../components/Billtem';
import Billtemsell from '../components/Billtemsell';

const History = () => {

const [show, setshow] = useState(false)
  // State for form data
  
  const [activeView, setActiveView] = useState('history');
  const [selectedType, setSelectedType] = useState('all');
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBill, setSelectedBill] = useState(null);
  const itemsPerPage = 10;

  // Sample bill data
  const [bills, setBills] = useState([
    {
      id: 1,
      billNumber: 'SEL-2024-001',
      type: 'sell',
      date: '2024-01-15',
      customerName: 'John Doe',
      totalAmount: 1250.75,
      taxAmount: 112.50,
      status: 'completed',
      items: 5,
      paymentMethod: 'cash'
    },
    {
      id: 2,
      billNumber: 'PUR-2024-001',
      type: 'purchase',
      date: '2024-01-14',
      supplierName: 'MediSupply Distributors',
      totalAmount: 8450.00,
      taxAmount: 1014.00,
      status: 'completed',
      items: 12,
      paymentMethod: 'bank'
    },
    {
      id: 3,
      billNumber: 'SEL-2024-002',
      type: 'sell',
      date: '2024-01-14',
      customerName: 'Sarah Smith',
      totalAmount: 875.25,
      taxAmount: 78.75,
      status: 'completed',
      items: 3,
      paymentMethod: 'upi'
    },
    {
      id: 4,
      billNumber: 'PUR-2024-002',
      type: 'purchase',
      date: '2024-01-13',
      supplierName: 'PharmaWholesale Inc',
      totalAmount: 12000.00,
      taxAmount: 1440.00,
      status: 'pending',
      items: 8,
      paymentMethod: 'credit'
    },
    {
      id: 5,
      billNumber: 'SEL-2024-003',
      type: 'sell',
      date: '2024-01-13',
      customerName: 'Mike Johnson',
      totalAmount: 2150.00,
      taxAmount: 193.50,
      status: 'completed',
      items: 7,
      paymentMethod: 'card'
    }
  ]);



  // {
  //     id: 5,
  //     billNumber: 'SEL-2024-003',
  //     type: 'purchase',
  //     date: '2025-09-26',
  //     supplierinfo: {company: 'customerA', },
  //     totalAmount: 2150.00,
  //     taxAmount: 193.50,
  //     status: 'completed',
  //     items: 7,
  //     paymentMethod: 'card'
  //   }

  // Filter bills based on selections
  const filteredBills = bills.filter(bill => {
    const matchesType = selectedType === 'all' || bill.type === selectedType;
    const matchesSearch = searchTerm === '' || 
      bill.billNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (bill.customerName && bill.customerName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (bill.supplierName && bill.supplierName.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDate = (!dateRange.start || bill.date >= dateRange.start) && 
                       (!dateRange.end || bill.date <= dateRange.end);
    
    return matchesType && matchesSearch && matchesDate;
  });

  // Pagination
  const totalPages = Math.ceil(filteredBills.length / itemsPerPage);
  const paginatedBills = filteredBills.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Statistics
  const statistics = {
    totalSales: bills.filter(b => b.type === 'sell').reduce((sum, b) => sum + b.totalAmount, 0),
    totalPurchases: bills.filter(b => b.type === 'purchase').reduce((sum, b) => sum + b.totalAmount, 0),
    totalTax: bills.reduce((sum, b) => sum + b.taxAmount, 0),
    totalBills: bills.length,
    completedBills: bills.filter(b => b.status === 'completed').length,
    pendingBills: bills.filter(b => b.status === 'pending').length
  };

  // Export functions
  const exportToPDF = () => {
    alert('Exporting to PDF...');
    // Implementation for PDF export
  };

  const exportToExcel = () => {
    alert('Exporting to Excel...');
    // Implementation for Excel export
  };

  const printReport = () => {
    window.print();
  };

  // View bill details
  const viewBillDetails = (bill) => {
    setSelectedBill(bill);
    setshow(true)
  };

  // Close bill details
  const closeBillDetails = () => {
    setSelectedBill(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">History & Reporting</h1>
              <p className="text-gray-600">Manage and analyze your billing history</p>
            </div>
            {/* <div className="flex flex-wrap gap-3 mt-4 lg:mt-0 border">
              <button 
                onClick={exportToPDF}
                className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                <FaFilePdf className="mr-2" /> PDF
              </button>
              <button 
                onClick={exportToExcel}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <FaFileExcel className="mr-2" /> Excel
              </button>
              <button 
                onClick={printReport}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <FaPrint className="mr-2" /> Print
              </button>
            </div> */}
          </div>

          {/* View Toggle */}
          <div className="flex border-b">
            <button
              className={`flex items-center px-4 py-2 font-medium ${
                activeView === 'history' 
                  ? 'text-blue-600 border-b-2 border-blue-500' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveView('history')}
            >
              <FaReceipt className="mr-2" /> Bill History
            </button>
            <button
              className={`flex items-center px-4 py-2 font-medium ${
                activeView === 'reports' 
                  ? 'text-blue-600 border-b-2 border-blue-500' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveView('reports')}
            >
              <FaChartBar className="mr-2" /> Reports
            </button>
          </div>
        </div>

        {activeView === 'history' ? (
          /* Bill History View */
          <div className="space-y-6">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <FaShoppingCart className="text-blue-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Total Sales</p>
                    <p className="text-2xl font-bold text-gray-800">₹{statistics.totalSales.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <FaTruck className="text-green-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Total Purchases</p>
                    <p className="text-2xl font-bold text-gray-800">₹{statistics.totalPurchases.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <FaChartBar className="text-purple-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Total Tax</p>
                    <p className="text-2xl font-bold text-gray-800">₹{statistics.totalTax.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <FaReceipt className="text-orange-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Total Bills</p>
                    <p className="text-2xl font-bold text-gray-800">{statistics.totalBills}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by bill number, customer, supplier..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bill Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">All Bills</option>
                    <option value="sell">Sell Bills</option>
                    <option value="purchase">Purchase Bills</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    value={dateRange.start}
                    onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  <input
                    type="date"
                    value={dateRange.end}
                    onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Bills Table */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bill Details</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {paginatedBills.map((bill) => (
                      <tr key={bill.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{bill.billNumber}</div>
                            <div className="text-sm text-gray-500">
                              {bill.type === 'sell' ? bill.customerName : bill.supplierName}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            bill.type === 'sell' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {bill.type === 'sell' ? 'Sell' : 'Purchase'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(bill.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="font-medium">₹{bill.totalAmount.toLocaleString()}</div>
                          <div className="text-gray-500">Tax: ₹{bill.taxAmount.toLocaleString()}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            bill.status === 'completed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {bill.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => viewBillDetails(bill)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <FaEye />
                            </button>
                            {/* <button className="text-green-600 hover:text-green-900">
                              <FaEdit />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <FaTrash />
                            </button> */}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="bg-white px-6 py-3 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-700">
                    Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredBills.length)} of {filteredBills.length} results
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Reports View */
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-6">Sales & Purchase Reports</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sales Report */}
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-4 text-blue-600">Sales Report</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Total Sales Amount:</span>
                    <span className="font-semibold">₹{statistics.totalSales.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Number of Sales Bills:</span>
                    <span>{bills.filter(b => b.type === 'sell').length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Sale Value:</span>
                    <span>₹{(statistics.totalSales / bills.filter(b => b.type === 'sell').length || 0).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Purchase Report */}
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-4 text-green-600">Purchase Report</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Total Purchase Amount:</span>
                    <span className="font-semibold">₹{statistics.totalPurchases.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Number of Purchase Bills:</span>
                    <span>{bills.filter(b => b.type === 'purchase').length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Purchase Value:</span>
                    <span>₹{(statistics.totalPurchases / bills.filter(b => b.type === 'purchase').length || 0).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bill Details Modal */}
        {/* {selectedBill && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Bill Details - {selectedBill.billNumber}</h3>
                  <button onClick={closeBillDetails} className="text-gray-500 hover:text-gray-700">
                    ×
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-medium">Type:</label>
                      <p>{selectedBill.type === 'sell' ? 'Sell Bill' : 'Purchase Bill'}</p>
                    </div>
                    <div>
                      <label className="font-medium">Date:</label>
                      <p>{new Date(selectedBill.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <label className="font-medium">
                        {selectedBill.type === 'sell' ? 'Customer:' : 'Supplier:'}
                      </label>
                      <p>{selectedBill.type === 'sell' ? selectedBill.customerName : selectedBill.supplierName}</p>
                    </div>
                    <div>
                      <label className="font-medium">Status:</label>
                      <p>{selectedBill.status}</p>
                    </div>
                  </div>
                  <div>
                    <label className="font-medium">Total Amount:</label>
                    <p className="text-lg font-semibold">₹{selectedBill.totalAmount.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )} */}

            <div className={`${show?'':'hidden'}`}>
              
              {
                selectedBill.type === "sell"?<Billtemsell setshow={setshow} />:<BillItem setshow={setshow} />
              }
            </div>
         
 

      </div>
    </div>
  );
};

export default History;