import React, {useState} from 'react'
import Book from './Book'
import './Booklist.css'


export default function Booklist(props) {

    return (
        <div className="book-list">
              {props.books.map(book => {
              return (
                <div>
                    <Book key={book.id} {...book}></Book>
                </div>
              )
            })}
        </div>
    )
}
