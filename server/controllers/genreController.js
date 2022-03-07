const {Genre}=require("../models/models")
const ApiError=require("../error/ApiError")

class GenreController{
    async create (req,res){ //создание автора в базу данных
        const {name}=req.body
        const genre =await Genre.create({name})
        return res.json({genre})

    }
    async getAll (req,res){
         

         const genres =await Genre.findAll() // вернут всех созданных авторов,получение типа на клиент
         return res.json(genres)

    }
    
}

module.exports=new GenreController()