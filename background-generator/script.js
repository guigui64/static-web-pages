var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomizeColors() {
	color1.setAttribute("value", "#" + randomLayer() + randomLayer() + randomLayer());
	color2.setAttribute("value", "#" + randomLayer() + randomLayer() + randomLayer());
	setGradient();
}

function randomLayer() {
	return Math.floor(Math.random() * 255).toString(16).padStart(2, '0');
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

setGradient();

random.addEventListener("click", randomizeColors);