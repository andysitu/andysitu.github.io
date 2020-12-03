var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.onload = function () {
	var links = document.getElementById("links");

	links.addEventListener("click", function (e) {
		e.preventDefault();
		if (e.target.id in picMap) {
			var key = e.target.id,
			    divcontain = document.getElementById("show-content-container");
			divcontain.style.backgroundImage = 'url(images/' + picMap[key] + ')';
		}
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
	};
};

var LinksMenu = function (_React$Component) {
	_inherits(LinksMenu, _React$Component);

	function LinksMenu(props) {
		_classCallCheck(this, LinksMenu);

		var _this = _possibleConstructorReturn(this, (LinksMenu.__proto__ || Object.getPrototypeOf(LinksMenu)).call(this, props));

		_this.state = {
			links: [{ type_ref: "calendar_a", text: "Calendar Template Using Plain JS" }, { type_ref: "sim_a", text: "Very incomplete simulation" }, { type_ref: "loancal_a", text: "Loan data Calculation" }, { type_ref: "twod_c", text: "Traveling in 2D - Incomplete" }, { type_ref: "ping_a", text: "Pong with HTML Canvas (Incomplete)" }, { type_ref: "movimg_a", text: "Moving an image with JS (diagonal scrolling)" }, { type_ref: "bricksf_a", text: "Bricks Falling Down" }, { type_ref: "tabf_b", text: "Table-form" }, { type_ref: "text_a", text: "Textbox Game" }, { type_ref: "arrr_a", text: "Reading from an Array" }, { type_ref: "bship_a", text: "Battleship" }, { type_ref: "blur_a", text: "Blur" }]
		};
		return _this;
	}

	_createClass(LinksMenu, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return React.createElement(
				"div",
				{ id: "links-container", className: "col-lg-4", style: this.props.menu_style },
				React.createElement(
					"ul",
					{ id: "links" },
					this.state.links.map(function (linkArray) {
						return React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#", type_ref: linkArray.type_ref, onClick: _this2.props.show_page },
								linkArray.text
							)
						);
					})
				)
			);
		}
	}]);

	return LinksMenu;
}(React.Component);

var App = function (_React$Component2) {
	_inherits(App, _React$Component2);

	function App(props) {
		_classCallCheck(this, App);

		var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this3.show_page = function (e) {
			_this3.pagemenu.current.show_page(e.target.getAttribute("type_ref"));
		};

		_this3.linksmenu = React.createRef();
		_this3.pagemenu = React.createRef();
		return _this3;
	}

	_createClass(App, [{
		key: "calculate_page_height",
		value: function calculate_page_height() {
			return window.innerHeight - document.getElementById("top-nav-bar").offsetHeight;
		}
	}, {
		key: "render",
		value: function render() {
			var menu_style = { height: this.calculate_page_height() };
			return React.createElement(
				"div",
				{ className: "row" },
				React.createElement(LinksMenu, { menu_style: menu_style, ref: this.linksmenu, show_page: this.show_page }),
				React.createElement(PageMenu, { menu_style: menu_style, ref: this.pagemenu })
			);
		}
	}]);

	return App;
}(React.Component);

function loadReact() {
	ReactDOM.render(React.createElement(App, null), document.getElementById("apps-container"));
}

loadReact();