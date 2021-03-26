import React from "react";
import "../../styles.css";

export default function Heading({ text }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row"
      }}
      className={"title"}
    >
      <div style={{ width: "8px", backgroundColor: "#FB0066" }}></div>
      <span style={{ color: "#424030", fontSize: "40px", paddingLeft: "1rem" }}>
        {" "}
        {text}{" "}
      </span>
    </div>
  );
}
