const Router =require("express");
const basketController = require("../controllers/basketController");
const router=new Router()
const authMiddleware=require("../middleware/authMiddleware")

router.get("/",authMiddleware,basketController.getBasket) // получение конкретно одной книги
router.post("/",authMiddleware,basketController.addBasket);




module.exports=router