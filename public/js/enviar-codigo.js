var inputCodigo = document.getElementById('contenedor-codigo');
var codigoIngresaoPorUsuario = inputCodigo.value;
var codigo = localStorage.getItem('codigo');
var codigoAleatorioAPI = codigo;
var tuTelefono = document.getElementById('telephoNumber');
var phone = localStorage.getItem('phone');
tuTelefono.innerHTML = phone;

inputCodigo.addEventListener('keyup', verificarCodigo);



var verificarCodigo = function(){

	limiteDeTiempo();

};

var limiteDeTiempo = function() {
	if(setTimeout(function(){
		postJSONDos(api.url2, {
			"phone": 
		})}, 21000));
};

	var postJSONDos = function(url) {
		return new Promise(function(resolve, reject) {
		var ajax = new XMLHttpRequest();
		ajax.open("POST", url);
		ajax.setRequestHeader("Content-Type", "application/json");

		ajax.send(JSON.stringify({
			"phone": data.phone
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
	/*postJSON(api.url2, {

		})
		;}

	var ingresarCodigo = function(phone) {
		var tuTelefono = document.getElementById('telephoNumber');
		tuTelefono.textContent = phone;
	};*/