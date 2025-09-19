import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


function ProductList({token}) {

    const [list, setlist] = useState([])

    const fetchlist = async()=>{
        try{
            const response = await axios.get('http://localhost:3000/api/product/list')
            // console.log('res=>', response)
            if (response.data.success) {
                setlist(response.data.allMedician);
            }else{
                toast.error(response.data.message)
            }

        }catch(error){
            console.log(error);
            toast.error(error.message);
        }
    }

    const removeproduct = async (id)=>{
        try{
            const response = await axios.post('http://localhost:3000/api/product/remove', {id}, {headers:{token}})
            if (response.data.success) {
                toast.success(response.data.message)
                await fetchlist();
            }else{
                toast.error(response.data.message);
            }
        }catch(error){
            console.log(error);
            toast.error(error.message);
        }
    }


    useEffect(()=>{
        fetchlist()
    },[]);

    return (
        
        <div className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">📋 Medication List</h2>
        {list.length === 0 ? (
          <p className="text-gray-500">No medications added yet.</p>
        ) : (
          <div className="grid gap-4">
            
            {list.map((med, idx) => (
              <div key={idx} className="shadow-sm">
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{med.name}</h3>
                  <p className="text-sm text-gray-500">{med.category}</p>
                  <p className="text-green-600 font-bold">₹{med.price}</p>
                  <p className="text-blue-600">Stock: {med.stockquantity}</p>
                  <p className="text-gray-600 mt-1">{med.description}</p>
                <button onClick={()=>removeproduct(med._id)} className='bg-red-400 px-2 py-1 text-white rounded-md mt-2 cursor-pointer hover:bg-red-500'>Remove</button>
                </div>
                
               
              </div>
            ))}
          </div>
        )}
      </div>
        
    )
}

export default ProductList

