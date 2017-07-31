import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

//These components house the books that are return 
class Shelf extends Component {

  static propTypes = {
    moveBook: PropTypes.func.isRequired
  }

    render() {
    const { moveBook } = this.props
      return (
        <div>
          <div className="list-books-content">
            <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">    
                    {this.props.books.map(book => 
                      <Book 
                        book={book}
                        key={book.id}  
                        moveBook={moveBook}
                         />
                        )
                      }
                  </ol>
                  </div>
                </div>
              </div>
            </div>
    );
  }
  
}

export default Shelf