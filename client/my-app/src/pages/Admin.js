import { Button,Container } from "react-bootstrap";
import React, { useState } from "react";
import CreateAuthor from "../components/modals/CreateAuthor"
import CreateBooks from "../components/modals/CreateBooks";
import CreateGenre from "../components/modals/CreateGenre";


const Admin =()=>{
    const [booksVisible,setBooksVisible]=useState(false)
    const [authorVisible,setAuthorVisible]=useState(false)
    const [genreVisible,setGenreVisible]=useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button variant="outline-dark" 
                    className="mt-2" 
                    onClick={()=>setBooksVisible(true)}>Добавить название книги</Button>
            <Button variant="outline-dark" 
                    className="mt-2" 
                    onClick={()=>setAuthorVisible(true)}>Добавить автора книги</Button>
            <Button variant="outline-dark" 
                    className="mt-2" 
                    onClick={()=>setGenreVisible(true)}>Добавить жанр книги</Button>
            <CreateAuthor show={authorVisible} onHide={()=>setAuthorVisible(false)}/>
            <CreateBooks show={booksVisible} onHide={()=>setBooksVisible(false)}/>
            <CreateGenre show={genreVisible} onHide={()=>setGenreVisible(false)}/>
                       
        </Container>

       
    )
}
export default Admin;