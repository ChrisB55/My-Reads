import React, { Component } from 'react';
import PropTypes from 'prop-types'

//This component manages the rendering of the returned data from the books API and selection feature making use of the moveBook feature.
class Book extends Component {
 static propTypes = {
    book: PropTypes.object.isRequired,
  }

  render() {
    const { book, moveBook} = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage:
                  `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail: ''})`,
              }}
            />
            <div className="book-shelf-changer">
              <select defaultValue={book.shelf}
               onChange={(e) => moveBook(book, e.target.value)}>
                <option value="none" disabled>
                  Move to... </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">
            {book.title}
          </div>
          <div className="book-authors">
            {book.authors}
          </div>
      </div>
    </li>
    );
  }
}

export default Book;

    