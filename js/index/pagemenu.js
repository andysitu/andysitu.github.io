var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageMenu = function (_React$Component) {
  _inherits(PageMenu, _React$Component);

  function PageMenu(props) {
    _classCallCheck(this, PageMenu);

    var _this = _possibleConstructorReturn(this, (PageMenu.__proto__ || Object.getPrototypeOf(PageMenu)).call(this, props));

    _this.create_content = function () {
      console.log(_this.state.type);
      if (_this.state.type in page_content) {
        return React.createElement(AppPage, {
          slides: page_content[_this.state.type].slides,
          text: page_content[_this.state.type].text
        });
      } else {
        return React.createElement(
          "div",
          null,
          _this.state.type
        );
      }
    };

    _this.state = {
      type: "",
      slides: [],
      body: []
    };
    return _this;
  }

  _createClass(PageMenu, [{
    key: "show_page",
    value: function show_page(type) {
      this.setState({ type: type });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "show-content-container", className: "col-lg-8", style: this.props.menu_style },
        this.create_content()
      );
    }
  }]);

  return PageMenu;
}(React.Component);