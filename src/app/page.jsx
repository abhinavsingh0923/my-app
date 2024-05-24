import React from "react";
import HeroSection from "@/Components/HeroSection";
import AboutSection from "@/Components/AboutSection";
import OwnerTestimonialComponent from "@/Components/OwnerTestimonialComponent";
import Statics from "@/Components/StaticsComponent";
import Contact from "@/Components/Contact";
import MenuComponenet from "@/Components/MenuComponenet";

export default function page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <OwnerTestimonialComponent />
      <Statics />
      <MenuComponenet />
      <Contact />
    </>
  );
}
