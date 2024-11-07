"use client";
import axios from "axios";
import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const successNotify = () =>
    toast.success("Product added successfully", {
      position: "top-right",
      autoClose: 3000, // Tiempo de duración en ms
    });

  const errorNotify = () =>
    toast.error("Product not added, try again ", {
      position: "top-right",
      autoClose: 3000, // Tiempo de duración en ms
    });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = { title, description, price };
    try {
      const response = await axios.post("/api/products", data);
      successNotify();
      setTitle("");
      setDescription("");
      setPrice("");
    } catch (error) {
      errorNotify();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Product</h1>
      <fieldset className="border">
        <legend>Product Name</legend>
        <input
          type="text"
          placeholder="Product Name"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </fieldset>
      <fieldset>
        <legend>Description</legend>
        <textarea
          placeholder="Description"
          className="h-[200px] resize-none"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
        ></textarea>
      </fieldset>
      <fieldset>
        <legend>Price $(USD)</legend>
        <input
          type="number"
          min={0}
          placeholder="Price in $USD"
          value={price}
          onChange={(e) => setPrice(e.currentTarget.value)}
        />
      </fieldset>
      <button className="btn-primary">Save Changes</button>
      <ToastContainer />
    </form>
  );
}
