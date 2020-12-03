var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Orbit = function (_React$Component) {
  _inherits(Orbit, _React$Component);

  function Orbit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Orbit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Orbit.__proto__ || Object.getPrototypeOf(Orbit)).call.apply(_ref, [this].concat(args))), _this), _this.create_sides = function () {
      var div_class = "";
      return _this.props.slides.map(function (slide, index) {
        div_class = index == 0 ? "carousel-item active" : "carousel-item";
        return React.createElement(
          "div",
          { className: div_class },
          React.createElement("img", { className: "w-100 d-block", src: slide.img_src })
        );
      });
    }, _this.create_indicators = function () {
      return _this.props.slides.map(function (slide, index) {
        if (index == 0) return React.createElement("li", { "data-target": "#page-carousel", "data-slide-to": String(index), className: "active" });else return React.createElement("li", { "data-target": "#page-carousel", "data-slide-to": String(index) });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Orbit, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "carousel slide", "data-ride": "carousel", id: "page-carousel" },
        React.createElement(
          "ol",
          { className: "carousel-indicators" },
          this.create_indicators()
        ),
        React.createElement(
          "div",
          { className: "carousel-inner" },
          this.create_sides()
        ),
        React.createElement(
          "a",
          { "class": "carousel-control-prev", href: "#page-carousel", role: "button", "data-slide": "prev" },
          React.createElement("span", { "class": "carousel-control-prev-icon", "aria-hidden": "true" }),
          React.createElement(
            "span",
            { "class": "sr-only" },
            "Previous"
          )
        ),
        React.createElement(
          "a",
          { "class": "carousel-control-next", href: "#page-carousel", role: "button", "data-slide": "next" },
          React.createElement("span", { "class": "carousel-control-next-icon", "aria-hidden": "true" }),
          React.createElement(
            "span",
            { "class": "sr-only" },
            "Next"
          )
        )
      );
    }
  }]);

  return Orbit;
}(React.Component);

var Calendar_A = function (_React$Component2) {
  _inherits(Calendar_A, _React$Component2);

  function Calendar_A(props) {
    _classCallCheck(this, Calendar_A);

    var _this2 = _possibleConstructorReturn(this, (Calendar_A.__proto__ || Object.getPrototypeOf(Calendar_A)).call(this, props));

    _this2.state = {
      slides: [{ img_src: "images/cal_a_1.png", caption: "test" }]
    };
    return _this2;
  }

  _createClass(Calendar_A, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Orbit, { slides: this.state.slides })
      );
    }
  }]);

  return Calendar_A;
}(React.Component);