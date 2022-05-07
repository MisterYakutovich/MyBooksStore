import React,{ useEffect,useState,useContext } from "react";
import {Col,Container,Image,Row,Card,Button} from "react-bootstrap"
import {  BASKET_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { useParams,useNavigate } from "react-router-dom";
import { addBasket,getBasket, fetchBooks, fetchOneBook } from "../http/booksApi";
import ratingStar1 from "../assercs/ratingStar1.png"
import { Context } from "../index";


//import { observer } from "mobx-react-lite";



const BooksPage =()=>{
    const {basket}=useContext(Context)
    const {user}=useContext(Context)
    const navigate=useNavigate()
    const [books,setBooks]=useState({info:[]}) 
    const {id}=useParams()
       
    useEffect(()=>{
        fetchOneBook(id).then(data=>setBooks(data))
        
    },[])
    const add = ()=>{
        const formData=new FormData()
        formData.append("bookId",id)
        addBasket(formData).then(response=>alert(`Товар ` + books.name + `добавлен`))
    }
    


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
                         {user.isAuth ?
                         <Button variant={"outline-dark"} 
                                 onClick={add}>Добавить в корзину</Button>
                
                              :
                              <Button variant={"outline-dark"} 
                                 onClick={()=>navigate(LOGIN_ROUTE)}>Добавить в корзину</Button>
                         }
                
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