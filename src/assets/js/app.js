var $url = 'http:localhost:8000/api/registerNumber';

var cargarPagina = function(){
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$('#form').submit(obtenerDatos);
};
 
/*var obtenerDatos = function(e) {
	e.preventDefault();
	document.write($('#phone').val());
	var $phone = $('#phone').val();
	console.log($phone);
	var $checkList = ('#check')
	var check = $checkList.val();
	
	enviarDatosAPI();
};


var enviarDatosAPI = function(){
	$.post($url, {
		phone: phone,
		terms: check
	}).then(function(response){
		console.log(response)
	})
};*/




$(document).ready(cargarPagina);


 


