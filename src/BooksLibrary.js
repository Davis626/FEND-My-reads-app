import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Add routing
import BooksShelf from './BooksShelf'; // Add component path

// BooksLibrary component features 3 book shelves; state is passed from parent to children components

class BooksLibrary extends Component {
  render () {
    const { books, moveBook } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {/* "Currently reading" shelf */}
            <BooksShelf
              books = { books }
              moveBook = { moveBook }
              name = "Currently Reading"
              shelfName="currentlyReading"
            />
          </div>
          <div>
            {/* "Want to read" shelf */}
            <BooksShelf
              books = { books }
              moveBook = { moveBook }
              name = "Want to Read"
              shelfName="wantToRead"
            />
          </div>
          <div>
            {/* "Read" shelf */}
            <BooksShelf
              books = { books }
              moveBook = { moveBook }
              name = "Read"
              shelfName="read"
            />
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
          >Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BooksLibrary;
