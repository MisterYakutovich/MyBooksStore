
import { ADMIN_ROUTE,BASKET_ROUTE,BOOKS_ROUTE,LOGIN_ROUTE,REGISTRATION_ROUTE,SHOP_ROUTE,AUTHOR_ROUTE } from "./utils/consts";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import BooksPage from "./pages/BooksPage";
import Auth from "./pages/Auth";
import Author from "./pages/Author"


export const authRoutes = [ // список страниц для авторизованого пользователя
    {
        path: ADMIN_ROUTE,  //путь,ссылка для отработки страницы
        Element: Admin  // компонент,сама страница
    },
    {
        path: BASKET_ROUTE ,
        Element: Basket
    },

]

export const pablicRoutes = [ // может любой пользователь перейти

    {
        path: SHOP_ROUTE,
        Element: Shop
    },
    {
        path: LOGIN_ROUTE,
        Element: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Element: Auth
    },
    {
        path: BOOKS_ROUTE + "/:id",
        Element: BooksPage
    },
    {
        path: AUTHOR_ROUTE,
        Element: Author
    }

]