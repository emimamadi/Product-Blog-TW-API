"use client";

import React, { useEffect, useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";

import _ from "lodash";

export default function index() {
  var QTY = [];

  var az = [];

  var cart = useAppSelector((state) => state.Cart.cart);

  const zx = _.cloneDeep(cart);

  for (let i = 1; i <= zx.length; i++) {
    az.push({
      ID: zx[i]?.Title.id,
      Title: zx[i]?.Title.title,
      QTY: zx[i]?.qty,
    });
    QTY.push(zx[i]?.qty);
  }

  QTY.pop();

  var sum = QTY.reduce((accumulator: number, currentValue: number) => {
    return accumulator + currentValue;
  }, 0);

  // let X=QTY.reduce(function(acc, val) { return acc + val; }, 0)

  console.log("QTY == ", QTY);

  console.log("QTY X == ", sum);

  az.pop();

  console.log("AZ == ", az);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Navbar
      rounded
      className="shadow-md shadow-gray-100 sticky top-0 mx-5 mt-5 z-10 "
    >
      <Navbar.Brand href="/">
        <img
          src="/favicon.ico"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Sia Vish Shop
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 relative">
        {isClient && (
          <>
            {sum > 0 ? (
              <div className="text-white bg-red-600 w-[50%] h-[50%] rounded-full  text-center absolute left-8 z-10">
                {" "}
                {sum}{" "}
              </div>
            ) : null}{" "}
          </>
        )}
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header className="px-16">
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>

          {az.map((zo: any) => (
            <Dropdown.Item key={zo.ID} className="bg-slate-400">
              {zo.Title} || {zo.QTY}
            </Dropdown.Item>
          ))}
          <Link
            href="/product/Checkout"
            className="btn bg-yellow-300 flex justify-center my-1 rounded-xl"
          >
            Check out
          </Link>
          <Dropdown.Divider />

          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        {/* <Navbar.Link href="/shop">Shop</Navbar.Link> */}
        <Navbar.Link href="/product">Product</Navbar.Link>
        <Navbar.Link href="/post">Post</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
