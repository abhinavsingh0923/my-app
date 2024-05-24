import React from "react";
import Image from "next/image";
import HeroImage from "@/asset/heroImage.jpg";

export default function page() {
  return (
    <>
      <div className="flex flex-col">
        {/* <img
          src={"https://wallpapercave.com/wp/wp10322965.jpg"}
          className="w-dvw h-dvh blur-sm opacity-80"
        /> */}
        <nav className="flex item-center justify-between flex-row p-5  w-dvw">
          <p className="font-bold text-xl">Khan-Resturant</p>
          <div className="flex flex-row gap-4">
            <p className="hover:underline cursor-pointer">Home</p>
            <p className="hover:underline cursor-pointer">Services</p>
            <p className="hover:underline cursor-pointer">Recipies</p>
            <p className="hover:underline cursor-pointer">contact us</p>
          </div>
        </nav>
        <div className="h-dvh w-dvw flex items-start justify-center ">
          <div className="flex flex-col text-7xl">
            <p className="font-bold underline">Authentic</p>
            <p className=" ps-[70px] text-slate-600">Food </p>
            <p className=" ps-[140px] text-slate-600">Dishes</p>
          </div>
        </div>
      </div>
      <div className="flex bg-slate-50 w-dvw h-dvh flex-col px-28 text-center">
        <p className="text-center text-5xl font-bold py-5">About</p>
        <p>
          At Khan resturant, we believe that dining is more than just eating
          out; it’s an experience. Nestled in the heart of pantnagar, our
          restaurant offers a unique blend of [cuisine type, e.g.,
          Mediterranean, Italian, Asian-fusion] flavors, combining traditional
          recipes with modern culinary techniques.
        </p>
        <p className="text-xl">Our Story</p>
        <p>
          Founded in 2024, khan resturant was born out of a passion for
          exceptional food and heartfelt hospitality. Our founders, Ayush
          envisioned a place where guests could come together to enjoy delicious
          meals in a warm, inviting atmosphere. With years of culinary
          experience and a dedication to sourcing the finest ingredients, they
          created a menu that celebrates the richness of indian food,
        </p>

        <p className="text-xl">Our Philosophy</p>
        <p>
          We believe in the power of food to bring people together. That’s why
          we are committed to using only the freshest, locally-sourced
          ingredients. Our chefs meticulously craft each dish to ensure every
          bite is a burst of flavor. Whether you’re joining us for a casual
          lunch, a romantic dinner, or a special celebration, we strive to make
          every meal memorable.
        </p>

        <p className="text-xl">Our Menu</p>
        <p>
          Our menu features a variety of dishes that cater to all tastes and
          preferences. From hearty mains and fresh seafood to vegan and
          gluten-free options, there’s something for everyone at [Restaurant
          Name]. Don’t miss our signature dishes like [Popular Dish 1] and
          [Popular Dish 2], as well as our carefully curated wine list and
          handcrafted cocktails.
        </p>
      </div>
    </>
  );
}
