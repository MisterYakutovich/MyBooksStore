import React, { useContext } from "react";
import {Routes,Route,Navigate} from "react-router-dom" // Switch и Redirect заменен на Routes и Navigate
import { authRoutes,pablicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
import {Context} from "../index"


  const AppRouter=()=>{   //навигация,на одни страницы только авторизованый может зайти
                                    //const isAuth= false // переменная показывает авторизацию пользователя
      const {user}=useContext(Context)
      console.log(user)                             
  
    
    return (
          <Routes>
            
            {user.isAuth && authRoutes.map(({path,Element})=>
            <Route key ={path} path={path} element = {<Element/>} /> 
              )}
              {pablicRoutes.map(({path,Element})=>
             <Route key = {path} path = {path} element = {<Element/>} />
              )}
           
           <Route  path = "*"  element={<Navigate to = {SHOP_ROUTE}/>}/>

        </Routes> 
        
    )
}
export default AppRouter




