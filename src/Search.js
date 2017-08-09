import React, {Component} from 'react';
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import sortBy from 'sort-by'

//Component handles search functionality. 
class Search extends Component {
  state = {
    query: '',
    books: []

  }

 updateQuery = (query, maxResults) => {
  if (!query) {
    this.setState({query: '', books: []})
  } else {
    this.setState({ query: query.trim() })

    BooksAPI.search(query, maxResults).then((books) => {
      if (!books || books.error) {
        this.setState({ books: []})
        return
      }
books.map(book => {
          return book.shelf = 'none'
        })
      this.setState({ 
        books: books.map(book => {
          this.props.books.forEach(bookOnShelf => {
            if (bookOnShelf.id === book.id) book.shelf = bookOnShelf.shelf
          })
          return book
        })
      })
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