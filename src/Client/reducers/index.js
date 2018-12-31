import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { booksdetails, productsListReducer } from './BooksReducers';
import { productsOfferReducer, coffeedetails } from './CoffeeReducers';
import { AuthReducers } from './AuthReducers';
import { ShoppingCardReducers } from './CardReducers';
import { ReserveReducers } from './ReserveReducer';

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
  productsOffer: productsOfferReducer,
  productsList: productsListReducer,
  booksdetails: booksdetails,
  coffeedetails: coffeedetails,
  loginReducer:AuthReducers,
  ShoppingCardReducer:ShoppingCardReducers,
  ProfileReducer:AuthReducers,
  printerrors:printerrors,
  SingUpReducer:AuthReducers,
  ReserveReducers:ReserveReducers,
  UsersReducers:AuthReducers
});

export default rootReducer;
