window.onload = initpage;

function initPage() {
	var images = document.getElementById("schedulePane").getElementsByTagName("img");

	for (var i = 0; i < images.length; i++) {
		var currentImage = images[i];
		currentImage.onmouseover = showHint;
		currentImage.onmouseout = hideHint;
		if (currentImage.className == "tab") {
			currentImage.onclick = showTab;
		}
	}

	function showHint() {

	}

	function hideHint() {

	}

	function showTab() {

	}
}