import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { BooksReducers } from './BooksReducers';
import { CoffeesReducers } from './CoffeeReducers';
import { AuthReducers } from './AuthReducers';
import { ShoppingCardReducers } from './CardReducers';

const initialState = {
  errors:{error:[]}
};

export function printerrors(state = initialState.errors,action){
  if (action.type === 'AUTH_ERROR') {
    return {error: action.payload};
  }else{
    return state
  }
}

const rootReducer = combineReducers({
  productsOffer: CoffeesReducers,
  productsList: BooksReducers,
  booksdetails: BooksReducers,
  coffeedetails: CoffeesReducers,
  loginReducer:AuthReducers,
  ShoppingCardReducer:ShoppingCardReducers,
  ProfileReducer:AuthReducers,
  printerrors:printerrors,
  SingUpReducer:AuthReducers,
  routing: routerReducer
});

export default rootReducer;
