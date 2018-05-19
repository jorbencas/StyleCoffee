const initialState = {
    productsOffer: {list: []},
    coffeesdetail:{detail:[]}
  };

export const CoffeesReducers = (state = initialState, action) => {
  switch(action.type){
    case'CHANGE_OFFER':
      return [...state.productsOffer.productsOffer,action.list][0]; 
      break;
    case'COFFEE_DETAIL':
      return [...state.coffeesdetail,action.detail][0];
      break;
    default:
      return state;
      break;
  }
}
/*
export function productsOfferReducer (state = initialState.productsOffer, action) {
    if(action.type==='CHANGE_OFFER'){
      return [...state,action.list][0]; 
    }else{
      return state
    }
    
  }

 export function coffeedetails(state = initialState.coffeesdetail,action) {
    if (action.type === 'COFFEE_DETAIL') {
      return [...state,action.detail][0];
    }else{
      return state
    }
  }
*/