import { combineReducers } from 'redux';
import { getCookie } from '../lib/utils';
import _ from 'underscore';

const initialState = {
  productsOffer: {list: []},
  productsList: {list: []},
  user:{user: [],authenticated:false},
  booksdetail:{detail:[]},
  coffeesdetail:{detail:[]},
  cart:{cart:[],total:0},
  profile:{profile:[]},
  errors:{error:[]}
};

function productsOfferReducer (state = initialState.productsOffer, action) {
  if(action.type==='CHANGE_OFFER'){
    return [...state,action.list][0]; 
  }else{
    return state
  }
  
}
function productsListReducer (state = initialState.productsList, action) {
  if(action.type==='CHANGE_LIST'){
    return [...state,action.list][0];
  }else{
    return state
  }
}

function booksdetails(state = initialState.booksdetail,action) {
  if (action.type === 'BOOKS_DETAIL') {
    return [...state,action.detail][0];
  }else{
    return state
  }
}

function coffeedetails(state = initialState.coffeesdetail,action) {
  if (action.type === 'COFFEE_DETAIL') {
    return [...state,action.detail][0];
  }else{
    return state
  }
}

function SingUpReducer(state = initialState.user,action) {
  if (action.type === 'SINGUP_USER') {
    return [ ...state,{authenticated: true,user: action.user}][0]
  }else{
    return state
  }
}

function loginReducer(state = initialState.user,action){
  if (action.type === 'AUTH_USER') {
    return [ ...state,{authenticated: true,user: action.user}][0]
  }else{
    return state
  }
}

function logoutReducer(state = initialState.user,action){
  if (action.type === 'LOGOUT_USER') {
    return [ ...state,{authenticated: false}][0]
  }else{
    return state
  }
}

function ProfileReducer(state = initialState.profile, action){
  if (action.type === 'PROFILE_USER') {
    return[...state,{profile:action.profile}][0]
  }else{
    return state
  }
}

function printerrors(state = initialState.errors,action){
  if (action.type === 'AUTH_ERROR') {
    return {error: action.payload};
  }else{
    return state
  }
}

function ShoppingCardReducer(state = initialState.cart,action){
  if (action.type === 'ADD_TO_CART') {
    var cartState = JSON.parse(localStorage.getItem('cart'));
    cartState = cartState ? cartState : [];
    localStorage.setItem('cart', JSON.stringify([...cartState, action.cart]));
    return {
        cart: JSON.parse(localStorage.getItem('cart'))
    };
  }else if(action.type === 'REMOVE_TO_CART'){
    var cartData = JSON.parse(localStorage.getItem('cart'));
    state = _.filter(cartData, function (item) {
        return item.id !== action.cart.id
    });
    localStorage.setItem('cart', JSON.stringify(state));
    return {
        cart : state
    };
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
  ShoppingCardReducer:ShoppingCardReducer,
  ProfileReducer:ProfileReducer,
  printerrors:printerrors,
  SingUpReducer:SingUpReducer
});

export default rootReducer;
