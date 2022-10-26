function validateForm(){
	var x = document.forms["MyForm"]["fname"].value;
	if(x==""){
		alert("Error1");
		return false;
	}
	let input = document.querySelector('#input');
	var zapret = /^[a-zA-Z0-9]+$/;
	if(!zapret.test(x)){
		alert("Обнаружен неверный символ в имени");
		input.focus();
		input.select();
		return false;
	}


	var y = document.forms["MyForm"]["femail"].value;
	if(y==""){
		alert("Error2");
		return false;
	}
	let email_input = document.querySelector('#email_input');
	var zapret2 = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	if(!zapret2.test(y)){
		alert("Обнаружен неверный символ в почте");
		email_input.focus();
		email_input.select();
		return false;
	}


	var c = document.forms["MyForm"]["fnumber"].value;
	if(c==""){
		alert("Error3");
		return false;
	}
	let number_input = document.querySelector('#number_input');
	var zapret3 = /^(\+)?(\d{1,2})?[( .-]*(\d{3})[) .-]*(\d{3,4})[ .-]?(\d{4})$/; // /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
	if(!zapret3.test(c)){
		alert("Обнаружен неверный символ в телефоне");
		number_input.focus();
		number_input.select();
		return false;
	}

	var d = document.forms["MyForm"]["text1.4"].value;
	if(d==""){
		alert("Error1.4");
		return false;
	}


}