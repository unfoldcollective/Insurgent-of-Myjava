import React, { Component } from 'react';

import { Full, ContentCentered } from '../layouts';

import Weapon from '../canvas-steps/parts/Weapon.jsx';
import Droppable from '../canvas-steps/parts/Droppable.jsx';
import Dressable from '../canvas-steps/parts/Dressable.jsx';
import TimeoutCta from '../TimeoutCta.jsx';

class Validate extends Component {
  render() {
    return (
      <Full>
        <div className="timeout-overlay">
          <TimeoutCta timeout={10000} action={() => alert('foo')}>
            Click here
          </TimeoutCta>
        </div>

        <div
          className="final-canvas"
          style={{ backgroundImage: 'url(/static/bg1.jpg)' }}
        >
          <div className="final-canvas-content">
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
          </div>
        </div>

        <style jsx>
          {`
            div.final-canvas {
              display: flex;
              justify-content: center;
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center center;
            }

            div.timeout-overlay {
              position: absolute;
              z-index: 1000000;
              right: 10vw;
              bottom: 10vh;
            }

            div.final-canvas-content {
              width: 75%;
            }
          `}
        </style>
      </Full>
    );
  }
}

export { Validate };
