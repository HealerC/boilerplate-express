let name = "";

const fNameElem = document.querySelector("[name=first]");
const lNameElem = document.querySelector("[name=last]");

fNameElem.addEventListener("change", () => { handleChange() });
lNameElem.addEventListener("change", () => { handleChange() });

function handleChange() {
	name = fNameElem.value + " " + lNameElem.value;
	document.getElementById("name").innerHTML = name;
};