import React, { useState } from "react";
import PrimaryButton from "../PrimaryButton/primaryButton";
import AddToWishlist from "../add-to-wishlist-button/addToWishlistButton";
import { useCart } from "../Contexts/cartContext";
import { useWishlist } from "../Contexts/wishlistContext";

export default function BookCard({ book }) {
  const { dispatch: cartDispatch } = useCart();
  const { dispatch: wishlistDispatch } = useWishlist();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "4px solid #FB0066",
        borderRadius: "8px",
        padding: "2rem",
        backgroundColor: "#FFEB40"
      }}
    >
      <img
        src={book.imageUrl}
        alt={book.title}
        style={{ width: "100%", height: "auto" }}
      />
      <p
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          color: "#424030",
          flexGrow: "1",
          margin: "8px"
        }}
      >
        {book.title}
      </p>
      <p
        style={{
          fontSize: "20px",
          color: "#FB0066",
          margin: "8px",
          fontWeight: "bold"
        }}
      >
        {" "}
        Rs {book.price}{" "}
      </p>
      <p style={{ fontSize: "20px", color: "#424030", margin: "8px" }}>
        {" "}
        {book.author}{" "}
      </p>
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
        onClick={() => {
          window.open(book.amazonLink);
        }}
      >
        Buy now
      </button>

      <PrimaryButton saveToCartHandler={cartDispatch} book={book} />
      <AddToWishlist saveToWishlistHandler={wishlistDispatch} book={book} />
    </div>
  );
}
