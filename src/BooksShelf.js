import React, { Component } from 'react';
import Book from './Book';

// BooksShelf component uses the state from the BooksLibrary to display the books with matching shelf name

class BooksShelf extends Component {
  render () {
    const { books, moveBook, shelfName, name } = this.props
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{name}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.filter(book =>  book.shelf === shelfName ).map(book => (
                  <li key={book.id}>
                    <Book
                      books = {books}
                      book={book}
                      moveBook={moveBook}
                      shelfName={shelfName}
                    />
                  </li>
                ))
              }
            </ol>
          </div>
        </div>
        )
      }
    }

export default BooksShelf
