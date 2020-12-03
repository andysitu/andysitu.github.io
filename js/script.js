"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.onload = function () {
	console.log("HI");
	var links = document.getElementById("links");

	links.addEventListener("click", function (e) {
		e.preventDefault();
		if (e.target.id in picMap) {
			var key = e.target.id,
			    divcontain = document.getElementById("show-content-container");
			divcontain.style.backgroundImage = 'url(images/' + picMap[key] + ')';
		}
	});

	// links.addEventListener("mouseout", function(e) {
	// 	var divcontain = document.getElementById("img-container");
	// 		divcontain.style.backgroundImage = '';
	// });

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
	};
};

var LinksMenu = function (_React$Component) {
	_inherits(LinksMenu, _React$Component);

	function LinksMenu(props) {
		_classCallCheck(this, LinksMenu);

		return _possibleConstructorReturn(this, (LinksMenu.__proto__ || Object.getPrototypeOf(LinksMenu)).call(this, props));
	}

	_createClass(LinksMenu, [{
		key: "render",
		value: function render() {
			return React.createElement("div", null);
		}
	}]);

	return LinksMenu;
}(React.Component);

var App = function (_React$Component2) {
	_inherits(App, _React$Component2);

	function App(props) {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(LinksMenu, null)
			);
		}
	}]);

	return App;
}(React.Component);

function loadReact() {
	ReactDOM.render(React.createElement(App, null), document.getElementById("apps-container"));
}

loadReact();