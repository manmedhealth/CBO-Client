import React, { useState } from 'react'

function ProductList() {

    const [medications, setmedications] = useState([
            {
    name: "paracitamol",
    price: "100",
    category: "PainKiller",
    stock: "145",
    description: "this Tablet for kill body pain",},
            {
    name: "Dcold Total",
    price: "100",
    category: "PainKiller",
    stock: "199",
    description: "this Tablet for kill body pain",},
            {
    name: "Florosine",
    price: "100",
    category: "PainKiller",
    stock: "165",
    description: "this Tablet for kill body pain",}
    ])

    return (
        
        <div className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">📋 Medication List</h2>
        {medications.length === 0 ? (
          <p className="text-gray-500">No medications added yet.</p>
        ) : (
          <div className="grid gap-4">
            {medications.map((med, idx) => (
              <div key={idx} className="shadow-sm">
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{med.name}</h3>
                  <p className="text-sm text-gray-500">{med.category}</p>
                  <p className="text-green-600 font-bold">₹{med.price}</p>
                  <p className="text-blue-600">Stock: {med.stock}</p>
                  <p className="text-gray-600 mt-1">{med.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
        
    )
}

export default ProductList

