import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'; // * - import all
import Book from './Book';

class BooksSearch extends Component {
  state = {
    query: '',
    searchResult: [],
  }

  updateQuery = (query) => {
    this.setState({ query: query})
    this.updateSearch(query);
  }

  updateSearch = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchResult) => {
        if (searchResult.error) {
          this.setState({ searchResult: [] });
        } else {
          this.setState({ searchResult: searchResult })
        }
      })
    } else {
      this.setState({ searchResult: [] });
    }
  }
  render () {
      const { books, moveBook } = this.props
      const { query} = this.state
      return (
        <div className="search-books">
          <div className="search-books-bar">

            <Link
              className="close-search"
              to="/"
            >Close</Link>

            <div className="search-books-input-wrapper">
              <input
                  type="text"
                  placeholder="Search by title or author"
                  value={query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                />
            </div>

          </div>

          <div className="search-books-results">
            <ol className="books-grid">
              {
                this.state.searchResult.map(searchResult => {
                  let defaultShelf = "none"

                  books.map(book => (
                    book.id === searchResult.id ? defaultShelf = book.defaultShelf : ''
                  ))

                  return (
                    <li key={searchResult.id}>
                      <Book
                        book={searchResult}
                        moveBook={moveBook}
                        shelfName={defaultShelf}
                      />
                    </li>
                  )
                })
              }
            </ol>
          </div>
        </div>
      );
    }
  }

export default BooksSearch;
