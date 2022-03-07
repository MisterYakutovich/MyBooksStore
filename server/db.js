const { Sequelize } = require('sequelize');
require ("dotenv").config()
//const mysql = require('mysql2');

module.exports = new Sequelize(
    process.env.DB_NAME, //название базы данных
    process.env.DB_USER, //пользователь
    process.env.DB_PASSWORD, //пароль 
    {
        dialect:'mysql', // указываем sbd
        //  host: "127.0.0.1",
        //  port:  3306
            host:process.env.DB_HOST,
            port:process.env.DB_PORT

    })
   
  