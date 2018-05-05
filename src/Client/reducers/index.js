import { combineReducers } from 'redux';

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
    return action.list; 
  }else{
    return state
  }
  
}
function productsListReducer (state = initialState.productsList, action) {
  if(action.type==='CHANGE_LIST'){
    return action.list;
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
    let cart=state.cart;
    let total=state.total;
    total++;
    cart.push(action.cart);
    return [...state,{cart: cart,total: total}][0];
  }else if(action.type === 'REMOVE_TO_CART'){
    let cart=state.cart;
    let total=state.total;
    total--;
    cart.pop(action.cart);
    return [...state,{cart: cart,total: total}][0];
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
