window.onload = initPage;

var welcomePaneShowing = true;

function initPage() {
	var images = document.getElementById("schedulePane").getElementsByTagName("img");

	for (var i = 0; i < images.length; i++) {
		var currentImage = images[i];
		currentImage.onmouseover = showHint;
		currentImage.onmouseout = hideHint;
		currentImage.onclick = showTab;
	}

	function showHint() {
		if (!welcomePaneShowing) {
			return;
		}

		switch (this.title) {
			case "beginners":
				var hintText = "Just getting started? Come join us!";
				break;
			case "intermediate":
				var hintText = "Take your flexibility to the next level!";
				break;
			case "advanced":
				var hintText = "Perfectly join your body and mind with these intensive workouts.";		
				break;
			default:
				var hintText = "Click a tab to display the course schedule for the class";	
		}

		var contentPane = document.getElementById("content");
		contentPane.innerHTML = "<h3>" + hintText + "</h3>";
	}

	function hideHint() {
		if (welcomePaneShowing) {
			var contentPane = document.getElementById("content");
			contentPane.innerHTML = "<h3>Click a tab to display the course schedule for the class</h3>";
		}
	}

	function showTab() {
		var selectedTab = this.title;

		var images = document.getElementById("tabs").getElementsByTagName("img");
		for (var i = 0; i < images.length; i++) {
			var currentImage = images[i];
			if (currentImage.title == selectedTab) {
				currentImage.src = "images/" + currentImage.title + "Top.png";
			} else {
				currentImage.src = "images/" + currentImage.title + "Down.png";
			}
		}
	}
}