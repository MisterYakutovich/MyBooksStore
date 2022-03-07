const sequelize = require ('../db')
const {DataTypes}=require('sequelize')

const User=sequelize.define ('user',{
    id:{type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    email:{type:DataTypes.STRING,unique:true},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING,defaultValue:"USER"},
})
const Basket=sequelize.define('basket',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    
})
const BasketBooks=sequelize.define('basket_books',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
})
const Books=sequelize.define('books',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
    price:{type:DataTypes.INTEGER,allowNull:false},
    rating:{type:DataTypes.INTEGER,defaultValue:0},
    img:{type:DataTypes.STRING,allowNull:false}
})
const Author=sequelize.define('author',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
})
const Genre=sequelize.define('genre',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
})
const Rating=sequelize.define('rating',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    rate:{type:DataTypes.INTEGER,allowNull:false},

})
const BooksInfo=sequelize.define('books_info',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    title:{type:DataTypes.STRING,allowNull:false},
    discription:{type:DataTypes.STRING,allowNull:false}
})

const AuthorGenre=sequelize.define('author_genre',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
})


User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketBooks)
BasketBooks.belongsTo(Basket)

Author.hasMany(Books)
Books.belongsTo(Author)

Genre.hasMany(Books)
Books.belongsTo(Genre)

Books.hasMany(Rating)
Rating.belongsTo(Books)

Books.hasMany(BasketBooks)
BasketBooks.belongsTo(Books)

Books.hasMany(BooksInfo,{as:"info"})
BooksInfo.belongsTo(Books)

Author.belongsToMany(Genre,{through: AuthorGenre})
Genre.belongsToMany(Author,{through: AuthorGenre})

module.exports={
    User,
    Basket,
    BasketBooks,
    Books,
    Author,
    Genre,
    Rating,
    AuthorGenre,
    BooksInfo
}