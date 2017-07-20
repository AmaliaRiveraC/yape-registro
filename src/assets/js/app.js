var $url = 'http:localhost:8000/api/registerNumber';

/*var obtenerDatos = function(e) {
	e.preventDefault();
	var $contenedorPhone = ('#phone');
	
	var phone = $contenedorPhone.eq(1).val();
	console.log(phone);
	var $checkList = ('#check')
	var check = $checkList.val();
	
	enviarDatosAPI();
};
*/

var cargarPagina = function(){
	$('.carousel.carousel-slider').carousel({fullWidth: true});
};

/*var enviarDatosAPI = function(){
	$.post($url, {
		phone: phone,
		terms: check
	}).then(function(response){
		console.log(response)
	})
};*/




$(document).ready(cargarPagina);


 


