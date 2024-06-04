import React from "react";
import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";

function Book({ book, onMoveBook }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "BOOK",
    item: { book },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const handleChange = (event) => {
    onMoveBook(book, event.target.value);
  };

  return (
    <div className="book" ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div className="book-top">
        <Link to={`/book/${book.id}`}>
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks ? book.imageLinks.thumbnail : ""
              })`,
            }}
          ></div>
        </Link>
        <div className="book-shelf-changer">
          <select value={book.shelf || "none"} onChange={handleChange}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors ? book.authors.join(", ") : "Unknown Author"}
      </div>
    </div>
  );
}

export default Book;
