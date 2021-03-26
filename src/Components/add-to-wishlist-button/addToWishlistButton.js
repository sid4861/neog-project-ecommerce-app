import React from "react";
import { useWishlist } from "../Contexts/wishlistContext";

export default function PrimaryButton({ saveToWishlistHandler, book }) {
  const { state } = useWishlist();

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
        state.itemsInWishlist.find((item) => item.id === book.id) !== undefined
          ? true
          : false
      }
      onClick={() => {
        saveToWishlistHandler({ type: "ADD", payload: book });
      }}
    >
      {state.itemsInWishlist.find((item) => item.id === book.id) !== undefined
        ? "Added"
        : "Add to wishlist"}
    </button>
  );
}
