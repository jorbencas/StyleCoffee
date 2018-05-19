const initialState = {
    productsList: {list: []},
    booksdetail:{detail:[]}
  };

export const BooksReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LIST':
      return [...state.productsList.list,action.list][0];
      break;
    case 'BOOKS_DETAIL':
      return [...state.booksdetail.detail,action.detail][0];
      break;
    default:
      return state;
      break;
  }
}
/*
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
  */