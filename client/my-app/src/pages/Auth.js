import React, { useContext, useState, } from "react";
import { Container,Form,Card,Button,Row } from "react-bootstrap";
import { NavLink,useLocation,useNavigate } from "react-router-dom";
import {SHOP_ROUTE,LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import {login,registration} from "../http/userApi"
import { observer } from "mobx-react-lite";
import {Context} from "../index"




const Auth =observer(()=>{
    
    const{user}=useContext(Context)
    const location=useLocation()
    const isLogin=location.pathname===LOGIN_ROUTE
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const navigate=useNavigate()

    console.log(location)

    const click=async()=>{
        try{
        let data
        
        if (isLogin){
            data=await login(password,email)
        }else{
             data=await registration(password,email)
           
        }     
        user.setUser(user)
        user.setUser(data)
        user.setIsAuth(true)
        if (email==="admin@mail.ru" && password==="root"){
            user.setIsAdmin(true)
        }
        
        navigate(SHOP_ROUTE)
        console.log(navigate)
    }catch(e){
    
        alert(e.response.data.message)

    }

    }
    return (
    <Container 
        className="d-flex justify-content-center align-items-center"
        style={{height:window.innerHeight-54}}>
        
        <Card style={{width:400}} className="p-2">
              <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
            <Form className="d-flex flex-column">
                <Form.Control
                     className="mt-2" 
                     placeholder="Ваш email"
                     value={email} 
                     onChange={e=>setEmail(e.target.value)}/>

                <Form.Control
                     className="mt-2"
                     placeholder="Ваш пароль"
                     value={password} 
                     onChange={e=>setPassword(e.target.value)}
                     type="password"/>
                <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    {isLogin ?
                    <div>
                      Если нет аккаунта <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
                    </div>
                    :
                    <div>
                        Если есть аккаунт <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                    </div>
                    }
                    <Button className="mt-3 align-self-end" variant={"outline-success"} onClick={click}>{isLogin ? "Войти" : "Регистрация"}</Button>
                </Row>
                
            </Form>
        </Card>
            
    </Container>
    
    )
})
export default Auth;