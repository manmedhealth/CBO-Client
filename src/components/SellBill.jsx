//  customer sell bill
import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { FiTrash2 } from "react-icons/fi";
import { CiCalculator2 } from "react-icons/ci";
import { LuPrinterCheck } from "react-icons/lu";
import { MdOutlineSaveAlt } from "react-icons/md";
import Billtemsell from './Billtemsell';

const SellBill = () => {

  const [show, setshow] = useState(false)
  // State for form data
  const [billData, setBillData] = useState({
    customerInfo: {
      name: '',
      phone: '',
      email: '',
      address: ''
    },
    items: [],
    paymentMethod: 'cash',
    discount: 0,
    taxRate: 5, // 5% GST
    notes: ''
  });

  // State for medicine search
  const [medicineSearch, setMedicineSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Sample medicine inventory data
  const [inventory] = useState([
    { id: 1, name: 'Paracetamol 500mg', batch: 'BATCH001', expiry: '2025-12-31', mrp: 10, stock: 100 },
    { id: 2, name: 'Amoxicillin 250mg', batch: 'BATCH002', expiry: '2025-10-15', mrp: 15, stock: 50 },
    { id: 3, name: 'Ibuprofen 400mg', batch: 'BATCH003', expiry: '2025-11-20', mrp: 12, stock: 75 },
    { id: 4, name: 'Vitamin C 500mg', batch: 'BATCH004', expiry: '2026-01-31', mrp: 8, stock: 200 },
    { id: 5, name: 'Cetirizine 10mg', batch: 'BATCH005', expiry: '2025-09-30', mrp: 5, stock: 150 }
  ]);

  // Calculate totals
  const calculateTotals = () => {
    const subtotal = billData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const taxAmount = (subtotal - billData.discount) * (billData.taxRate / 100);
    const finalAmount = subtotal - billData.discount + taxAmount;

    return {
      subtotal,
      taxAmount,
      finalAmount
    };
  };

  const { subtotal, taxAmount, finalAmount } = calculateTotals();

  // Search medicines
  useEffect(() => {
    if (medicineSearch.trim()) {
      const results = inventory.filter(medicine =>
        medicine.name.toLowerCase().includes(medicineSearch.toLowerCase()) &&
        medicine.stock > 0
      );
      setSearchResults(results);
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  }, [medicineSearch, inventory]);

  // Add medicine to bill
  const addMedicineToBill = (medicine) => {
    const existingItem = billData.items.find(item => item.id === medicine.id);
    
    if (existingItem) {
      // Update quantity if already exists
      updateQuantity(medicine.id, existingItem.quantity + 1);
    } else {
      // Add new item
      const newItem = {
        id: medicine.id,
        name: medicine.name,
        batch: medicine.batch,
        expiry: medicine.expiry,
        price: medicine.mrp,
        quantity: 1,
        maxQuantity: medicine.stock
      };
      
      setBillData(prev => ({
        ...prev,
        items: [...prev.items, newItem]
      }));
    }
    
    setMedicineSearch('');
    setShowSearchResults(false);
  };

  // Update quantity
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    
    setBillData(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.id === id 
          ? { ...item, quantity: Math.min(quantity, item.maxQuantity) }
          : item
      )
    }));
  };

  // Remove item from bill
  const removeItem = (id) => {
    setBillData(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id)
    }));
  };

  // Handle input changes
  const handleInputChange = (section, field, value) => {
    setBillData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  // Handle bill submission
  const handleSubmit = (action) => {
    // Validate form
    if (!billData.customerInfo.name || !billData.customerInfo.phone) {
      alert('Please enter customer name and phone number');
      return;
    }

    if (billData.items.length === 0) {
      alert('Please add at least one medicine');
      return;
    }

    // Generate bill number (in real app, this would come from backend)
    const billNumber = `B${Date.now()}`;

    const billPayload = {
      ...billData,
      billNumber,
      date: new Date().toISOString(),
      subtotal,
      taxAmount,
      finalAmount,
      status: 'completed'
    };

    console.log('Bill Data:', billPayload);

    if (action === 'save') {
      // Save bill logic here
      alert('Bill saved successfully!');
      // Reset form
      setBillData({
        customerInfo: { name: '', phone: '', email: '', address: '' },
        items: [],
        paymentMethod: 'cash',
        discount: 0,
        taxRate: 5,
        notes: ''
      });
    } else if (action === 'print') {
      // Print logic here
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6 rounded-t-lg">
          <h1 className="text-2xl font-bold">Generate Sell Bill</h1>
          <p className="text-blue-100">Create invoice for customer purchase</p>
        </div>

        <div className="p-6">
          {/* Customer Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Customer Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Name *
                </label>
                <input
                  type="text"
                  value={billData.customerInfo.name}
                  onChange={(e) => handleInputChange('customerInfo', 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter customer name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={billData.customerInfo.phone}
                  onChange={(e) => handleInputChange('customerInfo', 'phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={billData.customerInfo.email}
                  onChange={(e) => handleInputChange('customerInfo', 'email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  value={billData.customerInfo.address}
                  onChange={(e) => handleInputChange('customerInfo', 'address', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter address"
                />
              </div>
            </div>
          </div>

          {/* Medicine Search and Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Medicines</h2>
            <div className="relative mb-4">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" /> */}
                  <input
                    type="text"
                    value={medicineSearch}
                    onChange={(e) => setMedicineSearch(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search medicines by name..."
                  />
                </div>
              </div>

              {/* Search Results Dropdown */}
              {showSearchResults && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map(medicine => (
                      <div
                        key={medicine.id}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                        onClick={() => addMedicineToBill(medicine)}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{medicine.name}</span>
                          <span className="text-sm text-gray-600">Stock: {medicine.stock}</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          Batch: {medicine.batch} | MRP: ₹{medicine.mrp}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500">No medicines found</div>
                  )}
                </div>
              )}
            </div>

            {/* Medicine Items Table */}
            {billData.items.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Medicine</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Batch</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Expiry</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Price</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Quantity</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Total</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billData.items.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.batch}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.expiry}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">₹{item.price}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                            >
                              -
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              disabled={item.quantity >= item.maxQuantity}
                              className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            {/* <Trash2 className="h-4 w-4" /> */}
                            <FiTrash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                {/* <Calculator className="h-12 w-12 mx-auto mb-2 text-gray-300" /> */}
                <CiCalculator2 className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                <p>No medicines added. Search and add medicines to create a bill.</p>
              </div>
            )}
          </div>

          {/* Bill Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Payment and Notes */}
            <div className="lg:col-span-2 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Method
                  </label>
                  <select
                    value={billData.paymentMethod}
                    onChange={(e) => setBillData(prev => ({ ...prev, paymentMethod: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                    <option value="upi">UPI</option>
                    <option value="netbanking">Net Banking</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Discount (₹)
                  </label>
                  <input
                    type="number"
                    value={billData.discount}
                    onChange={(e) => setBillData(prev => ({ ...prev, discount: Math.max(0, parseFloat(e.target.value) || 0) }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notes (Optional)
                </label>
                <textarea
                  value={billData.notes}
                  onChange={(e) => setBillData(prev => ({ ...prev, notes: e.target.value }))}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Any additional notes..."
                />
              </div>
            </div>

            {/* Calculation Summary */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Bill Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount:</span>
                  <span className="text-red-600">-₹{billData.discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax ({billData.taxRate}%):</span>
                  <span>₹{taxAmount.toFixed(2)}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Amount:</span>
                  <span className="text-green-600">₹{finalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 mt-8 pt-6 border-t">
            {/* <button
              onClick={() => handleSubmit('save')}
              className="flex items-center px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <MdOutlineSaveAlt className="h-4 w-4 mr-2" />
              Save Bill
            </button> */}

            <button
              onClick={() => setshow(true)}
              className="flex items-center px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {/* <Save className="h-4 w-4 mr-2" /> */}
              <MdOutlineSaveAlt className="h-4 w-4 mr-2" />
              Gen Bill
            </button>

            <button
              onClick={() => handleSubmit('print')}
              className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {/* <Printer className="h-4 w-4 mr-2" /> */}
              <LuPrinterCheck className="h-4 w-4 mr-2" />
              Save & Print
            </button>
          </div>
        </div>
      </div>

            <div className={`${show?"":"hidden"}`}>
              <Billtemsell setshow={setshow}/>
            </div>

    </div>
  );
};

export default SellBill;
