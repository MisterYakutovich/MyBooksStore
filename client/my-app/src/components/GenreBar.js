//import { keys } from "mobx";
import axios from "axios";
import { observer } from "mobx-react-lite";
import React,{useContext, useEffect,useState} from "react";
import {ListGroup,Dropdown,ButtonGroup} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { BOOKS_ROUTE } from "../utils/consts";
//import {Context} from "../index"

const GenreBar=()=>{
  
//const {book}=useContext(Context)
//book.books.map(i=>console.log(i.name))
//const colors = Object.values(book);
//console.log(colors)

 
    const [books,setBooks]=useState([]) 
    useEffect(()=>{
        fetch("http://localhost:5000/api/books")
           .then(res=>res.json())
           .then(data=> setBooks(data))
    },[])
    const [genre,setGenre]=useState([]) 
    useEffect(()=>{
        fetch("http://localhost:5000/api/genre")
           .then(res=>res.json())
           .then(data=> setGenre(data))
    },[])
 
 
  const navigate=useNavigate()
 

 
    return(
      
     genre.map(el=>
        <ListGroup className="">
        
              <ListGroup.Item action variant="warning" key={el.id}>
                   {el.name}                   
                  <Dropdown as={ButtonGroup}>                  
                     <Dropdown.Toggle split variant="string" id="dropdown-split-basic" />
                     <Dropdown.Menu className="super-colors">
    
                     
                        { books.filter(i=>i.genreId===el.id).map(i=>(
                  
                  <Dropdown.Item onClick={()=> navigate(BOOKS_ROUTE+ "/" + i.id )}
                                 key={i.id}>{i.name}</Dropdown.Item>
                        ))}
                            
                  <Dropdown.Divider />
                     </Dropdown.Menu>                   
                   </Dropdown>                    
              </ListGroup.Item>
         
        </ListGroup>
                   
       ) 
    )
}
export default GenreBar