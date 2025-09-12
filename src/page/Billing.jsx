import React, { useState } from "react";
import Billtem from "../components/Billtem";

export default function Billing() {
  // const [purchaser, setPurchaser] = useState("");
  // const [items, setItems] = useState([{ product: "", quantity: "", price: "" }]);

  // const handleItemChange = (index, field, value) => {
  //   const updatedItems = [...items];
  //   updatedItems[index][field] = value;
  //   setItems(updatedItems);
  // };

  // const addItem = () => {
  //   setItems([...items, { product: "", quantity: 1, price: 0 }]);
  // };

  // const removeItem = (index) => {
  //   setItems(items.filter((_, i) => i !== index));
  // };


  return (
    // <div className="p-6 max-w-3xl mx-auto bg-white shadow-xl rounded-2xl">
    //   <h1 className="text-2xl font-bold mb-4">Generate Bill here</h1>

    //   <div className="mb-4">
    //     <label className="block mb-1 font-medium">Purchaser Name</label>
    //     <input
    //       type="text"
    //       value={purchaser}
    //       onChange={(e) => setPurchaser(e.target.value)}
    //       className="w-full border rounded-lg p-2"
    //     />
    //   </div>

    //   <h2 className="text-lg font-semibold mb-2">Products</h2>
    //   {items.map((item, index) => (
    //     <div key={index} className="grid grid-cols-4 gap-2 mb-2">
    //       <input
    //         type="text"
    //         placeholder="Product Name"
    //         value={item.product}
    //         onChange={(e) => handleItemChange(index, "product", e.target.value)}
    //         className="border rounded-lg p-2"
    //       />
    //       <input
    //         type="number"
    //         placeholder="Quantity"
    //         value={item.quantity}
    //         onChange={(e) =>handleItemChange(index, "quantity", Number(e.target.value))
    //         }
    //         className="border rounded-lg p-2"
    //       />
    //       <input
    //         type="number"
    //         placeholder="Price"
    //         value={item.price}
    //         onChange={(e) =>
    //           handleItemChange(index, "price", Number(e.target.value))
    //         }
    //         className="border rounded-lg p-2"
    //       />
    //       <button
    //         onClick={() => removeItem(index)}
    //         className="bg-red-500 text-white rounded-lg p-2"
    //       >
    //         Remove
    //       </button>
    //     </div>
    //   ))}

    //   <button
    //     onClick={addItem}
    //     className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
    //   >
    //     + Add Product
    //   </button>

    //   <div className="flex justify-end">
    //     <button
    //       className="bg-green-600 text-white px-6 py-2 rounded-xl"
    //     >
    //       Generate PDF
    //     </button>
    //   </div>
    // </div>

    <>
    <Billtem/>
    </>
  );
}

