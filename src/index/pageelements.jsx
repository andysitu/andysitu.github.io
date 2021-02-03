class ImgCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      slides: this.props.slides,
      active_index: 0,
      slides_length: 0,
    }
    this.timer_ms = 3000;
  }

  setTimer_next = () => {
    this.onClick_next();
    setTimeout(this.setTimer_next, this.timer_ms);
  }

  componentDidMount = () => {
    setTimeout(this.setTimer_next, this.timer_ms);
  }

  change_slides(slides) {
    if (slides && slides.length > 0) {
      this.setState({
        slides: slides,
        active_indx: 0,
        slides_length: slides.length,
      });
    } else {
      this.setState({
        slides: [],
        active_indx: 0,
        slides_length: 0,
      });
    }
    
  }

  create_sides = () => {
    return this.state.slides.map( (slide, index) => {
      if (index != this.state.active_index) {
        return (
          <div className="carousel-item">
            <img className="page-carousel-images d-block" src={slide.img_src} />
          </div>
        );
      } else {
        return (
          <div className="carousel-item active">
            <img className="page-carousel-images d-block" src={slide.img_src} />
          </div>
        );
      }
      
    });
  }

  create_indicators = () => {
    return this.state.slides.map((slide, index)=> {
      return (
        <ol className="carousel-indicators">
          <li data-target="#page-carousel" data-slide-to={String(index)}></li>
        </ol>)

    });
  };

  onClick_next = (e) => {
    if (e) {
      e.preventDefault();
    }
    console.log("next");
    
    let index = (this.state.active_index + 1 >= this.state.slides_length)
          ? 0 : this.state.active_index + 1;
    this.setState({
      active_index: index,
    });
  };
  onClick_prev = (e) => {
    e.preventDefault();
    let index = (this.state.active_index -1 > 0)
          ? this.state.active_index -1 : 0;
    this.setState({
      active_index: index,
    });
  };

  create_next_buttons = () => {
    if (this.state.slides && this.state.slides.length > 1) {
      return (<div>
        <a class="carousel-control-prev" href="#page-carousel" role="button" 
          data-slide="prev" onClick={this.onClick_prev}>
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#page-carousel" role="button" 
          data-slide="next" onClick={this.onClick_next}>
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>);
    } else {
      return (<div></div>)
    }
  }

  render() {
    // don't show carousel if slides doesn't exist
    if (!this.state.slides || this.state.slides.length == 0) {
      return (<div></div>);
    }
    return (
      <div className="carousel slide" data-ride="carousel" id="page-carousel">
        {this.create_indicators()}
        <div className="carousel-inner">
          {this.create_sides()}
        </div>
        {this.create_next_buttons()}
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
    var heading;
    return this.state.text.map((textObj)=> {
      // don't show heading if it doesn't exist
      heading = (textObj.heading) ? <h2>{textObj.heading}</h2> : ""
      return (<div className="textContent-div">
        {heading}
        {textObj.body.map((content) => {
          return (<p>{content}</p>);
        })}
      </div>);
    })
  }

  render() {
    return (<div id="textcontent-container">
      {this.create_text()}
    </div>);
  }
}