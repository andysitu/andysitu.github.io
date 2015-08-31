window.onload = function() {
	var links = document.getElementById("links");

	links.addEventListener("mouseover", function(e) {
		if (e.target.id in linkMap) {
			var divcontain = document.getElementById("img-container");
			divcontain.style.backgroundImage = 'url(images/test.png)'
		}
	});

	links.addEventListener("mouseout", function(e) {
		console.log(e.target);
	});

	var linkMap = {
		loancal_a: true,
		ping_a: true,
		movimg_a: true,
		bricksf_a: true,
		tabf_b: true,
		tabf_a: true,
		twod_c: true,
		twod_b: true,
		twod_a: true,
		text_a: true,
		arrr: true,
		blur: true,
		bs: true
	}
};