import React, { Component } from 'react';

// Book component uses the state passed from parent components to hold the information for each book

class Book extends Component {
  render () {
    const { moveBook, shelfName, book } = this.props

    // Check if the book has a cover:
    // If it does - display the cover, otherwise - display empty string
    let bookCover = book.imageLinks ? book.imageLinks.thumbnail : '';

    // Return the information about the current book - book cover, title, author and the correct shelfName
    // onChange method changes the value of the shelf, when book is moved from current shelf
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookCover}")` }}></div>
          <div className="book-shelf-changer">
            <select
              onChange={(event) => moveBook(
                book, event.target.value
              )}
              value={shelfName}
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}

export default Book;
