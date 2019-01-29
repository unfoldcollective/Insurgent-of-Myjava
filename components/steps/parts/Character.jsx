import React, { Component } from 'react';
import interact from 'interactjs';

class Character extends Component {
  constructor(props) {
    super(props);

    this.dropzones = [];
  }

  componentDidMount() {
    for (const { slotName, dropzone } of this.dropzones) {
      interact(dropzone.current).dropzone({
        ondrop: () => {
          if (this.props.status.filter === slotName) {
            this.props.dropAction(slotName, this.props.status.itemDragged);
          }
        }
      });
    }
  }
  render() {
    this.dropzones = [];
    const slots = Object.keys(this.props.character.slots).map(
      (slotName, index) => {
        const slotDimensions = this.props.character.slots[slotName];

        const style = {
          top: `${slotDimensions.top}%`,
          height: `${slotDimensions.height}%`
        };

        const isHighlighted =
          this.props.status.isDragging && this.props.status.filter === slotName;

        const dropzone = React.createRef();

        if (this.props.editable) {
          this.dropzones.push({ slotName, dropzone });
        }

        return (
          <div
            key={`character_clothing_slot_${index}`}
            className={`character-clothing-slot ${
              isHighlighted ? 'current' : null
            }`}
            style={style}
            ref={dropzone}
          >
            {this.props.clothes[slotName] && (
              <img
                src={`/static/${this.props.clothes[slotName]}_${
                  this.props.index
                }.png`}
              />
            )}
            <style jsx>
              {`
                div.character-clothing-slot {
                  position: absolute;
                  width: 100%;
                }

                div.character-clothing-slot.current {
                  border: 3px dashed lightcoral;
                }
              `}
            </style>
          </div>
        );
      }
    );

    return (
      <div className="character">
        <img
          className="character-image"
          src={`/static/${this.props.character.image}`}
        />

        {slots}

        <style jsx>{`
          div.character {
            flex-grow: 1;
            position: relative;
          }

          img.character-image {
            width: 100%;
            display: block;
          }
        `}</style>
      </div>
    );
  }
}

export default Character;
