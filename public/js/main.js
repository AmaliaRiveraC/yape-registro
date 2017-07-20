var api = {
	url1: '/api/registerNumber',
	url2: '/api/resendCode'
};

var form = document.getElementById('form');


form.addEventListener('submit', function(event) {
	event.preventDefault();
	var contenedorPhone = document.getElementById('phone');
	var phone = contenedorPhone.value;
	var checkList = document.getElementById('check');
	var check = checkList.checked;

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


var enviarCodigo = function(response) {
	var objetoJSON = JSON.parse(response);
	var exito = objetoJSON.success;
	var datos = objetoJSON.data;
	if(exito == true) {
		var phone = datos.phone;
		window.location.href = "ingresar-codigo.html";
		ingresarCodigo(phone);
	} else {
		alert("Este numero ya ha sido ingresado anteriormente");
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
