 const initialState = {
    users:{users:[]},
    user:{user: [],authenticated:false},
    profile:{profile:[]}
  };
  
export const AuthReducers = (state = initialState,action) => {
  switch(action.type){
    case 'LOAD_USERS':
      return action.users
      break;
    case'SINGUP_USER':
      return [ ...state.user,{authenticated: true, user: action.user}][0]
      break;
    case'AUTH_USER':
      return [ ...state.user,{authenticated: true, user: action.user}][0];
      break;
    case'LOGOUT_USER':
      return [ ...state.user,{authenticated: false}][0];
      break;
    case'PROFILE_USER':
      return[...state.profile,{profile:action.profile}][0]
      break;
    default:
      return state;
      break;
  }
}