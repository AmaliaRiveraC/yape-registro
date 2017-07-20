var api = {
	url1: '/api/registerNumber',
	url2: '/api/resendCode'
};

var form = document.getElementById('form');
var contenedorPhone = document.getElementById('phone'); 
var boton = document.getElementById('enviar');
var phone = contenedorPhone.value;



contenedorPhone.addEventListener('keyup', function(event){
	event.preventDefault();
	var check= document.getElementById('check').checked;

	if(this.value.trim().length == 10 && check == true) {
		boton.removeAttribute('disabled');
		console.log(boton.attributes);
		
	}
});

form.addEventListener('submit', function(event) {
	event.preventDefault();
	var longPhone = phone.length;
	
	
	
	

	postJSON(api.url1, {
		"phone": phone,
		"terms": check
	})
		.then(function(response){ 
		enviarCodigo(response);
		})
		.then(function(response) {
		console.log(response);
		ingresarCodigo(phone);
		})
	

})

var postJSON = function(url, data) { 

	return new Promise(function(resolve, reject) {
		var ajax = new XMLHttpRequest();
		ajax.open("POST", url);
		ajax.setRequestHeader("Content-Type", "application/json");

		ajax.send(JSON.stringify({
			"phone": data.phone,
			"terms": data.terms
		}));
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4){ 
				resolve(ajax.responseText)
			} else {
				console.log("error");
			}
		}
	});
};


/*var  = function(){
	
	var longPhone = phone.length;
	
	if(phone.length == 10 && check == true ) {
		
		console.log(boton.getAttribute)
	} 
	
};*/

var enviarCodigo = function(response) {
	var objetoJSON = JSON.parse(response);
	var exito = objetoJSON.success;
	var datos = objetoJSON.data;
	
	if(exito == true) {
		var phone = datos.phone;
		window.location.href = 'ingresar-codigo.html';
		ingresarCodigo(phone);
	} else {
		alert('Este numero ya ha sido ingresado anteriormente');
	}
};

var ingresarCodigo = function(phone) {
	var tuTelefono = document.getElementById('telephoNumber');
	tuTelefono.textContent = phone;
};



/*var enviarDatosAPI = function(){
	$.post($url, {
		phone: phone,
		terms: check
	}).then(function(response){
		console.log(response)
	})
};
*/
