import React, { Component } from 'react';
import interact from 'interactjs';
import Movable from './Movable.jsx';

class Droppable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      overTrash: false
    };

    this.droppable = React.createRef();
    this.trash = React.createRef();
  }

  componentDidMount() {
    const dropzone = this.droppable.current;
    const trash = this.trash.current;

    interact(dropzone).dropzone({
      ondrop: e => {
        if (this.props.isDragging) return;

        const image = e.relatedTarget.querySelector('img');

        const canvasSize = dropzone.getBoundingClientRect();
        const dimensions = e.relatedTarget.getBoundingClientRect();

        this.canvasSize = canvasSize;

        const i = new Image();
        i.src = image.src;

        i.onload = () => {
          const scaleX = image.width / i.width;
          const scaleY = image.height / i.height;

          this.props.addAccessory({
            src: e.relatedTarget.dataset.src,
            x: dimensions.left - i.width * scaleX * 0.5 - canvasSize.width / 2,
            y: dimensions.top - i.height * scaleY * 0.5 - canvasSize.height / 2,
            scale: 1,
            flipped: false,
            rotate: 0
          });
        };
      }
    });

    interact(trash).dropzone({
      ondragenter: () => {
        this.setState({
          overTrash: true
        });
      },
      ondragleave: () => {
        this.setState({
          overTrash: false
        });
      },
      ondrop: e => {
        const index = e.relatedTarget.dataset.index;

        if (index) {
          setTimeout(() => {
            this.props.removeAccessory(index);
            this.setState({ overTrash: false });
          });
        }
      }
    });
  }
  render() {
    return (
      <div className="droppable" ref={this.droppable}>
        <div
          className={`trash ${this.state.overTrash ? 'over' : ''}`}
          ref={this.trash}
        >
          Trash
        </div>
        {this.props.extras.map((extra, index) => {
          return (
            <Movable
              key={`movable_${index}`}
              {...extra}
              i={index}
              updateAccessory={data => this.props.updateAccessory(index, data)}
              reorderAccessory={() => this.props.reorderAccessory(index)}
              flipAccessory={() => this.props.flipAccessory(index)}
              canvasSize={this.canvasSize}
              dragAccessory={this.props.dragAccessory}
              dropAccessory={this.props.dropAccessory}
            />
          );
        })}
        <style jsx>
          {`
            div.droppable {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(100, 100, 100, 0.4);
              z-index: 2;
              overflow: hidden;
            }

            div.trash {
              position: absolute;
              bottom: 1rem;
              left: 1rem;
              z-index: 3;
              background: rgba(100, 100, 100, 0.6);
              padding: 1rem;
              color: white;
            }

            div.trash.over {
              transform: scale(1.4);
            }
          `}
        </style>
      </div>
    );
  }
}

export default Droppable;
