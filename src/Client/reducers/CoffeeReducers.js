const initialState = {
    productsOffer: {list: []},
    coffeesdetail:{detail:[]}
  };


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