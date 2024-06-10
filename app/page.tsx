import Image from "next/image";

import Carousel from "@/components/carousel";

import Accordian from "@/components/accordian";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Carousel/>

      <div className=" flex">

      <Accordian />
      <Accordian />
      </div>
      
    </div>
  );
}
