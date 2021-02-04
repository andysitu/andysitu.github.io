class LinksMenu extends React.Component {
	constructor(props) {
		super(props);
		var links = [];
		var keys = Object.keys(page_content);
		for (var i=0; i<keys.length;i++){
			links.push({linkText: page_content[keys[i]].linkText, type_ref: keys[i]});
		}
		console.log(links);
		this.state = {
			links: links
		}
	}

	render() {
		return (
			<div id="links-container" style={this.props.menu_style}>
				<h1>Record 
					<a  href="#" data-toggle="tooltip" data-placement="bottom"
						title={`This is a record and reminder of what I have done and of how fun it is to make things.`}>[#?]</a></h1>
				<ul id="links">
					{this.state.links.map((linkArray) => {
						return (
							<li>
								<a href="#" type_ref={linkArray.type_ref} 
									onClick={this.props.show_page}>
										<div type_ref={linkArray.type_ref}>{linkArray.linkText}</div></a>
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
		this.app_page = React.createRef();
	}

	calculate_page_height() {
		return window.innerHeight - document.getElementById("top-nav-bar").offsetHeight
		;
	}
	
	show_page = (e) => {
		e.preventDefault();
		this.app_page.current.show_page(e.target.getAttribute("type_ref"));
	}

	render() {
		var menu_style ={ height: this.calculate_page_height(), }
		return (<div id="content-container">
			<LinksMenu menu_style={menu_style} ref={this.linksmenu} show_page={this.show_page} />	
			<AppPage menu_style={menu_style} ref={this.app_page} />
		</div>);
	}
}

function loadReact() {
	ReactDOM.render(<App ref={this.app_page} />, document.getElementById("content-wrapper"));
}

loadReact();