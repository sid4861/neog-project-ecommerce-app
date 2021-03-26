import React from "react";
export default function homePageTitle({ text }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row"
      }}
    >
      <div style={{ width: "8px", backgroundColor: "#FB0066" }}></div>
      <span style={{ color: "#424030", fontSize: "40px" }}> {text} </span>
    </div>
  );
}
