import axios from 'axios';
import toastr from 'toastr';
import store from '../Store';

export function loadlistCoffees(param){
  if (param) {
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

export function AddtoCard(product){
  console.log(product);
  return  dispatch({
  type:"ADD_TO_CART",
  product
  });
}

export function loadListBooks(param){
  if (param) {
    console.log('Param:' + param);
    debugger;
    return(dispatch)=>{
      return axios.post(`http://localhost:3001/api/books/` + param)
      .then(res => {
        dispatch({ type:"CHANGE_LIST",list:res.data});
      })
    }
  }else{
    return(dispatch)=>{
      return axios.get(`http://localhost:3001/api/books`)
      .then(res => {
        dispatch({ type:"CHANGE_LIST",list:res.data});
      })
    }
  }
}

export function login(user){
  return(dispatch)=>{
    return axios.post('http://localhost:3001/api/users/login',{user})
    .then(
      response => {dispatch({type:"AUTH_USER",user:response.data});
        localStorage.setItem('token',response.data.user.token);
        localStorage.setItem('username',response.data.user.username);
        toastr.success('Hola ' +response.data.user.username + 'te has registrado correctamente','Bienvenido');
      } ,
      err => toastr.error('Error al registrar-se','Error')
    ).catch(err => {authError(err)});
  };
  }

  export function profile(){
    const username = store.getState().loginReducer.user.user.username;
    return(dispatch)=>{
      return axios.get('http://localhost:3001/api/profiles/' + username)
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
  export function updateprofile(payload){
    payload.token = localStorage.getItem('token');
    return(dispatch)=>{
      return axios.put('http://localhost:3001/api/user',{payload},{
        headers: { authorization: localStorage.getItem('token'),
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
           }}
    )
      .then(
        res => {
          dispatch({type:"PROFILE_USER",user:response.data.profile});
          toastr.success('Hola ' +res.data.user.username + 'tu perfil se ha actualizado correctamente','Bienvenido');
        },
        err => toastr.error('Error al registrar-se compruebe que ha escrito bien su nombre de usuario y contraseña ','Error')
      ).catch(err => {authError(err)});;
    }
  }