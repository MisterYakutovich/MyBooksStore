//import { observer } from "mobx-react-lite";
import React,{useState,useEffect} from "react";
import { Row,Col,Card, Container,Table,Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getBasket, addBasket } from "../http/booksApi";
import  { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";




const Basket =observer(()=>{
  const {book}=useContext(Context)
  console.log(book.baskets)

  useEffect(()=>{
    getBasket().then(data=>book.setBaskets(data))
  },[])
   
   let prices=0
  book.baskets.map(price=>(prices += Number(price.book.price)))
  book.baskets.map(i=>console.log(i))
 //const total= book.baskets.reduce((sum,obj)=>obj.book.price+sum,0)
   
    return (
      <Container 
      className="d-flex justify-content-center align-items-center mt-4" >
<Table striped bordered hover  >
  
<thead>
  <tr>
    <th>Название</th>
    <th>Цена</th>
    <th>Итого</th>
    <th>Удалить</th>
    <th>Оформить</th>
  </tr>
</thead>
<tbody >

  {book.baskets.map(i=>
  <tr>
    <td >{i.book.name}</td>
    <td>{i.book.price}</td>
    <td>0</td>
    <td> <Button variant="outline-danger" >Удалить</Button></td>
   <td> <Button variant="outline-success" >Оформить</Button></td>
    
  </tr>
  )}
        <th cla>Итого:{prices}рублей</th>
</tbody>
</Table>
</Container>

    )
    
})

export default Basket;
