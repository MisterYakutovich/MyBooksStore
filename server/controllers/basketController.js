const {Books,BasketBooks,Basket}=require("../models/models")
const ApiError=require("../error/ApiError")

class BasketController {

    async addBasket(req,res,next){
        try{
        const user=req.user
        const {bookId}=req.body
        const basket=await BasketBooks.create({basketId:user.id,bookId:bookId})
        return res.json(basket)
        }catch(e){
            next(ApiError.badRequest(e.message))

        }
    }
    async getBasket(req,res,next){
        try {
        const {id} = req.user
        const basket = await BasketBooks.findAll(
            {include: {
                model: Books
            }, where: {basketId: id}}
      //   where: {basketId:id},
     //    include: [{model: Books}]
        )
        return res.json(basket)
        }catch(e){
       next(ApiError.badRequest(e.message))

   }
    }

}
module.exports = new BasketController()