import { useState, useEffect } from 'react'
import './App.css'
import Bookgrid from './components/Bookgrid'
import Header from './components/Header'
import {BookProvider} from './contexts'
import Book from './components/Book'
import FormModal from './components/FormModal'
function App() {

  const [books,setBooks] = useState([])

  const addBook = (book) => {
    setBooks((prev)=>
      [...prev,{id:Date.now(),...book}]
    )

  }
  const deleteBook = (id) => {
    setBooks((prev)=>prev.filter((item)=>item.id!==id))

  }
  const toggleReadit = (id) => {
      setBooks((prev)=>prev.map((item)=>item.id===id?{ ...item, 
        readit: !item.readit } : item))
  }
  useEffect(() => {
    const books = JSON.parse(localStorage.getItem("books"))

    if (books && books.length > 0) {
      setBooks(books)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
  }, [books])
  
  return (
     <BookProvider value={{addBook, deleteBook, toggleReadit}}>
    <Header />
    
<main className="main container">
    
    <FormModal />
    <div className="books-grid" id="booksGrid">

       {books.map((item) => (
                          <div key={item.id}>
                            <Book book={item} />
                          </div>
                        ))}
    </div>
  </main>
  
  </BookProvider>
  )
}

export default App
