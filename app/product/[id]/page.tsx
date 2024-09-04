"use client";

import React, { useEffect, useState } from "react";

import { products } from "@/data/data";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;

  category: string;

  image: any;
}

const ProductDetails = ({
  params,
}: {
  params: { id: number };
  product: Product;
}) => {
  const { id } = params;

  const [product, setProduct] = useState<Product | null>(null);

  // const [post, setPost] = useState<Post>();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  console.log("post = ", product);

  return (
    <>
      <div className="flex-col md:flex md:flex-row gap-5 mt-10 mx-20 " key={id}>
        <img
          className="w-full h-auto md:min-h-screen md:w-1/2  shadow-2xl rounded-3xl"
          src={product?.image}
        />

        <div className="flex flex-col items-center  h-auto w-full md:w-1/2 py-20 px-5 border-gray-400 shadow-2xl rounded-3xl shadow-gray-400 ">
          <img
            className="w-[30%] h-[30%] shadow-2xl rounded-3xl"
            src={product?.image}
          />
          <h1 className="font-extrabold my-2 py-2 border-b-slate-500 shadow-2xl rounded-xl px-5 bg-slate-400">
            Title : {product?.title}
          </h1>
          <h1 className="font-extrabold my-2 py-2 border-b-slate-500 shadow-2xl rounded-xl px-5 bg-slate-400 text-center">
            Description : {product?.description}
          </h1>
          <h1 className="font-extrabold my-2 py-2 border-b-slate-500 shadow-2xl rounded-xl px-5 bg-slate-400">
            Price : ${product?.price}
          </h1>
          <h1 className="font-extrabold my-2 py-2 border-b-slate-500 shadow-2xl rounded-xl px-5 bg-slate-400">
            Category : {product?.category}
          </h1>

          <Link
            href="#"
            className="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
