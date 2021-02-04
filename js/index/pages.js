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
        { id: "show-content-container", style: this.props.menu_style },
        React.createElement(ImgCarousel, { ref: this.img_carousel, slides: [] }),
        React.createElement(TextContent, { ref: this.text_content, text: [] })
      );
    }
  }]);

  return AppPage;
}(React.Component);

var page_content = {
  queue_to_do_a: {
    linkText: "Queue To Do",
    slides: [],
    text: [{ heading: "Queue To Do",
      body: ["Desktop app with Eletron, React, & Redux."]
    }, { heading: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/queue-to-do", target: "_blank" },
        "GitHub Repository URL"
      )] }]
  },
  html_webpages_a: {
    linkText: "HTML Webpages",
    slides: [{ img_src: "images/html_webpages_a/webpages_a.png" }, { img_src: "images/html_webpages_a/recursively_hidden_notes_a.png" }, { img_src: "images/html_webpages_a/menubar_a.png" }, { img_src: "images/html_webpages_a/rug_a.png" }, { img_src: "images/html_webpages_a/accordion_a.png" }, { img_src: "images/html_webpages_a/accordion_b.png" }],
    text: [{ heading: "HTML Webpages",
      body: ["Create webpages via HTML, CSS, and JS."]
    }, { heading: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/html_webpages", target: "_blank" },
        "GitHub Repository URL"
      ), React.createElement(
        "a",
        { href: "http://rarafon.github.io/html_webpages", target: "_blank" },
        "Index Page with links"
      )] }]
  },
  wmsserver_a: {
    linkText: "WMS Server",
    // slides: [{img_src: "images/webpage_a_1.png",}, ],
    text: [{ heading: "WMS Server",
      body: ["This is my attempt at a warehouse management system for a client. Initially, \n          I attempted to use the Google App Engine with Spring Boot, but it proved \n          difficult as I was running into errors on Google Cloud when running the app \n          engine but I was fine when I was running locally or manually on Google Cloud \n          using the ./mvnw spring-boot:run option there. Eventually I decided to use \n          Google Compute Engine instead, and I believe that this is the correct \n          choice.", "It's cheaper for one which is quite important and development is pretty \n          straightforward as VM servers are much easier to run. The benefits of \n          App Engine also lies in the ability to run multiple instances on demand, \n          but the demand of a WMS is pretty static meaning that there is a definite \n          maximum and minimum amount of users.", "It was a similar situation with Firestore or Firebase as well. Now I've \n          reverted back to MongoDB where the database server is running alongside \n          the web server. What this means is that development now revolves around \n          Java and JavaScript for the backend and frontend.", "After some research, I have also decided to use MySQL rather than MongoDb.\n          "]
    }, { heading: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/wms_server", target: "_blank" },
        "GitHub Repository URL"
      )] }]
  },
  webpage_a: {
    linkText: "This Webpage",
    slides: [{ img_src: "images/webpage_a_1.png" }],
    text: [{ heading: "This Webpage",
      body: ["I used React JS to everything. The content seen here is saved in an object\n          that is then read by JavaScript with React classes for the links on the \n          left hand side and for the image carousel and the text on the right hand side.", "These three elements also persist throughout the different 'pages' that are\n          loaded when you click on the links. Initially, I thought that I could generate\n          new elements each time and not have to rely on this, but I found out the \n          hard way that I could not. I would have to change the state variables, and it\n          turned out to be much simpler this way."]
    }, { heading: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/rarafon.github.io", target: "_blank" },
        "GitHub Repository URL"
      )] }]
  },
  proj_a: {
    linkText: "Managing Projects",
    slides: [{ img_src: "images/proj_a/proj_a_1.png" }, { img_src: "images/proj_a/proj_a_1.png" }, { img_src: "images/proj_a/proj_a_1.png" }],
    text: [{ heading: "Managing Projects",
      body: ["An application that will manage projects. It runs on Express, and it uses React\n          to generate elements and jQuery to make the API calls to the server. It is still\n          a work very much in progress. Hopefully when completed it will be able to\n          track the materials, costs, and other details.", "Unlike the approach that I took with daily tally, I have opted to go with having\n          a more indepdent module configuration where each element will manage its own data\n          and there won't be a higher class that manages everything. This is because\n          I want to reuse many of the elements for the other pages, and because I want to\n          minimized the amount of methods. Hopefully, it will be a better approach. It will\n          be more difficult to manage in the long run because the api calls could be\n          coming from anywhere which means tha I need to standardized the logic.", "At the moment, using React, I have to an event handler for each change to\n          the inputs due to how React works, and this amount can only increase. I decided\n          to use React because it would be able to manage the API calls and changes to the\n          forms from these calls, but it does have initial overhead that's taking lots of\n          time."]
    }, { heading: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/dandahle/Catalyst-AppVetting/tree/project-manager", target: "_blank" },
        "GitHub Branch Repository URL"
      )] }]
  },
  daily_a: {
    linkText: "Daily Tally",
    slides: [{ img_src: "images/daily_a/daily_a_1.png" }, { img_src: "images/daily_a/daily_a_2.png" }, { img_src: "images/daily_a/daily_a_3.png" }],
    text: [{ heading: "Daily Tally",
      body: ["A web application using Java with Spring Boot and MongoDB for the backend and\n          JavaScript, React JS, Bootstrap, and Chart JS for the frontend. It can track different\n          types of data such as time and float values and it's a calendar that tracks\n          and tallies daily stuff."]
    }, { heading: "What I learned",
      body: ["It was my first time using React, and I was also further learning about Spring\n          Boot. This is progress as since the beginnings of my learning to code I would always\n          read a lot before any attempts to code. I think I read like 4 books on JavaScript and \n          did a bunch of tutorials, and I read 3 books on Java (Java: Complete Reference and \n          Java: A Beginner's Guide) and wrote nothing really years ago. Here, I tackkled\n          two things unfamiliar to me. It's uncomfortable when there are unknown variables\n          and having to wade in monolithic libraries.", "It's also a reason why I frequently choose to use Plain JS over jQuery or\n          any of the other JavaScript libraries since I felt that I would be learning\n          how to use the libraries rather than the language itself.", "My intention was to use Java more than anything, but once again like all my\n          other attempts, it took a backseat to JavaScript. Spring Boot served as a\n          web and database server, and the data and HTML elements were served entirely\n          by JavaScript.", "I did learn about React though. It's amazing. Previously, I would spend a lot\n          of time writing and rewriting my own libraries to generate HTML elements via JS\n          and then libraries to handle the API calls to the servers and then to change\n          the data on the frontend depending on these calls, but now the entirety of the\n          element generation and changes is handled by React.", "I also learned a lot by workin with the code and extrapolating from there. For\n          example, I found out that React handles the rendering of the class elements\n          and knows its state. I tried to manually create a new modal menu each time\n          to edit the properties, but React knew that menu was already there so it didn't\n          change anything. I tested this setting a state variable to a random float\n          to see if it would persist even after subsequent calls to create a new\n          element, and it did.", "The method setState also works asynchronously so there is a slight delay in \n          state being changed. The state variables in render also didn't work properly\n          for me if it's an inner object property such as state.data.hours. It wouldn't\n          refresh the menu unless I set it explicitly to state.hours and then had an\n          onChange handler so that the input element would update with any changes\n          made by the user."]
    }, { heading: "Top to Down Approach",
      body: ["I went with a top down and then back up approach meaning then there was an\n          TaskTable class then contained the element classes suchas the menus and then\n          tables and task rows. Any changes that were made depends on the data\n          held by the higher classes, which would be TaskTable. This means that if \n          the data is changed by the user, it would first have to go from the lower\n          elements in an event such as the click event and then propagate up to the TaskTable\n          who then called on the menu class to reveal itself. When this is submitted,\n          the TaskTable would use JS to make the ajax call to the server and then upon\n          success would call back up all the handlers of the lower elements that were\n          passed down with the click handler.", "As a result, a bottom to top and then back to bottom approach. It makes it\n          easier to know where the calls are coming from since it will always be from the\n          TaskTable, but it means that you have a lot of methods being run with each change.\n          It also means that it's not portable since simple implementations rely on the\n          full stack."]
    }, { heading: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/daily-tally", target: "_blank" },
        "GitHub Branch Repository URL"
      )] }]
  },
  apigcp_a: {
    linkText: "API with Google Cloud",
    // slides: [{img_src: "images/webpage_a_1.png",}, ],
    text: [{ heading: "API with Google Cloud",
      body: ["API development using Express and Google Cloud for a course. It was a new and often\n          frustrating experience because I frequently saw errors using Google Cloud, namely the\n          App Engine, with nondescriptive messsages, and I had to guess whether the error was\n          due to the express code or due to the code that interacted with Google Cloud.", "The Postman code also took a long time as I frequently tried to test for anything that \n          I could think of and frequently wrote too much code. In fact, I frequently ran into an\n          error when too many tests were being run at a given time. Finally, there was the API\n          documentation that we had to do for the REST API.", "It has taught me that the request methods and status codes are very important, \n          and it has given me a new appreciation for REST APIs, where they act as a black box\n          with well defined paramters that allow for other applications to easily use."]
    }, { heading: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/Javascript/tree/master/api_google_cloud", target: "_blank" },
        "GitHub Repository URL"
      )] }]
  },
  care_a: {
    linkText: "Tracking Volunteers",
    slides: [{ img_src: "images/care_a/care_a_1.png" }, { img_src: "images/care_a/care_a_2.png" }, { img_src: "images/care_a/care_a_3.png" }],
    text: [{ heading: "Tracking Volunteers",
      body: ["A volunteer tracking application running on Express and using Mongoose with\n          MongoDB on the local end, using JS and jQuery, and Bootstrap. In production,\n          it's running on AWS. We were in a team with independent responsibilities and\n          this is what I wrote.", "One thing that I need to improve on is the asyncrhonous calls which is how all \n          the data is  loaded; there might be delays in some calls in unexpected ways \n          that I didn't take into account."]
    }, { heading: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/dandahle/Catalyst-AppVetting/tree/care-network", target: "_blank" },
        "GitHub Branch Repository URL"
      )] }]
  },
  algo_probs_a: {
    linkText: "Programming Problems",
    // slides: [{img_src: "images/ant_aim_a.png",}, ],
    text: [{ heading: "Programming Problems",
      body: ["Programming and algorithm problems that I have done. It's fun when it works\n          and when everything makes sense, but it's quite the challenge when it doesn't."]
    }, { heading: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/algo-problems", target: "_blank" },
        "GitHub Repository URL"
      )] }]
  },
  in_ex_mang: {
    linkText: "Income Expense Manager",
    slides: [{ img_src: "images/in_ex_manger_a.gif" }],
    text: [{ heading: "Income Expense Manager",
      body: ["Income and expense manging application that used Plain JS, Express.js, Bootstrap,\n          and MariaDB for the MySQL database. The entire rendering of the elements\n          used JS because this is how I normally liked to do it. It caused some headache\n          as time went on, not because it was the wrong approach or because I did anything\n          wrong, but it required more time to create the elements via JS, and I had to keep\n          track of the asynchronous calls.", "At the time I thought that what I made looked silly as with most things that I do,\n          but after looking at Elaine's GIF (that I stole and placed here), it actually looks\n          very cool and I could see a full application being made from this.", "It also taught me that everyone can contribute and that the most important\n          thing is to put in the work."]
    }, { heading: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/kimela1/Income-Expense-Manager", target: "_blank" },
        "GitHub Repository URL"
      )] }]
  },
  daily_mark_a: {
    linkText: "Daily Marker",
    slides: [{ img_src: "images/daily_mark_a_1.png" }],
    text: [{ heading: "Daily Marker",
      body: ["My third attempt at a daily tally application. The previous one I used\n          Django and Python. This time, I rewrote that program with ASP.NET and C#\n          for the backend while using JavaScript to generate the HTML elements and make\n          the ajax calls to the server on the frontend. I can't recall what database\n          type I used. I think it was SQL Express that came with Visual Studio.", "My initial goal was to use C# to make a desktop application, but throughout\n          my research I questioned why I would spend so much effort to learn how to\n          learn WPF or WinForms when web development basicaly covered all of it in an\n          more familiar format for me."]
    }, { heading: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/DailyMarker", target: "_blank" },
        "GitHub Repository URL"
      )] }]
  },
  enc_dec_a: {
    linkText: "Enc/Decrypting Via Network",
    slides: [{ img_src: "images/enc_dec_a/enc_dec_a_1.png" }, { img_src: "images/enc_dec_a/enc_dec_a_2.png" }],
    text: [{ heading: "C Program Encryping & Decryping",
      body: ["A C program that created a key file that was used to encrypt text files\n          by sending this file over the network to the encryping program and then\n          the encrypted file was sent over the network to the decryping program along\n          with the key file to receive the original text. It sounds simple to me, but\n          when I look at the code, I'm surprised at how much it took.", "If I recall correctly, I noticed that the encrypting and decrypting programs \n          were nearly the same so I made a common helper file that they both used.\n          Then, both files consisted of code passing running that file while passing\n          some variables. It took a lot of time initially as I had to refactor the code\n          since I had already written completely functional but separate programs, but\n          it saved me time in the long run in the debugging phase as I had to only\n          implement changes once without having to double check everything."]
    }]
  },
  shell_a: {
    linkText: "Shell Program",
    slides: [{ img_src: "images/shell_a/shell_a_1.png" }, { img_src: "images/shell_a/shell_a_2.png" }, { img_src: "images/shell_a/shell_a_3.png" }],
    text: [{ heading: "Shell Program",
      body: ["Shell program written in C for the operation systems course. It was fun to write,\n          and I had to extrapolate how things worked by using the terminal in ubuntu. It never\n          occurred to me that everything that we have was created by someone."]
    }]
  },
  ant_cplus_a: {
    linkText: "C++ Ant Game",
    slides: [{ img_src: "images/ant_sim_a.png" }],
    text: [{ heading: "C++ Ant Game",
      body: ["An ant simulation game written in C++ that was for a course. It was supposed\n          to be a team project, but there wasn't any communication until the last weekend\n          so I wrote it over the weekend before that. I wanted more buffer time and I didn't\n          want to risk it. The debugging was fun as I had to think hard about why the programming was behaving \n          certain ways and how to fix it."]
    }, { heading: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/Cplusplus-Ant-Game", target: "_blank" },
        "GitHub Repository URL"
      )] }]
  },
  mysite_a: {
    linkText: "VM server on Digital Ocean",
    // slides: [{img_src: "images/psite/psite_1.png",}, ],
    text: [{ heading: "Running a VM server on Digital Ocean",
      body: ["I finally remember why I made this odd repository as it contains duplicates\n          of files found elsewhere. It was the repository that I pulled onto my local\n          computer and on a VM server on Digital Ocean Droplet running Ubuntuand then \n          connected to Cloudflare with the free plan. "]
    }, { heading: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/mysite", target: "_blank" },
        "GitHub Repository URL"
      )] }]
  },
  psite_a: {
    linkText: "Warehouse Map & Data",
    slides: [{ img_src: "images/psite/psite_1.png" }, { img_src: "images/psite/psite_2.png" }, { img_src: "images/psite/psite_3.png" }, { img_src: "images/psite/psite_4.png" }],
    text: [{ heading: "Warehouse Map & Data",
      body: ["Using Django as the webserver and SQLite as the database server or what's\n          provided by Django. Spent a lot of time on this on my downtime at work. It\n          might not seem like much, but I spent hundreds of hours on this, and I think\n          I rewrote it twice to refactor from what I learned doing it.", "The warehouse map itself was version two. I completely updated it from the\n          first one. It uses Plain JS to draw it on canvas, and it can individually\n          select each warehouse rack or shelf.", "This provided insight into the warehouse for the firs time\n          because the WMS used didn't provide any analysis whatsoever, and it still\n          didn't have any mapping the last I saw it. I extracted exported the data\n          from there via an xlsx file and then imported it here. It was also used\n          to search entire swaths of items at critical times.", "There's also other pages that I didn't take screenshots that parsed scanned\n          documents of pick lists and custom records that were analyzed and then\n          the scans could also be retrieved quickly. Previously, these documents were\n          literally put in piles a few feet high and then were manually searched. All told,\n          this probably saved thousands of man hours."]
    }, { heading: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/p_site", target: "_blank" },
        "GitHub Repository URL"
      )] }]
  },
  ups_fedex_a: {
    linkText: "Convert UPS to FedEx",
    // slides: [{img_src: "images/psite/psite_1.png",}, ],
    text: [{ heading: "Convert UPS to FedEx",
      body: ["At work I was given a problem: figure out if UPS or FedEx was cheaper for us.\n          For whatever reason, headquarters wouldn't give us the actual rates, and I only\n          had the package data from the UPS and FedEx websites that I could export into\n          CSV files. The program divided this data by package weights and zip codes and\n          then compared the values to each other and produce a file with the comparison\n          of these values. It also compared by the type of packages and zip codes that\n          we shipped and then an estimate of what we were to pay with one carrier or\n          the other. The rates weren't flatout better in either direction across the\n          borad.", "It sounds easy enough, but it took a heck of a time as you can see by the \n          commit history and I spent any free time that I had at work and even stayed\n          overtime to work on this. A persistent problem was figuring how to decipher\n          the data from the files and then the corner cases when there minute changes\n          in the files.", "These rates were used to begin the conversation with headquarters as we found\n          out for the first time that FedEx would be cheaper for the type of packages\n          and volume that we did(for us that is. shipping rates for each company \n          depends on the contract that you sign with them which depends heavily on your \n          shipping volume), and eventually the warehouses in the North American region\n          switched the majority of packages to be shipped by FedEx."]
    }, { heading: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/ups_to_fedex", target: "_blank" },
        "GitHub Repository URL"
      )] }]
  },
  w_space_a: {
    linkText: "Calculate Warehouse Space",
    // slides: [{img_src: "images/psite/psite_1.png",}, ],
    text: [{ heading: "Calculate Warehouse Space",
      body: ["A basic python program that tried to figure out the cost that you were \n          actually paying per warehouse rack and shelf. This was further broken\n          down in pallets and packages because the shelves and racks have levels\n          to them. The general purpose of a warehouse is that you have cheaper\n          land and labor so that you drive the costs low by having more volume.\n          This data was used for all future negotiations as it provided an estimate\n          for the first time of how much each pallet actually costs us."]
    }, { heading: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/warehouse_space", target: "_blank" },
        "GitHub Repository URL"
      )] }]
  },
  calendar_a: {
    linkText: "Calendar Template Using Plain JS",
    slides: [{ img_src: "images/cal_a_1.png" }],
    text: [{ heading: "Calendar",
      body: ["A calendar using JavaScript, HTML, and CSS. I wanted to make an calendar\n            application, but stopped midway. I beleive at the time, I either had to\n            store the data into local storage or I had to create a web server with a\n            database server to store the data. I probably chose the latter and never\n            got to completing this."]
    }, { heading: "Links",
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
  checklists_a: {
    linkText: "Daily Checklists",
    slides: [{ img_src: "images/checklists_a/checklists_a_1.png" }, { img_src: "images/checklists_a/checklists_a_2.png" }],
    text: [{ heading: "Daily Checklists",
      body: ["My first attempt at a daily checklists. It uses JavaScript to make basic\n          HTMl elements and then you can click on the cells to make that day. It's\n          also supposed to save the data in local storage on the browser, but it's not\n          working at the moment. It was before."]
    }, { heading: "Links",
      body: [React.createElement(
        "a",
        { href: "https://github.com/rarafon/checklists", target: "_blank" },
        "GitHub Repository URL"
      ), React.createElement(
        "a",
        { href: "https://rarafon.github.io/checklists/", target: "_blank" },
        "GitHub Pages URL"
      )] }]
  },
  sim_a: {
    linkText: "Virus Cities",
    slides: [{ img_src: "images/virus_city_a.png" }],
    text: [{ heading: "Virus Cities",
      body: ["I wanted to make a simulation where you would build a city and then try \n            thwart off a dangerous virus. I only got to a basic rendition of everything \n            using Plain JS, HTML, and CSS."]
    }, { heading: "Links",
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
    text: [{ heading: "Loan Calculator",
      body: ["A loan calculator written in JavaScript, using canvas to draw the chart\n          and JS to get the data from the inputs and then create the table.", "It was written very early on, and I had to spend a lot of effort\n          in coming up with a way to draw the chart correctly. I rewrote the\n          entire thing from to what I learned."]
    }, { heading: "Links",
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
    text: [{ heading: "Traveling in 2D",
      body: ["A 2D world with JavaScript and HTML canvas. The newest version isn't working\n          unfortunately, but the older versions are working. I don't recall what\n          I was trying to do in the new updates or why it broke.", "The word data is stored in a 2D array, and then this data is pasrsed\n          and drawn onto canvas. The player had hp and items, and there are monsters."]
    }, { heading: "Links",
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
    text: [{ heading: "Pong",
      body: ["A bouncing ball game that doesn't have a losing condition as the ball bounces\n          against everything. I believe the ball \"bounces\" by changing its velocity in terms\n          of x and y."]
    }, { heading: "Links",
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
    linkText: "Moving an image with JS",
    slides: [{ img_src: "images/movimg_a.png" }],
    text: [{ heading: "Moving Image",
      body: ["A moving image using the arrow keys on the keyboard, and the image being imposed\n          using HTML and JavaSCript. It can move out of screen. After this, I decided to\n          use canvas to draw elements instead of changing the properties of html elements."]
    }, { heading: "Links",
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
    text: [{ heading: "Bricks Falling Down",
      body: ["A nifty little simulation of bricks falling down. At the time, I was learning\n          and experimenting with JavaScript, and I had this idea. It's rendering the\n          'bricks' by coloring the cells in a td element in a table, and it's falling\n          down that way. You create the bricks by clicking on a the page where you want\n          the bricks to fall.", "At the time, I thought that it was very cool, just as I do now, and I was\n          very excited when it worked."]
    }, { heading: "Links",
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
    text: [{ heading: "Table-form",
      body: ["A simulation of the battle between red and green, depending on whichever\n          turn it is. I was fascinated by simulations at the time. The older version\n          has a point system apparently of what I was going for, where the the bricks\n          would eat each other. The newer version had a gradient from the point  of creation\n          and different degrees of the color intensity.", "It was written with HTML, CSS, and Plain JS with everything drawn on table \n          elements again. "]
    }, { heading: "Links",
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
    text: [{ heading: "Textbox Game",
      body: ["A game where you fight monsters by entering text into the input. It's not\n          complete and the 'menu command isn't even working, but nonetheless it was \n          my first attempt at making a game. I was interested in that because of how\n          difficult it was to have to account for everything and then to figure out\n          a way to create a world, store it, and then render it. Unfortunately, I wasn't\n          very interested in actually playing it so my efforst fell short."]
    }, { heading: "Links",
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
    text: [{ heading: "Making Colors From an Array",
      body: ["A page with JS files that reads the values from an array and then converts\n          it into a color onto the table depending on the value."]
    }, { heading: "Links",
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
    text: [{ heading: "Calendar",
      body: ["A game of Battleship using plain JS and HTMl. I believe\n          the code is from was \"JavaScript for Web Developers.\""]
    }, { heading: "Links",
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
    text: [{ heading: "Calendar",
      body: ["A way to reveal blurred images by moving the mouse onto the image using CSS and\n          plain JS. I believe the code is from \"JavaScript for Web Developers.\""]
    }, { heading: "Links",
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