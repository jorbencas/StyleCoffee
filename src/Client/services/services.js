import React from "react";
import toastr from 'toastr';
import { getCookie, setCookie } from '../lib/utils.js';
import ReactDOM  from 'react-dom';
import BooksListPage from '../Components/Books/BooksListPage';
import CoffeeListPage from '../Components/Coffees/CoffeeListPage';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from 'axios'; 

  function contactService (contact){
        console.log(contact);
        $.ajax({
            url: 'http://localhost:3001/api/contact',
            type: 'POST',
            data: contact,
            error: function() {
              toastr.error('No se ha envio un email a correctamente','Email');
              console.log('El correo no se ha enviado correctamente');
            },
            success: function(data) {
              console.log(data);
              toastr.success('Se le  envio un email a' +data.contact + ' correctamente','Email');
            }
            
         });
    }

 

  function Search(search){
    console.log(search);
    if (getCookie('kindsearch') == 'false'){
      $.ajax({
        url: 'http://localhost:3001/api/coffee/' + search,
        type: 'GET',
        error: function() {
          console.log('Error cafee');
        },
        success: function(search) {
          console.log(search);
          //<Link to={'/Coffee/:' + search} ></Link>
          //ReactDOM.render(<CoffeeListPage props={search}/>, document.getElementById('content'));
        }
     });

    }else if(getCookie('kindsearch') == 'true'){
      $.ajax({
        url: 'http://localhost:3001/api/books/' + search,
        type: 'GET',
        error: function() {
          console.log('error libro');
        },
        success: function(search) {
          console.log(search);
          <Link to={'/Books/:' + search} ></Link>
          //ReactDOM.render(<BooksListPage props={search}/>, document.getElementById('content'));
        }
     });

    }
  };

  function LoginService(user){
    console.log(user);
    axios.post('http://localhost:3001/api/users/login',{user})
    .then(
      response => {
        localStorage.setItem('token',response.data.user.token);
        localStorage.setItem('username',response.data.user.username);
        localStorage.setItem('img',response.data.image);
        console.log(response.data.user);
        toastr.success('Hola ' +response.data.user.username + 'te has registrado correctamente','Bienvenido');
      } ,
      err => toastr.error('Error al registrar-se','Error')
    );
  }

  function SingUp(user){
    console.log(user);
    axios.post('http://localhost:3001/api/users',{user})
    .then(
      response => {
        localStorage.setItem('token',response.data.user.token);
        localStorage.setItem('username',response.data.user.username);
        toastr.success('Hola ' +response.data.user.username + 'te has registrado correctamente','Bienvenido');
      } ,
      err => toastr.error('Error al registrar-se compruebe que ha escrito bien su nombre de usuario y contraseña ','Error')
    );
  }
  function logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  function update(user){
    axios.put('http://localhost:3001/api/user',{user})
    .then(
      response => {
        toastr.success('Hola ' +response.data.user.username + 'tu perfil se ha actualizado correctamente','Bienvenido');
      } ,
      err => toastr.error('Error al registrar-se compruebe que ha escrito bien su nombre de usuario y contraseña ','Error')
    );
  }
export{ contactService, Search, LoginService, logOut, SingUp, update };