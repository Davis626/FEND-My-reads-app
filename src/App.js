import React from 'react';

import BooksSearch from './BooksSearch';
import BooksList from './BooksList';
import * as BooksAPI from './BooksAPI' // * - import all
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update (book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <BooksList
        books={this.state.books}
        moveBook={this.moveBook}
        />
      </div>
    )
  }
}

export default BooksApp
