var inputCodigo = document.getElementById('contenedor-codigo');
var contenedorTemporizador = document.getElementById('contenedor-contador');
var contador = 21;
var phone = localStorage.getItem('phone');
var temporizador;





inputCodigo.addEventListener('keyup',  function(event){
	event.preventDefault();
	var codigoIngresaoPorUsuario = inputCodigo.value;
	var codigo = localStorage.getItem('codigo');
	var tuTelefono = document.getElementById('telephoNumber');


	tuTelefono.innerHTML = phone;
	if(codigoIngresaoPorUsuario == codigo){
		window.location.href = 'crear-usuario.html';
	} else {
		limiteDeTiempo()
	}


});

var limiteDeTiempo = function() {

	setTimeout(imprimirTemporizador, 21000);
};

var imprimirTemporizador = function(){
	contenedorTemporizador.innerHTML = contador;
	contador--;

	temporizador = setTimeout(function(){

		for(var i = 0; i < 1; i--){
			contador--;
			contenedorTemporizador.innerHTML = contador;
		} 
	}, 21000);
}





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

	var enviarCodigoNuevo = function(response){
		console.log(response);
		var response = JSON.parse(response);
		var datos = response.data;
		var nuevoCodigo = datos.code;
	};

	imprimirTemporizador();

	/*function(){
		postJSONDos(api.url2, {
			"phone": phone
		})
			.then(function(response){
			console.log(response);
			enviarCodigoNuevo(response);
		})}*/
