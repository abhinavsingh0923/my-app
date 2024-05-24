import React from "react";

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col">
        <nav className="flex item-center justify-between flex-row p-5  w-dvw text-white absolute top-0">
          <p className="font-bold text-xl max-sm:text-center">Khan-Resturant</p>
          <div className="flex flex-row gap-4 max-sm:hidden">
            <p className="hover:underline cursor-pointer">Home</p>
            <p className="hover:underline cursor-pointer">Services</p>
            <p className="hover:underline cursor-pointer">Recipies</p>
            <p className="hover:underline cursor-pointer">contact us</p>
          </div>
        </nav>
        <div className="h-dvh w-dvw flex flex-col   items-start justify-center text-white absolute top-0 text-7xl px-11">
          <p className="font-bold pb-4">
            Authentic Food <br /> Dishes
          </p>
          <p className="text-sm text-slate-300 sm:w-2/3">
            Welcome to khan Restaurant, where every meal is a celebration of
            flavors and every visit feels like coming home. Nestled in the heart
            of pantnagar, our restaurant offers an unforgettable dining
            experience with a menu that blends traditional recipes with modern
            culinary artistry. Whether you're savoring our crispy Masala Dosa,
            indulging in our Fluffy Blueberry Pancakes, or enjoying a Gourmet
            Club Sandwich, each dish is crafted with the freshest ingredients
            and a passion for perfection. Join us at [Restaurant Name] and
            discover why we are a beloved destination for food lovers and
            families alike.
          </p>
        </div>
        <img
          src={
            "https://img.freepik.com/free-photo/pasta-near-utensils-ingredients_23-2147849717.jpg?w=1060&t=st=1716547182~exp=1716547782~hmac=eb84533f9035d785106e2250e7d5ad329abe806f0a4ac0cb106f0f1c65894dae"
          }
          className="w-dvw h-dvh object-cover"
        />
      </div>
    </>
  );
}
