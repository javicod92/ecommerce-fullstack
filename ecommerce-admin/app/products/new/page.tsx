"use client";
import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const notify = () =>
    toast.success("Product added successfully", {
      position: "top-right",
      autoClose: 3000, // Tiempo de duración en ms
    });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    notify();
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
        <legend>Price</legend>
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
