
import React from 'react'
import Book from './Book'
export function Bookgrid() {
 
    
    return (
  <main className="main container">
    <button className="btn btn-add" id="addBookBtn">+ Add book</button>
    <div className="books-grid" id="booksGrid">
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  </main>
  )
}
export default Bookgrid