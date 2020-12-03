class Orbit extends React.Component {
  create_sides = () => {
    var div_class="";
    return this.props.slides.map( (slide, index) => {
      div_class = (index == 0) ? "carousel-item active" : "carousel-item"
      return (
        <div className={div_class}>
          <img className="w-100 d-block" src={slide.img_src} />
        </div>
      );
    });
  }

  create_indicators = () => {
    return this.props.slides.map((slide, index)=> {
      if (index == 0)
        return (<li data-target="#page-carousel" data-slide-to={String(index)} className="active"></li>)
      else
        return (<li data-target="#page-carousel" data-slide-to={String(index)}></li>)
    });
  }

  render() {
    return (
      <div className="carousel slide" data-ride="carousel" id="page-carousel">
        <ol className="carousel-indicators">
          {this.create_indicators()}
        </ol>
        <div className="carousel-inner">
          {this.create_sides()}
        </div>
        <a class="carousel-control-prev" href="#page-carousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#page-carousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
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
      ]
    };
  }
  render() {
    return (<div>
      <Orbit slides={this.state.slides} />
    </div>)
  }
}