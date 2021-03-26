import React, { useState } from "react";
import { useCart } from "../Contexts/cartContext";

export default function PrimaryButton({ saveToCartHandler, book }) {
  const { state } = useCart();

  return (
    <button
      style={{
        margin: "8px",
        padding: "0.5rem 0.8rem",
        backgroundColor: "#FB0066",
        color: "#FFFEFA",
        border: "none",
        fontWeight: "bold",
        borderRadius: "4px",
        fontSize: "16px",
        cursor: "pointer"
      }}
      disabled={
        state.itemsInCart.find((item) => item.id === book.id) !== undefined
          ? true
          : false
      }
      onClick={() => {
        saveToCartHandler({ type: "ADD", payload: book });
      }}
    >
      {state.itemsInCart.find((item) => item.id === book.id) !== undefined
        ? "Added"
        : "Add to cart"}
    </button>
  );
}
