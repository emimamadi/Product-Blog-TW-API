import React from "react";

export default function index() {
  return (
    <div className="w-full h-[60vh] flex-col sm:flex sm:flex-row justify-center my-32 ">
      <div className="h-[50vh] w-5/6 grid-cols-1 sm:grid sm:grid-cols-3  place-items-center justify-items-center shadow-lg rounded-lg">
        <div className="w-72 flex flex-col shadow-lg rounded-lg p-5 items-center">
          <img src="favicon.ico" alt="" className="w-[10rem] h-[10rem]" />
          <p>Lorem ipsum dolor sit amet.</p>
          {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, pariatur.</p> */}
        </div>
        <div className="w-72 flex flex-col shadow-lg  rounded-lg p-5 items-center">
          <img src="favicon.ico" alt="" className="w-[10rem] h-[10rem] " />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="w-72 flex flex-col shadow-lg rounded-lg p-5 items-center">
          <img src="favicon.ico" alt="" className="w-[10rem] h-[10rem]" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
}
