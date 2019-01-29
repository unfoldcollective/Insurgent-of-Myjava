import React, { Component } from 'react';
import interact from 'interactjs';
import { debounce } from 'lodash';

const MOVEMENT_DEBOUNCE = 2;

class Draggable extends Component {
  constructor(props) {
    super(props);

    this.draggable = React.createRef();
  }

  componentDidMount() {
    let dragElement;

    interact(this.draggable.current)
      .draggable({
        manualStart: true,
        onstart: e => {
          e.preventDefault();
          e.stopPropagation();

          this.props.dragAction(this.props.item);
          this.dragging = true;
        },
        onmove: debounce(e => {
          const target = e.target;
          const x = (parseFloat(target.getAttribute('data-x')) || 0) + e.dx;
          const y = (parseFloat(target.getAttribute('data-y')) || 0) + e.dy;

          target.style.webkitTransform = target.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.1)`;

          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
        }, MOVEMENT_DEBOUNCE),
        onend: () => {
          this.props.dropAction();
          this.dragging = false;
          dragElement.parentNode.removeChild(dragElement);
        }
      })
      .on('move', e => {
        if (this.dragging) return;

        const interaction = e.interaction;

        if (interaction.pointerIsDown && !interaction.interacting()) {
          const original = e.currentTarget;
          dragElement = original.cloneNode(true);

          const dimensions = original.getBoundingClientRect();

          dragElement.classList.add('dragging');

          for (const prop of ['top', 'left', 'width', 'height']) {
            dragElement.style[prop] = dimensions[prop] + 'px';
          }

          dragElement.dataset.src = this.props.src;

          document.body.appendChild(dragElement);

          interaction.start({ name: 'drag' }, e.interactable, dragElement);
        }
      });
  }

  render() {
    return (
      <div className="drag-target" ref={this.draggable}>
        {this.props.children}

        <style jsx>{`
          div.drag-target {
            touch-action: manipulation;
          }

          div.drag-target.dragging {
            position: absolute;
          }
        `}</style>
      </div>
    );
  }
}

export default Draggable;
