import React from "react";
import SecondaryButton from "../../SecondaryButton/secondaryButton";
import "../../../styles.css";
import { useCart } from "../../Contexts/cartContext";

export default function CartItem({ book }) {
  const { dispatch } = useCart();

  return (
    <div className={"cart-item"}>
      <div className={"cart-item-image"}>
        <img
          src={book.imageUrl}
          alt={book.title}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className={"cart-item-title-author"}>
        <p
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#424030",
            margin: "8px"
          }}
        >
          {book.title}
        </p>
        <p style={{ fontSize: "20px", color: "#424030", margin: "8px" }}>
          {" "}
          {book.author}{" "}
        </p>
        <div style={{ display: "flex" }}>
          <button
            onClick={() =>
              dispatch({ type: "INCREMENT_QUANTITY", payload: book.id })
            }
          >
            +
          </button>
          <span style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
            {book.quantity}
          </span>
          <button
            onClick={() =>
              dispatch({ type: "DECREMENT_QUANTITY", payload: book.id })
            }
          >
            -
          </button>
        </div>
      </div>

      <div className={"cart-item-price-remove"}>
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
        <SecondaryButton text={"Remove"} clickHandler={dispatch} id={book.id} />
      </div>
    </div>
  );
}
