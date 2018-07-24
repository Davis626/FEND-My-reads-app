import React from 'react';
import { Route } from 'react-router-dom';
import BooksSearch from './BooksSearch';
import BooksLibrary from './BooksLibrary';
import * as BooksAPI from './BooksAPI'; // * - import all
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
