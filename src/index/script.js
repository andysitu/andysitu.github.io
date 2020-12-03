window.onload = function() {
	var links = document.getElementById("links");

	links.addEventListener("click", function(e) {
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
	}
};

class LinksMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			links: [
				{type_ref: "calendar_a", text: "Calendar Template Using Plain JS"},
				{type_ref: "sim_a", text: "Very incomplete simulation"},
				{type_ref: "loancal_a", text: "Loan data Calculation"},
				{type_ref: "twod_c", text: "Traveling in 2D - Incomplete"},
				{type_ref: "ping_a", text: "Pong with HTML Canvas (Incomplete)"},
				{type_ref: "movimg_a", text: "Moving an image with JS (diagonal scrolling)"},
				{type_ref: "bricksf_a", text: "Bricks Falling Down"},
				{type_ref: "tabf_b", text: "Table-form"},
				{type_ref: "text_a", text: "Textbox Game"},
				{type_ref: "arrr_a", text: "Reading from an Array"},
				{type_ref: "bship_a", text: "Battleship"},
				{type_ref: "blur_a", text: "Blur"},
			]
		}
	}

	render() {
		return (
			<div id="links-container" className="cell-large-6">
					<ul id="links">
						{this.state.links.map((linkArray) => {
							return (
								<li>
									<a href="#" type_ref={linkArray.type_ref} onClick={this.props.show_page}>{linkArray.text}</a>
								</li>
							);
						})}
					</ul>
			</div>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);

		this.linksmenu = React.createRef();
		this.pagemenu = React.createRef();
	}

	show_page = (e) => {
		this.pagemenu.current.show_page(e.target.getAttribute("type_ref"));
	}

	render() {
		return (<div className="grid-x grid-margin-x">
			<LinksMenu ref={this.linksmenu} show_page={this.show_page} />	
			<PageMenu  ref={this.pagemenu} />
		</div>);
	}
}

function loadReact() {
  ReactDOM.render(<App />, document.getElementById("apps-container"));
}

loadReact();