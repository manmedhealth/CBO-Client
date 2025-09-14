import React, { useState } from "react";
import ProductList from "../page/productList";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent } from "@/components/ui/card";

export default function MedicationsAdmin() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: "",
  });

  const [medications, setMedications] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.category) {
      alert("Please fill required fields!");
      return;
    }
    setMedications([...medications, formData]);
    setFormData({ name: "", price: "", category: "", stock: "", description: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Admin – Add Medications</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-xl space-y-4"
      >
        <div>
          <label className="block font-semibold">Name *</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter medicine name"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">Price *</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="₹ Price"
            />
          </div>
          <div>
            <label className="block font-semibold">Category *</label>
            <input
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category (e.g. Antibiotic)"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold">Stock</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Available stock"
          />
        </div>

        <div>
          <label className="block font-semibold">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter medicine details"
          />
        </div>

        <button type="submit" className="w-full">
          ➕ Add Medication
        </button>
      </form>

      {/* Medication List */}
      {/* <div className="mt-10 max-w-4xl mx-auto">
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
      </div> */}
      {/* <ProductList medications={medications} /> */}
    </div>
  );
}
