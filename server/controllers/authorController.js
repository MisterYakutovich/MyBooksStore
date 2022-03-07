const {Author}=require("../models/models")
const ApiError=require("../error/ApiError")

class AuthorController{
    async create (req,res){
        const {name}=req.body
        const author =await Author.create({name})
        return res.json({author})

    }
    async getAll (req,res){

        const authors =await Author.findAll() // вернут все созданные типы,получение типа на клиент
         return res.json(authors)

    }
    
}
module.exports=new AuthorController()