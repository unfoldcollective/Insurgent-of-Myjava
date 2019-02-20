import React, { Component, Fragment } from 'react';
import Link from 'next/link';

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
          <Link href="/gallery">
            <a>{_s('BACK_TO_GALLERY', this.props.data)}</a>
          </Link>
        </div>
        <Validate
          character={character}
          weapon={weapon}
          extras={extras}
          insurgent={this.props.saved.insurgent}
        />

        <style jsx>{`
          div.insurgent-overlay {
            position: absolute;
            bottom: 10rem;
            right: 10rem;
            background: black;
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
