window.onload = function() {

	let form = document.querySelector("form")
	console.log(form)
	form.addEventListener("submit", function(event)  {
		debugger;
	
		const animalInput = document.getElementById("animalChoice").value;

		let capybaraText = document.getElementById("capybara");
		capybaraText.setAttribute("class", "hidden")
		let blobfishText = document.getElementById("dolphin");
		blobfishText.setAttribute("class", "hidden")
		let dolphinText = document.getElementById("dolphin");
		dolphinText.setAttribute("class", "hidden")
		let noMatchText = document.getElementById("noResult");
		noMatchText.setAttribute("class", "hidden")

		console.log(document.querySelector(h1))

		if (animalInput === "capybara") {
			capybaraText.removeAttribute("class");
		}  else if (animalInput === "blobfish") {
			blobfishText.removeAttribute("class");
		}  else if (animalInput === "dolphin") {
			dolphinText.removeAttribute("class");
		}  else {  
			document.getElementById("noResult").removeAttribute("class");
		}
	
		event.preventDefault();

	})
}