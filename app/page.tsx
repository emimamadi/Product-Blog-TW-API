import Image from "next/image";

import Carousel from "@/components/carousel";

import Accordian from "@/components/accordian";

import TwoCol from "@/components/TwoCol";

import TrioCol from "@/components/TrioCol";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Carousel />

      <div className=" flex gap-5 mx-5">
        <Accordian />
        <Accordian />
      </div>

      <TwoCol />

      <TrioCol/>

    
    </div>
  );
}
