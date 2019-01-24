import React, { Component } from 'react';

class Carousel extends Component {
  render() {
    const offset = (-100 / 3) * this.props.current + 33;
    return (
      <div className="carousel-tray">
        <button
          className="carousel-control"
          onClick={() => this.props.select(this.props.current - 1)}
        >
          Previous
        </button>
        <button
          className="carousel-control advance"
          onClick={() => this.props.select(this.props.current + 1)}
        >
          Next
        </button>
        <ul
          className="carousel"
          style={{
            transform: `translateX(${offset}%)`
          }}
        >
          {this.props.items.map((i, index) => (
            <li key={`carousel_${index}`} className="carousel-item">
              <img
                src={`/static/${i.image}`}
                className={this.props.current === index ? 'current' : null}
              />
            </li>
          ))}
        </ul>

        <style jsx>{`
          div.carousel-tray {
            overflow: hidden;
            position: relative;
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

          ul.carousel {
            list-style: none;
            display: flex;
            height: 100vh;
            transition: transform 0.5s linear;
          }

          li.carousel-item {
            flex-basis: 33.333%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          img {
            transition: all 0.5s linear;
            transform: scale(0.8);
            opacity: 0.5;
          }

          img.current {
            transform: scale(1);
            opacity: 1;
          }
        `}</style>
      </div>
    );
  }
}

export default Carousel;
