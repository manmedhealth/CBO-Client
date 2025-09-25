import React from 'react'
import DailySalesChart from '../components/Charts/DailySalesChart'
import MonthlySalesChart from '../components/Charts/MonthlySalesChart'
import YearlySalesChart from '../components/Charts/YearlySalesChart'
// import MedicineCategoryChart from '../components/Charts/MedicineCategoryChart'

function Analays() {
    return (
        <div>
           <div className="flex">
            <div className="w-[50%] h-92 border">
              <DailySalesChart />
            </div>
            <div className="w-[50%]">
            <MonthlySalesChart/>
            </div>
           </div>
           <div className="flex">
            <div className="w-[50%]  border">
              <YearlySalesChart />
            </div>
            {/* <div className="">
            <MedicineCategoryChart/>
            </div> */}
           </div>
        </div>
    )
}

export default Analays
