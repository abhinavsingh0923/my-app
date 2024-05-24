import React from "react";

export default function AboutSection() {
  return (
    <>
      <div className="flex bg-slate-50 w-dvw min-h-dvh flex-col px-28 pt-[70px]">
        <p className="text-center text-5xl font-bold py-8">About</p>
        <p>
          At Khan resturant, we believe that dining is more than just eating
          out; it’s an experience. Nestled in the heart of pantnagar, our
          restaurant offers a unique blend of [cuisine type, e.g.,
          Mediterranean, Italian, Asian-fusion] flavors, combining traditional
          recipes with modern culinary techniques.
        </p>
        <p className="text-xl text-left font-bold pt-5 p-4 ps-0 pb-0">
          Our Story
        </p>
        <p className="text-slate-800">
          Founded in 2024, khan resturant was born out of a passion for
          exceptional food and heartfelt hospitality. Our founders, Ayush
          envisioned a place where guests could come together to enjoy delicious
          meals in a warm, inviting atmosphere. With years of culinary
          experience and a dedication to sourcing the finest ingredients, they
          created a menu that celebrates the richness of indian food,
        </p>

        <p className="text-xl text-left font-bold pt-5 p-4 ps-0 pb-0">
          Our Philosophy
        </p>
        <p className="text-slate-800">
          We believe in the power of food to bring people together. That’s why
          we are committed to using only the freshest, locally-sourced
          ingredients. Our chefs meticulously craft each dish to ensure every
          bite is a burst of flavor. Whether you’re joining us for a casual
          lunch, a romantic dinner, or a special celebration, we strive to make
          every meal memorable.
        </p>

        <p className="text-xl text-left font-bold pt-5 p-4 ps-0 pb-0">
          Our Menu
        </p>
        <p className="text-slate-800">
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
