import React, { Component, Fragment } from 'react';
import Router from 'next/router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  finishAdvance,
  setInsurgentName,
  setInsurgentEmail,
  finishFinished
} from '../actions';

import { Loader, Validate, Input } from './finale-steps';
import TimeoutCta from './TimeoutCta.jsx';

function mapStateToProps(state) {
  const { data, finish } = state;
  return {
    data,
    finish
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { finishAdvance, setInsurgentName, setInsurgentEmail, finishFinished },
    dispatch
  );
}

class Finale extends Component {
  constructor(props) {
    super(props);
    this.setName = this.setName.bind(this);
    this.setEmail = this.setEmail.bind(this);
  }

  setName(name) {
    this.props.setInsurgentName(name);
    this.props.finishAdvance();
  }

  setEmail(email) {
    this.props.setInsurgentEmail(email);
    this.props.finishFinished({
      id: this.props.saved._id,
      name: this.props.finish.name,
      email
    });
  }

  render() {
    const { step, done } = this.props.finish;

    if (done) Router.push(`/gallery`);

    const character = this.props.data.content.characters[
      this.props.saved.insurgent.character
    ];

    const weapon = this.props.data.content.weapons[
      this.props.saved.insurgent.weapon.model
    ];

    const extras = this.props.saved.insurgent.weapon.extras;

    if (step === 0) return <Loader next={this.props.finishAdvance} />;

    return (
      <Fragment>
        {step === 1 ? (
          <div className="timeout-overlay">
            <TimeoutCta
              timeout={10000}
              action={() => this.props.finishAdvance()}
            >
              Set name
            </TimeoutCta>
          </div>
        ) : null}

        {step === 2 ? (
          <Input nextAction={this.setName}>
            <h1 className="input-title">Insurgent name</h1>
            <p className="input-intro">lorem ipsum dolor sit amet</p>
          </Input>
        ) : null}

        {step === 3 ? (
          <Input nextAction={this.setEmail}>
            <h1 className="input-title">Insurgent email</h1>
            <p className="input-intro">lorem ipsum dolor sit amet</p>
            <p className="input-intro">Legal notice: your email will be....</p>
          </Input>
        ) : null}

        <Validate
          character={character}
          weapon={weapon}
          extras={extras}
          insurgent={this.props.saved.insurgent}
        />

        <style jsx>
          {`
            div.timeout-overlay {
              position: absolute;
              z-index: 1000000;
              right: 10vw;
              bottom: 10vh;
            }

            h1.input-title {
              font-size: 2rem;
              margin-bottom: 1.5rem;
            }

            p.input-intro {
              font-family: SourceSans;
              font-size: 1.3rem;
            }
          `}
        </style>
      </Fragment>
    );
  }
}

const ConnectedFinale = connect(
  mapStateToProps,
  mapDispatchToProps
)(Finale);

export default ConnectedFinale;
