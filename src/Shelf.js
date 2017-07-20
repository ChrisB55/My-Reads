import React, { Component } from 'react';

import Book from './Book'


class Shelf extends Component {

    render() {
    const { moveBook } = this.props
      return (
        <div>
          <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li> 
                      {this.props.books.map(book => 
                        <Book 
                        book={book}
                         key={book.id}  
                         moveBook={moveBook}
                         />)
                      }
                      </li>
                    </ol>
                  </div>
                </div>
                </div>

              
            
    );
  }
  
}

export default Shelf