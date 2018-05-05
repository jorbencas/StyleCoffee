import axios from 'axios';
import toastr from 'toastr';
import store from '../Store';
import { getCookie, setCookie } from '../lib/utils.js';

export function loadlistCoffees(param){
    return(dispatch)=>{
      return axios.get(`http://localhost:3001/api/coffee`)
      .then(res => {
        dispatch({type:"CHANGE_OFFER",list:res.data});
      })
    }
}

export function loadListBooks(param){
    return(dispatch)=>{
      return axios.get(`http://localhost:3001/api/books`)
      .then(res => {
        dispatch({ type:"CHANGE_LIST",list:res.data});
      })
    }
}

export function categoriesbook(param){
  return(dispatch)=>{
    return axios.post(`http://localhost:3001/api/books/` + param)
    .then(res => {
      dispatch({ type:"CHANGE_LIST",list:res.data});
    })
  }
}

export function categoriescoffee(param){
  return(dispatch)=>{
    return axios.get(`http://localhost:3001/api/coffee/` + param)
    .then(res => {
      dispatch({type:"CHANGE_OFFER",list:res.data});
    })
  }
}

export function booksdetail(id){
  return dispatch =>{
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

export function AddtoCard(cart){
  return dispatch =>{
      dispatch({type:"ADD_TO_CART", cart:cart});
      toastr.success('El producto ' +cart.title + 'se ha añadido a tu cesta','Bienvenido');
  }
}

export function BuyProduct(cart){
  return(dispatch) => {
    return axios.post(`http://localhost:3001/api/charge/`, {cart})
    .then(res => {
      dispatch({type:"BOOKS_DETAIL",detail:res.data});
    })
  }
}

export function RemoveFromcard(cart){
  return (dispatch) => {
    dispatch({type:'REMOVE_TO_CART',cart:cart});
    toastr.info('El producto ' +cart.title + 'se ha eliminado a tu cesta','Bienvenido');
  }
}

export function logout(){
  localStorage.removeItem('token');
  dispatch({type:"LOGOUT_USER"});
}

export function login(user){
  return(dispatch)=>{
    return axios.post('http://localhost:3001/api/users/login',{user})
    .then(
      response => {dispatch({type:"AUTH_USER",user:response.data});
        localStorage.setItem('token',response.data.user.token);
        toastr.success('Hola ' +response.data.user.username + 'te has registrado correctamente','Bienvenido');
      }
    ).catch(err => {authError(err),
      toastr.error('Error al registrar-se','Error')
    });
  };
}

export function profile(){
  const username = store.getState().loginReducer.user.user.username;
  let token = localStorage.getItem('token');
  return(dispatch)=>{
    return axios.get('http://localhost:3001/api/profiles/' + username,{headers: {Authorization: 'Token ' + token}}
        )
       .then(
         res =>{dispatch({type:"PROFILE_USER",profile:res.data.profile})}
      ).catch(err => {authError(err)});
  }
}

  export function authError (error){
    return {
        type: 'AUTH_ERROR',
        payload: error
    };
  };

export function SingUp(user){
  return(dispatch)=>{
    return axios.post('http://localhost:3001/api/users',{user})
    .then(
      res => {
        dispatch({type:"SINGUP_USER",user:res.data.user})
        localStorage.setItem('token',res.data.user.token);
        toastr.success('Hola ' +res.data.user.username + 'te has registrado correctamente','Bienvenido');
      } ,
      err => toastr.error('Error al registrar-se compruebe que ha escrito bien su nombre de usuario y contraseña ','Error')
    );
  };
};

  export function updateprofile(user){
    let token = localStorage.getItem('token');
    return(dispatch)=>{
      return axios.put('http://localhost:3001/api/user',{user},{headers: { Authorization: 'Token ' + token} }
      ).then(
        res => {
          dispatch({type:"PROFILE_USER",user:response.data.profile});
          toastr.success('Hola ' +res.data.user.username + 'tu perfil se ha actualizado correctamente','Bienvenido');
        }
      ).catch(err => {authError(err); 
        toastr.error( err + 'Error al registrar-se compruebe que ha escrito bien su nombre de usuario y contraseña ','Error')
      });
    }
  }

 /**CRUD */

export function createbook(book){
  let token = localStorage.getItem('token');
  return (dispatch) => {
    return axios.put('http://localhost:3001/api/books/',{book},{headers: { Authorization: 'Token ' + token}})
    .then(
      (res)=>{ dispatch({ type:"CHANGE_LIST",list:res.data});
    });
  }
}


export function editbook(book){
  let token = localStorage.getItem('token');
  return (dispatch) => {
    return axios.put('http://localhost:3001/api/books/book/',{book},{headers: { Authorization: 'Token ' + token}})
    .then(
      (res)=>{ dispatch({ type:"CHANGE_LIST",list:res.data});
    });
  }
}

export function deletebook(book){
  let token = localStorage.getItem('token');
  return (dispatch) =>{
    return axios.delete('http://localhost:3001/api/books/book/',{book},{headers: { Authorization: 'Token ' + token}})
    .then(
      (res)=>{ dispatch({ type:"CHANGE_LIST",list:res.data});
      toastr.error( err + 'Error al registrar-se compruebe que ha escrito bien su nombre de usuario y contraseña ','Error')
    });
  }
}

export function createcoffee(coffee){
  let token = localStorage.getItem('token');
  return (dispatch) => {
    return axios.put('http://localhost:3001/api/coffees/',{coffee},{headers: { Authorization: 'Token ' + token}})
    .then(
      (res)=>{ dispatch({ type:"CHANGE_LIST",list:res.data});
    });
  }
}

export function editcoffee(coffee){
  let token = localStorage.getItem('token');
  return (dispatch) => {
    return axios.put('http://localhost:3001/api/coffees/coffee/',{coffee},{headers: { Authorization: 'Token ' + token}})
    .then((res)=>{ dispatch({ type:"CHANGE_LIST",list:res.data});
    });
  }
}

export function deletecoffee(coffee){
  let token = localStorage.getItem('token');
  return (dispatch) => {
    return axios.delete('http://localhost:3001/api/coffees/coffee',{coffee},{headers: { Authorization: 'Token ' + token}})
    .then((res)=>{ dispatch({ type:"CHANGE_LIST",list:res.data});
    });
  }
}

export function deletecoffees(){
  let token = localStorage.getItem('token');
  return (dispatch) => {
    return axios.delete('http://localhost:3001/api/coffees/',{headers: { Authorization: 'Token ' + token}})
      .then( () => { dispatch({type:'DELETE_COFFEES'});
      toastr.error( err + 'Error al registrar-se compruebe que ha escrito bien su nombre de usuario y contraseña ','Error')
    });
  }
}

export function deletebooks(){
  let token = localStorage.getItem('token');
  return (dispatch) => {
    return axios.delete('http://localhost:3001/api/books/',{headers: { Authorization: 'Token ' + token}})
    .then( () => { dispatch({type:'DELETE_BOOKS'});
    toastr.error( err + 'Error al registrar-se compruebe que ha escrito bien su nombre de usuario y contraseña ','Error')
    });
  };
}