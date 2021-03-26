import React from "react";
import CartItem from "../CartItem/cartItem";
import "../../../styles.css";

export default function CartItems({ items }) {
  return (
    <div className={"cart-items"}>
      {items.map((book) => {
        return <CartItem book={book} />;
      })}
    </div>
  );
}
