import { observer } from "mobx-react-lite"
import React,{useState,useEffect, useContext} from "react"
import {Row,Card} from "react-bootstrap"

const AuthorBar =()=>{
    

    const [author,setAuthor]=useState([]) 
    useEffect(()=>{
        fetch("http://localhost:5000/api/books")
           .then(res=>res.json())
           .then(data=> setAuthor(data))
    },[])
    console.log(books)

    return(
    <div>Auth</div>
    )
    }

            
        
            
                

        

    

export default AuthorBar