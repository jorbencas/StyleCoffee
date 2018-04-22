import axios from 'axios';

export function loadlistCoffees(){
 return(dispatch)=>{
   return   axios.get(`http://localhost:3001/api/coffee`)
   .then(res => {
     dispatch({type:"CHANGE_OFFER",list:res.data});
   })
 }
}

export function booksdetail(id){
  console.log('Add todo' + id);
  return(dispatch)=>{
    return axios.post(`http://localhost:3001/api/books/` + id)
    .then(res => {
      console.log("Resultado:" + res.data);
      dispatch({ type:"BOOKS_DETAIL",detail:res.data});
    })
  }
}

export function AddtoCard(id){
  return(dispatch)=>{
    return axios.post(`http://localhost:3001/api/books/` + id)
    .then(res => {
      dispatch({ type:"ADD_TO_CARD", cart:res.data});
    })
  }
}

export function loadListBooks(){
  return(dispatch)=>{
    return   axios.get(`http://localhost:3001/api/books`)
    .then(res => {
      dispatch({ type:"CHANGE_LIST",list:res.data});
    })
  }
 }


/*
export function login({email,password}){
  return(dispatch)=>{
    return axios.get(`http://localhost:3001/api/user/login`, {email,password})
    .then(res => {
                        // if request is good...
                        // - update state to indicate user is authenticated
                        dispatch({type:"AUTH_USER",user:res});
        
                        // - save the jwt token
                        localStorage.setItem('token', res.data.user.token);
        
                        // - redirect to the route '/feature'
                        History.push('/');
        
                    }).catch(() => {
                        // if request is bad...
                        // - show an error to the user
                        dispatch(authError('Bad Login Info'));
                    });
  }
}
*/