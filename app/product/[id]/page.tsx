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
}

const ProductDetails = ({ params }: { params: { id: number } }) => {
  const { id } = params;

  const [product, setProduct] = useState<Product | null>(null);

  const data = products.filter(
    (product: { title: string; id: number }) => product.id == id
  );

  // const data= products.find((product)=>product.id==id)

  const pr = Object.values(data);

  // console.log(pr);

  // setProduct(data)

  //    const data=await fetch(`products/${id}`)

  //    const pr=data.json()

  //    console.log(pr)

  //   const [product, setProduct] = useState<Product | null>(null);

  //Fetch details for the specified productID
  //   const fetchProductDetails = async () => {
  //     try {
  //     //   const response = await fetch(`https://dummyjson.com/products/${id}`);

  //     console.log("id = ", id)

  //         console.log("product = ",product)
  //     //   const data = await response.json();
  //     //   setProduct(product);
  //     } catch (error) {
  //       console.log(error, "error while fetching data");
  //     }
  //   };

  //   useEffect(() => {
  //     fetchProductDetails();
  //   }, [id]);

  // if (!data) {
  //   return (
  //     <div>
  //       <h2>Product Not Found</h2>
  //     </div>
  //   );
  // }

  return (
    <>
      {pr.map((item) => (
        <div className="md:flex md:flex-row gap-5 mt-10 mx-20 sm:flex sm:flex-col" key={id}>
          <img
            className="h-[75vh] w-1/2  shadow-2xl rounded-3xl"
            src={item.images[0]}
          />

          <div className="flex flex-col items-center  h-[75vh] w-1/2 py-20 px-5 border-gray-400 shadow-2xl rounded-3xl shadow-gray-400 ">
            <h1 className="font-extrabold my-2 py-2 border-b-slate-500 shadow-2xl rounded-xl px-5 bg-slate-400">
              Title : {item.title}
            </h1>
            <h1 className="font-extrabold my-2 py-2 border-b-slate-500 shadow-2xl rounded-xl px-5 bg-slate-400 text-center">
              Description : {item.description}
            </h1>
            <h1 className="font-extrabold my-2 py-2 border-b-slate-500 shadow-2xl rounded-xl px-5 bg-slate-400">
              Price : ${item.price}
            </h1>
            <h1 className="font-extrabold my-2 py-2 border-b-slate-500 shadow-2xl rounded-xl px-5 bg-slate-400">
              Category : {item.category}
            </h1>

            <Link
              href="#"
              className="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </Link>
          </div>
        </div>
      ))}
    </>

    // {product.map((item:any)=>
    //     <div>
    //     <p>{item.title}</p>
    //     <p>{item.price}</p>
    //     <p>{item.category}</p>
    //   </div>
    // )}

    // <p>{data.title}</p>
  );
};

export default ProductDetails;
