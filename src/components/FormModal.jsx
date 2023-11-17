import React, { useState,useEffect } from 'react'
import { useBook } from '../contexts/BookContext';

function FormModal()
{
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [pages, setPages] = useState("")
  const [modal,setModal] = useState(false)

  const {addBook} = useBook()
  const add = () => {
  
    if (!title || !author || !pages) return

    addBook({ title,author,pages, readit: false})
    setTitle("")
    setAuthor("")
    setPages("")
  }

  useEffect(() => {
    const modalEl = document.querySelector('.modal')
    const overlay = document.querySelector('.overlay') 
   if(modal===true)
   {
    modalEl.setAttribute("class","modal active")
    overlay.setAttribute("class","overlay active")
   }
   else
   {
    modalEl.setAttribute("class","modal")
    overlay.setAttribute("class","overlay")
   }

  }, [modal,add]);
  
  
    return (
        <>
        <button className="btn btn-add" id="addBookBtn" onClick={()=>setModal(true)}>+ Add book</button>
        <div className="modal" id="addBookModal">
        <form className="add-book-form" id="addBookForm">
        <h3 className="text-2xl font-medium text-purple-800">Add new book</h3>

          <input className="input" type="text" id="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}
           required maxLength="100"/>
          <p className="error-msg" id="errorMsg"></p>
          <input className="input" type="text" id="author" placeholder="Author" value={author} 
          onChange={(e) => setAuthor(e.target.value)} required maxLength="100"/>
          <input className="input" type="number" id="pages" placeholder="Pages" value={pages} 
          onChange={(e) => setPages(e.target.value)} required max="10000"/>
          <button  className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"  type="button" onClick={()=>{
            add()
            setModal(false)
          }}>Submit</button>
        </form>
      </div>
        <div className="overlay" id="overlay"></div>
        </>
    )
}

export default FormModal
