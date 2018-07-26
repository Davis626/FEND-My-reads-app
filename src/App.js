import React from 'react';
import { Route } from 'react-router-dom';
import BooksSearch from './BooksSearch';
import BooksLibrary from './BooksLibrary';
import * as BooksAPI from './BooksAPI'; // * - import all
import './App.css'

class BooksApp extends React.Component {
  // Create state for books - array
  state = {
    books: []
  }

  // Function fetches books from BooksAPI and updates the state of books
  fetchBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  // After component renders, call "componentDidMount" method & fetch the books
  componentDidMount() {
    this.fetchBooks();
  }

  // Function updates the state, when a book is moved from a shelf
  moveBook = (book, shelf) => {
    BooksAPI.update (book, shelf);
    this.fetchBooks();
  }

  // Render and routing for "BooksLibrary" and "BooksSearch" components
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksLibrary
            books={this.state.books}
            moveBook={this.moveBook}
          />
        )} />

        <Route path="/search" render={() => (
          <BooksSearch
            books={this.state.books}
            moveBook={this.moveBook}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
