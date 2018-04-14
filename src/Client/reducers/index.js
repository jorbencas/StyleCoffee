import { combineReducers } from 'redux';

const initialState = {
  productsOffer: {
    list: []
  },
  productsList: {
    list: []
  }
};

function productsOfferReducer (state = initialState.productsOffer, action) {
  if(action.type==='CHANGE_OFFER'){
    return [
      ...state,
      {
        list: action.list
      }
    ][0]
  
  }else{
    return state
  }
  
}
function productsListReducer (state = initialState.productsList, action) {
  if(action.type==='CHANGE_LIST'){
    return [
      ...state,
      {
        list: action.list
      }
    ][0]
  
  }else{
    return state
  }
}

const rootReducer = combineReducers({
  productsOffer: productsOfferReducer,
  productsList: productsListReducer
});

export default rootReducer;