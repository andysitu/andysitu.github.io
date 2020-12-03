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
      console.log("show calendar");
      return (<Calendar_A></Calendar_A>);
    } else {
      return (<div>{this.state.type}</div>);
    }
  }

  render() {
    return (
      <div id="show-content-container" className="cell large-6">
        {this.create_content()}
      </div>
    )
  }
}