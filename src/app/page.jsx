import React from "react";
import Image from "next/image";
import HeroImage from "@/asset/heroImage.jpg";

export default function page() {
  return (
    <>
      <div className="flex relative">
        <img
          src={"https://wallpapercave.com/wp/wp10322965.jpg"}
          className="w-dvw h-dvh blur-sm opacity-80"
        />
        <nav className="flex item-center justify-between flex-row p-5 absolute top-0 w-dvw">
          <p className="font-bold text-xl">Khan-Resturant</p>
          <div className="flex flex-row gap-4">
            <p className="hover:underline cursor-pointer">Home</p>
            <p className="hover:underline cursor-pointer">Services</p>
            <p className="hover:underline cursor-pointer">Recipies</p>
            <p className="hover:underline cursor-pointer">contact us</p>
          </div>
        </nav>
        <div className="h-dvh w-dvw flex items-start justify-center pt-[100px] -translate-x-[50px] absolute top-0 ">
          <div className="flex flex-col text-7xl">
            <p className="font-bold underline">Authentic</p>
            <p className=" ps-[70px] text-slate-600">Food </p>
            <p className=" ps-[140px] text-slate-600">Dishes</p>
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum,
        totam et perferendis omnis eaque earum atque ad odio. Architecto facilis
        autem reprehenderit iure quos rem commodi dolorum quibusdam voluptatum.
      </p>
    </>
  );
}