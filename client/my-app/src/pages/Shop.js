import React,{useState,useEffect, useContext} from "react";
import { Container,Row,Col } from "react-bootstrap";
import GenreBar from "../components/GenreBar";
import BooksList from "../components/BooksList"
import { fetchAuthor, fetchGenre,fetchBooks } from "../http/booksApi";
import { observer } from "mobx-react-lite";
import {Context} from "../index"

const Shop =observer(()=>{
    const {book}=useContext(Context)
   
    
    useEffect(()=>{
        fetchGenre().then(data=>book.setGenres(data))
        fetchAuthor().then(data=>book.setAuthors(data))
        fetchBooks().then(data=>book.setBooks(data))
       // fetch("http://localhost:5000/api/books")
          // .then(res=>res.json())
          // .then(data=> setBooks(data))
    },[])
    return (
        
        <Container>
            <Row className="mt-4">
                <Col md={3}>
                    <GenreBar />
                </Col>

                <Col md={9}>
                    <BooksList />
                </Col>
            </Row>
        </Container>
    )
})
export default Shop;