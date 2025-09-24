import React, { useState } from 'react';

function BillItem({ setshow, billData = {} }) {
    // Sample data structure (in real app, this would come from props)
    const defaultBillData = {
        company: {
            name: "Manmed Health Pvt. Ltd.",
            address: "123 Business Street, Industrial Area",
            city: "Mumbai",
            state: "Maharashtra",
            pincode: "400001",
            gstin: "29AABCU9603R1ZM",
            cin: "U24246MH2021PTC368035",
            dl1: "MH-MH-21-12345",
            dl2: "MH-MH-21-12346"
        },
        supplier: {
            name: "supp com name",
            contact: "John Doe",
            email: "email@gmail.com",
            address: "Hn.343/A Mourana Rampur near gov.school Ajhai distt. Mathura",
            gstin: "A74854dhf4545dd",
            phone: "9888454548"
        },
        order: {
            number: "PO-2023-001",
            date: "2023-12-01",
            deliveryDate: "2023-12-15"
        },
        items: [
            {
                id: 1,
                medicineName: "Paracetamol 500mg",
                genericName: "Paracetamol",
                manufacturer: "ABC Pharma",
                batchNo: "BATCH001",
                description: "Tablets 10 strips",
                deliveryDate: "2023-12-15",
                mrp: 50,
                purchasePrice: 35,
                quantity: 100,
                discount: 5,
                shippingCharge: 50
            },
            {
                id: 2,
                medicineName: "Amoxicillin 250mg",
                genericName: "Amoxicillin",
                manufacturer: "XYZ Pharma",
                batchNo: "BATCH002",
                description: "Capsules 5 strips",
                deliveryDate: "2023-12-15",
                mrp: 80,
                purchasePrice: 60,
                quantity: 50,
                discount: 10,
                shippingCharge: 30
            }
        ]
    };

    const data = { ...defaultBillData, ...billData };

    const calculateTotals = () => {
        const subtotal = data.items.reduce((sum, item) => 
            sum + (item.purchasePrice * item.quantity), 0
        );
        
        const totalDiscount = data.items.reduce((sum, item) => 
            sum + (item.discount || 0), 0
        );
        
        const totalShipping = data.items.reduce((sum, item) => 
            sum + (item.shippingCharge || 0), 0
        );
        
        const taxableAmount = subtotal - totalDiscount;
        const gstRate = 12;
        const gstAmount = (taxableAmount * gstRate) / 100;
        const grandTotal = taxableAmount + gstAmount + totalShipping;

        return { 
            subtotal, 
            totalDiscount, 
            totalShipping, 
            gstAmount, 
            grandTotal, 
            taxableAmount,
            gstRate 
        };
    };

    const totals = calculateTotals();

    return (
        <div className="fixed inset-0 flex justify-center items-start min-h-screen w-full bg-gray-900/50 p-4 z-50 overflow-y-auto">
            <div className="w-full max-w-7xl bg-white rounded-lg relative shadow-2xl my-8">
                {/* Header */}
                <div className="border-b flex items-center p-6">
                    <div className="w-24 h-24 bg-blue-100 flex items-center justify-center rounded-lg border-2 border-blue-200">
                        <span className="text-blue-600 font-bold text-lg">LOGO</span>
                    </div>
                    <div className="flex items-center justify-center flex-col w-full">
                        <div className="text-3xl font-bold text-gray-800">{data.company.name}</div>
                        <div className="text-gray-600 mt-2 text-center">
                            {data.company.address}, {data.company.city}, {data.company.state} - {data.company.pincode}
                        </div>
                    </div>
                </div>

                {/* GSTIN and DL Info */}
                <div className="border-b bg-gray-50">
                    <div className="flex w-full">
                        <div className="w-1/2 pl-6 py-3 border-r font-semibold text-gray-700">
                            GSTIN: <span className="font-normal">{data.company.gstin}</span>
                        </div>
                        <div className="w-1/2 pl-6 py-3 font-semibold text-gray-700">
                            DL NO1: <span className="font-normal">{data.company.dl1}</span>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="w-1/2 pl-6 py-3 border-r font-semibold text-gray-700">
                            CIN: <span className="font-normal">{data.company.cin}</span>
                        </div>
                        <div className="w-1/2 pl-6 py-3 font-semibold text-gray-700">
                            DL NO2: <span className="font-normal">{data.company.dl2}</span>
                        </div>
                    </div>
                </div>

                {/* Title */}
                <div className="flex justify-between items-center py-4 bg-blue-50 px-6">
                    <div className="text-2xl font-bold text-blue-800">Purchase Order</div>
                    <div className="text-right">
                        <div className="font-semibold">PO Number: {data.order.number}</div>
                        <div className="text-sm text-gray-600">Date: {new Date(data.order.date).toLocaleDateString()}</div>
                    </div>
                </div>

                {/* Company and Delivery Info */}
                <div className="border-b flex">
                    <div className="w-1/2 p-6 border-r">
                        <div className="font-bold text-lg text-gray-800 mb-3">Supplier Information</div>
                        <div className="space-y-2 text-gray-700">
                            <div><strong>Name:</strong> {data.supplier.name}</div>
                            <div><strong>Contact:</strong> {data.supplier.contact}</div>
                            <div><strong>Email:</strong> {data.supplier.email}</div>
                            <div><strong>Address:</strong> {data.supplier.address}</div>
                            <div><strong>GSTIN:</strong> {data.supplier.gstin}</div>
                            <div><strong>Phone:</strong> {data.supplier.phone}</div>
                        </div>
                    </div>

                    <div className="w-1/2 p-6">
                        <div className="font-bold text-lg text-gray-800 mb-3">Delivery Address</div>
                        <div className="space-y-2 text-gray-700">
                            <div><strong>Company:</strong> {data.company.name}</div>
                            <div><strong>Address:</strong> {data.company.address}</div>
                            <div><strong>City:</strong> {data.company.city}</div>
                            <div><strong>DL No:</strong> {data.company.dl1}</div>
                            <div><strong>GSTIN:</strong> {data.company.gstin}</div>
                            <div><strong>Delivery Date:</strong> {new Date(data.order.deliveryDate).toLocaleDateString()}</div>
                        </div>
                    </div>
                </div>

                {/* Items Table */}
                <div className="px-2 py-4">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-2 py-1 text-left font-semibold">S.No.</th>
                                <th className="border border-gray-300 px-2 py-1 text-left font-semibold">Medicine Name</th>
                                <th className="border border-gray-300 px-2 py-1 text-left font-semibold">Generic Name</th>
                                <th className="border border-gray-300 px-2 py-1 text-left font-semibold">Manufacturer</th>
                                <th className="border border-gray-300 px-2 py-1 text-left font-semibold">Batch No.</th>
                                <th className="border border-gray-300 px-2 py-1 text-left font-semibold">Description</th>
                                <th className="border border-gray-300 px-2 py-1 text-left font-semibold">Delivery Date</th>
                                <th className="border border-gray-300 px-2 py-1 text-right font-semibold">MRP</th>
                                <th className="border border-gray-300 px-2 py-1 text-right font-semibold">Purchase Price</th>
                                <th className="border border-gray-300 px-2 py-1 text-right font-semibold">Quantity</th>
                                <th className="border border-gray-300 px-2 py-1 text-right font-semibold">Discount</th>
                                <th className="border border-gray-300 px-2 py-1 text-right font-semibold">Shipping</th>
                                <th className="border border-gray-300 px-2 py-1 text-right font-semibold">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.items.map((item, index) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.medicineName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.genericName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.manufacturer}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.batchNo}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.description}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {new Date(item.deliveryDate).toLocaleDateString()}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-right">₹{item.mrp.toFixed(2)}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-right">₹{item.purchasePrice.toFixed(2)}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-right">{item.quantity}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-right">₹{item.discount.toFixed(2)}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-right">₹{item.shippingCharge.toFixed(2)}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-right font-semibold">
                                        ₹{((item.purchasePrice * item.quantity) - item.discount + item.shippingCharge).toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Summary Table */}
                    <div className="mt-6 flex justify-end">
                        <table className="border-collapse border border-gray-300 w-full max-w-md">
                            <tbody>
                                <tr className="border-b border-gray-300">
                                    <td className="border border-gray-300 px-4 py-3 text-right font-semibold bg-gray-50 w-1/2">
                                        Subtotal:
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3 text-right w-1/2">
                                        ₹{totals.subtotal.toFixed(2)}
                                    </td>
                                </tr>
                                
                                <tr className="border-b border-gray-300">
                                    <td className="border border-gray-300 px-4 py-3 text-right font-semibold bg-gray-50">
                                        Total Discount:
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3 text-right">
                                        -₹{totals.totalDiscount.toFixed(2)}
                                    </td>
                                </tr>
                
                                
                                <tr className="border-b border-gray-300">
                                    <td className="border border-gray-300 px-4 py-3 text-right font-semibold bg-gray-50">
                                        GST ({totals.gstRate}%):
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3 text-right">
                                        ₹{totals.gstAmount.toFixed(2)}
                                    </td>
                                </tr>
                                
                                <tr className="border-b border-gray-300">
                                    <td className="border border-gray-300 px-4 py-3 text-right font-semibold bg-gray-50">
                                        Shipping Charges:
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3 text-right">
                                        ₹{totals.totalShipping.toFixed(2)}
                                    </td>
                                </tr>
                                
                                <tr className="bg-blue-50 font-bold">
                                    <td className="border border-gray-300 px-4 py-4 text-right text-lg">
                                        Grand Total:
                                    </td>
                                    <td className="border border-gray-300 px-4 py-4 text-right text-lg">
                                        ₹{totals.grandTotal.toFixed(2)}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t p-3 bg-gray-50">
                    <div className="text-center text-gray-600 text-sm">
                        Thank you for your business! Terms & Conditions apply.
                    </div>
                    <div className="text-center text-gray-500 text-xs ">
                        This is a computer generated invoice and does not require a physical signature.
                    </div>
                </div>

                {/* Action Buttons */}
                <button 
                    onClick={() => setshow(false)} 
                    className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors font-bold"
                >
                    X
                </button>
                
                <button 
                    onClick={() => window.print()} 
                    className="absolute -bottom-3 right-0 px-6 py-2 bg-green-600 text-white rounded-lg font-semibold shadow-lg hover:bg-green-700 transition-colors"
                >
                    Download Bill
                </button>
            </div>
        </div>
    );
}

export default BillItem;