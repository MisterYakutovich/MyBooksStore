import { makeAutoObservable } from "mobx";




export default class UserStore {
    constructor(){
    this._isAuth = false // изменять не рекомендуется
    this._user = {}
    makeAutoObservable(this)
}

setIsAuth(bool){
    this._isAuth=bool;
}
setUser(user){
    this._user=user; 
}
get isAuth(){
    return this._isAuth // вызывается когда переменная isAuth была изменена
}
get user(){
    return this._user
}
}
//export default UserStore
