import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    BooksAPI.get(id).then((book) => {
      setBook(book);
    });
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-detail">
      <Link className="close-search" to="/">
        Close
      </Link>
      <div className="book-detail-content">
        <div
          className="book-detail-cover"
          style={{ backgroundImage: `url(${book.imageLinks?.thumbnail})` }}
        ></div>
        <div className="book-detail-info">
          <h2>{book.title}</h2>
          <h3>{book.subtitle}</h3>
          <p>
            <strong>Authors:</strong> {book.authors.join(", ")}
          </p>
          <p>
            <strong>Publisher:</strong> {book.publisher}
          </p>
          <p>
            <strong>Published Date:</strong> {book.publishedDate}
          </p>
          <p>
            <strong>Description:</strong> {book.description}
          </p>
          <p>
            <strong>Page Count:</strong> {book.pageCount}
          </p>
          <p>
            <strong>Categories:</strong> {book.categories?.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
