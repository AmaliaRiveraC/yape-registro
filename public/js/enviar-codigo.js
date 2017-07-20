



var limiteDeTiempo = function() {
	if(setTimeout(function(){segundaPeticionAjax()}, 21000))
};

	var segundaPeticionAjax = function() {
		console.log(localStorage.getItem(phone));
		/*postJSON(api.url2, {

		})*/
		;}

	var ingresarCodigo = function(phone) {
		var tuTelefono = document.getElementById('telephoNumber');
		tuTelefono.textContent = phone;
	};