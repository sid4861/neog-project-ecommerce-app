import React from "react";
import HomePageTitle from "../HomePageTitle/homePageTitle";
import "../../styles.css";
import { useRoute } from "../Contexts/routeContext";

export default function HomePageCategories() {
  const { setRoute } = useRoute();

  return (
    <section className={"categories-section"}>
      <HomePageTitle text={"Categories"} />
      <div className={"category-grid"}>
        <div
          className={"category-style"}
          onClick={() => setRoute("self-improvement")}
        >
          Self Improvement
        </div>

        <div
          className={"category-style"}
          onClick={() => setRoute("psychology")}
        >
          Psychology
        </div>

        <div
          className={"category-style"}
          onClick={() => setRoute("philosophy")}
        >
          Philosophy
        </div>

        <div className={"category-style"} onClick={() => setRoute("fiction")}>
          Fiction{" "}
        </div>

        <div
          className={"category-style"}
          onClick={() => setRoute("business & management")}
        >
          Business & Management{" "}
        </div>

        <div
          className={"category-style"}
          onClick={() => setRoute("money & investing")}
        >
          Money & Investing
        </div>
      </div>
    </section>
  );
}
