import React, { Component } from 'react';

import { Full, ContentCentered } from '../layouts';

import Weapon from '../canvas-steps/parts/Weapon.jsx';
import Droppable from '../canvas-steps/parts/Droppable.jsx';
import Dressable from '../canvas-steps/parts/Dressable.jsx';

class Validate extends Component {
  render() {
    return (
      <Full>
        <Droppable extras={this.props.extras} />
        <ContentCentered>
          <Weapon weapon={this.props.weapon} />
          <Dressable
            character={this.props.character}
            offset={this.props.character.offset}
            index={this.props.insurgent.character}
            clothes={this.props.insurgent.clothes}
          />
        </ContentCentered>
      </Full>
    );
  }
}

export { Validate };
