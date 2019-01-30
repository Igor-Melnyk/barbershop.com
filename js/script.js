var openlink = document.querySelector(".top-navigation__item_button");
var overlay = document.querySelector(".modal-overlay");
var popup = document.querySelector(".modal-login");
var closelink = document.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector(".login-form");
var password = popup.querySelector("[name=pass]");
var contact_map = document.querySelector(".contact-map");
var map = document.querySelector(".modal-map");
contact_map.addEventListener("click", function(evt){
	evt.preventDefault();
	overlay.classList.add("modal-show");
	map.classList.add("modal-show");
});
openlink.addEventListener ("click", function (evt){
	evt.preventDefault();
	overlay.classList.add("modal-show");
	popup.classList.add("modal-show");
	popup.classList.add("animation-move");
	popup.classList.remove("animation-shake");
	login.focus();
});
closelink.addEventListener ("click", function (evt){
	evt.preventDefault();
	popup.classList.remove("modal-show");
	overlay.classList.remove("modal-show");
});
//
//overlay.addEventListener ("click", function (evt){
//	evt.preventDefault();
//	popup.classList.remove("modal-show");
//	overlay.classList.remove("modal-show");
//});
form.addEventListener ("submit", function(evt){
	if (!login.value || !password.value){
		evt.preventDefault();
		popup.classList.add("animation-shake");
	}
//	if (!login.value){
//		alert("Поле Логин не может быть пустым");
//	}
//	if(!password.value){
//		alert("Введите обязательно пароль");
//	}

});
window.addEventListener("keydown", function(evt){
	if(evt.keyCode === 27){
		evt.preventDefault();
		popup.classList.remove("modal-show");
		overlay.classList.remove("modal-show");
		console.log(evt);
	}
});