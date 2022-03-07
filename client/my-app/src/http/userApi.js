import { $authHost,$host } from "./index";
import jwt_decode from "jwt-decode"; 

export const registration=async(password,email)=>{
    const {data} =await $host.post("api/user/registration",{password,email,role:"ADMIN"})
    localStorage.setItem("token",data.token)
    return jwt_decode(data.token)
}
export const login=async(password,email)=>{
    const {data} =await $host.post("api/user/login",{password,email})
    localStorage.setItem("token",data.token)
    return jwt_decode(data.token)
}
export const check=async()=>{
    const {data} =await $authHost.get("api/user/auth")
    localStorage.setItem("token",data.token)
    return jwt_decode(data.token)      
}