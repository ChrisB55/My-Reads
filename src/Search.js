import React, {Component} from 'react';
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import sortBy from 'sort-by'




class Search extends Component {
  state = {
    query: '',
    books: []

  }

  updateQuery = (query) => {
    if (!query) {
      this.setState({query: '', books: []})
    } else {
      this.setState({ query: query.trim() })
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          books = []
        }
        books.map(book => 
          (this.props.books.filter((newBook) => newBook.id === book.id).map(newBook => book.shelf = newBook.shelf)))
        this.setState({books})
      })
    }
  }

  render () {
    const { moveBook} = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search'>Close</Link>
          <div className="search-books-input-wrapper">
            <input 
            type="text" 
            placeholder="Search by title or author"
            onChange={(e) => this.updateQuery(e.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.state.books.sort(sortBy('title'))
                  .map(book => (
                    <Book 
                      key={book.id}
                      book={book}
                      moveBook={moveBook}
                    />
                  ))
                }
              </ol>
            </div>
          </ol>
        </div>
      </div>
    )
  }
}

export default Search