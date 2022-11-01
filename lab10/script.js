function validateForm(){
	//radio
	var r1 = document.getElementById('radio1')
	var r2 = document.getElementById('radio2')
	var r3 = document.getElementById('radio3')

	//checkbox
	var c1 = document.getElementById('checkbox1')
	var c2 = document.getElementById('checkbox2')
	var c3 = document.getElementById('checkbox3')

	//password and other
	var pass = document.getElementById('check')
	var x = document.forms["MyForm"]["confirm"].value;

	let input = document.querySelector('#check');
	var password = "qwerty"; //password
	if(x != password){
		pass.style.color = "red";
		return false;
	}
	else{
		if(r1.checked){
			alert("первый радио нажат");
		}else if(r2.checked){
			alert("второй радио нажат");
		}
		else if (r3.checked){
			alert("третий радио нажат");
		}

		if(c1.checked && c2.checked){
			alert("чекбоксы 1 и 2 нажаты");
		}else if(c2.checked && c3.checked){
			alert("чекбоксы 2 и 3 нажаты");
		}else if(c1.checked && c3.checked){
			alert("чекбоксы 1 и 3 нажаты");
		}else if(c1.checked && c2.checked && c3.checked){
			alert("все чекбоксы нажаты");
		}else if(c1.checked || c2.checked || c3.checked){
			alert("чекбокс нажат");
		}else{
			alert("чекбоксы не нажаты");
		}
	}
}