import React from "react";
import toastr from 'toastr';
import { getCookie, setCookie } from '../lib/utils.js';
import ReactDOM  from 'react-dom';
import BooksListPage from '../Components/BooksListPage';
import CoffeeListPage from '../Components/CoffeeListPage';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from 'axios'; 
import {save, destroy, get} from './jwt.service';

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

  function CoffeeService(event){
    console.log('Hola Estoy cargando los cafes');
    var xmlhttp = new XMLHttpRequest();
        var url = "http://localhost:3001/api/coffee";
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                console.log(myArr);
                return myArr.Coffee;
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.setRequestHeader('Content-Type', 'text/plain');
        xmlhttp.send();
  }

  function BooksDetailsService(){

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
      err => toastr.error('Error al registrar-se','Error')
    );
  }
  function logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

export{ contactService, CoffeeService, BooksDetailsService, Search, LoginService, logOut, SingUp };