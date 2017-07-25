import React, {Component} from 'react';
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import sortBy from 'sort-by'
import escapeRegExp from 'escape-string-regexp'



class Search extends Component {
  state = {
    query: '',
    books: []
   
  }

updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }
  render() {
    const {books, moveBook} = this.props
    const {query} = this.state

    let returnedBooks = []
    if (query) {
          
          const match = new RegExp(escapeRegExp(query), 'i')
          returnedBooks = books.filter((book) => match.test(book.title))
        } else {
  
      returnedBooks = books
    }
    returnedBooks.sort(sortBy('title'))

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input 
            type='text' 
            placeholder='Search by title or author'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {returnedBooks.map((book) => {
              return (
                <Book
                  key={book.id}
                  book={book}
                  moveBook={moveBook}
                />)
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search