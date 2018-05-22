import _ from 'underscore';

const initialState = {
    cart:{cart:[],total:0}
  };

export const ShoppingCardReducers = (state = initialState,action) => {
  switch(action.type){  
    case'ADD_TO_CART':
      var cartState = JSON.parse(localStorage.getItem('cart'));
      cartState = cartState ? cartState : [];
      localStorage.setItem('cart', JSON.stringify([...cartState, action.cart]));
      return {
          cart: JSON.parse(localStorage.getItem('cart'))
      };
      break;
    case'REMOVE_TO_CART':
      var cartData = JSON.parse(localStorage.getItem('cart'));
      state = _.filter(cartData, function (item) {
          return item.id !== action.cart.id
      });
      localStorage.setItem('cart', JSON.stringify(state));
      return {
          cart : state.cart
      };
      break;
    default:
      return state;
      break;
    }
  }
