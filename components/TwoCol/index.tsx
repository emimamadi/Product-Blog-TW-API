import React from "react";

export default function index() {
  return (
    <div className="w-full h-[60vh] flex-col sm:flex sm:flex-row justify-center my-32 ">
      <div className="flex-col sm:flex sm:flex-row justify-between w-4/5 gap-10 mx-5 p-10 rounded-lg shadow-lg">
        <div className="rounded-lg my-5 shadow-lg w-1/2 flex justify-center items-center ">
          <img src="favicon.ico" alt="" className="w-[10rem] h-[10rem]" />
        </div>

        <div className="my-5 text-black shadow-lg w-1/2 flex items-center ">
          <p className="mx-5 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi non
            necessitatibus labore dolorum cupiditate nobis eum, placeat itaque,
            velit sapiente numquam iusto laudantium libero aperiam iure
            voluptates quo. Beatae, temporibus.
          </p>
        </div>
      </div>
    </div>
  );
}
