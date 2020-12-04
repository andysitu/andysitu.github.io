var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImgCarousel = function (_React$Component) {
  _inherits(ImgCarousel, _React$Component);

  function ImgCarousel(props) {
    _classCallCheck(this, ImgCarousel);

    var _this = _possibleConstructorReturn(this, (ImgCarousel.__proto__ || Object.getPrototypeOf(ImgCarousel)).call(this, props));

    _this.create_sides = function () {
      return _this.state.slides.map(function (slide, index) {
        return React.createElement(
          "div",
          { className: "carousel-item" },
          React.createElement("img", { className: "page-carousel-images d-block", src: slide.img_src })
        );
      });
    };

    _this.create_indicators = function () {
      return _this.state.slides.map(function (slide, index) {
        return React.createElement("li", { "data-target": "#page-carousel", "data-slide-to": String(index) });
      });
    };

    _this.state = {
      slides: _this.props.slides
    };
    return _this;
  }

  _createClass(ImgCarousel, [{
    key: "change_slides",
    value: function change_slides(slides) {
      this.setState({
        slides: slides
      });
    }
  }, {
    key: "render",
    value: function render() {
      // don't show carousel if slides doesn't exist
      if (!this.state.slides || this.state.slides.length == 0) {
        return React.createElement("div", null);
      }
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

  return ImgCarousel;
}(React.Component);

var TextContent = function (_React$Component2) {
  _inherits(TextContent, _React$Component2);

  function TextContent(props) {
    _classCallCheck(this, TextContent);

    var _this2 = _possibleConstructorReturn(this, (TextContent.__proto__ || Object.getPrototypeOf(TextContent)).call(this, props));

    _this2.state = {
      text: _this2.props.text
    };
    return _this2;
  }

  _createClass(TextContent, [{
    key: "change_text",
    value: function change_text(text) {
      this.setState({
        text: text
      });
    }
  }, {
    key: "create_text",
    value: function create_text() {
      var title;
      return this.state.text.map(function (textObj) {
        // don't show title if it doesn't exist
        title = textObj.title ? React.createElement(
          "h2",
          null,
          textObj.title
        ) : "";
        return React.createElement(
          "div",
          { className: "textContent-div" },
          title,
          textObj.body.map(function (content) {
            return React.createElement(
              "p",
              null,
              content
            );
          })
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.create_text()
      );
    }
  }]);

  return TextContent;
}(React.Component);