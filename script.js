window.onload = function() {
	var links = document.getElementById("links");

	links.addEventListener("mouseover", function(e) {
		if (e.target.id in picMap) {
			var key = e.target.id,
				divcontain = document.getElementById("img-container");
			divcontain.style.backgroundImage = 'url(images/' + picMap[key] + ')';
		}
	});

	links.addEventListener("mouseout", function(e) {
		var divcontain = document.getElementById("img-container");
			divcontain.style.backgroundImage = '';
	});

	var picMap = {
		twod_c: "",
		twod_b: "twod_b.png",
		twod_a: "twod_a.png",
		loancal_a: "loancal_a.png",
		ping_a: "ping_a.png",
		movimg_a: "movimg_a.png",
		bricksf_a: "bricksf_a.png",
		tabf_b: "tabf_b.png",
		tabf_a: "tabf_a.png",
		text_a: "text_a.png",
		arrr: "arrr.png",
		bs: "bs.png"
	}
};