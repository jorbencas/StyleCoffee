import axios from 'axios';
import toastr from 'toastr';
import _ from 'underscore';
let item = [];
let Item = [];
import store from '../Store';
import { error } from 'util';

export function loadlistCoffees(){
    return(dispatch)=>{
      return axios.get(`http://localhost:3001/api/coffees`)
      .then(res => {
        dispatch({type:"CHANGE_OFFER",list:res.data});
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
    return axios.get(`http://localhost:3001/api/coffees/` + param)
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
    return axios.post(`http://localhost:3001/api/coffees/` + id)
    .then(res => {
      dispatch({type:"COFFEE_DETAIL",detail:res.data});
    })
  }
}

/*cARD ENDPOITNS*/

export function getCart(states) {
	var cartItems = JSON.parse(localStorage.getItem('cart'));
	var total = 0.00;
	_.each(cartItems, function (item) {
		total += item.price;
	});
	return {
		total: total.toFixed(2),
		cart: cartItems ? cartItems : 0
	};
}

export function AddtoCard(kind,cart){
  return dispatch =>{
    item.push({'kind':kind,'id':cart.id,'token':0});
    localStorage.setItem('item',JSON.stringify(item));
    dispatch({type:"ADD_TO_CART", cart:cart});
    toastr.success('El producto ' +cart.title + 'se ha añadido a tu cesta','Bienvenido');
  }
}

export function BuyProduct(cart){
  let cartitem = localStorage.getItem('item');
  if (cartitem) {
    let p = JSON.parse(cartitem);
    let itemes = [];
    _.each(p, function (item) {
      item.token = cart;
      itemes.push(item);
      localStorage.setItem('item',JSON.stringify(itemes));
    });
    let carrito = JSON.parse(localStorage.getItem('item'));
    return(dispatch) => {
      return axios.post(`http://localhost:3001/api/charge`, {carrito})
      .then(res => {
          toastr.success('Revisa tu correo para obtener información sobre','Aviso importante')
          localStorage.removeItem('item');
          localStorage.removeItem('cart');
        }
    );
    }
  }
}

export function RemoveFromcard(cart){
  return (dispatch) => {
    dispatch({type:'REMOVE_TO_CART',cart:cart});
    toastr.info('El producto ' +cart.title + 'se ha eliminado a tu cesta','Bienvenido');
  }
}

/* RESERVES ENDPOINT*/


export function reserve(reserve){
  let token = localStorage.getItem('token');
  console.log(token);
  debugger;
  return (dispatch) => {
    return axios.put('http://localhost:3001/api/reserve/', {reserve},{headers: { Authorization: 'Token ' + token}})
    .then(
      (res)=>{ dispatch({ type:"EDIT_PRODUCT",list:res.data});
    })
    .catch(error => {console.log(error.response.data.errors.error); authError(error.response.data.errors.error),
      toastr.error(error.response.data.errors.error,'Error')
    });
  }
}

export function removereserve(id) {
  
}

export function listreserves() {
  return(dispatch)=>{
    return axios.get(`http://localhost:3001/api/reserve/`)
    .then(res => {
      dispatch({type:"RESERVE_PRODUCT",list:res.data});
    })

  }
}

export function authError (error){
  return {type: 'AUTH_ERROR', payload: error.message};
};

// Auth endpoints

export function logout(){
  localStorage.removeItem('token');
  dispatch({type:"LOGOUT_USER"});
}

export function login(user){
  return(dispatch)=>{
    return axios.post('http://localhost:3001/api/users/login',{user})
    .then(response => {dispatch({type:"AUTH_USER",user:response.data.user});
        localStorage.setItem('token',response.data.user.token);
        console.log(response.data.user);
        toastr.success('Hola ' +response.data.user.username + 'te has registrado correctamente','Bienvenido');
      })
    .catch(error => {console.log(error.response.data.errors.error); authError(error.response.data.errors.error),
      toastr.error(error.response.data.errors.error,'Error')
    });
  };
}

export function profile(){
  const username = store.getState().loginReducer.user.username;
  let token = localStorage.getItem('token');
  return(dispatch)=>{
    return axios.get('http://localhost:3001/api/profiles/' + username,{headers: {Authorization: 'Token ' + token}})
       .then( res =>{dispatch({type:"PROFILE_USER",profile:res.data.profile})})
      .catch(err => {authError(err)});
  }
}

export function SingUp(user){
  return(dispatch)=>{
    return axios.post('http://localhost:3001/api/users',{user})
    .then( res => {
        dispatch({type:"SINGUP_USER",user:res.data.user})
        localStorage.setItem('token',res.data.user.token);
        toastr.success('Hola ' +res.data.user.username + 'te has registrado correctamente','Bienvenido');
      },
      err => toastr.error('Error al registrar-se compruebe que ha escrito bien su nombre de usuario y contraseña ','Error')
    );
  };
};

export function updateprofile(user){
  let token = localStorage.getItem('token');
  console.log(token);
  console.log(user);
  debugger;
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

export function loadusers(){
  let token = localStorage.getItem('token');
  console.log(token);
  return (dispatch) => {
    return axios.get(`http://localhost:3001/api/users`/*,{headers: { Authorization: 'Token ' + token}}*/)
      .then(res => {
        dispatch({type:"LOAD_USERS",users:res.data});
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
    return axios.delete('http://localhost:3001/api/books/book/' + book,{headers: { Authorization: 'Token ' + token}})
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
    return axios.delete('http://localhost:3001/api/coffees/coffee/'+ coffee,{headers: { Authorization: 'Token ' + token}})
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
    toastr.error( 'Error al registrar-se compruebe que ha escrito bien su nombre de usuario y contraseña ','Error')
    });
  };
}
