import React from "react";
import HomePageTitle from "../HomePageTitle/homePageTitle";
import "../../styles.css";

export default function aboutSection() {
  return (
    <section
      // style={{
      //   width: "40%",
      //   gridArea: "about-section",
      //   paddingTop: "56px",
      //   paddingBottom: "56px",
      //   position: "relative",
      //   left: "264px"
      // }}
      className={"about-section"}
    >
      <HomePageTitle text={"About"} />
      <p style={{ color: "#424030", fontSize: "22px", lineHeight: "140%" }}>
        Bookstore is curated collection of books on a variety of genres such as
        technology, startups, psychology, non-fiction, etc. You can browse
        through categories and buy them on amazon.
      </p>
    </section>
  );
}
