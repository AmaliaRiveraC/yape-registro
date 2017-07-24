var contenedorNombre = document.getElementById('name');
var contenedorEmail = document.getElementById('email');
var contenedorPassword = document.getElementById('password');
var datosUsuarios = document.getElementsByClassName('datos-usuarios');
var phone = localStorage.getItem("phone");
console.log(phone);
var carcateresValidos;

var nombre = contenedorNombre.value;
var email = contenedorEmail.value;
var password = contenedorPassword.value;

var validacionNombre = function(event) {
		if (event.keyCode !== 8 && (event.keyCode < 65 || event.keyCode > 90) && (event.keyCode < 97 || event.keyCode > 122)){
			event.preventDefault();
		}
};

var validacionEmail = function(event) {
		var caracteresEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(caracteresEmail.test(email)) {
			carcateresValidos = true;
			console.log('valido');
		} else {
			carcateresValidos = false;
			console.log("error");
		}
};

var validacionPassword = function() {
		if(password.length == 6) {
			carcateresValidos = true;
		} else {
			carcateresValidos = false;
		}
};

var habilitarBotonCrearCuenta = function(){

}



contenedorNombre.addEventListener('keydown', validacionNombre);
contenedorEmail.addEventListener('keyup', validacionEmail);
contenedorPassword.addEventListener('keyup', validacionPassword);

		
		

