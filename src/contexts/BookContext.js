import {createContext, useContext} from "react"

export const BookContext = createContext({
    books: [
        {
            id: 1,
            title:"title",
            author: "author",
            pages: "pages",
            readit: false
        }
    ],
    addBook: (book) => {},
    deleteBook: (id) => {},
    toggleReadit: (id) => {}
})

export const useBook = () => {
    return useContext(BookContext)
}

export const BookProvider = BookContext.Provider