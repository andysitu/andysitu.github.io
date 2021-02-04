var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinksMenu = function (_React$Component) {
	_inherits(LinksMenu, _React$Component);

	function LinksMenu(props) {
		_classCallCheck(this, LinksMenu);

		var _this = _possibleConstructorReturn(this, (LinksMenu.__proto__ || Object.getPrototypeOf(LinksMenu)).call(this, props));

		var links = [];
		var keys = Object.keys(page_content);
		for (var i = 0; i < keys.length; i++) {
			links.push({ linkText: page_content[keys[i]].linkText, type_ref: keys[i] });
		}
		console.log(links);
		_this.state = {
			links: links
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
					"h1",
					null,
					"Record",
					React.createElement(
						"a",
						{ href: "#", "data-toggle": "tooltip", "data-placement": "bottom",
							title: "This is a record and reminder of what I have done and of how fun it is to make things." },
						"[#?]"
					)
				),
				React.createElement(
					"ul",
					{ id: "links" },
					this.state.links.map(function (linkArray) {
						return React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#", type_ref: linkArray.type_ref,
									onClick: _this2.props.show_page },
								React.createElement(
									"div",
									{ type_ref: linkArray.type_ref },
									linkArray.linkText
								)
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
			e.preventDefault();
			_this3.app_page.current.show_page(e.target.getAttribute("type_ref"));
		};

		_this3.linksmenu = React.createRef();
		_this3.app_page = React.createRef();
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
				{ id: "content-container" },
				React.createElement(LinksMenu, { menu_style: menu_style, ref: this.linksmenu, show_page: this.show_page }),
				React.createElement(AppPage, { menu_style: menu_style, ref: this.app_page })
			);
		}
	}]);

	return App;
}(React.Component);

function loadReact() {
	ReactDOM.render(React.createElement(App, { ref: this.app_page }), document.getElementById("content-wrapper"));
}

loadReact();