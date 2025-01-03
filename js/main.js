console.log("meow !!! lol");

const button = document.querySelector(".cat-button");

button.addEventListener("click", 
	function () {
		document.querySelector(".cat-image").src = "https://cataas.com/cat"
	}
);
