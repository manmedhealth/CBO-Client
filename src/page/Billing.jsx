import React, { useState } from "react";
import Billtem from "../components/Billtem";

export default function Billing() {
  const [purchaserdata, setPurchaserdata] = useState({
    name: "",
    address: "",
    city: "",
    cin: "",
    dl1: "",
    dl2: "",
    gst: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPurchaserdata({ ...purchaserdata, [name]: value });
  };

  const [bill, setbill] = useState(false);

  // state for generate bill
  const [items, setItems] = useState([{ 
    sn: "", 
    description: "", 
    deliveryDate: "", 
    quantity: "", 
    rate: "", 
    cgstRate: "", 
    sgstRate: "", 
    igstRate: "" 
  }]);

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];  
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { 
      sn: "", 
      description: "", 
      deliveryDate: "", 
      quantity: "", 
      rate: "", 
      cgstRate: "", 
      sgstRate: "", 
      igstRate: "" 
    }]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 border border-red-500 border-3">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6">
          <h1 className="text-3xl font-bold">Generate Invoice</h1>
          <p className="text-blue-100 mt-1">Create professional bills with ease</p>
        </div>
        
        <div className="p-6">
          {/* Company Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Company Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input 
                  type="text" 
                  onChange={handleChange} 
                  value={purchaserdata.name} 
                  name="name" 
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Enter company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input 
                  type="text" 
                  onChange={handleChange} 
                  value={purchaserdata.city} 
                  name="city" 
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Enter city"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                <input 
                  type="text" 
                  onChange={handleChange} 
                  value={purchaserdata.address} 
                  name="address" 
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Enter delivery address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GSTIN NO.</label>
                <input 
                  type="text" 
                  onChange={handleChange} 
                  value={purchaserdata.gst} 
                  name="gst" 
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Enter GST number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CIN NO.</label>
                <input 
                  type="text" 
                  onChange={handleChange} 
                  value={purchaserdata.cin} 
                  name="cin" 
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Enter CIN number"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">DL NO. 1</label>
                  <input 
                    type="text" 
                    onChange={handleChange} 
                    value={purchaserdata.dl1} 
                    name="dl1" 
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter DL number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">DL NO. 2</label>
                  <input 
                    type="text" 
                    onChange={handleChange} 
                    value={purchaserdata.dl2} 
                    name="dl2" 
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter DL number"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Products/Items Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Items</h2>
              <button
                onClick={addItem}
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add Item
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 text-left text-gray-700">
                    <th className="p-3">S.No</th>
                    <th className="p-3">Description</th>
                    <th className="p-3">Delivery Date</th>
                    <th className="p-3">Quantity</th>
                    <th className="p-3">Rate</th>
                    <th className="p-3">CGST %</th>
                    <th className="p-3">SGST %</th>
                    <th className="p-3">IGST %</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition">
                      <td className="p-3">
                        <input
                          type="number"
                          value={item.sn}
                          onChange={(e) => handleItemChange(index, "sn", e.target.value)}
                          className="w-16 border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                          min="1"
                        />
                      </td>
                      <td className="p-3">
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => handleItemChange(index, "description", e.target.value)}
                          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                          placeholder="Item description"
                        />
                      </td>
                      <td className="p-3">
                        <input
                          type="date"
                          value={item.deliveryDate}
                          onChange={(e) => handleItemChange(index, "deliveryDate", e.target.value)}
                          className="border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                      </td>
                      <td className="p-3">
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
                          className="w-20 border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                          min="1"
                          step="1"
                        />
                      </td>
                      <td className="p-3">
                        <input
                          type="number"
                          value={item.rate}
                          onChange={(e) => handleItemChange(index, "rate", e.target.value)}
                          className="w-24 border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                          min="0"
                          step="0.01"
                        />
                      </td>
                      <td className="p-3">
                        <input
                          type="number"
                          value={item.cgstRate}
                          onChange={(e) => handleItemChange(index, "cgstRate", e.target.value)}
                          className="w-16 border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                          min="0"
                          step="0.01"
                        />
                      </td>
                      <td className="p-3">
                        <input
                          type="number"
                          value={item.sgstRate}
                          onChange={(e) => handleItemChange(index, "sgstRate", e.target.value)}
                          className="w-16 border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                          min="0"
                          step="0.01"
                        />
                      </td>
                      <td className="p-3">
                        <input
                          type="number"
                          value={item.igstRate}
                          onChange={(e) => handleItemChange(index, "igstRate", e.target.value)}
                          className="w-16 border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                          min="0"
                          step="0.01"
                        />
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() => removeItem(index)}
                          className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 transition"
                          title="Remove item"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 mt-8 pt-4 border-t border-gray-200">
            {/* <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
              Reset
            </button> */}
            <button onClick={()=>setbill(true)} className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition">
              Generate Bill
            </button>
          </div>
        </div>
      </div>

      <Billtem billitems={items} purchaserdata={purchaserdata} genBill={bill} setbill={setbill} /> 
    </div>
  );
}