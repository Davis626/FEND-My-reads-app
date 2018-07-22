import React from 'react';

import BooksSearch from './BooksSearch';
import BooksList from './BooksList';
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <BooksList />
      </div>
    )
  }
}

export default BooksApp
