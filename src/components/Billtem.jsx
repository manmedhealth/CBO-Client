import React from 'react'

function Billtem() {
    return (
        <div className='border border-4 border-red-500 flex justify-center items-center h-[900px] bg-gray-900'>
            <div className='w-[60%] border border-red-500'>
                <div className='border flex'><div className='ml-5 py-5'>LOGO</div> <div className='w-full flex items-center text-2xl text-white font-semibold justify-center'>To the company</div> </div>
                <div className='border'>
                    <div className='flex border w-full'>
                        <div className='w-[50%] pl-3 border'>GSTIN NO:  uidd74554edd544</div>
                        <div className='w-[50%] pl-3 border'>DL NO1:  d5641511midsd</div>
                    </div>
                    <div className='flex border w-full'>
                        <div className='w-[50%] pl-3 border'>CIN NO:  udb455487dddf445</div>
                        <div className='w-[50%] pl-3 border'>DL NO2:  d5641511midsd</div>
                    </div>

                </div>
                <div className=' flex justify-center text-xl text-white font-semibold py-1'>Purchase Order</div>
                <div className='border flex'>
                    <div className='border w-full p-2'>
                        <div>Manmed Health Pvt. Ltd.</div>
                        <div>Hn.343/A Mourana Rampur near gov.school Ajhai distt. Mathura</div>
                        <div>Mobile/phone. 9888454548</div>
                        <div>GST NO. A74854dhf4545dd</div>
                    </div>
                    <div className='border w-full p-2'>
                        <div className='text-sm font-semibold text-white'>Dlivery Address:</div>
                        <div>to the company</div>
                        <div>Hn.343/A Mourana Rampur near gov.school Ajhai distt. Mathura</div>
                        <div>DL No. upkdf4564ddd</div>
                        <div>GST NO. A74854dhf4545dd</div>

                    </div>
                </div>

                <div className="border border-green-400 ">
                    <table className='border border-red-500'>
                        <thead>
                            <tr className='text-xs'>
                                <th className='border border-white px-3 py-2'>SN.</th>
                                <th className='border border-white px-3 py-2 w-full'>Description</th>
                                <th className='border border-white px-3 py-2'>Delivery Date</th>
                                <th className='border border-white px-3 py-2'>Quantity</th>
                                <th className='border border-white px-3 py-2'>Rate</th>


                                <th className='border border-white px-3 py-2'>Amount</th>
                                <th className='border border-white px-3 py-2' colspan="2">CGST</th>
                                <th className='border border-white px-3 py-2' colspan="2">SGST</th>
                                <th className='border border-white px-3 py-2' colspan="2">IGST</th>
                            </tr>

                            <tr>


                                <th className='border border-white'></th>
                                <th className='border border-white'></th>
                                <th className='border border-white'></th>
                                <th className='border border-white'></th>
                                <th className='border border-white'></th>
                                <th className='border border-white'></th>
                                <th className='border border-white px-3'>Rate (%)</th>
                                <th className='border border-white px-3'>Amount</th>
                                <th className='border border-white px-3'>Rate (%)</th>
                                <th className='border border-white px-3'>Amount</th>
                                <th className='border border-white px-3'>Rate (%)</th>
                                <th className='border border-white px-3'>Amount</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-white px-3 '>01</td>
                                <td className='border border-white px-3 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident minus magnam amet et, exercitationem necessitatibus rerum architecto eveniet libero consectetur veniam  doloribus?</td>
                                <td className='border border-white px-3 py-2 '>12/09/2025</td>
                                <td className='border border-white px-3 py-2 '>1000</td>
                                <td className='border border-white px-3 py-2 '>124</td>
                                <td className='border border-white px-3 py-2 '>1,24,000</td>
                                <td className='border border-white px-3 py-2 '></td>
                                <td className='border border-white px-3 py-2 '></td>
                                <td className='border border-white px-3 py-2 '></td>
                                <td className='border border-white px-3 py-2 '></td>
                                <td className='border border-white px-3 py-2 '></td>
                                <td className='border border-white px-3 py-2 '></td>
                                


                            </tr>
                            <tr>
                                <td className='border border-white px-3 '>02</td>
                                <td className='border border-white px-3 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident minus magnam amet et, exercitationem necessitatibus rerum architecto eveniet libero consectetur veniam  doloribus?</td>
                                <td className='border border-white px-3 py-2 '>12/09/2025</td>
                                <td className='border border-white px-3 py-2 '>1000</td>
                                <td className='border border-white px-3 py-2 '>140</td>
                                <td className='border border-white px-3 py-2 '>1,40,000</td>
                                <td className='border border-white px-3 py-2 '></td>
                                <td className='border border-white px-3 py-2 '></td>
                                <td className='border border-white px-3 py-2 '></td>
                                <td className='border border-white px-3 py-2 '></td>
                                <td className='border border-white px-3 py-2 '></td>
                                <td className='border border-white px-3 py-2 '></td>
                            </tr>
                            <td className='border border-red-500 ' colspan="12">
                                <tr><td className='border border-red-500 px-3 py-2'>Amount:</td> <td className='border border-red-500 px-3 py-2'>2,64,000</td></tr>
                                <tr><td className='border border-red-500 px-3 py-2'>Add IGST:</td> <td className='border border-red-500 px-3 py-2'>31,680</td></tr>
                                <tr><td className='border border-red-500 px-3 py-2'>Total</td> <td className='border border-red-500 px-3 py-2'>2,95,682</td></tr>
                            </td>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Billtem
