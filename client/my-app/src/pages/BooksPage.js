import React from "react";
import { useEffect,useState } from "react";
import {Col,Container,Image,Row,Card,Button} from "react-bootstrap"
import { BASKET_ROUTE, BOOKS_ROUTE } from "../utils/consts";
import { useParams } from "react-router-dom";
//import star from "../assercs/star.png"
import { fetchOneBook } from "../http/booksApi";
import { useNavigate } from "react-router-dom";
import ratingStar1 from "../assercs/ratingStar1.png"


const BooksPage =()=>{
    const navigate=useNavigate()
    const [books,setBooks]=useState({info:[]}) 
    const {id}=useParams()
       
    useEffect(()=>{
        fetchOneBook(id).then(data=>setBooks(data))
       // fetch("http://localhost:5000/api/books")
          // .then(res=>res.json())
          // .then(data=> setBooks(data))
    },[])

    return (
        <Container className="mt-3">
            <Row>
            
               <Col md={4}>
                   <Image width={250} 
                          height={250}  
                          src={"http://localhost:5000/" + books.img} ></Image>
                   
                   <h2>{books.name}</h2>
                   
                </Col>
               
                <Col md={4}>
            <Row className="d-flex flex-column">            
                    <div className="d-flex  align-items-center justify-content-center"
                         style={{
                         background: `url(${ratingStar1}) no-repeat center center`, 
                         width:250,height:250,backgroundSize:"cover",fontSize:40}}
                         >{books.rating}</div>             
            </Row>   
                </Col>

                <Col md={4}>
                    <Card className="d-flex  justify-content-center align-items-center"
                         style={{width:250,height:250,fontSize:32,border:"5px solid lightgray"}}>
                         <h3>Цена {books.price} руб.</h3>
                         <Button variant={"outline-dark"}
                                 onClick={()=>navigate(BASKET_ROUTE)}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                 <h1>Описание</h1>
                   {books.info.map((info,index)=>
                   <Row key={info.id} 
                        style={{background: index % 2 ===0 ? "lightgray" : "beige",padding:7}}
                        >{info.title} : {info.discription} 

                   </Row>
                   )}
            </Row>
        </Container>
    )
}
export default BooksPage;