import React, { useState,useEffect } from 'react'
import { useBook } from '../contexts/BookContext';


function Book({book})
{

  const {deleteBook,toggleReadit} = useBook()
  const [toggleVal,setToggle] = useState("Not read")

  useEffect(() => {
    const btn = document.getElementById('readBtn');
   if(book.readit===true)
   {setToggle("Read")
    //btn.style.backgroundColor = "#9fff9c";
  }
  else
  {setToggle("Not read")
  //btn.style.backgroundColor = "#ff9c9c";
}
    
  }, [toggleReadit]);
  
    return (
      <div className="book-card">
      <p>{book.title}</p>
      <p>{book.author}</p>
      <p>{book.pages}</p>
      <div className="button-group">
        <button className="btn btn-light-red" onClick={()=>{
            toggleReadit(book.id)
    
        }}>{toggleVal}</button>
        <button className="btn removeBtn" onClick={()=>{
          deleteBook(book.id)
        }}>Remove</button>
      </div>
      </div>
    )
}

export default Book