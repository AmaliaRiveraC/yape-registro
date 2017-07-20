var form = document.getElementById('form');
var contenedorPhone = document.getElementById('phone'); 
var boton = document.getElementById('enviar');



contenedorPhone.addEventListener('focus', function(event){
	event.preventDefault();
	var check= document.getElementById('check').checked;

	if(this.value.trim().length == 10 && check == true) {
		boton.removeAttribute('disabled');
	}
});

form.addEventListener('keyup', requestAPI);