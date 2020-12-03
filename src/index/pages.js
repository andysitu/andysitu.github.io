class Orbit extends React.Component {
  create_sides = () => {
    var li_class="";
    return this.props.slides.map( (slide, index) => {
      li_class = (index == 0) ? "is-active orbit-slide" : "orbit-slide"
      return (
        <li className={li_class}>
          <figure className="orbit-figure">
            <img className="orbit-image" src={slide.img_src} />
            <figcaption className="orbit-caption">{slide.caption}</figcaption>
          </figure>
        </li>
      );
    });
  }

  create_bullets = () => {
    return this.props.slides.map((slide, index)=> {
      if (index != 0) {
        return (<button data-slide={index}><span className="show-for-sr"></span></button>);
      }
    });
  }

  render() {
    return (
      <div className="orbit" role="region" aria-label="Web Page Pictures" data-orbit>
        <div className="orbit-wrapper">
          <div className="orbit-controls">
            <button className="orbit-previous"><span className="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
            <button className="orbit-next"><span className="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
          </div>
          <ul className="orbit-container">
            {this.create_sides()}
          </ul>
        </div>
        <nav className="orbit-bullets">
          <button className="is-active" data-slide="0">
            <span className="show-for-sr">First slide details.</span>
            <span className="show-for-sr" data-slide-active-label>Current Slide</span>
          </button>
          { this.create_bullets() }
        </nav>
      </div>
    );
  }
}

class Calendar_A extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {img_src: "images/cal_a_1.png", caption: "test"},
        {img_src: "images/cal_a_1.png", caption: "test"}
      ]
    };
  }
  render() {
    return (<div>
      <Orbit slides={this.state.slides} />
    </div>)
  }
}