import { makeAutoObservable } from "mobx";




export default class UserStore {
    constructor(){
    this._isAuth = false // изменять не рекомендуется
    this._isAdmin=false
    this._user = {}
    makeAutoObservable(this)
}

setIsAuth(bool){
    this._isAuth=bool;
}
setIsAdmin(bool){
    this._isAdmin=bool;
}
setUser(user){
    this._user=user; 
}
get isAuth(){
    return this._isAuth;// вызывается когда переменная isAuth была изменена
}
get isAdmin(){
    return this._isAdmin;
}
get user(){
    return this._user;
}
}
//export default UserStore
