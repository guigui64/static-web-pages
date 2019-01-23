var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	li.addEventListener("click", toggleDone)
	var del = document.createElement("button");
	del.appendChild(document.createTextNode("Delete"));
	del.addEventListener("click", removeParent);
	li.appendChild(del);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(event) {
	event.target.classList.toggle("done");
}

function removeParent(event) {
	event.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

document.querySelectorAll("li").forEach(x => x.addEventListener("click", toggleDone));
document.querySelectorAll("li>button").forEach(x => x.addEventListener("click", removeParent));