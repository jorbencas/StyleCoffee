import toastr from 'toastr';

 function contactService (contact){
        console.log(contact);
        debugger;
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
export{ contactService, CoffeeService };