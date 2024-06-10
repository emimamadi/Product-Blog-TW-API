import React from "react";

import { posts } from "@/data/data";
import Link from "next/link";

export default function postDetail({ params }: { params: { id: number } }) {
  const { id } = params;

  const data = posts.filter(
    (posts: { title: string; id: number }) => posts.id == id
  );

  const po = Object.values(data);

  return (
    <div className="mt-5">
      <Link href="../post" className="btn bg-yellow-200 px-5 text-center mt-10 ml-10 rounded-2xl p-4">BACK</Link> 
      {po.map((x) => (
        <div className="flex-col justify-center w-3/4 bg-blue-500 min-h-min shadow-xl rounded-2xl mx-auto my-10 py-10">
          <h3 className="text-black text-center text-2xl font-bold">POST </h3>
          <h4 className="text-center text-yellow-100 my-5 bg-blue-700 p-5 rounded-xl w-1/2 mx-auto">
            {x.title}
          </h4>
          <p className="text-center text-yellow-100 my-5  bg-blue-700 p-5 rounded-xl w-1/2 mx-auto">
            {x.body}
          </p>
          <div className="flex justify-center mx-auto bg-blue-800 w-2/3 rounded-xl">
        <span className="flex  text-white pt-3">Tags  :</span>    {x.tags.map((y) => (
              <span className=" flex  text-center text-white   p-3  ">
                {y} 
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
