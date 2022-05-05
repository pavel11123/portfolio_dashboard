function popup__open(){
	document.getElementById("popup-id").style.opacity="1";
	document.getElementById("popup-id").style.zIndex="1000";
	document.getElementById("popup-id").style.visibility="visible";
	document.getElementById("popup-id").style.transition="opacity .3s, visibility 0s";
	document.getElementById("phone__menu-id-body").style.overflow="hidden";
}

function popup__close(){
document.getElementById("popup-id").style.opacity="0";
document.getElementById("popup-id").style.zIndex="-1";
document.getElementById("popup-id").style.visibility="hidden";
document.getElementById("popup-id").style.transition="opacity .3s, visibility 0s 1s";
document.getElementById("phone__menu-id-body").style.overflow="visible";
}

function redhover(){
	document.getElementById("Ellipse100").style.transform = "translate3d(-10px, -10px, 0px)";
}

function redout(){
	document.getElementById("Ellipse100").style.transform = "translate3d(0px, 0px, 0px)";
}

function greenhover(){
	document.getElementById("Ellipse99").style.transform = "translate3d(0px, 10px, 10px)";
}

function greenout(){
	document.getElementById("Ellipse99").style.transform = "translate3d(0px, 0px, 0px)";
}

function bluehover(){
	document.getElementById("Ellipse97").style.transform = "translate3d(10px, -10px, 0px)";
}

function blueout(){
	document.getElementById("Ellipse97").style.transform = "translate3d(0px, 0px, 0px)";
}