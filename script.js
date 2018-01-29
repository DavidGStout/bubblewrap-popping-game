var balloon0 = document.getElementById('balloon0');

var balloon1 = document.getElementById('balloon1');

var balloon2 = document.getElementById('balloon2');

var done = document.getElementById('no-balloons');

function balloonPopper(balloonVariable) {

	balloonVariable.addEventListener("mouseover", popaballoon);

	function popaballoon() {
		if (balloonVariable.style.background === "none") {
			balloonVariable.innerText = "";
		} else {
			balloonVariable.innerText = "Pop!";
			balloonVariable.style.background = "none";
		}
	}

	balloonVariable.addEventListener("mouseout", popIsOver, false);

	function popIsOver() {
		balloonVariable.innerText = "";
	}
}

balloonPopper(balloon0);
balloonPopper(balloon1);
balloonPopper(balloon2);

document.addEventListener("mouseover", noBalloons, false);
function noBalloons () {
	if (balloon0.style.background === "none" && balloon1.style.background === "none" && balloon1.style.background === "none") {
		yay.style.display = "block";
		window.scrollTo(0, 0);
	}
}