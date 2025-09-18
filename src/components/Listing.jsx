import React, { useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify';

export default function MedicationsAdmin({token}) {
  const [inventoryData, setinventoryData] = useState({
    name: "",
    price: "",
    category: "",
    stockquantity: "",
    description: "",
  });


  // console.log(inventoryData)

  const [medications, setMedications] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setinventoryData({
      ...inventoryData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!inventoryData.name || !inventoryData.price || !inventoryData.category) {
      alert("Please fill required fields!");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setMedications([...medications, { ...inventoryData, id: Date.now() }]);
      setinventoryData({ name: "", price: "", category: "", stock: "", description: "" });
      setIsSubmitting(false);
    }, 500);

    const response = await axios.post('http://localhost:3000/api/product/add', inventoryData, { headers: { token } })
    toast.success(response.data.message)
    // console.log("res =>",response)
  };

  const removeMedication = (id) => {
    setMedications(medications.filter(med => med.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Medication Management</h1>
          <p className="text-gray-600">Add and manage medications in your inventory</p>
        </div>

        <div className=" gap-8">
          {/* Form Section */}
          <div className="bg-white p-6 shadow-lg rounded-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">Add New Medication</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  value={inventoryData.name}
                  onChange={handleChange}
                  placeholder="Enter medicine name"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price (₹) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={inventoryData.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={inventoryData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  >
                    <option value="">Select category</option>
                    <option value="Antibiotic">Antibiotic</option>
                    <option value="Analgesic">Analgesic</option>
                    <option value="Antihistamine">Antihistamine</option>
                    <option value="Antacid">Antacid</option>
                    <option value="Vitamin">Vitamin</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
                <input
                  type="number"
                  name="stock"
                  value={inventoryData.stock}
                  onChange={handleChange}
                  placeholder="Available quantity"
                  min="0"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  value={inventoryData.description}
                  onChange={handleChange}
                  placeholder="Enter medicine details, usage instructions, etc."
                  rows="3"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg font-medium text-white transition ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Adding...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Add Medication
                  </span>
                )}
              </button>
            </form>
          </div>

          
        </div>
      </div>
    </div>
  );
}