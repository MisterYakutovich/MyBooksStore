import { $authHost,$host } from "./index";
import jwt_decode from "jwt-decode";

export const fetchGenre=async()=>{
    const {data} = await $host.get("api/genre")
    return data
}
export const createGenre=async(genre)=>{
        const {data} = await $authHost.post("api/genre",genre)
        return data
}
export const fetchAuthor=async()=>{
        const {data} = await $host.get("api/author")
        return data
}
export const createAuthor=async(author)=>{
        const {data} = await $authHost.post("api/author",author)
        return data
}
export const fetchBooks=async()=>{
        const {data} = await $host.get("api/books")
        return data
}
export const createBooks=async(books)=>{
        const {data} = await $authHost.post("api/books",books)
        return data
}
export const fetchOneBook=async(id)=>{
    const {data} = await $host.get("api/books/" + id)
    return data
}
