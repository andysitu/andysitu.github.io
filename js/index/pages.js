var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppPage = function (_React$Component) {
  _inherits(AppPage, _React$Component);

  function AppPage(props) {
    _classCallCheck(this, AppPage);

    var _this = _possibleConstructorReturn(this, (AppPage.__proto__ || Object.getPrototypeOf(AppPage)).call(this, props));

    _this.state = {
      slides: [],
      text: []
    };
    _this.img_carousel = React.createRef();
    _this.text_content = React.createRef();
    return _this;
  }

  _createClass(AppPage, [{
    key: "show_page",
    value: function show_page(type) {
      if (type in page_content) {
        this.img_carousel.current.change_slides(page_content[type].slides);
        this.text_content.current.change_text(page_content[type].text);

        // There is a delay in adding the elements onto the page
        setTimeout(function () {
          $(".carousel-item").first().addClass("active");
          $('.carousel-indicators > li').first().addClass('active');
        }, 100);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "show-content-container", className: "col-lg-8", style: this.props.menu_style },
        React.createElement(ImgCarousel, { ref: this.img_carousel, slides: [] }),
        React.createElement(TextContent, { ref: this.text_content, text: [] })
      );
    }
  }]);

  return AppPage;
}(React.Component);

var page_content = {
  calendar_a: {
    linkText: "Calendar Template Using Plain JS",
    slides: [{ img_src: "images/cal_a_1.png" }],
    text: [{ title: "Calendar",
      body: ["A calendar using JavaScript, HTML, and CSS. I wanted to make an calendar\n            application, but stopped midway. I beleive at the time, I either had to\n            store the data into local storage or I had to create a web server with a\n            database server to store the data. I probably chose the latter and never\n            got to completing this."]
    }, { title: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/calendar_test", target: "_blank" },
        "GitHub Repository URL"
      ), React.createElement(
        "a",
        { href: "https://rarafon.github.io/calendar_test/", target: "_blank" },
        "GitHub Pages URL"
      )] }]
  },
  sim_a: {
    linkText: "Very incomplete simulation",
    slides: [{ img_src: "images/virus_city_a.png" }],
    text: [{ title: "Virus Cities",
      body: ["I wanted to make a simulation where you would build a city and then try \n            thwart off a dangerous virus. I only got to a basic rendition of everything \n            using Plain JS, HTML, and CSS."]
    }, { title: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/virus-cities/", target: "_blank" },
        "GitHub Repository URL"
      ), React.createElement(
        "a",
        { href: "https://rarafon.github.io/virus-cities/", target: "_blank" },
        "GitHub Pages URL"
      )] }]
  },
  loancal_a: {
    linkText: "Loan data Calculation",
    slides: [{ img_src: "images/loancal_a.png" }, { img_src: "images/loancal_b.png" }],
    text: [{ title: "Loan Calculator",
      body: ["A loan calculator written in JavaScript, using canvas to draw the chart\n          and JS to get the data from the inputs and then create the table.", "It was written very early on, and I had to spend a lot of effort\n          in coming up with a way to draw the chart correctly. I rewrote the\n          entire thing from to what I learned."]
    }, { title: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/loan-calculating", target: "_blank" },
        "GitHub Repository URL"
      ), React.createElement(
        "a",
        { href: "https://rarafon.github.io/loan-calculating/", target: "_blank" },
        "GitHub Pages URL"
      ), React.createElement(
        "a",
        { href: "https://rarafon.github.io/loan-calculating/oldver/v1/", target: "_blank" },
        "GitHub Pages URL (Old Version)"
      )] }]
  },
  twod_c: {
    linkText: "A Game in 2D",
    slides: [{ img_src: "images/twod_a.png" }, { img_src: "images/twod_b.png" }],
    text: [{ title: "Traveling in 2D",
      body: ["A 2D world with JavaScript and HTML canvas. The newest version isn't working\n          unfortunately, but the older versions are working. I don't recall what\n          I was trying to do in the new updates or why it broke.", "The word data is stored in a 2D array, and then this data is pasrsed\n          and drawn onto canvas. The player had hp and items, and there are monsters."]
    }, { title: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/2dworld", target: "_blank" },
        "GitHub Repository URL"
      ), React.createElement(
        "a",
        { href: "https://rarafon.github.io/2dworld/versions/v1-5/", target: "_blank" },
        "Old Version with moving screen"
      ), React.createElement(
        "a",
        { href: "https://rarafon.github.io/2dworld/versions/v1/", target: "_blank" },
        "Old Version with static screen"
      ), React.createElement(
        "a",
        { href: "https://rarafon.github.io/2dworld/", target: "_blank" },
        "GitHub Pages URL (Non-Working)"
      )] }]
  },
  ping_a: {
    linkText: "Pong with HTML Canvas",
    slides: [{ img_src: "images/ping_a.png" }],
    text: [{ title: "Pong",
      body: ["A bouncing ball game that doesn't have a losing condition as the ball bounces\n          against everything. I believe the ball \"bounces\" by changing its velocity in terms\n          of x and y."]
    }, { title: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/ping-canva/", target: "_blank" },
        "GitHub Repository URL"
      ), React.createElement(
        "a",
        { href: "https://rarafon.github.io/ping-canvas/", target: "_blank" },
        "GitHub Pages URL"
      )] }]
  },
  movimg_a: {
    linkText: "Moving an image with JS (diagonal scrolling)",
    slides: [{ img_src: "images/movimg_a.png" }],
    text: [{ title: "Moving Image",
      body: ["A moving image using the arrow keys on the keyboard, and the image being imposed\n          using HTML and JavaSCript. It can move out of screen. After this, I decided to\n          use canvas to draw elements instead of changing the properties of html elements."]
    }, { title: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/moving-img", target: "_blank" },
        "GitHub Repository URL"
      ), React.createElement(
        "a",
        { href: "https://rarafon.github.io/moving-img/", target: "_blank" },
        "GitHub Pages URL"
      )] }]
  },
  bricksf_a: {
    linkText: "Bricks Falling Down",
    slides: [{ img_src: "images/bricksf_a.png" }],
    text: [{ title: "Bricks Falling Down",
      body: ["A nifty little simulation of bricks falling down. At the time, I was learning\n          and experimenting with JavaScript, and I had this idea. It's rendering the\n          'bricks' by coloring the cells in a td element in a table, and it's falling\n          down that way. You create the bricks by clicking on a the page where you want\n          the bricks to fall.", "At the time, I thought that it was very cool, just as I do now, and I was\n          very excited when it worked."]
    }, { title: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/bricks-falling", target: "_blank" },
        "GitHub Repository URL"
      ), React.createElement(
        "a",
        { href: "https://rarafon.github.io/bricks-falling/", target: "_blank" },
        "GitHub Pages URL"
      )] }]
  },
  tabf_b: {
    linkText: "Table-form",
    slides: [{ img_src: "images/tabf_b.png" }, { img_src: "images/tabf_a.png" }],
    text: [{ title: "Table-form",
      body: ["A simulation of the battle between red and green, depending on whichever\n          turn it is. I was fascinated by simulations at the time. The older version\n          has a point system apparently of what I was going for, where the the bricks\n          would eat each other. The newer version had a gradient from the point  of creation\n          and different degrees of the color intensity.", "It was written with HTML, CSS, and Plain JS with everything drawn on table \n          elements again. "]
    }, { title: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/table-form", target: "_blank" },
        "GitHub Repository URL"
      ), React.createElement(
        "a",
        { href: "https://rarafon.github.io/table-form/", target: "_blank" },
        "GitHub Pages URL"
      ), React.createElement(
        "a",
        { href: "https://rarafon.github.io/table-form/versions/v1/", target: "_blank" },
        "GitHub Pages URL (Old Version)"
      )] }]
  },
  text_a: {
    linkText: "Textbox Game",
    slides: [{ img_src: "images/text_a.png" }],
    text: [{ title: "Textbox Game",
      body: ["A game where you fight monsters by entering text into the input. It's not\n          complete and the 'menu command isn't even working, but nonetheless it was \n          my first attempt at making a game. I was interested in that because of how\n          difficult it was to have to account for everything and then to figure out\n          a way to create a world, store it, and then render it. Unfortunately, I wasn't\n          very interested in actually playing it so my efforst fell short."]
    }, { title: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/textBox", target: "_blank" },
        "GitHub Repository URL"
      ), React.createElement(
        "a",
        { href: "https://rarafon.github.io/textBox/", target: "_blank" },
        "GitHub Pages URL"
      )] }]
  },
  arrr_a: {
    linkText: "Reading from an Array",
    slides: [{ img_src: "images/arrr.png" }],
    text: [{ title: "Making Colors From an Array",
      body: ["A page with JS files that reads the values from an array and then converts\n          it into a color onto the table depending on the value."]
    }, { title: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/Javascript", target: "_blank" },
        "GitHub Repository URL"
      ), React.createElement(
        "a",
        { href: "pages/array_reading/array_reading.html", target: "_blank" },
        "GitHub Pages URL"
      )] }]
  },
  bship_a: {
    linkText: "Battleship",
    slides: [{ img_src: "images/bs.png" }],
    text: [{ title: "Calendar",
      body: ["A game of Battleship using plain JS and HTMl. I believe\n          the code is from was \"JavaScript for Web Developers.\""]
    }, { title: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/Javascript/tree/master/Battleship", target: "_blank" },
        "GitHub Repository URL"
      ), React.createElement(
        "a",
        { href: "pages/battleship/battleship.html", target: "_blank" },
        "GitHub Pages URL"
      )] }]
  },
  blur_a: {
    linkText: "Blur",
    slides: [{ img_src: "images/blur_a.png" }, { img_src: "images/blur_b.png" }],
    text: [{ title: "Calendar",
      body: ["A way to reveal blurred images by moving the mouse onto the image using CSS and\n          plain JS. I believe the code is from \"JavaScript for Web Developers.\""]
    }, { title: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/Javascript/tree/master/BlurringImages", target: "_blank" },
        "GitHub Repository URL"
      ), React.createElement(
        "a",
        { href: "pages/blurring_images/bluronmouse.html", target: "_blank" },
        "GitHub Pages URL"
      )] }]
  }
};