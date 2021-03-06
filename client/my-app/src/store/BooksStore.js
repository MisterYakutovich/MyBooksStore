import { makeAutoObservable } from "mobx";




export default class BooksStore {
    constructor(){
    this._books= []
    this._authors = []
    this._genres = []
    this._baskets=[]
    this._count=0

    this._selectedGenre={}
    this._selectedAuthor={}
   // this._selectedBooks={}
    makeAutoObservable(this)
    
}

setAuthors(authors){
    this._authors=authors;
}
setBaskets(baskets){
    this._baskets=baskets;
}
setCount(count){
    this._count=count
}
setGenres(genres){
    this._genres=genres; 
}
 setBooks(books){
    this._books=books; 
}
setSelectedGenre(genre){
    this._selectedGenre=genre
}
setSelectedAuthor(author){
    this._selectedAuthor=author
}
setSelectedBooks(books){
    this._selectedBooks=books
}
get authors(){
    return this._authors // вызывается когда переменная isAuth была изменена
}
get baskets(){
    return this._baskets
}
get count(){
    return this._count
}
get genres(){
    return this._genres
}
get books(){
    return this._books
}
get selectedGenre(){
    return this._selectedGenre
}
get selectedAuthor(){
    return this._selectedAuthor
}
get selectedBooks(){
    return this._selectedBooks
}
}
