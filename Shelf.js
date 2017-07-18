import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class Shelf extends Component {
state = {
    books: []
  }

componentDidMount() { BooksAPI.getAll().then((books) => { 
  this.setState({ books }) 
})

}
    render() {

      return (
        <div>
          <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li> 
                      {this.props.books.map(book => 
                        <Book book={book} />)}
                      </li>
                    </ol>
                  </div>
                </div>
                </div>

              
            
    );
  }
  
}

export default Shelf