import axios from 'axios';

export function loadOffer(){
 return(dispatch)=>{
   return   axios.get(`http://localhost:3001/api/coffee`)
   .then(res => {
     dispatch(changeOffert(res.data));
   })
 }
}

export function login(){
  return(dispatch)=>{
    return   axios.get(`http://localhost:3001/api/user/login`)
    .then(res => {
      dispatch(changeOffert(res.data));
    })
  }
}

export function changeOffert(res){
  return{
    type:"CHANGE_OFFER",
    list:res
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
 
 
 export function changeList(res){
   return{
     type:"CHANGE_LIST",
     list:res
   }
}
