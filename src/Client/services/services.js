import toastr from 'toastr';
import { getCookie, setCookie, deleteCookie } from '../lib/utils.js';

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

    function googleservice(){
      setCookie('socialogin',true,12);
    }
export{ contactService };