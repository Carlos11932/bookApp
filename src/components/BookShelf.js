import React from "react";
import { useDrop } from "react-dnd";
import Book from "./Book";

function BookShelf({ title, books, onMoveBook, shelf }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "BOOK",
    drop: (item) => {
      onMoveBook(item.book, shelf);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      className="bookshelf"
      ref={drop}
      style={{ backgroundColor: isOver ? "lightgreen" : "white" }}
    >
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} onMoveBook={onMoveBook} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default BookShelf;
