import axios from 'axios';

export function loadlistCoffees(){
 return(dispatch)=>{
   return axios.get(`http://localhost:3001/api/coffee`)
   .then(res => {
     dispatch({type:"CHANGE_OFFER",list:res.data});
   })
 }
}

export function booksdetail(id){
  return dispatch =>{
    console.log(dispatch);
    return axios.get(`http://localhost:3001/api/books/` + id)
    .then(res => {
      dispatch({ type:"BOOKS_DETAIL",detail:res.data});
    })
  }
}

export function coffeesdetails(id){
  return(dispatch)=>{
    return axios.get(`http://localhost:3001/api/coffee`, {id})
    .then(res => {
      dispatch({type:"COFFEE_DETAIL",detail:res.data});
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
    return axios.get(`http://localhost:3001/api/books`)
    .then(res => {
      dispatch({ type:"CHANGE_LIST",list:res.data});
    })
  }
 }

export function login(user){
  console.log(user);
  debugger;
  return(dispatch)=>{
    return axios.get('http://localhost:3001/api/users/login',{user})
    .then(res => {dispatch({type:"AUTH_USER",user:res.data});
          localStorage.setItem('token', res.data.user.token);
    });
  }
}
