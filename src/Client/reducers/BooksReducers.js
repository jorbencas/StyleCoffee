const initialState = {
    productsList: {list: []},
    booksdetail:{detail:[]}
  };



export function productsListReducer (state = initialState.productsList, action) {
    if(action.type==='CHANGE_LIST'){
      return [...state,action.list][0];
    }else{
      return state
    }
  }
  
 export function booksdetails(state = initialState.booksdetail,action) {
    if (action.type === 'BOOKS_DETAIL') {
      return [...state,action.detail][0];
    }else{
      return state
    }
  }
  