import toastr from 'toastr';
import { getCookie, setCookie } from '../lib/utils.js';
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

  function SingUp(user){
    console.log(user);
    axios.post('http://localhost:3001/api/users',{user})
    .then(
      res => {
        localStorage.setItem('token',res.data.user.token);
        localStorage.setItem('username',JSON.stringify(res.data.user.username));
        console.log('User Really is:' + JSON.stringify(res.data.user));
        toastr.success('Hola ' +res.data.user.username + 'te has registrado correctamente','Bienvenido');
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
export{ contactService, logOut, SingUp, update };