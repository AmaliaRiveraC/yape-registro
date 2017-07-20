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
	var check = checkList.value;

	if(check == "on") {
		check = true;
	} else {
		check = false;
	}

	postJSON(api.url1, {
		"phone": phone,
		"terms": check
	}).then(function(response){ 
		console.log(response);
		
		
		/*return postJSON(api.url2, {
		"phone": phone,
	})  postJSON(api.url2, {
		"phone": phone
	})*/});

});

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

var reenviarCodigo = function() {
	if(setTimeout())
}



/*var enviarDatosAPI = function(){
	$.post($url, {
		phone: phone,
		terms: check
	}).then(function(response){
		console.log(response)
	})
};
*/
