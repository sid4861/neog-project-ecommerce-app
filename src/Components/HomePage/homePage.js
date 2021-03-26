import React from "react";
import Navigation from "../Navigation/navigation";
import AboutSection from "../AboutSection/aboutSection";
import HomePageCategories from "../HomePageCategories/homePageCategories";

export default function homePage() {
  return (
    <>
      <Navigation />
      <AboutSection />
      <HomePageCategories />
    </>
  );
}
