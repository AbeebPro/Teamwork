

let header = document.querySelector("h1")
header.style.textAlign = "center"

let confirm = document.querySelector(".confirm")
confirm.addEventListener("change", () => {
	let value1 = document.querySelector("#p1").value
	let value2 = document.querySelector("#p2").value
	let confirm2 = document.querySelector(".confirm2")
	if (value2 !== value1) {
		alert("Passwords do not match")
		document.querySelector(".submit").setAttribute("disabled", "disabled")
		confirm2.innerHTML = "Please ensure your passwords match to activate this button"
	}else {
		document.querySelector(".submit").removeAttribute("disabled", "disabled")
		confirm2.innerHTML = ""
	}
})


let button = document.querySelector(".submit");
button.addEventListener("click", ()=> {
	let form = document.querySelector("form");
	let url =  "https://www.cam.ac.uk/"
	if (form.checkValidity()){
		form.setAttribute("action", url)
		alert("Student registration successful")
	}else{
		form.removeAttribute("action")
	}
})