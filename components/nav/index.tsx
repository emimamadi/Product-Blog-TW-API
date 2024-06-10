"use client";

import React, { useEffect, useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";

export default function index() {
  var QTY = [];

  var az=[]

  var cart = useAppSelector((state) => state.Cart.cart);

  const item = Object.values(cart).flatMap((mk: any) => mk);
  for (let mo = 1; mo < Object.values(item).length; mo++) {
    // QTY += Object.values(item)[mo]["qty"];
    QTY.push(Object.values(item)[mo]["qty"])

    az.push({id:Object.values(item)[mo]["id"],"title":Object.values(item)[mo]["title"],"price":Object.values(item)[mo]["price"]})
  }
  let q=QTY.reduce(getSum,0)

  function getSum(total:any, num:any) {
    return total + Math.round(num);
  }


  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  // const GetItems=(items:any)=>{

  //   // const cart = useAppSelector((state) => state.Cart.cart);

   
  //   //  {
  //   //   QTY += Object.values(item)[mo]["qty"];
  //   // }
  //   let x = [];

  //   var item = Object.values(cart).flatMap((mk: any) => mk);
  //   for (let mo = 1; mo < Object.values(item).length; mo++) {
  //     var item = Object.values(item)[mo]["title"];

      
  //     x.push(<Dropdown.Item>{item}</Dropdown.Item>);
  //   }
  //   return x;
  // };

  // return <ul>{GetItems(items)}</ul>;

  // const cart = useAppSelector((state) => state.Cart.cart);

  console.log("QTY ====================================> ", QTY);

  console.log("QTY ====================================> ", q);

  return (
    <Navbar rounded className="shadow-md shadow-gray-100 sticky top-0 mx-5 mt-5 z-10 ">
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="/favicon.ico"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 relative">
        {isClient && (
          <div className="text-white bg-red-600 w-[50%] h-[50%] rounded-full  text-center absolute left-8 z-10">
            {q}{" "}
          </div>
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



 {

  
//   for (var mo = 1; mo < Object.values(item:any).length; mo++) {

//     <Dropdown.Item> {Object.values(item)[mo]["title"] }|| {Object.values(item)[mo]["qty"]} </Dropdown.Item>
  
 
  

  

// } 

}



     

    {/* item = Object.values(cart).flatMap((mk: any) => mk);
     for (let mo = 1; mo < Object.values(item).length; mo++) {
       QTY += Object.values(item)[mo]["qty"];
     } */}


    


  

{

  // Object.values((item:any)=>
  
  //   <Dropdown.Item>{item[2]["title"]}</Dropdown.Item>)
}


{
  az.map((zo:any)=>(
<Dropdown.Item key={zo.id} className="bg-slate-400">{zo.title} , ${zo .price}</Dropdown.Item>
  ))
}
<Link href="/product/Checkout" className="btn bg-yellow-300 flex justify-center my-1 rounded-xl">Check out</Link>
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
        <Navbar.Link href="#" active>
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
