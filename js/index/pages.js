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
      var li_class = "";
      return _this.props.slides.map(function (slide, index) {
        li_class = index == 0 ? "is-active orbit-slide" : "orbit-slide";
        return React.createElement(
          "li",
          { className: li_class },
          React.createElement(
            "figure",
            { className: "orbit-figure" },
            React.createElement("img", { className: "orbit-image", src: slide.img_src }),
            React.createElement(
              "figcaption",
              { className: "orbit-caption" },
              slide.caption
            )
          )
        );
      });
    }, _this.create_bullets = function () {
      return _this.props.slides.map(function (slide, index) {
        if (index != 0) {
          return React.createElement(
            "button",
            { "data-slide": index },
            React.createElement("span", { className: "show-for-sr" })
          );
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Orbit, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "orbit", role: "region", "aria-label": "Web Page Pictures", "data-orbit": true },
        React.createElement(
          "div",
          { className: "orbit-wrapper" },
          React.createElement(
            "div",
            { className: "orbit-controls" },
            React.createElement(
              "button",
              { className: "orbit-previous" },
              React.createElement(
                "span",
                { className: "show-for-sr" },
                "Previous Slide"
              ),
              "\u25C0\uFE0E"
            ),
            React.createElement(
              "button",
              { className: "orbit-next" },
              React.createElement(
                "span",
                { className: "show-for-sr" },
                "Next Slide"
              ),
              "\u25B6\uFE0E"
            )
          ),
          React.createElement(
            "ul",
            { className: "orbit-container" },
            this.create_sides()
          )
        ),
        React.createElement(
          "nav",
          { className: "orbit-bullets" },
          React.createElement(
            "button",
            { className: "is-active", "data-slide": "0" },
            React.createElement(
              "span",
              { className: "show-for-sr" },
              "First slide details."
            ),
            React.createElement(
              "span",
              { className: "show-for-sr", "data-slide-active-label": true },
              "Current Slide"
            )
          ),
          this.create_bullets()
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
      slides: [{ img_src: "images/cal_a_1.png", caption: "test" }, { img_src: "images/cal_a_1.png", caption: "test" }]
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