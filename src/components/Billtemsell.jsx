


// import React, { useState } from 'react';

// function Billtemsell({ setshow }) {
//     const [billData, setBillData] = useState({
//         invoiceNumber: 'APCO/SAILF/BG72',
//         invoiceDate: '28/07/2024',
//         dueDate: '25/11/2024',
//         taxAmount: 0,
//         gstin: '09AAJCA8070J1Z6',
//         dlNo1: '10523/0003371, 10593/10000366',
//         dlNo2: '10523/0003371, 10593/10000366',
//         items: [
//             {
//                 id: 1,
//                 qty: 1600.00,
//                 hsnCode: '30044930',
//                 itemCode: '7100008',
//                 description: 'APCOMES SYP 100ML',
//                 packing: '100 ML',
//                 mrp: 185.00,
//                 batch: '044232-SO7',
//                 expiry: 'Nov-25',
//                 rate: 49.00,
//                 gstRate: 16.32,
//                 taxableValue: 65605.13,
//                 cgstRate: 6.00,
//                 cgstAmount: 3936.31,
//                 sgstRate: 6.00,
//                 sgstAmount: 3936.31
//             },
//             {
//                 id: 2,
//                 qty: 1246.00,
//                 hsnCode: '300490',
//                 itemCode: '7100017',
//                 description: 'PROXYCO-SPAS CAP',
//                 packing: '10*10',
//                 mrp: 61.00,
//                 batch: 'RHC-249/24',
//                 expiry: 'Aug-26',
//                 rate: 380.00,
//                 gstRate: 15.79,
//                 taxableValue: 299773.00,
//                 cgstRate: 6.00,
//                 cgstAmount: 23923.05,
//                 sgstRate: 6.00,
//                 sgstAmount: 23923.05
//             }
//         ]
//     });

//     const calculateTotals = () => {
//         const totals = billData.items.reduce((acc, item) => ({
//             totalQty: acc.totalQty + item.qty,
//             totalTaxable: acc.totalTaxable + item.taxableValue,
//             totalCGST: acc.totalCGST + item.cgstAmount,
//             totalSGST: acc.totalSGST + item.sgstAmount,
//             grandTotal: acc.grandTotal + item.taxableValue + item.cgstAmount + item.sgstAmount
//         }), {
//             totalQty: 0,
//             totalTaxable: 0,
//             totalCGST: 0,
//             totalSGST: 0,
//             grandTotal: 0
//         });

//         return totals;
//     };

//     const totals = calculateTotals();

//     return (
//         <div className="fixed inset-0 flex justify-center items-start min-h-screen w-full bg-gray-900/50 p-4 z-50 overflow-y-auto">
//             <div className="w-full max-w-6xl bg-white rounded-lg relative shadow-2xl my-8">
//                 {/* Header */}
//                 <div className="text-center py-4 border-b">
//                     <h1 className="text-2xl font-bold">APCO MEDICARE INDIA PRIVATE LIMITED</h1>
//                     <p className="text-sm">D65/332-C, BAUJAL OPP: BHARADWAI HOSPITAL</p>
//                     <p className="text-sm">VANAMAS JUNI CODE: 221002</p>
//                     <p className="text-sm">Mobile no.: 8810785355</p>
//                 </div>

//                 {/* Title */}
//                 <div className="text-center py-2 bg-gray-100 border-b">
//                     <h2 className="text-lg font-bold">Tax Invoice-GST</h2>
//                 </div>

//                 {/* Company Information Table */}
//                 <div className="border-b">
//                     <table className="w-full border-collapse">
//                         <tbody>
//                             <tr>
//                                 <td className="border px-3 py-2 font-semibold w-1/4">Invoice No.</td>
//                                 <td className="border px-3 py-2">{billData.invoiceNumber}</td>
//                                 <td className="border px-3 py-2 font-semibold w-1/4">Invoice Date</td>
//                                 <td className="border px-3 py-2">{billData.invoiceDate}</td>
//                             </tr>
//                             <tr>
//                                 <td className="border px-3 py-2 font-semibold">Due Date</td>
//                                 <td className="border px-3 py-2">{billData.dueDate}</td>
//                                 <td className="border px-3 py-2 font-semibold">Tax Amount</td>
//                                 <td className="border px-3 py-2">{billData.taxAmount}</td>
//                             </tr>
//                             <tr>
//                                 <td className="border px-3 py-2 font-semibold">GSTIN No.</td>
//                                 <td className="border px-3 py-2">{billData.gstin}</td>
//                                 <td className="border px-3 py-2 font-semibold">State Code</td>
//                                 <td className="border px-3 py-2">09 (Uttar Pradesh)</td>
//                             </tr>
//                             <tr>
//                                 <td className="border px-3 py-2 font-semibold">DL No. 1</td>
//                                 <td className="border px-3 py-2">{billData.dlNo1}</td>
//                                 <td className="border px-3 py-2 font-semibold">Transaction</td>
//                                 <td className="border px-3 py-2">1700.00% YEAR/SPOINT COPY</td>
//                             </tr>
//                             <tr>
//                                 <td className="border px-3 py-2 font-semibold">DL No. 2</td>
//                                 <td className="border px-3 py-2">{billData.dlNo2}</td>
//                                 <td className="border px-3 py-2 font-semibold">Date of Supply</td>
//                                 <td className="border px-3 py-2">17/08/2024</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>

//                 {/* Items Table */}
//                 <div className="overflow-x-auto">
//                     <table className="w-full border-collapse border">
//                         <thead>
//                             <tr className="bg-gray-100">
//                                 <th className="border px-2 py-1 text-xs">S.No.</th>
//                                 <th className="border px-2 py-1 text-xs">Qty</th>
//                                 <th className="border px-2 py-1 text-xs">HSN Code</th>
//                                 <th className="border px-2 py-1 text-xs">Item Code</th>
//                                 <th className="border px-2 py-1 text-xs">Description of Goods</th>
//                                 <th className="border px-2 py-1 text-xs">Packing</th>
//                                 <th className="border px-2 py-1 text-xs">MRP</th>
//                                 <th className="border px-2 py-1 text-xs">Batch</th>
//                                 <th className="border px-2 py-1 text-xs">Exp. Date</th>
//                                 <th className="border px-2 py-1 text-xs">Rate</th>
//                                 <th className="border px-2 py-1 text-xs">GST Rate</th>
//                                 <th className="border px-2 py-1 text-xs">Taxable Value</th>
//                                 <th className="border px-2 py-1 text-xs">CGST Rate</th>
//                                 <th className="border px-2 py-1 text-xs">CGST Amount</th>
//                                 <th className="border px-2 py-1 text-xs">SGST Rate</th>
//                                 <th className="border px-2 py-1 text-xs">SGST Amount</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {billData.items.map((item, index) => (
//                                 <tr key={item.id}>
//                                     <td className="border px-2 py-1 text-center">{index + 1}</td>
//                                     <td className="border px-2 py-1 text-right">{item.qty.toFixed(2)}</td>
//                                     <td className="border px-2 py-1 text-center">{item.hsnCode}</td>
//                                     <td className="border px-2 py-1 text-center">{item.itemCode}</td>
//                                     <td className="border px-2 py-1 font-semibold">{item.description}</td>
//                                     <td className="border px-2 py-1 text-center">{item.packing}</td>
//                                     <td className="border px-2 py-1 text-right">{item.mrp.toFixed(2)}</td>
//                                     <td className="border px-2 py-1 text-center font-semibold">{item.batch}</td>
//                                     <td className="border px-2 py-1 text-center">{item.expiry}</td>
//                                     <td className="border px-2 py-1 text-right">{item.rate.toFixed(2)}</td>
//                                     <td className="border px-2 py-1 text-right">{item.gstRate}%</td>
//                                     <td className="border px-2 py-1 text-right">{item.taxableValue.toFixed(2)}</td>
//                                     <td className="border px-2 py-1 text-right">{item.cgstRate}%</td>
//                                     <td className="border px-2 py-1 text-right">{item.cgstAmount.toFixed(2)}</td>
//                                     <td className="border px-2 py-1 text-right">{item.sgstRate}%</td>
//                                     <td className="border px-2 py-1 text-right">{item.sgstAmount.toFixed(2)}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>

//                 {/* Remarks */}
//                 <div className="border-b px-4 py-2">
//                     <div className="font-semibold">Remarks :</div>
//                 </div>

//                 {/* Summary Table */}
//                 <div className="overflow-x-auto">
//                     <table className="w-full border-collapse border">
//                         <thead>
//                             <tr className="bg-gray-100">
//                                 <th className="border px-2 py-1 text-xs">HSN Code</th>
//                                 <th className="border px-2 py-1 text-xs">QTY</th>
//                                 <th className="border px-2 py-1 text-xs">Taxable Amount</th>
//                                 <th className="border px-2 py-1 text-xs">CGST Rate</th>
//                                 <th className="border px-2 py-1 text-xs">CGST Amount</th>
//                                 <th className="border px-2 py-1 text-xs">SGST Rate</th>
//                                 <th className="border px-2 py-1 text-xs">SGST Amount</th>
//                                 <th className="border px-2 py-1 text-xs">Total Amount</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {billData.items.map((item, index) => (
//                                 <tr key={item.id}>
//                                     <td className="border px-2 py-1 text-center">{item.hsnCode}</td>
//                                     <td className="border px-2 py-1 text-right">{item.qty.toFixed(2)}</td>
//                                     <td className="border px-2 py-1 text-right">{item.taxableValue.toFixed(2)}</td>
//                                     <td className="border px-2 py-1 text-right">{item.cgstRate}%</td>
//                                     <td className="border px-2 py-1 text-right">{item.cgstAmount.toFixed(2)}</td>
//                                     <td className="border px-2 py-1 text-right">{item.sgstRate}%</td>
//                                     <td className="border px-2 py-1 text-right">{item.sgstAmount.toFixed(2)}</td>
//                                     <td className="border px-2 py-1 text-right font-semibold">
//                                         {(item.taxableValue + item.cgstAmount + item.sgstAmount).toFixed(2)}
//                                     </td>
//                                 </tr>
//                             ))}
//                             {/* Total Row */}
//                             <tr className="bg-gray-100 font-semibold">
//                                 <td className="border px-2 py-1 text-center">TOTAL</td>
//                                 <td className="border px-2 py-1 text-right">{totals.totalQty.toFixed(2)}</td>
//                                 <td className="border px-2 py-1 text-right">{totals.totalTaxable.toFixed(2)}</td>
//                                 <td className="border px-2 py-1 text-right">-</td>
//                                 <td className="border px-2 py-1 text-right">{totals.totalCGST.toFixed(2)}</td>
//                                 <td className="border px-2 py-1 text-right">-</td>
//                                 <td className="border px-2 py-1 text-right">{totals.totalSGST.toFixed(2)}</td>
//                                 <td className="border px-2 py-1 text-right">{totals.grandTotal.toFixed(2)}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>

//                 {/* Bank Details */}
//                 <div className="border-t px-4 py-3">
//                     <div className="font-semibold mb-2">Bank Details:</div>
//                     <div className="grid grid-cols-2 gap-2 text-sm">
//                         <div>Bank Name: HDFC BANK</div>
//                         <div>Branch: SECTOR-18, ROHINI</div>
//                         <div>Bank Acc No: 50200050456789</div>
//                         <div>IFSC Code: HDFC0000502</div>
//                     </div>
//                 </div>

//                 {/* Terms and Conditions */}
//                 <div className="border-t px-4 py-3 bg-gray-50">
//                     <div className="font-semibold mb-2">TERMS & CONDITIONS OF SALE:</div>
//                     <ol className="list-decimal list-inside text-sm space-y-1">
//                         <li>GOODS SOLD ARE NOT RETURNABLE AND OR EXCHANGEABLE.</li>
//                         <li>ALL DISPUTES SUBJECT TO VANAMASI JURISDICTION ONLY.</li>
//                         <li>BILLS NOT PAID BEFORE DUE DATE WILL ATTRACT 24% INTEREST.</li>
//                         <li>THE FINISHED TERM IS SHOWN FOR FIRST THE DATE OF MANUFACTURE.</li>
//                     </ol>
//                 </div>

//                 {/* Action Buttons */}
//                 <button 
//                     onClick={() => setshow(false)} 
//                     className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors font-bold"
//                 >
//                     X
//                 </button>
                
//                 <button 
//                     onClick={() => window.print()} 
//                     className="absolute -bottom-3 right-0 px-6 py-2 bg-green-600 text-white rounded-lg font-semibold shadow-lg hover:bg-green-700 transition-colors"
//                 >
//                     Print Bill
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Billtemsell;


import React, { useState } from 'react';

function Billtemsell({ setshow, billData = {} }) {
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
                        <div className="w-1/2 pl-6 py-1 border-r font-semibold text-gray-700">
                            GSTIN: <span className="font-normal">{data.company.gstin}</span>
                        </div>
                        <div className="w-1/2 pl-6 py-1 font-semibold text-gray-700">
                            DL NO1: <span className="font-normal">{data.company.dl1}</span>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="w-1/2 pl-6 py-1 border-r font-semibold text-gray-700">
                            CIN: <span className="font-normal">{data.company.cin}</span>
                        </div>
                        <div className="w-1/2 pl-6 py-1 font-semibold text-gray-700">
                            DL NO2: <span className="font-normal">{data.company.dl2}</span>
                        </div>
                    </div>
                </div>

                {/* Title */}
                <div className="flex justify-center items-center py-4 bg-blue-50 px-6">
                    <div className="text-2xl font-bold text-blue-800">Sellig Bill</div>
                    {/* <div className="text-right">
                        <div className="font-semibold">PO Number: {data.order.number}</div>
                        <div className="text-sm text-gray-600">Date: {new Date(data.order.date).toLocaleDateString()}</div>
                    </div> */}
                </div>

                {/* Company and Delivery Info */}
                <div className="border-b flex">

                    <div className="w-1/2 p-6">
                        <div className="font-bold text-lg text-gray-800 mb-3">Bill from.</div>
                        <div className="space-y-2 text-gray-700">
                            <div><strong>Company:</strong> {data.company.name}</div>
                            <div><strong>Address:</strong> {data.company.address}</div>
                            <div><strong>City:</strong> {data.company.city}</div>
                            <div><strong>DL No:</strong> {data.company.dl1}</div>
                            <div><strong>GSTIN:</strong> {data.company.gstin}</div>
                            {/* <div><strong>Delivery Date:</strong> {new Date(data.order.deliveryDate).toLocaleDateString()}</div> */}
                        </div>
                    </div>


                    <div className="w-1/2 p-6 border-r">
                        <div className="font-bold text-lg text-gray-800 mb-3">Bill to</div>
                        <div className="space-y-2 text-gray-700">
                            <div><strong>Name:</strong> {data.supplier.name}</div>
                            {/* <div><strong>Contact:</strong> {data.supplier.contact}</div> */}
                            <div><strong>Email:</strong> {data.supplier.email}</div>
                            <div><strong>Address:</strong> {data.supplier.address}</div>
                            {/* <div><strong>GSTIN:</strong> {data.supplier.gstin}</div> */}
                            <div><strong>Phone:</strong> {data.supplier.phone}</div>
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
                                {/* <th className="border border-gray-300 px-2 py-1 text-right font-semibold">MRP</th> */}
                                <th className="border border-gray-300 px-2 py-1 text-right font-semibold">Price</th>
                                <th className="border border-gray-300 px-2 py-1 text-right font-semibold">Quantity</th>
                                {/* <th className="border border-gray-300 px-2 py-1 text-right font-semibold">Discount</th> */}
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
                                    {/* <td className="border border-gray-300 px-4 py-2 text-right">₹{item.mrp.toFixed(2)}</td> */}
                                    <td className="border border-gray-300 px-4 py-2 text-right">₹{item.purchasePrice.toFixed(2)}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-right">{item.quantity}</td>
                                    {/* <td className="border border-gray-300 px-4 py-2 text-right">₹{item.discount.toFixed(2)}</td> */}
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
                                    <td className="border border-gray-300 px-4 py-1 text-right font-semibold bg-gray-50 w-1/2">
                                        Subtotal:
                                    </td>
                                    <td className="border border-gray-300 px-4 py-1 text-right w-1/2">
                                        ₹{totals.subtotal.toFixed(2)}
                                    </td>
                                </tr>
                                
                                <tr className="border-b border-gray-300">
                                    <td className="border border-gray-300 px-4 py-1 text-right font-semibold bg-gray-50">
                                        Total Discount:
                                    </td>
                                    <td className="border border-gray-300 px-4 py-1 text-right">
                                        -₹{totals.totalDiscount.toFixed(2)}
                                    </td>
                                </tr>
                
                                
                                <tr className="border-b border-gray-300">
                                    <td className="border border-gray-300 px-4 py-1 text-right font-semibold bg-gray-50">
                                        GST ({totals.gstRate}%):
                                    </td>
                                    <td className="border border-gray-300 px-4 py-1 text-right">
                                        ₹{totals.gstAmount.toFixed(2)}
                                    </td>
                                </tr>
                                
                                <tr className="border-b border-gray-300">
                                    <td className="border border-gray-300 px-4 py-1 text-right font-semibold bg-gray-50">
                                        Shipping Charges:
                                    </td>
                                    <td className="border border-gray-300 px-4 py-1 text-right">
                                        ₹{totals.totalShipping.toFixed(2)}
                                    </td>
                                </tr>
                                
                                <tr className="bg-blue-50 font-bold">
                                    <td className="border border-gray-300 px-4 py-2 text-right text-lg">
                                        Grand Total:
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-right text-lg">
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

export default Billtemsell;