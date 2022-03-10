import { Button } from "react-bootstrap";
import React, { useContext } from "react";
import {Navbar,Nav,Container} from "react-bootstrap"
import { NavLink,useNavigate } from "react-router-dom";
import { SHOP_ROUTE,ADMIN_ROUTE,LOGIN_ROUTE } from "../utils/consts";
import {Context} from "../index"
import { observer } from "mobx-react-lite";

const NavBar=observer(()=>{
const navigate=useNavigate()
const {user}=useContext(Context)



const logOut=()=>{
    user.setUser({})
    user.setIsAuth(false)
}

return(

    <Navbar bg="dark" variant="dark">
        <Container style={{color:"wheat"}}>
           <NavLink style={{color:"wheat"}} to ={SHOP_ROUTE}>Купи книгу</NavLink>
           { user.isAuth ?
               <Nav className="ml-auto" style={{color:"wheat"}}>
                   <Button variant="warning" 
                           onClick={()=>navigate(ADMIN_ROUTE)}>Админ панель</Button>
                   <Button variant="warning" 
                           className="mx-3" 
                           onClick={()=>logOut()}>Выйти</Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{color:"wheat"}}>
                    
                    <Button variant="warning" 
                            className="mx-3"
                            onClick={()=> navigate(LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>
            }
        </Container>
    </Navbar>
)})

export default NavBar