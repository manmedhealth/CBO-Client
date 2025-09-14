import React, { useState } from "react";
import Billtem from "../components/Billtem";

export default function Billing() {

  const [billitems, setbillItems] = useState([
    { sn: 1, description: "Medicine A", deliveryDate: "45/08/2025", quantity: "50", rate: "2", cgstRate: "10", sgstRate: "10", igstRate: "10" }
  ]);


  const [purchaser, setPurchaser] = useState("");
  // const [items, setItems] = useState([{ product: "", quantity: "", price: "" }]);
  const [items, setItems] = useState([{ sn: "", description: "", deliveryDate: "", quantity: "", rate: "", cgstRate: "", sgstRate: "", igstRate: "" }]);
  // console.log('items =>', items) // [{}]

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];  // [{}]
    // console.log("updateitems =>", updatedItems) 
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { product: "", quantity: 1, price: 0 }]);
    setbillItems([...billitems, { sn: 2, description: "Medicine B", deliveryDate: "45/08/2025", quantity: "25", rate: "4", cgstRate: "10", sgstRate: "10", igstRate: "20" }])
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
    // for remove bill
    setbillItems(billitems.filter((_, i) => i !== index))
  };

  


  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-xl rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Generate Bill here</h1>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Purchaser Name</label>
        <input
          type="text"
          value={purchaser}
          onChange={(e) => setPurchaser(e.target.value)}
          className="w-full border rounded-lg p-2"
        />
      </div>

      <h2 className="text-lg font-semibold mb-2">Products</h2>
      {items.map((item, index) => (
        <div    key={index} className="grid grid-cols-5 gap-2 mb-2">
          <input
            type="number"
            placeholder="S No."
            value={item.sn}
            onChange={(e) => handleItemChange(index, "sn", Number(e.target.value))}
            className="border rounded-lg p-2"
          />
          <input
            type="text"
            placeholder="Description"
            value={item.description}
            onChange={(e) => handleItemChange(index, "description", (e.target.value))
            }
            className="border rounded-lg p-2"
          />
          <input
            type="text"
            placeholder="DeliveryDate"
            value={item.deliveryDate}
            onChange={(e) =>
              handleItemChange(index, "deliveryDate", (e.target.value))
            }
            className="border rounded-lg p-2"
          />

          <input type="number" placeholder="Quantity" className="border rounded-lg p-2" onChange={(e) => handleItemChange(index, "quantity", Number(e.target.value))} />
          <input type="number" placeholder="Rate" className="border rounded-lg p-2" onChange={(e) => handleItemChange(index, "rate", Number(e.target.value))} />
          <input type="number" placeholder="CgstRate" value={item.cgstRate} className="border rounded-lg p-2" onChange={(e) => handleItemChange(index, "cgstRate", Number(e.target.value))} />
          <input type="number" placeholder="SgstRate" value={item.sgstRate} className="border rounded-lg p-2" onChange={(e) => handleItemChange(index, "sgstRate", Number(e.target.value))} />
          <input type="number" placeholder="IgstRate" value={item.igstRate} className="border rounded-lg p-2" onChange={(e) => handleItemChange(index, "igstRate", Number(e.target.value))} />

          <button
            onClick={() => removeItem(index)}
            className="bg-red-500 text-white rounded-lg p-2"
          >
            Remove
          </button>
          
        </div>
      ))}

      <button
        onClick={addItem}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
      >
        + Add Product
      </button>

      {/* <div className="flex justify-end border hidden">
        <button
          className="bg-green-600 text-white px-6 py-2 rounded-xl"
        >
          Generate PDF
        </button>
      </div> */}


      <Billtem billitems={items} />
    </div>


  );
}

