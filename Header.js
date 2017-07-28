import React, {Component} from 'react'


class Header extends Component {
    render () {
        return (
            <div className="list-books-title">
              <h1>Reactive Bookshelf</h1>
              <h4>Try moving around the books!</h4>
            </div>
        )
    }
}

export default Header