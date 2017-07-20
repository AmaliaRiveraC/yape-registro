var api = {
	url1: '/api/registerNumber',
	url2: '/api/resendCode'
};


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
	console.log(codigo);
	if(exito == true) {
		var phone = datos.phone;
		alert('Tu código de validación es ' + codigo);
		window.location.href = 'views/ingresar-codigo.html';
		
	} else {
		alert('Este número ya ha sido ingresado anteriormente');
	}
};







