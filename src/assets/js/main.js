var url = '/api/registerNumber';

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
	
	postJSON(url)
	
});

var postJSON = function(url) { 

  return new Promise(function(resolve, reject) {
    var ajax = new XMLHttpRequest();
    ajax.open("POST",url);
	ajax.dataType = "json";
	ajax.data = {
		"phone": phone,
		"terms": check
	};

    ajax.send();
    ajax.onreadystatechange = function(){
      if(ajax.readyState == 4){ 
        resolve(ajax.responseText)
      } else {
		  console.log("error");
	  }
    }
  });
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
