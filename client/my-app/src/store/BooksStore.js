import { makeAutoObservable } from "mobx";




export default class BooksStore {
    constructor(){
    this._author = []
    this._genre = []
    this._books=[]
    this._selectedGenre={}
    this._selectedAuthor={}
    makeAutoObservable(this)
}

setAuthors(authors){
    this._authors=authors;
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
get authors(){
    return this._authors // вызывается когда переменная isAuth была изменена
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
}
