import { Button } from "react-bootstrap";
import React, { useContext } from "react";
import {Navbar,Nav,Container} from "react-bootstrap"
import { NavLink,useNavigate } from "react-router-dom";
import { SHOP_ROUTE,ADMIN_ROUTE,LOGIN_ROUTE, BASKET_ROUTE } from "../utils/consts";
import {Context} from "../index"
import { observer } from "mobx-react-lite";
import { useEffect } from "react/cjs/react.production.min";

const NavBar=observer(()=>{
const navigate=useNavigate()
const {user}=useContext(Context)


const logOut=()=>{
    user.setUser({})
    user.setIsAuth(false)
    user.setIsAdmin(false)
    
}

return(

    <Navbar bg="dark" variant="dark">
        <Container style={{color:"wheat"}}>
           <NavLink style={{color:"wheat"}} to ={SHOP_ROUTE}>Купи книгу</NavLink>
           { user.isAuth ?
               <Nav className="ml-auto" style={{color:"wheat"}}>
                   <Button variant="warning" 
                           className="mx-3"
                           onClick={()=>navigate(BASKET_ROUTE)}>Корзина</Button>
                   
                {user.isAdmin ?

               
                 // <Nav className="ml-auto" style={{color:"wheat"}}>
                      
                  <Button variant="warning" 
                          onClick={()=>navigate(ADMIN_ROUTE)}>Админ панель</Button>
                          :
                          <div></div>
                }
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