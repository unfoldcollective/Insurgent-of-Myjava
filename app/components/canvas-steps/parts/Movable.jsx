import React, { Component } from 'react';
import interact from 'interactjs';

import { debounce } from 'lodash';

class Movable extends Component {
  constructor(props) {
    super(props);

    this.movable = React.createRef();
  }
  componentDidMount() {
    if (!this.props.editable) return;

    let scale = this.props.scale;
    let rotate = this.props.rotate;

    const movable = this.movable.current;

    const removeTransform = () => {
      movable.style.webkitTransform = movable.style.transform = '';

      movable.setAttribute('data-x', 0);
      movable.setAttribute('data-y', 0);
    };

    const gestureHandler = e => {
      dragHandler(e);

      if (!e.da && !e.ds) return;

      rotate = rotate + e.da;
      scale = scale * (1 + e.ds);

      this.image.style.webkitTransform = this.image.style.transform = `rotate(${rotate}deg) scale(${
        this.props.flipped ? -scale : scale
      }, ${scale})`;
    };

    const dragHandler = e => {
      const x = (parseFloat(movable.getAttribute('data-x')) || 0) + e.dx;
      const y = (parseFloat(movable.getAttribute('data-y')) || 0) + e.dy;

      movable.style.webkitTransform = movable.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      movable.setAttribute('data-x', x);
      movable.setAttribute('data-y', y);
    };

    const startHandler = () => {
      this.props.dragAccessory();
    };

    const endHandler = () => {
      const dimensions = this.movable.current.getBoundingClientRect();
      removeTransform();

      this.props.updateAccessory({
        x: dimensions.left - this.props.canvasSize.width / 2,
        y: dimensions.top - this.props.canvasSize.height / 2,
        rotate,
        scale
      });

      setTimeout(() => this.props.dropAccessory());
    };

    interact(movable)
      .gesturable({
        onstart: startHandler,
        onmove: debounce(gestureHandler, 8),
        onend: endHandler
      })
      .draggable({
        onstart: startHandler,
        onmove: debounce(dragHandler, 8),
        onend: endHandler
      })
      .on('tap', e => {
        this.props.reorderAccessory();
        e.stopPropagation();
      })
      .on('doubletap', e => {
        this.props.flipAccessory();
        e.stopPropagation();
      });
  }

  componentWillUnmount() {
    if (!this.props.editable) return;
    interact(this.movable.current)
      .draggable(false)
      .gesturable(false);
  }

  render() {
    const scaleH = this.props.flipped ? -this.props.scale : this.props.scale;
    const imageTransform = `rotate(${this.props.rotate}deg) scale(${scaleH}, ${
      this.props.scale
    })`;

    const imageStyle = {
      transform: imageTransform
    };

    return (
      <div
        style={{
          top: `calc(50% + ${this.props.y}px)`,
          left: `calc(50% + ${this.props.x}px)`,
          zIndex: this.props.z
        }}
        className="movable-item"
        data-index={this.props.i}
        ref={this.movable}
      >
        <img
          style={imageStyle}
          ref={el => {
            this.image = el;
          }}
          src={`/static/${this.props.src}`}
          className={`movable-image ${this.props.flipped ? 'flipped' : ''}`}
        />

        <style jsx>{`
          div.movable-item {
            position: absolute;
            /*filter: drop-shadow(0px 0px 5px rgba(0,0,0,.2));*/
            touch-action: none;
            will-change: transform;
          }

          img.movable-image {
            display: block;
          }

          img.flipped {
            filter: FlipH;
          }
        `}</style>
      </div>
    );
  }
}

export default Movable;
