const initialState = {
    product:{element: []},
    products:{elements:[]}
  };
  
export const ReserveReducers = (state = initialState,action) => {
  switch(action.type){
    case'RESERVE_PRODUCT':
      return [ ...state.products.elements, action.list][0]
      break;
    case'EDIT_PRODUCT':
      return [ ...state.product,action.list][0];
      break;
    case'REMOVE_PRODUCT':
      return [ ...state,action.list][0];
      break;
    default:
      return state;
      break;
  }
}