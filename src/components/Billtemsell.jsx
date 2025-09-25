


import React, { useState } from 'react';

function Billtemsell({ setshow }) {
    const [billData, setBillData] = useState({
        invoiceNumber: 'APCO/SAILF/BG72',
        invoiceDate: '28/07/2024',
        dueDate: '25/11/2024',
        taxAmount: 0,
        gstin: '09AAJCA8070J1Z6',
        dlNo1: '10523/0003371, 10593/10000366',
        dlNo2: '10523/0003371, 10593/10000366',
        items: [
            {
                id: 1,
                qty: 1600.00,
                hsnCode: '30044930',
                itemCode: '7100008',
                description: 'APCOMES SYP 100ML',
                packing: '100 ML',
                mrp: 185.00,
                batch: '044232-SO7',
                expiry: 'Nov-25',
                rate: 49.00,
                gstRate: 16.32,
                taxableValue: 65605.13,
                cgstRate: 6.00,
                cgstAmount: 3936.31,
                sgstRate: 6.00,
                sgstAmount: 3936.31
            },
            {
                id: 2,
                qty: 1246.00,
                hsnCode: '300490',
                itemCode: '7100017',
                description: 'PROXYCO-SPAS CAP',
                packing: '10*10',
                mrp: 61.00,
                batch: 'RHC-249/24',
                expiry: 'Aug-26',
                rate: 380.00,
                gstRate: 15.79,
                taxableValue: 299773.00,
                cgstRate: 6.00,
                cgstAmount: 23923.05,
                sgstRate: 6.00,
                sgstAmount: 23923.05
            }
        ]
    });

    const calculateTotals = () => {
        const totals = billData.items.reduce((acc, item) => ({
            totalQty: acc.totalQty + item.qty,
            totalTaxable: acc.totalTaxable + item.taxableValue,
            totalCGST: acc.totalCGST + item.cgstAmount,
            totalSGST: acc.totalSGST + item.sgstAmount,
            grandTotal: acc.grandTotal + item.taxableValue + item.cgstAmount + item.sgstAmount
        }), {
            totalQty: 0,
            totalTaxable: 0,
            totalCGST: 0,
            totalSGST: 0,
            grandTotal: 0
        });

        return totals;
    };

    const totals = calculateTotals();

    return (
        <div className="fixed inset-0 flex justify-center items-start min-h-screen w-full bg-gray-900/50 p-4 z-50 overflow-y-auto">
            <div className="w-full max-w-6xl bg-white rounded-lg relative shadow-2xl my-8">
                {/* Header */}
                <div className="text-center py-4 border-b">
                    <h1 className="text-2xl font-bold">APCO MEDICARE INDIA PRIVATE LIMITED</h1>
                    <p className="text-sm">D65/332-C, BAUJAL OPP: BHARADWAI HOSPITAL</p>
                    <p className="text-sm">VANAMAS JUNI CODE: 221002</p>
                    <p className="text-sm">Mobile no.: 8810785355</p>
                </div>

                {/* Title */}
                <div className="text-center py-2 bg-gray-100 border-b">
                    <h2 className="text-lg font-bold">Tax Invoice-GST</h2>
                </div>

                {/* Company Information Table */}
                <div className="border-b">
                    <table className="w-full border-collapse">
                        <tbody>
                            <tr>
                                <td className="border px-3 py-2 font-semibold w-1/4">Invoice No.</td>
                                <td className="border px-3 py-2">{billData.invoiceNumber}</td>
                                <td className="border px-3 py-2 font-semibold w-1/4">Invoice Date</td>
                                <td className="border px-3 py-2">{billData.invoiceDate}</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2 font-semibold">Due Date</td>
                                <td className="border px-3 py-2">{billData.dueDate}</td>
                                <td className="border px-3 py-2 font-semibold">Tax Amount</td>
                                <td className="border px-3 py-2">{billData.taxAmount}</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2 font-semibold">GSTIN No.</td>
                                <td className="border px-3 py-2">{billData.gstin}</td>
                                <td className="border px-3 py-2 font-semibold">State Code</td>
                                <td className="border px-3 py-2">09 (Uttar Pradesh)</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2 font-semibold">DL No. 1</td>
                                <td className="border px-3 py-2">{billData.dlNo1}</td>
                                <td className="border px-3 py-2 font-semibold">Transaction</td>
                                <td className="border px-3 py-2">1700.00% YEAR/SPOINT COPY</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2 font-semibold">DL No. 2</td>
                                <td className="border px-3 py-2">{billData.dlNo2}</td>
                                <td className="border px-3 py-2 font-semibold">Date of Supply</td>
                                <td className="border px-3 py-2">17/08/2024</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Items Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border px-2 py-1 text-xs">S.No.</th>
                                <th className="border px-2 py-1 text-xs">Qty</th>
                                <th className="border px-2 py-1 text-xs">HSN Code</th>
                                <th className="border px-2 py-1 text-xs">Item Code</th>
                                <th className="border px-2 py-1 text-xs">Description of Goods</th>
                                <th className="border px-2 py-1 text-xs">Packing</th>
                                <th className="border px-2 py-1 text-xs">MRP</th>
                                <th className="border px-2 py-1 text-xs">Batch</th>
                                <th className="border px-2 py-1 text-xs">Exp. Date</th>
                                <th className="border px-2 py-1 text-xs">Rate</th>
                                <th className="border px-2 py-1 text-xs">GST Rate</th>
                                <th className="border px-2 py-1 text-xs">Taxable Value</th>
                                <th className="border px-2 py-1 text-xs">CGST Rate</th>
                                <th className="border px-2 py-1 text-xs">CGST Amount</th>
                                <th className="border px-2 py-1 text-xs">SGST Rate</th>
                                <th className="border px-2 py-1 text-xs">SGST Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {billData.items.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="border px-2 py-1 text-center">{index + 1}</td>
                                    <td className="border px-2 py-1 text-right">{item.qty.toFixed(2)}</td>
                                    <td className="border px-2 py-1 text-center">{item.hsnCode}</td>
                                    <td className="border px-2 py-1 text-center">{item.itemCode}</td>
                                    <td className="border px-2 py-1 font-semibold">{item.description}</td>
                                    <td className="border px-2 py-1 text-center">{item.packing}</td>
                                    <td className="border px-2 py-1 text-right">{item.mrp.toFixed(2)}</td>
                                    <td className="border px-2 py-1 text-center font-semibold">{item.batch}</td>
                                    <td className="border px-2 py-1 text-center">{item.expiry}</td>
                                    <td className="border px-2 py-1 text-right">{item.rate.toFixed(2)}</td>
                                    <td className="border px-2 py-1 text-right">{item.gstRate}%</td>
                                    <td className="border px-2 py-1 text-right">{item.taxableValue.toFixed(2)}</td>
                                    <td className="border px-2 py-1 text-right">{item.cgstRate}%</td>
                                    <td className="border px-2 py-1 text-right">{item.cgstAmount.toFixed(2)}</td>
                                    <td className="border px-2 py-1 text-right">{item.sgstRate}%</td>
                                    <td className="border px-2 py-1 text-right">{item.sgstAmount.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Remarks */}
                <div className="border-b px-4 py-2">
                    <div className="font-semibold">Remarks :</div>
                </div>

                {/* Summary Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border px-2 py-1 text-xs">HSN Code</th>
                                <th className="border px-2 py-1 text-xs">QTY</th>
                                <th className="border px-2 py-1 text-xs">Taxable Amount</th>
                                <th className="border px-2 py-1 text-xs">CGST Rate</th>
                                <th className="border px-2 py-1 text-xs">CGST Amount</th>
                                <th className="border px-2 py-1 text-xs">SGST Rate</th>
                                <th className="border px-2 py-1 text-xs">SGST Amount</th>
                                <th className="border px-2 py-1 text-xs">Total Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {billData.items.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="border px-2 py-1 text-center">{item.hsnCode}</td>
                                    <td className="border px-2 py-1 text-right">{item.qty.toFixed(2)}</td>
                                    <td className="border px-2 py-1 text-right">{item.taxableValue.toFixed(2)}</td>
                                    <td className="border px-2 py-1 text-right">{item.cgstRate}%</td>
                                    <td className="border px-2 py-1 text-right">{item.cgstAmount.toFixed(2)}</td>
                                    <td className="border px-2 py-1 text-right">{item.sgstRate}%</td>
                                    <td className="border px-2 py-1 text-right">{item.sgstAmount.toFixed(2)}</td>
                                    <td className="border px-2 py-1 text-right font-semibold">
                                        {(item.taxableValue + item.cgstAmount + item.sgstAmount).toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                            {/* Total Row */}
                            <tr className="bg-gray-100 font-semibold">
                                <td className="border px-2 py-1 text-center">TOTAL</td>
                                <td className="border px-2 py-1 text-right">{totals.totalQty.toFixed(2)}</td>
                                <td className="border px-2 py-1 text-right">{totals.totalTaxable.toFixed(2)}</td>
                                <td className="border px-2 py-1 text-right">-</td>
                                <td className="border px-2 py-1 text-right">{totals.totalCGST.toFixed(2)}</td>
                                <td className="border px-2 py-1 text-right">-</td>
                                <td className="border px-2 py-1 text-right">{totals.totalSGST.toFixed(2)}</td>
                                <td className="border px-2 py-1 text-right">{totals.grandTotal.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Bank Details */}
                <div className="border-t px-4 py-3">
                    <div className="font-semibold mb-2">Bank Details:</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>Bank Name: HDFC BANK</div>
                        <div>Branch: SECTOR-18, ROHINI</div>
                        <div>Bank Acc No: 50200050456789</div>
                        <div>IFSC Code: HDFC0000502</div>
                    </div>
                </div>

                {/* Terms and Conditions */}
                <div className="border-t px-4 py-3 bg-gray-50">
                    <div className="font-semibold mb-2">TERMS & CONDITIONS OF SALE:</div>
                    <ol className="list-decimal list-inside text-sm space-y-1">
                        <li>GOODS SOLD ARE NOT RETURNABLE AND OR EXCHANGEABLE.</li>
                        <li>ALL DISPUTES SUBJECT TO VANAMASI JURISDICTION ONLY.</li>
                        <li>BILLS NOT PAID BEFORE DUE DATE WILL ATTRACT 24% INTEREST.</li>
                        <li>THE FINISHED TERM IS SHOWN FOR FIRST THE DATE OF MANUFACTURE.</li>
                    </ol>
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
                    Print Bill
                </button>
            </div>
        </div>
    );
}

export default Billtemsell;