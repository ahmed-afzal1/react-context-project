import React, { createContext, useState } from "react";
import uuid from 'react-uuid'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'name of wind', author: 'patric ruthfuss', id: 1},
        {title: 'the final empire', author: 'brandon sanderson', id: 2},
    ])

    const addBook = (title,author) =>{
        setBooks([...books,{title, author, id: uuid()}]);
    }

    const removeBook = (id) =>{
        setBooks(books.filter(book => book.id !== id));
    }

    return ( 
        <BookContext.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;