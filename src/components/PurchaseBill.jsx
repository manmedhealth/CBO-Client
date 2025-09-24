import React, { useState, useEffect } from 'react';
import { FaSearch, FaPlus, FaTrash, FaBox, FaTruck, FaSave, FaPrint, FaUpload, FaChevronDown } from 'react-icons/fa';
import Billtem from './Billtem';

const PurchaseBill = () => {
  // State for form data
  const [billData , setBillData] = useState({
    supplierInfo: {
      name: '',
      contactPerson: '',
      phone: '',
      email: '',
      address: '',
      gstin: ''
    },
    items: [],
    purchaseDate: new Date().toISOString().split('T')[0],
    invoiceNumber: '',
    paymentMethod: 'cash',
    paymentTerms: 'immediate',
    discount: 0,
    taxRate: 12, // 12% GST for purchase
    shippingCharges: 0,
    notes: '',
    attachment: null
  });

  // State for supplier selection
  const [supplierSearch, setSupplierSearch] = useState('');
  const [showSupplierDropdown, setShowSupplierDropdown] = useState(false);
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);

  // state for show & hide the Billtem com
  const [show, setshow] = useState(false)

  // State for medicine search and management
  const [medicineSearch, setMedicineSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Sample suppliers data
  const [suppliers] = useState([
    { id: 1, name: 'MediSupply Distributors', contactPerson: 'Raj Sharma', phone: '9876543210', email: 'raj@medisupply.com', address: '123 Medical Road, Mumbai', gstin: '07AABCU9603R1ZM' },
    { id: 2, name: 'PharmaWholesale Inc', contactPerson: 'Priya Patel', phone: '9876543211', email: 'priya@pharmawholesale.com', address: '456 Pharma Street, Delhi', gstin: '09BXYPS1234Q1Z2' },
    { id: 3, name: 'Healthcare Suppliers', contactPerson: 'Amit Verma', phone: '9876543212', email: 'amit@healthcaresuppliers.com', address: '789 Health Avenue, Bangalore', gstin: '06ABCDE1234F1G2' },
    { id: 4, name: 'MediCorp Distributors', contactPerson: 'Sneha Reddy', phone: '9876543213', email: 'sneha@medicorp.com', address: '321 Distribution Park, Chennai', gstin: '33AACCBB1234C1D2' },
    { id: 5, name: 'Apollo Medical Supplies', contactPerson: 'Karan Singh', phone: '9876543214', email: 'karan@apollomed.com', address: '654 Supply Zone, Hyderabad', gstin: '36AAPPLL1234E1F2' }
  ]);

  // Sample existing medicines for search
  const [existingMedicines] = useState([
    { id: 1, name: 'Paracetamol 500mg', genericName: 'Paracetamol', manufacturer: 'ABC Pharma', category: 'Analgesic' },
    { id: 2, name: 'Amoxicillin 250mg', genericName: 'Amoxicillin', manufacturer: 'XYZ Pharma', category: 'Antibiotic' },
    { id: 3, name: 'Ibuprofen 400mg', genericName: 'Ibuprofen', manufacturer: 'MediCorp', category: 'NSAID' },
    { id: 4, name: 'Vitamin C 500mg', genericName: 'Ascorbic Acid', manufacturer: 'HealthPlus', category: 'Vitamin' },
    { id: 5, name: 'Cetirizine 10mg', genericName: 'Cetirizine', manufacturer: 'AllergyCare', category: 'Antihistamine' }
  ]);

  // Filter suppliers based on search
  useEffect(() => {
    if (supplierSearch.trim()) {
      const filtered = suppliers.filter(supplier =>
        supplier.name.toLowerCase().includes(supplierSearch.toLowerCase()) ||
        supplier.contactPerson.toLowerCase().includes(supplierSearch.toLowerCase()) ||
        supplier.gstin.toLowerCase().includes(supplierSearch.toLowerCase())
      );
      setFilteredSuppliers(filtered);
    } else {
      setFilteredSuppliers(suppliers);
    }
  }, [supplierSearch, suppliers]);

  // Calculate totals
  const calculateTotals = () => {
    const subtotal = billData.items.reduce((sum, item) => sum + (item.purchasePrice * item.quantity), 0);
    const taxAmount = (subtotal - billData.discount + billData.shippingCharges) * (billData.taxRate / 100);
    const finalAmount = subtotal - billData.discount + billData.shippingCharges + taxAmount;

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
      const results = existingMedicines.filter(medicine =>
        medicine.name.toLowerCase().includes(medicineSearch.toLowerCase()) ||
        medicine.genericName.toLowerCase().includes(medicineSearch.toLowerCase())
      );
      setSearchResults(results);
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  }, [medicineSearch]);

  // Handle supplier selection
  const handleSupplierSelect = (supplier) => {
    setBillData(prev => ({
      ...prev,
      supplierInfo: {
        name: supplier.name,
        contactPerson: supplier.contactPerson,
        phone: supplier.phone,
        email: supplier.email,
        address: supplier.address,
        gstin: supplier.gstin
      }
    }));
    setSupplierSearch(supplier.name);
    setShowSupplierDropdown(false);
  };

  // Handle supplier search input focus
  const handleSupplierSearchFocus = () => {
    setShowSupplierDropdown(true);
    setFilteredSuppliers(suppliers);
  };

  // Add medicine to purchase
  const addMedicineToPurchase = (medicine = null) => {
    if (medicine) {
      // Add existing medicine
      const newItem = {
        id: medicine.id,
        name: medicine.name,
        genericName: medicine.genericName,
        manufacturer: medicine.manufacturer,
        category: medicine.category,
        batchNumber: '',
        expiryDate: '',
        mrp: 0,
        purchasePrice: 0,
        quantity: 1,
        isNew: false
      };
      
      setBillData(prev => ({
        ...prev,
        items: [...prev.items, newItem]
      }));
    } else {
      // Add new medicine
      const newItem = {
        id: Date.now(), // Temporary ID
        name: '',
        genericName: '',
        manufacturer: '',
        category: '',
        batchNumber: '',
        expiryDate: '',
        mrp: 0,
        purchasePrice: 0,
        quantity: 1,
        isNew: true
      };
      
      setBillData(prev => ({
        ...prev,
        items: [...prev.items, newItem]
      }));
    }
    
    setMedicineSearch('');
    setShowSearchResults(false);
  };

  // Update medicine item
  const updateMedicineItem = (id, field, value) => {
    setBillData(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  // Remove item from purchase
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

  // Handle file attachment
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBillData(prev => ({
        ...prev,
        attachment: file
      }));
    }
  };

  // Generate invoice number
  const generateInvoiceNumber = () => {
    const timestamp = Date.now();
    setBillData(prev => ({
      ...prev,
      invoiceNumber: `PINV-${timestamp}`
    }));
  };

  // Validate form
  const validateForm = () => {
    if (!billData.supplierInfo.name) {
      alert('Please select or enter supplier name');
      return false;
    }

    if (!billData.invoiceNumber) {
      alert('Please enter invoice number');
      return false;
    }

    if (billData.items.length === 0) {
      alert('Please add at least one medicine');
      return false;
    }

    // Validate medicine items
    for (const item of billData.items) {
      if (!item.name || !item.batchNumber || !item.expiryDate || item.purchasePrice <= 0 || item.quantity <= 0) {
        alert('Please fill all required fields for medicines');
        return false;
      }
    }

    return true;
  };

  // Handle bill submission
  const handleSubmit = (action) => {
    if (!validateForm()) return;

    const purchasePayload = {
      ...billData,
      date: new Date().toISOString(),
      subtotal,
      taxAmount,
      finalAmount,
      status: 'completed',
      type: 'purchase'
    };

    console.log('Purchase Bill Data:', purchasePayload);

    if (action === 'save') {
      // Save purchase bill logic here
      alert('Purchase bill saved successfully!');
      // Reset form
      setBillData({
        supplierInfo: { name: '', contactPerson: '', phone: '', email: '', address: '', gstin: '' },
        items: [],
        purchaseDate: new Date().toISOString().split('T')[0],
        invoiceNumber: '',
        paymentMethod: 'cash',
        paymentTerms: 'immediate',
        discount: 0,
        taxRate: 12,
        shippingCharges: 0,
        notes: '',
        attachment: null
      });
      setSupplierSearch('');
    } else if (action === 'print') {
      // Print logic here
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 relative">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="bg-green-600 text-white p-6 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold flex items-center">
                <FaTruck className="h-6 w-6 mr-2" />
                Generate Purchase Bill
              </h1>
              <p className="text-green-100">Create purchase receipt for supplier transactions</p>
            </div>
            <button
              onClick={generateInvoiceNumber}
              className="bg-green-700 hover:bg-green-800 px-4 py-2 rounded-md text-sm flex items-center"
            >
              Generate Invoice No.
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Supplier Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <FaBox className="h-5 w-5 mr-2" />
              Supplier Information
            </h2>
            
            {/* Supplier Search and Select */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search and Select Supplier *
              </label>
              <div className="relative">
                <div className="flex items-center">
                  <FaSearch className="absolute left-3 text-gray-400 z-10" />
                  <input
                    type="text"
                    value={supplierSearch}
                    onChange={(e) => setSupplierSearch(e.target.value)}
                    onFocus={handleSupplierSearchFocus}
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 relative"
                    placeholder="Search suppliers by name, contact person, or GSTIN..."
                  />
                  <FaChevronDown className="absolute right-3 text-gray-400 cursor-pointer" 
                    onClick={() => setShowSupplierDropdown(!showSupplierDropdown)} />
                </div>

                {/* Supplier Dropdown */}
                {showSupplierDropdown && (
                  <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {filteredSuppliers.length > 0 ? (
                      filteredSuppliers.map(supplier => (
                        <div
                          key={supplier.id}
                          className="px-4 py-3 hover:bg-green-50 cursor-pointer border-b border-gray-100"
                          onClick={() => handleSupplierSelect(supplier)}
                        >
                          <div className="font-medium text-green-700">{supplier.name}</div>
                          <div className="text-sm text-gray-600">Contact: {supplier.contactPerson}</div>
                          <div className="text-sm text-gray-500">Phone: {supplier.phone} | GSTIN: {supplier.gstin}</div>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-gray-500">No suppliers found</div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Selected Supplier Info */}
              {billData.supplierInfo.name && (
                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-green-800">{billData.supplierInfo.name}</h4>
                      <p className="text-sm text-green-600">Contact: {billData.supplierInfo.contactPerson}</p>
                      <p className="text-sm text-green-600">Phone: {billData.supplierInfo.phone} | GSTIN: {billData.supplierInfo.gstin}</p>
                    </div>
                    <button
                      onClick={() => {
                        setBillData(prev => ({
                          ...prev,
                          supplierInfo: { name: '', contactPerson: '', phone: '', email: '', address: '', gstin: '' }
                        }));
                        setSupplierSearch('');
                      }}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Change
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Supplier Details Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Supplier Name *
                </label>
                <input
                  type="text"
                  value={billData.supplierInfo.name}
                  onChange={(e) => handleInputChange('supplierInfo', 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter supplier name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Person
                </label>
                <input
                  type="text"
                  value={billData.supplierInfo.contactPerson}
                  onChange={(e) => handleInputChange('supplierInfo', 'contactPerson', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Contact person name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={billData.supplierInfo.phone}
                  onChange={(e) => handleInputChange('supplierInfo', 'phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  GSTIN Number *
                </label>
                <input
                  type="text"
                  value={billData.supplierInfo.gstin}
                  onChange={(e) => handleInputChange('supplierInfo', 'gstin', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter GSTIN"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={billData.supplierInfo.email}
                  onChange={(e) => handleInputChange('supplierInfo', 'email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  value={billData.supplierInfo.address}
                  onChange={(e) => handleInputChange('supplierInfo', 'address', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter supplier address"
                />
              </div>
            </div>
          </div>

          {/* Purchase Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Purchase Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Purchase Date *
                </label>
                <input
                  type="date"
                  value={billData.purchaseDate}
                  onChange={(e) => setBillData(prev => ({ ...prev, purchaseDate: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Invoice Number *
                </label>
                <input
                  type="text"
                  value={billData.invoiceNumber}
                  onChange={(e) => setBillData(prev => ({ ...prev, invoiceNumber: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Supplier invoice number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Payment Method
                </label>
                <select
                  value={billData.paymentMethod}
                  onChange={(e) => setBillData(prev => ({ ...prev, paymentMethod: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="cash">Cash</option>
                  <option value="bank">Bank Transfer</option>
                  <option value="cheque">Cheque</option>
                  <option value="credit">Credit</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Payment Terms
                </label>
                <select
                  value={billData.paymentTerms}
                  onChange={(e) => setBillData(prev => ({ ...prev, paymentTerms: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="immediate">Immediate</option>
                  <option value="7days">7 Days</option>
                  <option value="15days">15 Days</option>
                  <option value="30days">30 Days</option>
                </select>
              </div>
            </div>
          </div>

          {/* Medicine Management */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Medicines Purchase</h2>
            
            {/* Medicine Search and Add */}
            <div className="mb-4">
              <div className="flex gap-2 mb-2">
                <div className="flex-1 relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    value={medicineSearch}
                    onChange={(e) => setMedicineSearch(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Search existing medicines..."
                  />
                </div>
                <button
                  onClick={() => addMedicineToPurchase()}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  <FaPlus className="h-4 w-4 mr-1" />
                  New Medicine
                </button>
              </div>

              {/* Search Results Dropdown */}
              {showSearchResults && (
                <div className="absolute z-10 w-full md:w-1/2 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map(medicine => (
                      <div
                        key={medicine.id}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                        onClick={() => addMedicineToPurchase(medicine)}
                      >
                        <div className="font-medium">{medicine.name}</div>
                        <div className="text-sm text-gray-500 ">
                          {medicine.genericName} | {medicine.manufacturer} | {medicine.category}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500">No medicines found</div>
                  )}
                </div>
              )}
            </div>

            {/* Medicines Table */}
            {billData.items.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Medicine Details</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Batch/Expiry</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">MRP</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Purchase Price</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Quantity</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Total</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billData.items.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">
                          <div className="space-y-1">
                            <input
                              type="text"
                              value={item.name}
                              onChange={(e) => updateMedicineItem(item.id, 'name', e.target.value)}
                              className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                              placeholder="Medicine name *"
                            />
                            <div className="grid grid-cols-3 gap-1">
                              <input
                                type="text"
                                value={item.genericName}
                                onChange={(e) => updateMedicineItem(item.id, 'genericName', e.target.value)}
                                className="px-2 py-1 border border-gray-300 rounded text-sm"
                                placeholder="Generic name"
                              />
                              <input
                                type="text"
                                value={item.manufacturer}
                                onChange={(e) => updateMedicineItem(item.id, 'manufacturer', e.target.value)}
                                className="px-2 py-1 border border-gray-300 rounded text-sm"
                                placeholder="Manufacturer"
                              />
                              <input
                                type="text"
                                value={item.category}
                                onChange={(e) => updateMedicineItem(item.id, 'category', e.target.value)}
                                className="px-2 py-1 border border-gray-300 rounded text-sm"
                                placeholder="Category"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <div className="space-y-1">
                            <input
                              type="text"
                              value={item.batchNumber}
                              onChange={(e) => updateMedicineItem(item.id, 'batchNumber', e.target.value)}
                              className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                              placeholder="Batch number *"
                            />
                            <input
                              type="date"
                              value={item.expiryDate}
                              onChange={(e) => updateMedicineItem(item.id, 'expiryDate', e.target.value)}
                              className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                              placeholder="Expiry date *"
                            />
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <input
                            type="number"
                            value={item.mrp}
                            onChange={(e) => updateMedicineItem(item.id, 'mrp', parseFloat(e.target.value) || 0)}
                            className="w-full px-2 py-1 border border-gray-300 rounded text-sm text-center"
                            placeholder="MRP"
                            min="0"
                            step="0.01"
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <input
                            type="number"
                            value={item.purchasePrice}
                            onChange={(e) => updateMedicineItem(item.id, 'purchasePrice', parseFloat(e.target.value) || 0)}
                            className="w-full px-2 py-1 border border-gray-300 rounded text-sm text-center"
                            placeholder="Price *"
                            min="0"
                            step="0.01"
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateMedicineItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                            className="w-full px-2 py-1 border border-gray-300 rounded text-sm text-center"
                            placeholder="Qty *"
                            min="1"
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          ₹{(item.purchasePrice * item.quantity).toFixed(2)}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <FaTrash className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <FaBox className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                <p>No medicines added. Search existing medicines or add new ones.</p>
              </div>
            )}
          </div>

          {/* Additional Charges and Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {/* Additional Charges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Discount (₹)
                  </label>
                  <input
                    type="number"
                    value={billData.discount}
                    onChange={(e) => setBillData(prev => ({ ...prev, discount: Math.max(0, parseFloat(e.target.value) || 0) }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    min="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Shipping Charges (₹)
                  </label>
                  <input
                    type="number"
                    value={billData.shippingCharges}
                    onChange={(e) => setBillData(prev => ({ ...prev, shippingCharges: Math.max(0, parseFloat(e.target.value) || 0) }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    min="0"
                  />
                </div>
              </div>

              {/* File Attachment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Attach Invoice Document
                </label>
                <div className="flex items-center space-x-2">
                  <label className="flex items-center px-3 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200">
                    <FaUpload className="h-4 w-4 mr-2" />
                    Choose File
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </label>
                  <span className="text-sm text-gray-500">
                    {billData.attachment ? billData.attachment.name : 'No file chosen'}
                  </span>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notes (Optional)
                </label>
                <textarea
                  value={billData.notes}
                  onChange={(e) => setBillData(prev => ({ ...prev, notes: e.target.value }))}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Any additional notes about this purchase..."
                />
              </div>
            </div>

            {/* Calculation Summary */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Purchase Summary</h3>
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
                  <span>Shipping:</span>
                  <span>+₹{billData.shippingCharges.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST ({billData.taxRate}%):</span>
                  <span>+₹{taxAmount.toFixed(2)}</span>
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
              <FaSave className="h-4 w-4 mr-2" />
              Save Purchase
            </button> */}
            <button
              onClick={() => setshow(true)}
              className="flex items-center px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <FaSave className="h-4 w-4 mr-2" />
              Gen Bill
            </button>
            <button
              onClick={() => handleSubmit('print')}
              className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <FaPrint className="h-4 w-4 mr-2" />
              Save & Print
            </button>
          </div>
        </div>
      </div>
      <div className={`${show?'':'hidden'} border  absolute top-0 left-0`}> 
            <Billtem setshow={setshow} />
      </div>
    </div>
  );
};

export default PurchaseBill;