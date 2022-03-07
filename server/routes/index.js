const Router =require("express")
const router=new Router()
const genreRouter=require("./genreRouter")
const booksRouter=require("./booksRouter")
const userRouter=require("./userRouter")
const authorRouter=require("./authorRouter")

router.use("/user",userRouter)
router.use("/author",authorRouter)
router.use("/genre",genreRouter)
router.use("/books",booksRouter)

module.exports=router
    