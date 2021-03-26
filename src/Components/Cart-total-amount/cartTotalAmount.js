import React from "react";
import { useCart } from "../Contexts/cartContext";
import "../../styles.css";

export default function CartTotalAmount() {
  const { state } = useCart();
  // const totalAmount = state.itemsInCart.reduce(
  //   (amount, item) => amount + item.price * item.quantity,
  //   0
  // );
  return (
    <div className={"cart-amount"}>
      <div style={{ textAlign: "center" }}>
        <span>Total amount </span>
        <span style={{ color: "#fb0066" }}>
          {state.itemsInCart.reduce(
            (amount, item) => amount + item.price * item.quantity,
            0
          )}
        </span>
      </div>
    </div>
  );
}
