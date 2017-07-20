var api = {
	url1: '/api/registerNumber',
	url2: '/api/resendCode'
};

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

form.addEventListener('submit', function(event) {
	event.preventDefault();
	var phone = contenedorPhone.value;
	var check= document.getElementById('check').checked;

	postJSON(api.url1, {
		"phone": phone,
		"terms": check
	})
		.then(function(response){ 
		enviarCodigo(response);
		})
		.then(function(response) {
		ingresarCodigo(phone);
		segundaPeticionAjax();
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



var enviarCodigo = function(response) {
	var objetoJSON = JSON.parse(response);
	var exito = objetoJSON.success;
	var datos = objetoJSON.data;
	var codigo = datos.code;
	if(exito == true) {
		var phone = datos.phone;
		alert('Tu código de validación es ' + codigo);
		window.location.href = 'ingresar-codigo.html';
		
	} else {
		alert('Este numero ya ha sido ingresado anteriormente');
	}
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
