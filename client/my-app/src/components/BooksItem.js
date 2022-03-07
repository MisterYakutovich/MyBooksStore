import React,{useEffect,useState} from "react"
import {Col,Card,Image} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import { BOOKS_ROUTE } from "../utils/consts"
//import star from "../assercs/star.png"
import ratingStar1 from "../assercs/ratingStar1.png"

const BooksItem=({book})=>{
    const [author,setAuthor]=useState([]) 
    useEffect(()=>{
        fetch("http://localhost:5000/api/author")
           .then(res=>res.json())
           .then(data=> setAuthor(data))
    },[])
    const navigate=useNavigate()
    console.log(navigate)

    return(
        <Col md={3} 
             className={"mt-3"} 
             onClick={()=> navigate(BOOKS_ROUTE + "/" + book.id)}>

            <Card style={{width:150, cursor:"pointer"}} border="light">
                <Image wight={150} 
                       height={150} 
                       src={"http://localhost:5000/"+ book.img}></Image>

                <div className="mt-1 d-flex justify-content-between align-items-center">
                  {author.map(au=>
                <div>{book.authorId===au.id ?  au.name : ""}</div>
                  )}
                    <div className="d-flex align-items-center"></div>
                    <div className="mx-1" >{book.rating}</div>
                    <Image width={25} height={25} src={ratingStar1}></Image>
                    </div>
            </Card>
        </Col>
    )
}
export default BooksItem