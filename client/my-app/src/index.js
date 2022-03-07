import UserStore from './store/UserStore';
import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BooksStore from './store/BooksStore';

console.log(process.env.REACT_APP_API_URL)
export const Context=createContext(null)
ReactDOM.render(
<Context.Provider value={{
  user:new UserStore(),
  book:new BooksStore()
}}>
  <App />
</Context.Provider>,
    
    
  document.getElementById('root')
);
