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
  }
};

function productsOfferReducer (state = initialState.productsOffer, action) {
  if(action.type==='CHANGE_OFFER'){
    return action.list
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
    return state.concat(action.detail);
  }else{
    return state
  }
}

const rootReducer = combineReducers({
  productsOffer: productsOfferReducer,
  productsList: productsListReducer,
  booksdetails: booksdetails
});

export default rootReducer;
