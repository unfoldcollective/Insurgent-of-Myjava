import React, { Component } from 'react';
import interact from 'interactjs';

import Character from './Character.jsx';

class Dressable extends Component {
  constructor(props) {
    super(props);

    this.dropzone = React.createRef();
  }

  componentDidMount() {
    if (this.props.editable) {
      interact(this.dropzone.current).dropzone({
        ondrop: () => {
          this.props.dropAction(
            this.props.status.filter,
            this.props.status.itemDragged
          );
        }
      });
    }
  }
  render() {
    return (
      <div
        className="character"
        style={
          this.props.offset && { transform: `translate(${this.props.offset}%)` }
        }
      >
        <Character image={this.props.character.image} />
        <div className="character-clothing-slot legs">
          {this.props.clothes['legs'] && (
            <img
              className="character-clothing-image"
              src={`/static/ch-0-${
                this.props.clothes['legs']
              }.svg`}
            />
          )}
        </div>

        <div className="character-clothing-slot torso">
          {this.props.clothes['torso'] && (
            <img
              className="character-clothing-image"
              src={`/static/ch-0-${
                this.props.clothes['torso']
              }.svg`}
            />
          )}
        </div>

        <div className="character-clothing-slot feet">
          {this.props.clothes['feet'] && (
            <img
              className="character-clothing-image"
              src={`/static/ch-0-${
                this.props.clothes['feet']
              }.svg`}
            />
          )}
        </div>

        <div className="character-clothing-slot extra-part">
          <img src={`/static/character-${this.props.index}-head.svg`} />
        </div>

        <div className="character-clothing-slot head">
          {this.props.clothes['head'] && (
            <img
              className="character-clothing-image"
              src={`/static/ch-0-${
                this.props.clothes['head']
              }.svg`}
            />
          )}
        </div>

        <div className="character-clothing-slot dropzone" ref={this.dropzone} />

        <style jsx>{`
          div.character {
            flex-grow: 1;
            position: relative;
          }

          div.character-clothing-slot {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        `}</style>
      </div>
    );
  }
}

export default Dressable;
