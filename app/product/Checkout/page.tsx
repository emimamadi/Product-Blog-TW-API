"use client";

import React, { useEffect, useState } from "react";

import { Table } from "flowbite-react";

import { Label, Select } from "flowbite-react";

import { useAppDispatch, useAppSelector } from "@/redux/store";

import { QTYcart } from "@/redux/cartSlice";
import Link from "next/link";

export default function page() {
  const dispatch = useAppDispatch();

  var QTY = 0;

  var az = [];

  var cart = useAppSelector((state) => state.Cart.cart);

  const item = Object.values(cart).flatMap((mk: any) => mk);
  for (let mo = 1; mo < Object.values(item).length; mo++) {
    QTY += Object.values(item)[mo]["qty"];

    az.push({
      number: mo,
      id: Object.values(item)[mo]["Title"]["id"],
      title: Object.values(item)[mo]["Title"]["title"],
      price: Object.values(item)[mo]["Title"]["price"],
      brand: Object.values(item)[mo]["Title"]["brand"],
      category: Object.values(item)[mo]["Title"]["category"],
      qty: Object.values(item)[mo]["qty"],
    });
  }

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  console.log("   AZ  = ",item)

  return (
    // <>Hello</>
    <div className="flex flex-col">
      <Link
        href="/product"
        className="btn w-28 h-8 bg-yellow-300 border-yellow-300 rounded-lg my-5  ml-8 text-center shadow-2xl shadow-yellow-300"
      >
        Back
      </Link>
      {isClient && (
        <div className="mx-5 min-h-screen">
          <Table>
            <Table.Head>
              <Table.HeadCell>Product name</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>Brand</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {az.map((x) => (
                <Table.Row
                  key={x.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {x.title}
                  </Table.Cell>
                  <Table.Cell>$ {x.price}</Table.Cell>
                  <Table.Cell>{x.brand}</Table.Cell>
                  <Table.Cell>{x.category}</Table.Cell>
                  <Table.Cell>
                    <input
                      type="number"
                      id="number-input"
                      aria-describedby="helper-text-explanation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder={x.qty}
                      required
                      onChange={(e: any) => {
                        dispatch(QTYcart({ id: x.id, value: e.target.value }));
                      }}
                      min={-1}
                      defaultValue={x.qty}


                    />
                  </Table.Cell>
                </Table.Row>
              ))}

              {/* <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Microsoft Surface Pro
      </Table.Cell>
      <Table.Cell>White</Table.Cell>
      <Table.Cell>Laptop PC</Table.Cell>
      <Table.Cell>$1999</Table.Cell>
      <Table.Cell>
        <a
          href="#"
          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
        >
          Edit
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Magic Mouse 2
      </Table.Cell>
      <Table.Cell>Black</Table.Cell>
      <Table.Cell>Accessories</Table.Cell>
      <Table.Cell>$99</Table.Cell>
      <Table.Cell>
        <a
          href="#"
          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
        >
          Edit
        </a>
      </Table.Cell>
    </Table.Row> */}
            </Table.Body>
          </Table>
        </div>
      )}
    </div>
  );
}
