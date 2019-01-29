var openlink = document.querySelector(".top-navigation__item_button");
var popup = document.querySelector(".modal-login");
var closelink = document.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector(".login-form");
var password = popup.querySelector("[name=pass]");
openlink.addEventListener ("click", function (evt){
	evt.preventDefault();
	popup.classList.add("modal-show");
	login.focus();
});
closelink.addEventListener ("click", function (evt){
	evt.preventDefault();
	popup.classList.remove("modal-show");
});
form.addEventListener ("submit", function(evt){
	if (!login.value || !password.value){
		evt.preventDefault();
		alert("Введите Логин и/или Пароль");
	}
//	if (!login.value){
//		alert("Поле Логин не может быть пустым");
//	}
//	if(!password.value){
//		alert("Введите обязательно пароль");
//	}
	console.log ("login", login.value);
	console.log ("password", password.value);
});
