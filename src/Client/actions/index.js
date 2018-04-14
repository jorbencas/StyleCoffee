import axios from 'axios';

<<<<<<< HEAD

const server="localhost"

export function loadOffer(){
 return(dispatch)=>{
   return   axios.get(`http://`+server+`:3001/api/coffee`)
=======
export function loadOffer(){
 return(dispatch)=>{
   return   axios.get(`http://localhost:3001/api/coffee`)
>>>>>>> development
   .then(res => {
     dispatch(changeOffert(res.data));
   })
 }
}

<<<<<<< HEAD
=======
export function login({email,password}){
  return(dispatch)=>{
    return axios.get(`http://localhost:3001/api/user/login`, {email,password})
    .then(res => {
                        // if request is good...
                        // - update state to indicate user is authenticated
                        dispatch(user());
        
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
>>>>>>> development

export function changeOffert(res){
  return{
    type:"CHANGE_OFFER",
    list:res
  }
}

<<<<<<< HEAD

export function loadList(){
  return(dispatch)=>{
    return   axios.get(`http://`+server+`:3001/api/books`)
=======
export function user(){
  return{
    type:"AUTH_USER",
    user:[]
  }
}
export function loadList(){
  return(dispatch)=>{
    return   axios.get(`http://localhost:3001/api/books`)
>>>>>>> development
    .then(res => {
      dispatch(changeList(res.data));
    })
  }
 }
 
 
 export function changeList(res){
   return{
     type:"CHANGE_LIST",
     list:res
   }
}
