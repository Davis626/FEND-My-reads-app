import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Add routing
import * as BooksAPI from './BooksAPI'; // * - import all
import Book from './Book'; // Add component path

// BooksSearch component handles the search functionality of the page

class BooksSearch extends Component {
  // Create state for input query and for the search result books array
  state = {
    query: '',
    searchResult: [],
  }

  // Shows the input query and initializes the search (initSearch)
  showQuery = (query) => {
      this.setState({ query: query})
      this.initSearch(query);
  }

  // initSearch takes the query as an argument
  initSearch = (query) => {
    // if there is a query, display only the matching books - otherwise display nothing
    if (query) {
      BooksAPI.search(query).then((searchResult) => {
        if (searchResult.error) {
          this.setState({ searchResult: [] });
        } else {
          this.setState({ searchResult: searchResult })
        }
      })
    // if there is no query, display nothing
    } else {
      this.setState({ searchResult: [] });
    }
  }



  // displays books on the search page
  // onChange method changes the value of the shelf, when book is moved from current shelf
  render () {
      const { books, moveBook } = this.props
      const { query, searchResult } = this.state
      return (
        <div className="search-books">
          <div className="search-books-bar">

          <Link className="close-search" to="/" >Close</Link>

          <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.showQuery(event.target.value)}
              />
          </div>

        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {/* Compare books array with searchResult array to get correct shelf names, otherwise assign shelf to "none"*/}
            {searchResult.map(searchResult => {
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
