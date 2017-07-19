var $url = 'http://localhost:8000/api/registerNumber';

var cargarPagina = function(){
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$('#form').submit(obtenerDatos);
};

var obtenerDatos = function(e) {
	e.preventDefault();
	var $phone = $('#phone').val();
	var check = $('#check').val();
	
	
};

var enviarDatosAPI = function(){
	
	$.post($url, {
		"phone": $phone,
		"terms": $check
	});
}
$(document).ready(cargarPagina);





