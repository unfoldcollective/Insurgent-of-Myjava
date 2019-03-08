import React, { Component, Fragment } from 'react';
import TimeoutCta from './TimeoutCta.jsx';
import Router from 'next/router';

import { connect } from 'react-redux';

import { Validate } from './finale-steps';

import { _s } from '../utils';

function mapStateToProps(state) {
  const { data } = state;
  return {
    data
  };
}

class InsurgentSingle extends Component {
  render() {
    const character = this.props.data.content.characters[
      this.props.saved.insurgent.character
    ];

    const weapon = this.props.data.content.weapons[
      this.props.saved.insurgent.weapon.model
    ];

    const extras = this.props.saved.insurgent.weapon.extras;

    return (
      <Fragment>
        <div className="insurgent-overlay">
          <TimeoutCta timeout={20000} action={() => Router.push('/gallery')}>
            {_s('BACK_TO_GALLERY', this.props.data)}
          </TimeoutCta>
        </div>
        <Validate
          character={character}
          weapon={weapon}
          extras={extras}
          bg={this.props.saved.bg}
          insurgent={this.props.saved.insurgent}
        />

        <style jsx>{`
          div.insurgent-overlay {
            position: absolute;
            bottom: 5vh;
            right: 5vw;
            padding: 2rem;
            z-index: 1000000;
          }

          a {
            text-decoration: none;
            color: white;
          }
        `}</style>
      </Fragment>
    );
  }
}

const ConnectedInsurgent = connect(mapStateToProps)(InsurgentSingle);

export default ConnectedInsurgent;
