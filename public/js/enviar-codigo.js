var inputCodigo = document.getElementById('contenedor-codigo');
var contenedorTemporizador = document.getElementById('contenedor-contador');
var phone = localStorage.getItem('phone');
var contador = 21;
var codigoIngresaoPorUsuario = inputCodigo.value;
var codigo = localStorage.getItem('codigo');
var tuTelefono = document.getElementById('telephoNumber');
var check = localStorage.getItem('check');

tuTelefono.innerHTML = phone;




inputCodigo.addEventListener('keyup',  function(){
	if(codigoIngresaoPorUsuario == codigo){
		clearInterval(imprimirTemporizador);
		window.location.href = 'crear-usuario.html';
	} else {
		alert("Ingresa un código valido");
	}

	


});

var limiteDeTiempo = function() {

	setTimeout(function(){requerirNuevoCodigo()},21000);

	window.location.href = 'ingresar-codigo.html';
};

var requerirNuevoCodigo = function (url2){
		postJSONDos(api.url2, {
			'phone': phone,
		}).then(function(response){
			console.log(response);
			enviarCodigoNuevo;		
		})
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


var imprimirTemporizador = function(){
		
		contenedorTemporizador.innerHTML = contador;
			if(contador > 0) {
				contador--;
				setTimeout('imprimirTemporizador()', 1000)

			} 
		
	
};





	

	var enviarCodigoNuevo = function(response){
		console.log(response);
		var response = JSON.parse(response);
		var datos = response.data;
		var nuevoCodigo = datos.code;
		alert("tu código es " + nuevoCodigo);

	};


imprimirTemporizador();