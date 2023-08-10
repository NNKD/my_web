function changePageToHome() {
	setTimeout(() => {
		window.location.href = "./index.html";
	}, 100);
}

function changePageToPortfolio() {
	setTimeout(() => {
		window.location.href = "./portfolio.html";
	}, 100);
}

function changePageToAbout() {
	setTimeout(() => {
		window.location.href = "./about.html";
	}, 100);
}

var menuBar = document.getElementById("menuBar");
var close = document.getElementById("close");
const menu = document.querySelector(".menu");

menuBar.addEventListener("click", function () {
	menuBar.classList.add("hide");
	menu.classList.add("showMenu");
});

close.addEventListener("click", function name(params) {
	menuBar.classList.remove("hide");
	menu.classList.remove("showMenu");
});
