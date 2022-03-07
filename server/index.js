require ("dotenv").config()
const express = require('express')
const sequelize = require("./db")
const models=require("./models/models")
const cors = require('cors')
const router=require("./routes/index") //основной router который связывает все остальные
const errorHandling=require("./middleware/ErrorHandlingMiddleware")
const fileupload=require("express-fileupload")
const path=require("path")


const PORT=process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,"static")))
app.use(fileupload({}))
app.use("/api",router) // "/api" -url обработки роутера
//обработка в конце,на errorHandling прекращается работа
app.use(errorHandling)

app.get("/",  (req, res, next)=> {
    res.status(200).json({message: 'This is CORS-enabled for all origins!'})
  })

const start=async()=>{
    try{
        await sequelize.authenticate()//подключение к БД
        await sequelize.sync() // sync() сверяет состояние БД
        app.listen(PORT,()=>console.log(`Server start on port ${PORT}`))
    }catch(e){
        console.log(e)
    }
}

start()

