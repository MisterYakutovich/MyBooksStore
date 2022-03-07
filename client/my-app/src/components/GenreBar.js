//import { keys } from "mobx";
import axios from "axios";
//import { observer } from "mobx-react-lite";
import React,{useContext, useEffect,useState} from "react";
import {ListGroup,Dropdown,ButtonGroup} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { BOOKS_ROUTE } from "../utils/consts";
//import {Context} from "../idnex"

const GenreBar=()=>{
  
//const {book}=useContext(Context)
 // const [genre,setGenre]=useState([]) 
   // useEffect(()=>{
     // const apiUrl="http://localhost:5000/api/genre"
      //   axios.get(apiUrl).then((resp)=>{
        //   const allPersons=resp.data
         //  setGenre(allPersons)
       //  })
      //  },[setGenre])
      const [genre,setGenre]=useState([]) 
      useEffect(()=>{
          fetch("http://localhost:5000/api/genre")
             .then(res=>res.json())
             .then(data=> setGenre(data))
      },[])

  const [author,setAuthor]=useState([]) 
    useEffect(()=>{
        fetch("http://localhost:5000/api/author")
           .then(res=>res.json())
           .then(data=> setAuthor(data))
    },[])
  
    const [books,setBooks]=useState([]) 
    useEffect(()=>{
        fetch("http://localhost:5000/api/books")
           .then(res=>res.json())
           .then(data=> setBooks(data))
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
    
                   {books.map(i=>(      
                  <Dropdown.Item onClick={()=> navigate(BOOKS_ROUTE + "/" + i.id)}
                                 key={i.id}>{el.id===i.genreId ? i.name : "" }</Dropdown.Item>
    
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