import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Shelf from './Shelf';
import Search from './Search';
import Header from './Header';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

//App.js is the primary component. 
//Contains logic for moving books across shelf components and main rendering. 
class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });

    });
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(books => {
      this.componentDidMount();
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <Header 
              />
              <Shelf
                title="Currently Reading"
                books={this.state.books.filter(book => book.shelf === 'currentlyReading')}
                moveBook={this.moveBook}
              />
              <Shelf
                title="Want to Read"
                books={this.state.books.filter(book => book.shelf === 'wantToRead')}
                moveBook={this.moveBook}
              />
              <Shelf
                title="Read"
                books={this.state.books.filter(book => book.shelf === 'read')}
                moveBook={this.moveBook}
              />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
        <Route
          exact
          path="/search"
          render={() => 
            <Search 
              books={this.state.books} 
              moveBook={this.moveBook} 
            />
          }
        />
      </div>
    );
  }
}

export default BooksApp;