"use client";

import React, { SyntheticEvent, useEffect, useState } from "react";

import ReactSlider from "react-slider";

import { useAppSelector, useAppDispatch } from "@/redux/store";

import {
  searchProduct,
  priceProduct,
  categoryProduct,
  rateProduct,
} from "@/redux/productSlice";

import "./style.scss";

const MIN = 0;

const MAX = 1000;

const minRate = 0;

const maxRate = 6;

export default function SearchFilter() {
  const [values, setValues] = useState([MIN, MAX]);

  const [rates, setRates] = useState([minRate, maxRate]);

  // const [categories, setCategories] = useState([x, y]);

  const category = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  // const category=["smartphones","laptops","fragrances","skincare"]

  // const handleChange = (values: any) => setValues(values);

  const handleChange = (values: any) => {
    setValues(values);
    dispatch(priceProduct(values));
  };

  const handleRate = (rates: any) => {
    setRates(rates);
    dispatch(rateProduct(rates));
  };

  // const handleCategory = () => {

  // };

  // console.log(values);

  const dispatch = useAppDispatch();

  return (
    <ul className="flex flex-col gap-2 min-w-[300px] min-h-screen mt-5 rounded shadow-2xl border border-gray-200 pt-10 outline-none">
      <input
        type="search"
        name="search"
        id=""
        className="focus:outline-1 w-30 mx-auto rounded-full px-5 py-2"
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
                className="w-5 h-5 text-blue-700"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z"
                    fill="#292D32"
                  ></path>{" "}
                  <path
                    d="M18.6695 2H16.7695C14.5895 2 13.4395 3.15 13.4395 5.33V7.23C13.4395 9.41 14.5895 10.56 16.7695 10.56H18.6695C20.8495 10.56 21.9995 9.41 21.9995 7.23V5.33C21.9995 3.15 20.8495 2 18.6695 2Z"
                    fill="#292D32"
                  ></path>{" "}
                  <path
                    d="M18.6695 13.4297H16.7695C14.5895 13.4297 13.4395 14.5797 13.4395 16.7597V18.6597C13.4395 20.8397 14.5895 21.9897 16.7695 21.9897H18.6695C20.8495 21.9897 21.9995 20.8397 21.9995 18.6597V16.7597C21.9995 14.5797 20.8495 13.4297 18.6695 13.4297Z"
                    fill="#292D32"
                  ></path>{" "}
                  <path
                    d="M7.24 13.4297H5.34C3.15 13.4297 2 14.5797 2 16.7597V18.6597C2 20.8497 3.15 21.9997 5.33 21.9997H7.23C9.41 21.9997 10.56 20.8497 10.56 18.6697V16.7697C10.57 14.5797 9.42 13.4297 7.24 13.4297Z"
                    fill="#292D32"
                  ></path>{" "}
                </g>
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
              {category.map((item, index) => (
                <li key={index}>
                  <input
                    id={item}
                    type="checkbox"
                    value={item}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={(e: any) =>
                      dispatch(
                        categoryProduct([e.target.checked, e.target.value])
                      )
                    }

                    // onChange={handleCategory}
                  />
                  <label
                    htmlFor={item}
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {item}
                  </label>
                </li>
              ))}
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

      <li>
        <details className="group">
          <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
            <span className="flex gap-2">
              {/* <img className="w-6 h-6 rounded-lg" src="/favicon.ico" alt="" /> */}

              <svg
                className="w-6 h-6 text-yellow-700"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>

              <span>Rate</span>
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
                  {rates[0]} - {rates[1]}
                </div>
                <ReactSlider
                  className="horizontal-slider bg-gray-500 w-full h-2 rounded-xl mt-1"
                  value={rates}
                  // value={10000}
                  min={minRate}
                  max={maxRate}
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  ariaLabel={["Lower thumb", "Upper thumb"]}
                  onChange={handleRate}
                  pearling
                  minDistance={0.5}
                />
              </li>
            </ul>
          </article>
        </details>
      </li>
    </ul>
  );
}
