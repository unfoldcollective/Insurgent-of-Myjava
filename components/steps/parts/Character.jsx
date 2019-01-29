import React, { Component } from 'react';

class Character extends Component {
  render() {
    const slots = Object.keys(this.props.character.slots).map(
      (slotName, index) => {
        const slotDimensions = this.props.character.slots[slotName];

        const style = {
          top: `${slotDimensions.top}%`,
          height: `${slotDimensions.height}%`
        };

        return (
          <div
            key={`character_clothing_slot_${index}`}
            className="character-clothing-slot"
            style={style}
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
                  background: rgba(0, 0, 0, 0.4);
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
            background: lightpink;
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
