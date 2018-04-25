import axios from 'axios';
import toastr from 'toastr';

export function loadlistCoffees(param){
  if (param  != undefined ) {
    console.log('Param:' + param);
    debugger;
    return(dispatch)=>{
      return axios.get(`http://localhost:3001/api/coffee/` + param)
      .then(res => {
        dispatch({type:"CHANGE_OFFER",list:res.data});
      })
    }
  }else{
    return(dispatch)=>{
      return axios.get(`http://localhost:3001/api/coffee`)
      .then(res => {
        dispatch({type:"CHANGE_OFFER",list:res.data});
      })
    }
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
    return axios.post(`http://localhost:3001/api/coffee/` + id)
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

export function loadListBooks(param){
  if (param != undefined) {
    console.log('Param:' + param);
    debugger;
    return(dispatch)=>{
      return axios.post(`http://localhost:3001/api/books/` + param)
      .then(res => {
        dispatch({ type:"CHANGE_LIST",list:res.data});
      })
    }
  }
  return(dispatch)=>{
    return axios.get(`http://localhost:3001/api/books`)
    .then(res => {
      dispatch({ type:"CHANGE_LIST",list:res.data});
    })
  }
 }

export function login(user){
  console.log(user);
  return(dispatch)=>{
    return axios.post('http://localhost:3001/api/users/login',{user})
    .then(
      response => {dispatch({type:"AUTH_USER",user:response.data});
        localStorage.setItem('token',response.data.user.token);
        localStorage.setItem('username',response.data.user.username);
        console.log(response.data.user);
        toastr.success('Hola ' +response.data.user.username + 'te has registrado correctamente','Bienvenido');
      } ,
      err => toastr.error('Error al registrar-se','Error')
    )};
  }