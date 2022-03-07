const uuid=require("uuid")
const path =require("path")
const {Books,BooksInfo}=require("../models/models")
const ApiError=require("../error/ApiError")


class BooksController{
    async create (req,res,next){
        try {
        let {name,price,authorId,genreId,info}=req.body
        const {img}=req.files
        let fileName = uuid.v4() + ".jpg" //функция v4 генерирует случайный id
        img.mv(path.resolve(__dirname, "..", "static", fileName))
        const books = await Books.create({name,price,authorId,genreId,img: fileName})

        if (info){
           info = JSON.parse(info)
            info.forEach(el => {
                BooksInfo.create({
                    title: el.title,
                    discription: el.discription,
                    bookId: books.id
                })
              });
             }

        return res.json(books)
        } catch(e){
            next(ApiError.badRequest(e.message)) //если возникла ошибка вызываем ApiError

        }

    }
    async getAll (req,res,next){
        
      //  const devices=await Device.findAll()
       // return res.json(devices)
       let {authorId,genreId,limit,page}=req.query
      // page = page ||1
      //  limit = limit || 9
      // let offset =page * limit - limit
       let books;
        if (!authorId && !genreId){
            books=await Books.findAll()
        }

            if (!authorId && genreId){
                books=await Books.findAll({where:{genreId}})
            }

                if (authorId && !genreId){
                    books=await Books.findAll({where:{authorId}})
                }

                    if (authorId && genreId){
                        books=await Books.findAll({where:{authorId,genreId}})
                    }

                        return res.json(books)   

    }
    async getOne(req,res,next){
        try {
        const {id} = req.params
        const books = await Books.findOne({
         where: {id},
         include: [{model: BooksInfo,as:"info"}]
        })
        return res.json(books)
        }catch(e){
       next(ApiError.badRequest(e.message))

   }
    }

}

module.exports=new BooksController()