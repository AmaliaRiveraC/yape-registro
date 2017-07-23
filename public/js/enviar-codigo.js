var inputCodigo = document.getElementById('contenedor-codigo');
var contenedorTemporizador = document.getElementById('contenedor-contador');
var phone = localStorage.getItem('phone');
var contador = 21;
var codigoIngresaoPorUsuario = inputCodigo.value;
var codigo = localStorage.getItem('codigo');
var tuTelefono = document.getElementById('telephoNumber');


tuTelefono.innerHTML = phone;





window.addEventListener('load', limiteDeTiempo);
inputCodigo.addEventListener('keyup',  function(event){
	event.preventDefault();
	
	if(codigoIngresaoPorUsuario == codigo){
		window.location.href = 'crear-usuario.html';
	} 

	


});

var limiteDeTiempo = function() {

	setTimeout(function(){
		postJSONDos(api.url2, {
			"phone": phone
		})
			.then(function(response){
			enviarCodigoNuevo(response);
			console.log(response);
		})
	}, 21000);

	window.location.href = "ingresar-codigo.html";
};

var imprimirTemporizador = function(){
		
		contenedorTemporizador.innerHTML = contador;
			if(contador > 0) {
				contador--;
				setTimeout('imprimirTemporizador()', 1000)

			}
		
	
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

	var enviarCodigoNuevo = function(response){
		console.log(response);
		var response = JSON.parse(response);
		var datos = response.data;
		var nuevoCodigo = datos.code;
		alert("tu código es " + nuevoCodigo);

	};

	imprimirTemporizador();

