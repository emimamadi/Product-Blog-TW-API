"use client";

import React, { useEffect } from "react";

import CardPost from "@/components/CardPost";

import Link from "next/link";

import { useAppSelector, useAppDispatch } from "@/redux/store";

import Search from "@/app/post/search";

import { getPosts, searchPost } from "@/redux/postSlice";

import { posts } from "@/data/data";

type A = {
  id: number;
  name?: string;
  title: string;
  body: string;
};

// export async function GetServerSideProps() {
//   const userData = await fetch('https://jsonplaceholder.typicode.com/users/1/posts/')
//   const userJSON = await userData.json()

//   return {
//     props: {
//       posts: userJSON
//     }
//   }
// }

// async function getData() {
//   // "use server";

//   // const res = await fetch(`https://dummyjson.com/posts/`).then(res => res.json())
//   // .then(console.log);

//   const res = await fetch(
//     "https://dummyjson.com/posts?limit=10"
//   );
//   const data= await res.json();

//   const {posts}=data

//   console.log(posts)
// }

export default function Page() {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.Post.data);

  const info = useAppSelector((state) => state.Post.info);

  const truncateString = (str: string, num: number) =>
    str.length > num ? str.slice(0, num) : str;

  useEffect(() => {
    dispatch(getPosts());
  });

  // useEffect(()=>{
  //   data
  // }
  // ,[data,info])

  // const data=posts

  //     const res = await fetch(`https://dummyjson.com/posts/`).then(res => res.json())
  //   .then(console.log);

  // let data=res["posts"]

  // let postArray: [] = await getData()

  // fetch("https://dummyjson.com/products")
  // .then((res) => res.json())
  // .then((json) => console.log(json));
  //   let data = async () => {
  //     const res = await fetch(`https://dummyjson.com/products/1`);
  //     const x= await res.json();

  //     return x

  //   };

  // console.log(postArray);

  return (
    <div className="flex gap-5 mx-10">
      <Search />
      {Object.values(data).length > 1 ? (
        <div className="grid grid-cols-3 gap-5 my-5 mx-auto w-3/4 rounded-2xl">
          {Object.values(info).length > 1
            ? Object.values(info).map((PostItem: any) => (
                <div
                  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700"
                  key={PostItem.id}
                >
                  <Link href={`/post/${PostItem.id}`}>
                    <img
                      className="p-8 rounded-t-lg w-60 h-60 mx-auto"
                      src="./favicon.ico"
                      alt="product image"
                    />
                  </Link>
                  <div className="px-5 pb-5">
                    <Link href={`/post/${PostItem.id}`}>
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                        {truncateString(PostItem.title, 23) || PostItem.title }... 
                       
                      </h5>
                    </Link>

                    <div className="flex flex-col items-center justify-between">
                      <span className="text-xl font-bold text-gray-900 dark:text-white my-2 text-center ">
                        {truncateString(PostItem.body, 30) || PostItem.body}... 
                        
                      </span>
                    </div>
                  </div>
                </div>
              ))
            : Object.values(data).map((PostItem: any) => (
                <div
                  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700"
                  key={PostItem.id}
                >
                  <Link href={`/post/${PostItem.id}`}>
                    <img
                      className="p-8 rounded-t-lg w-60 h-60 mx-auto"
                      src="./favicon.ico"
                      alt="product image"
                    />
                  </Link>
                  <div className="px-5 pb-5">
                    <Link href={`/post/${PostItem.id}`}>
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                        {truncateString(PostItem.title, 23) || PostItem.title }... 
                       
                      </h5>
                    </Link>

                    <div className="flex flex-col items-center justify-between">
                      <span className="text-xl font-bold text-gray-900 dark:text-white my-2 text-center">
                        {truncateString(PostItem.body, 30) || PostItem.body}... {" "}
                      
                      </span>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      ) : (
        <div className="w-full min-h-screen flex justify-center items-center">
          <p className="w-50 h-10"> Loading...</p>
        </div>
      )}
    </div>
  );
}
