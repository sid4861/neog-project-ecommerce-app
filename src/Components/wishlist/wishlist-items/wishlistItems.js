import React from "react";
import WishlistItem from "../wishlist-item/wishlistItem";
import "../../../styles.css";

export default function CartItems({ items }) {
  return (
    <div className={"wishlist-items"}>
      {items.map((book) => {
        return <WishlistItem book={book} />;
      })}
    </div>
  );
}
