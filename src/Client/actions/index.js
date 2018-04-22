import axios from 'axios';

export function loadOffer(){
 return(dispatch)=>{
   return   axios.get(`http://localhost:3001/api/coffee`)
   .then(res => {
     dispatch(changeOffert(res.data));
   })
 }
}

export function booksdetail(id){
  return(dispatch)=>{
    return axios.post(`http://localhost:3001/api/books` + id)
    .then(res => {
      dispatch(Booksdetail(res.data));
    })
  }
}
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

export function changeOffert(res){
  return{
    type:"CHANGE_OFFER",
    list:res
  }
}

export function user(){
  return{
    type:"AUTH_USER",
    user:res
  }
}
export function loadList(){
  return(dispatch)=>{
    return   axios.get(`http://localhost:3001/api/books`)
    .then(res => {
      dispatch(changeList(res.data));
    })
  }
 }
 
 export function Booksdetail(res){
   return{
     type:"BOOKS_DETAIL",
     detail:res
    }
 }

 export function changeList(res){
   return{
     type:"CHANGE_LIST",
     list:res
   }
}
