import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  
  state = {
    books: []
  }

componentDidMount() { BooksAPI.getAll().then((books) => { 
  this.setState({ books }) 
console.log(books)
  })
}

moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      this.componentDidMount()
      
    })
}

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <Route exact path='/' render={() => (
            <div className="list-books">
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <Shelf title="Currently Reading" 
              books={this.state.books.filter(book => book.shelf === 'currentlyReading')}
              moveBook={this.moveBook}
              />
              <Shelf title="Want to Read" 
              books={this.state.books.filter(book => book.shelf === 'wantToRead')}
              moveBook={this.moveBook}
              />
              <Shelf title="Read" 
              books={this.state.books.filter(book => book.shelf === 'read')}
             movebook={this.moveBook}
              />
              </div>
            </div>
            <div className="open-search">
              <Link 
              to='/search'
              onClick={() => this.setState({ showSearchPage: true })}>
              Add a book</Link>
            </div>
          </div>
          
          )
        }
        />
        )}
      </div>
    )
  }
}

export default BooksApp