import React,{useEffect,useState} from "react"
import {Col,Card,Image,Button} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import { BOOKS_ROUTE } from "../utils/consts"
//import star from "../assercs/star.png"
import ratingStar1 from "../assercs/ratingStar1.png"

const Author=()=>{
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
    console.log(navigate)

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}
export default Author