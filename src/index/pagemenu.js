class PageMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
    }
  }

  show_page(type) {
    this.setState({type: type,});
  }

  create_content = () => {
    if (this.state.type == "calendar_a") {
      return (<Calendar_A></Calendar_A>);
    } else {
      return (<div>{this.state.type}</div>);
    }
  }

  render() {
    return (
      <div id="show-content-container" className="col-lg-8" style={this.props.menu_style}>
        {this.create_content()}
      </div>
    )
  }
}