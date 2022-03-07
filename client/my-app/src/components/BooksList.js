import React,{useContext, useEffect,useState} from "react"
import BooksItem from "./BooksItem"
import {Row} from "react-bootstrap"
import { observer } from "mobx-react-lite"
import {Context} from "../index"

const BooksList = ()=>{
   // const {book}=useContext(Context)

    const [books,setBooks]=useState([]) 
    useEffect(()=>{
       fetch("http://localhost:5000/api/books")
           .then(res=>res.json())
           .then(data=> setBooks(data))
    },[])
    
    return(

        <Row className="d-flex">
            {books.map(book=>
            <BooksItem key={book.id} book={book}/>
            
            )}
        </Row>
    )
}
export default BooksList