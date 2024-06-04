import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

function Search({ books, onMoveBook }) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    if (value) {
      BooksAPI.search(value).then((results) => {
        if (results.error) {
          setSearchResults([]);
        } else {
          setSearchResults(
            results.map((result) => {
              const bookInShelf = books.find((book) => book.id === result.id);
              result.shelf = bookInShelf ? bookInShelf.shelf : "none";
              return result;
            })
          );
        }
      });
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.map((book) => (
            <li key={book.id}>
              <Book book={book} onMoveBook={onMoveBook} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Search;
