const Router =require("express")
const router=new Router()
const userController=require("../controllers/userController")
const authMiddleware=require("../middleware/authMiddleware")

router.post("/registration",userController.registration)
router.post("/login",userController.login)
router.get("/auth",authMiddleware, userController.check)// get()-проверка авторизации пользователя 
                                                         // по jwt token
//router.get("/auth",(req,res)=>{
    //res.json({message:"ALL WORKING!!!"})
//})
module.exports=router