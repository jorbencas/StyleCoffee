import { combineReducers } from 'redux';

const initialState = {
  productsOffer: {
    list: []
  },
  productsList: {
    list: []
  },
  user:{
    user: []
  },
  booksdetail:{
    detail:[]
  },
  coffeesdetail:{
    detail:[]
  },
  cart:{
    cart:[],total:0
  }
};

function productsOfferReducer (state = initialState.productsOffer, action) {
  if(action.type==='CHANGE_OFFER'){
    return action.list; 
  }else{
    return state
  }
  
}
function productsListReducer (state = initialState.productsList, action) {
  if(action.type==='CHANGE_LIST'){
    return  action.list;
  }else{
    return state
  }
}

function booksdetails(state = initialState.booksdetail,action) {
  if (action.type === 'BOOKS_DETAIL') {
    return action.detail;
  }else{
    return state
  }
}

function coffeedetails(state = initialState.coffeesdetail,action) {
  if (action.type === 'COFFEE_DETAIL') {
    return action.detail;
  }else{
    return state
  }
}

function loginReducer(state = initialState.user,action){
  if (action.type === 'AUTH_USER') {
    return action.user;
  }else{
    return state
  }
}
function ShoppingCardReducer(state = initialState.cart,action){
  console.log(state);
  if (action.type === 'ADD_TO_CART') {
    let cart=state.cart;
    let total=state.total;
    total++;
    console.log(action.cart);
    cart.push(action.cart)
    return [
      ...state,
      {
        cart: cart,
        total: total
      }
    ][0];
  }else{
    return state
  }
}
const rootReducer = combineReducers({
  productsOffer: productsOfferReducer,
  productsList: productsListReducer,
  booksdetails: booksdetails,
  coffeedetails: coffeedetails,
  loginReducer:loginReducer,
  ShoppingCardReducer:ShoppingCardReducer
});

export default rootReducer;
