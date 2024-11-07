"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

type Products = {
  _id: string;
  title: string;
  description: string;
  price: string;
};

export default function Products() {
  const [products, setProducts] = useState<Products[]>([]);
  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="">
      <Link
        href="products/new"
        className="bg-cyan-800 flex w-max p-4 pr-6 rounded-lg text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Add new product
      </Link>
      <table>
        <thead>
          <tr>
            <td>Product Name</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>buttons</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
