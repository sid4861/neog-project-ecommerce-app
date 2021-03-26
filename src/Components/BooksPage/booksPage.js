import React from "react";
import Navigation from "../Navigation/navigation";
import "../../styles.css";
import { booksList } from "../../booksList.js";
import BookCard from "../BookCard/bookCard";
import Heading from "../Heading/heading";

export default function booksPage({ category }) {
  return (
    <>
      <Navigation />
      <Heading text={`${category} Books`} />
      <div className={"books-grid"}>
        {booksList.map((book) => {
          if (book.genre === category) {
            return <BookCard book={book} />;
          }
        })}
      </div>
    </>
  );
}
