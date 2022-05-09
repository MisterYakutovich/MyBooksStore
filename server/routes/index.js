const Router =require("express")
const router=new Router()
const genreRouter=require("./genreRouter")
const booksRouter=require("./booksRouter")
const userRouter=require("./userRouter")
const authorRouter=require("./authorRouter")
const basketRouter=require("./basketRouter")

router.use("/user",userRouter)
router.use("/author",authorRouter)
router.use("/genre",genreRouter)
router.use("/books",booksRouter)
router.use("/basket",basketRouter)

module.exports=router
    