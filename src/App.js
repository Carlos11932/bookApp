import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./components/BookShelf";
import Search from "./components/Search";
import BookDetail from "./components/BookDetail";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  const moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      setBooks((prevBooks) => {
        const updatedBooks = prevBooks.map((b) => {
          if (b.id === book.id) {
            b.shelf = shelf;
          }
          return b;
        });
        return updatedBooks;
      });
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div className="app">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="list-books">
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                  <div className="list-books-content">
                    <div>
                      <BookShelf
                        title="Currently Reading"
                        books={books.filter(
                          (book) => book.shelf === "currentlyReading"
                        )}
                        onMoveBook={moveBook}
                        shelf="currentlyReading"
                      />
                      <BookShelf
                        title="Want to Read"
                        books={books.filter(
                          (book) => book.shelf === "wantToRead"
                        )}
                        onMoveBook={moveBook}
                        shelf="wantToRead"
                      />
                      <BookShelf
                        title="Read"
                        books={books.filter((book) => book.shelf === "read")}
                        onMoveBook={moveBook}
                        shelf="read"
                      />
                    </div>
                  </div>
                  <div className="open-search">
                    <Link to="/search">Add a book</Link>
                  </div>
                </div>
              }
            />
            <Route
              path="/search"
              element={<Search books={books} onMoveBook={moveBook} />}
            />
            <Route path="/book/:id" element={<BookDetail />} />
          </Routes>
        </div>
      </Router>
    </DndProvider>
  );
}

export default App;
