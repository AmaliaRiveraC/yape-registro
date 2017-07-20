var form = document.getElementById('form');
var contenedorPhone = document.getElementById('phone'); 
var boton = document.getElementById('enviar');



contenedorPhone.addEventListener('keyup', function(event){
	event.preventDefault();
	var check= document.getElementById('check').checked;

	if(this.value.trim().length == 10 && check == true) {
		boton.removeAttribute('disabled');
	}
});

boton.addEventListener('click', function(event){
	
	event.preventDefault();
	var phone = contenedorPhone.value;
	localStorage.setItem("phone", phone);
	var check= document.getElementById('check').checked;

	postJSON(api.url1, {
		"phone": phone,
		"terms": check
	})
		.then(function(response){ 
		enviarCodigo(response);
		})
		
	})
});