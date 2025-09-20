import React, { useState } from 'react'

function Billtem({ billitems, purchaserdata, genBill, setbill }) {

    // Calculate amounts for display
    const calculateAmounts = (item) => {
        const amount = item.quantity * item.rate;
        const cgstAmount = amount * (item.cgstRate / 100);
        const sgstAmount = amount * (item.sgstRate / 100);
        const igstAmount = amount * (item.igstRate / 100);
        const total = amount + cgstAmount + sgstAmount + igstAmount;

        return {
            amount,
            cgstAmount,
            sgstAmount,
            igstAmount,
            total
        };
    };

    // Calculate totals for all items
    const calculateTotals = () => {
        let totalAmount = 0;
        let totalCgst = 0;
        let totalSgst = 0;
        let totalIgst = 0;
        let grandTotal = 0;

        billitems.forEach(item => {
            const amounts = calculateAmounts(item);
            totalAmount += amounts.amount;
            totalCgst += amounts.cgstAmount;
            totalSgst += amounts.sgstAmount;
            totalIgst += amounts.igstAmount;
            grandTotal += amounts.total;
        });

        return {
            totalAmount,
            totalCgst,
            totalSgst,
            totalIgst,
            grandTotal
        };
    };

    const totals = calculateTotals();

    // console.log("purchaserdata=>",purchaserdata)

    return (
        <div className={`${genBill ? "" : "hidden"} flex justify-end items-center min-h-screen w-full bg-gray-900/50 p-4`}>
            <div className='w-full max-w-6xl bg-white rounded-lg relative '>
                {/* Header */}
                <div className='border-b flex items-center'>
                    <div className='ml-5 py-5 w-24 h-24 bg-gray-200 flex items-center justify-center'>LOGO</div>
                    <div className='w-full flex items-center text-2xl font-semibold justify-center'>{purchaserdata.name}</div>
                </div>

                {/* GSTIN and DL Info */}
                <div className='border-b'>
                    <div className='flex w-full'>
                        <div className='w-1/2 pl-3 py-2 border-r'>GSTIN NO: {purchaserdata.gst}</div>
                        <div className='w-1/2 pl-3 py-2'>DL NO1: {purchaserdata.dl1}</div>
                    </div>
                    <div className='flex w-full'>
                        <div className='w-1/2 pl-3 py-2 border-r'>CIN NO: {purchaserdata.cin}</div>
                        <div className='w-1/2 pl-3 py-2'>DL NO2: {purchaserdata.dl2}</div>
                    </div>
                </div>



                {/* Title */}
                <div className='flex justify-center text-xl font-semibold py-2 bg-gray-100'>
                    Purchase Order
                </div>

                {/* Company and Delivery Info */}
                <div className='border-b flex'>
                    <div className='w-1/2 p-3 border-r'>
                        <div className='font-semibold'>Manmed Health Pvt. Ltd.</div>
                        <div>Hn.343/A Mourana Rampur near gov.school Ajhai distt. Mathura</div>
                        <div>Mobile/phone. 9888454548</div>
                        <div>GST NO. A74854dhf4545dd</div>
                    </div>
                    <div className='w-1/2 p-3'>
                        <div className='font-semibold'>Delivery Address:</div>
                        <div>{purchaserdata.name}</div>
                        <div>{purchaserdata.address}</div>
                        <div>{purchaserdata.city}</div>
                        <div>DL No: {purchaserdata.dl1}</div>
                        <div>GST NO: {purchaserdata.gst}</div>
                    </div>
                </div>

                {/* Items Table */}
                <div className="overflow-x-auto">
                    <table className='w-full border-collapse'>
                        <thead>
                            <tr className='bg-gray-100'>
                                <th className='border px-2 py-1 text-xs'>SN.</th>
                                <th className='border px-2 py-1 text-xs w-full'>Description</th>
                                <th className='border px-2 py-1 text-xs'>Delivery Date</th>
                                <th className='border px-2 py-1 text-xs'>Quantity</th>
                                <th className='border px-2 py-1 text-xs'>Rate</th>
                                <th className='border px-2 py-1 text-xs'>Amount</th>
                                <th className='border px-2 py-1 text-xs' colSpan="2">CGST</th>
                                <th className='border px-2 py-1 text-xs' colSpan="2">SGST</th>
                                <th className='border px-2 py-1 text-xs' colSpan="2">IGST</th>
                            </tr>

                            <tr className='bg-gray-50'>
                                <th className='border px-2 py-1'></th>
                                <th className='border px-2 py-1'></th>
                                <th className='border px-2 py-1'></th>
                                <th className='border px-2 py-1'></th>
                                <th className='border px-2 py-1'></th>
                                <th className='border px-2 py-1'></th>
                                <th className='border px-2 py-1 text-xs'>Rate (%)</th>
                                <th className='border px-2 py-1 text-xs'>Amount</th>
                                <th className='border px-2 py-1 text-xs'>Rate (%)</th>
                                <th className='border px-2 py-1 text-xs'>Amount</th>
                                <th className='border px-2 py-1 text-xs'>Rate (%)</th>
                                <th className='border px-2 py-1 text-xs'>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {billitems.map((data, index) => {
                                const amounts = calculateAmounts(data);
                                return (
                                    <tr key={index}>
                                        <td className='border px-2 py-1'>{data.sn}</td>
                                        <td className='border px-2 py-1'>{data.description}</td>
                                        <td className='border px-2 py-1'>{data.deliveryDate}</td>
                                        <td className='border px-2 py-1 text-right'>{data.quantity}</td>
                                        <td className='border px-2 py-1 text-right'>{data.rate}</td>
                                        <td className='border px-2 py-1 text-right'>{amounts.amount.toFixed(2)}</td>
                                        <td className='border px-2 py-1 text-right'>{data.cgstRate}</td>
                                        <td className='border px-2 py-1 text-right'>{amounts.cgstAmount.toFixed(2)}</td>
                                        <td className='border px-2 py-1 text-right'>{data.sgstRate}</td>
                                        <td className='border px-2 py-1 text-right'>{amounts.sgstAmount.toFixed(2)}</td>
                                        <td className='border px-2 py-1 text-right'>{data.igstRate}</td>
                                        <td className='border px-2 py-1 text-right'>{amounts.igstAmount.toFixed(2)}</td>
                                    </tr>
                                );
                            })}

                            {/* Summary Row */}
                            <tr className='bg-gray-100 font-semibold'>
                                <td className='border px-2 py-1 text-right' colSpan="5">Total:</td>
                                <td className='border px-2 py-1 text-right'>{totals.totalAmount.toFixed(2)}</td>
                                <td className='border px-2 py-1 text-right' colSpan="2">{totals.totalCgst.toFixed(2)}</td>
                                <td className='border px-2 py-1 text-right' colSpan="2">{totals.totalSgst.toFixed(2)}</td>
                                <td className='border px-2 py-1 text-right' colSpan="2">{totals.totalIgst.toFixed(2)}</td>
                            </tr>
                            <tr className='bg-gray-100 font-semibold'>
                                <td className='border px-2 py-1 text-right' colSpan="11">Grand Total:</td>
                                <td className='border px-2 py-1 text-right'>{totals.grandTotal.toFixed(2)}</td>
                            </tr>


                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                {/* <div className='border-t p-3 text-sm text-center'>
                    This is a computer generated invoice and does not require a signature
                </div> */}

                <div className=' py-5 text-sm text-center'>

                </div>

                <div onClick={() => setbill(false)} className='cursor-pointer rounded-lg absolute -top-[35px] px-2 text-xl bg-white font-semibold right-0'>X</div>
                <div className=' absolute right-0 -bottom-[38px] px-2 py-1 rounded-lg font-semibold bg-green-700 text-white cursor-pointer '>Download Bill</div>
            </div>
        </div>
    )
}

export default Billtem;






