const Router =require("express");
const booksController = require("../controllers/booksController");
const router=new Router()
const checkRole=require("../middleware/checkRoleMiddleware")

router.post("/",checkRole("ADMIN"), booksController.create);
router.get("/",booksController.getAll)
router.get("/:id",booksController.getOne) // получение конкретно одной книги


module.exports=router