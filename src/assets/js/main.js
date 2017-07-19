var url = 'http:localhost:8000/api/registerNumber';

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
	
	enviarDatosAPI({
		"phone": phone,
		"terms": check
	});
	
});

var enviarDatosAPI = function() {
	$.ajax(url, {
      method: "POST",
      dataType: "json",
      success: function (response) {
        console.log(response);
      },
  error: function (error) {
    console.log("error", error);
  }
});
};

/*var enviarDatosAPI = function(){
	$.post($url, {
		phone: phone,
		terms: check
	}).then(function(response){
		console.log(response)
	})
};
*/
