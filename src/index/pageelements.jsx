class ImgCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      slides: this.props.slides,
    }
  }

  change_slides(slides) {
    this.setState({
      slides: slides,
    })
  }

  create_sides = () => {
    return this.state.slides.map( (slide, index) => {
      return (
        <div className="carousel-item">
          <img className="page-carousel-images d-block" src={slide.img_src} />
        </div>
      );
    });
  }

  create_indicators = () => {
    return this.state.slides.map((slide, index)=> {
      return (<li data-target="#page-carousel" data-slide-to={String(index)}></li>)
    });
  }

  render() {
    // don't show carousel if slides doesn't exist
    if (!this.state.slides || this.state.slides.length == 0) {
      return (<div></div>);
    }
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

class TextContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
    };
  }

  change_text(text) {
    this.setState({
      text: text,
    })
  }

  create_text() {
    var title;
    return this.state.text.map((textObj)=> {
      // don't show title if it doesn't exist
      title = (textObj.title) ? <h2>{textObj.title}</h2> : ""
      return (<div className="textContent-div">
        {title}
        {textObj.body.map((content) => {
          return (<p>{content}</p>);
        })}
      </div>);
    })
  }

  render() {
    return (<div>
      {this.create_text()}
    </div>);
  }
}