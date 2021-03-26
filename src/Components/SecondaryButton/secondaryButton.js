import React from "react";

export default function secondaryButton({ text, clickHandler, id }) {
  return (
    <button
      style={{
        padding: "0.5rem 0.8rem",
        backgroundColor: "#FFFEFA",
        color: "#FB0066",
        border: "1px solid #FB0066",
        fontWeight: "bold",
        borderRadius: "4px",
        fontSize: "16px",
        cursor: "pointer"
      }}
      onClick={() => {
        clickHandler({ type: "REMOVE", payload: id });
      }}
    >
      {text}
    </button>
  );
}
