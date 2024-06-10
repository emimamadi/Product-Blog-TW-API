"use client";

import React, { SyntheticEvent, useEffect, useState } from "react";

import ReactSlider from "react-slider";

import { useAppSelector, useAppDispatch } from "@/redux/store";

import { searchProduct, priceProduct ,categoryProduct } from "@/redux/productSlice";

import "./style.scss";

const MIN = 0;

const MAX = 2000;

export default function SearchFilter() {
  const [values, setValues] = useState([MIN, MAX]);

  const category=["smartphones","laptops","fragrances","skincare"]

  // const handleChange = (values: any) => setValues(values);

  const handleChange = (values: any) => {
    setValues(values);
    dispatch(priceProduct(values));
  };

  // console.log(values);

   const dispatch = useAppDispatch();

  return (
    <ul className="flex flex-col gap-2 min-w-[300px] min-h-screen mt-5 rounded shadow-2xl border border-gray-200 pt-10 outline-none">
   

      <input
        type="search"
        name="search"
        id=""
        className="focus:outline-1 w-30 mx-auto rounded-full"
        placeholder="Search"
        // onChange={handleSearch}
        onChange={(e: any) => {
          dispatch(searchProduct(e.target.value));
        }}
      />

      <li>
        <details className="group">
          <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
            <span className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>

              <span>Category</span>
            </span>
            <svg
              className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </summary>

          <article className="px-4 pb-4">
            <ul className="flex flex-col gap-1 pl-2">

          {
            category.map((item,index)=>(
              <li key={index}>
              <input
                id={item}
                type="checkbox"
                value={item}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={(e:any)=>dispatch(categoryProduct(e.target.value))}
             />
              <label
                htmlFor={item}
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
               {item}
              </label>
            </li>
            ))
          }

              {/* <li>
                <input
                  id="electronic-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="electronic-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Electronic
                </label>
              </li>
              <li>
                <input
                  id="smartphone-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="smartphone-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  smartphone
                </label>
              </li> */}
              {/* <li>
                <a href="">Document title</a>
              </li> */}
            </ul>
          </article>
        </details>
      </li>

      <li>
        <details className="group">
          <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
            <span className="flex gap-2">
              <img className="w-6 h-6 rounded-lg" src="/favicon.ico" alt="" />

              <span>Price</span>
            </span>
            <svg
              className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </summary>

          <article className="px-4 pb-4">
            <ul className="flex flex-col gap-4">
              <li className="flex flex-col pl-2">
                {/* <h2>Price Range</h2> */}
                <div className="mx-auto values">
                  ${values[0]} - ${values[1]}
                </div>
                <ReactSlider
                  className="horizontal-slider bg-gray-500 w-full h-2 rounded-xl mt-1"
                  value={values}
                  // value={10000}
                  min={MIN}
                  max={MAX}
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  ariaLabel={["Lower thumb", "Upper thumb"]}
                  onChange={handleChange}
                  pearling
                  minDistance={10}
                />
              </li>
            </ul>
          </article>
        </details>
      </li>
    </ul>
  );
}
