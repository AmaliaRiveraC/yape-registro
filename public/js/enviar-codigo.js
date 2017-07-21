var inputCodigo = document.getElementById('contenedor-codigo');
var contenedorTemporizador = document.getElementById('contador');
console.log(setTimeout());
 
 
 
inputCodigo.addEventListener('keyup',  function(event){
	event.preventDefault();
	var codigoIngresaoPorUsuario = inputCodigo.value;
	var codigo = localStorage.getItem('codigo');
	var tuTelefono = document.getElementById('telephoNumber');
	var phone = localStorage.getItem('phone');
 
	tuTelefono.innerHTML = phone;

	if(codigoIngresaoPorUsuario == codigo){
		window.location.href = 'crear-usuario.html';
	}
	limiteDeTiempo(phone);

});

var limiteDeTiempo = function() {
	setTimeout(function(){
		postJSONDos(api.url2, {
			"phone": phone
		})
	.then(function(response){
			console.log(response);
			enviarCodigoNuevo(response);
		})}, 21000);
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

var enviarCodigoNuevo = function(){
	
}