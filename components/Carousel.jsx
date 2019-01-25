import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: this.getSlides(),
      sliding: false,
      direction: 0
    };

    this.handleAdvance = this.handleAdvance.bind(this);
    this.handleRetreat = this.handleRetreat.bind(this);
  }
  getSlides() {
    const current = this.props.current;
    const length = this.props.items.length;
    const slides = [];

    for (let i = current - 2; i <= current + 2; i++) {
      const s = i > length - 1 ? i - length : i < 0 ? i + length : i;
      slides.push(this.props.items[s]);
    }

    return slides;
  }

  handleAdvance() {
    const current =
      this.props.current === this.props.items.length - 1
        ? 0
        : this.props.current + 1;

    this.props.select(current);

    this.setState({ sliding: true, direction: -1 }, () =>
      setTimeout(() => {
        this.setState({ slides: this.getSlides(), sliding: false });
      }, 500)
    );
  }

  handleRetreat() {
    const current =
      this.props.current === 0
        ? this.props.items.length - 1
        : this.props.current - 1;

    this.props.select(current);

    this.setState({ sliding: true, direction: 0 }, () =>
      setTimeout(() => {
        this.setState({ slides: this.getSlides(), sliding: false });
      }, 500)
    );
  }

  render() {
    // const offset = (-100 / 3) * this.props.current + 33;
    const { sliding, direction } = this.state;

    const slideStyles = sliding
      ? direction < 0
        ? {
            transform: 'translateX(-66.666%)',
            transition: 'transform 0.5s ease-in-out'
          }
        : {
            transform: 'translateX(0)',
            transition: 'transform 0.5s ease-in-out'
          }
      : {};

    return (
      <div className="carousel-tray">
        <button
          className="carousel-control"
          onClick={!sliding && this.handleRetreat}
        >
          Previous
        </button>
        <button
          className="carousel-control advance"
          onClick={!sliding && this.handleAdvance}
        >
          Next
        </button>
        <ul className="carousel" style={slideStyles}>
          {this.state.slides.map((i, index) => {
            let iCurrent = null;
            let iStyle = {};

            if (sliding) {
              iCurrent = direction < 0 ? 3 : 1;
              iStyle = {
                transition: 'all 0.5s ease-in-out'
              };
            } else {
              iCurrent = 2;
            }

            return (
              <li
                key={`carousel_${index}`}
                className="carousel-item"
                style={{
                  left: `${33.333 * index}%`
                }}
              >
                <img
                  key={`carousel_image_${index}`}
                  src={`/static/${i.image}`}
                  style={iStyle}
                  className={index === iCurrent ? 'current' : null}
                />
              </li>
            );
          })}
        </ul>

        <style jsx>{`
          div.carousel-tray {
            position: relative;
            overflow: hidden;
          }

          ul.carousel {
            list-style: none;
            height: 100vh;
            position: relative;
            transform: translateX(-33%);
          }

          li.carousel-item {
            position: absolute;
            width: 33.333%;
            height: 100vh;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: left 0.5s ease-in-out;
          }

          img {
            transform: scale(0.8);
            opacity: 0.5;
            will-change: transform, opacity;
          }

          img.current {
            transform: scale(1);
            opacity: 1;
          }

          button.carousel-control {
            position: absolute;
            top: calc(50% - 25px);
            z-index: 1;
            margin: 0 1rem;
            padding: 1rem;
          }

          button.advance {
            right: 0;
          }
        `}</style>
      </div>
    );
  }
}

export default Carousel;
