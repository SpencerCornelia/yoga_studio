window.onload = initPage;

var welcomePaneShowing = true;

function initPage() {
	var tabs = document.getElementById("tabs").getElementsByTagName("a");

	for (var i = 0; i < tabs.length; i++) {
		var currentTab = tabs[i];
		currentTab.onmouseover = showHint;
		currentTab.onmouseout = hideHint;
		currentTab.onclick = showTab;
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

		var tabs = document.getElementById("tabs").getElementsByTagName("a");
		for (var i = 0; i < tabs.length; i++) {
			var currentTab = tabs[i];
			if (currentTab.title == selectedTab) {
				currentTab.className = "active";
			} else {
				currentTab.className = "inactive";
			}
		}
	}
}