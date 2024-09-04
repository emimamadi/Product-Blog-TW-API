"use client";

import React, { useEffect, useState } from "react";

import { posts } from "@/data/data";
import Link from "next/link";

type Post = {
  id: any;
  title: any;
  body: any;
};

export default function postDetail({
  params,
}: {
  params: { id: number };
  post: Post;
}) {
  const { id } = params;

  const [post, setPost] = useState<Post>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  console.log("post = ", post);

  return (
    <div className="mt-5">
      <Link
        href="../post"
        className="btn bg-yellow-200 px-5 text-center mt-10 ml-10 rounded-2xl p-4"
      >
        BACK
      </Link>

      <div className="flex-col justify-center w-3/4 bg-blue-500 min-h-min shadow-xl rounded-2xl mx-auto my-10 py-10">
        <h3 className="text-black text-center text-2xl font-bold">POST </h3>
        <h4 className="text-center text-yellow-100 my-5 bg-blue-700 p-5 rounded-xl w-1/2 mx-auto">
          {post?.title}
        </h4>
        <p className="text-center text-yellow-100 my-5  bg-blue-700 p-5 rounded-xl w-1/2 mx-auto">
          {post?.body}
        </p>
        <Link
          href="../post"
          className="w-3/4 h-16 btn bg-yellow-200 text-center p-4 flex justify-center align-middle mx-auto rounded-2xl"
        >
          BACK
        </Link>
      </div>
    </div>
  );
}
