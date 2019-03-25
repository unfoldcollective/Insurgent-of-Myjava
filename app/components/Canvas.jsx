import React, { Component } from 'react';
import Error from 'next/error';
import Router from 'next/router';

import Loader from './Loader.jsx';
import Transition from './Transition.jsx';
import HelpVideo from './canvas-steps/parts/HelpVideo.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  chooseFunFact,
  activateHelp,
  deactivateHelp,
  exitCanceled
} from '../actions';

import { _s } from '../utils';

import { Context, Insurgent, Outfit, Rack, Accesories } from './canvas-steps';
import Cta from './Cta.jsx';

function mapStateToProps(state) {
  const { canvas, data } = state;
  return {
    canvas,
    data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      chooseFunFact,
      activateHelp,
      deactivateHelp,
      exitCanceled
    },
    dispatch
  );
}

class Canvas extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    //this.props.chooseFunFact();
  }

  render() {
    const {
      step,
      id,
      error,
      exiting,
      funfact,
      helpModeInsurgent,
      helpModeOutfit,
      helpModeAccessories
    } = this.props.canvas;

    if (id) setTimeout(() => Router.push(`/finish/${id}`), 3000);

    const stepComponents = {
      0: <Insurgent />, //has help video
      1: <Outfit />, //has help video
      2: (
        <Context
          title={_s('CONTEXT_1_TITLE', this.props.data)}
          text={_s('CONTEXT_1_INTRO', this.props.data, true)}
        />
      ),
      3: <Rack />,
      4: <Accesories /> //has help video
    };

    const current = stepComponents[step];

    if (error || !current) return <Error statusCode={500} />;

    return (
      <div className="create">
        {id && <Loader />}
        {exiting && (
          <div className="exit">
            <div className="exit-dialog">
              <p className="exit-title">{_s('EXIT_TITLE', this.props.data)}</p>
              <div className="exit-buttons">
                <Cta className="big" href="/">
                  {_s('EXIT_OK', this.props.data)}
                </Cta>
                <Cta className="big" action={this.props.exitCanceled}>
                  {_s('EXIT_CANCEL', this.props.data)}
                </Cta>
              </div>
            </div>
          </div>
        )}

        <Transition step={`c_${step}`}>
          {funfact && <div className="canvas-funfact">{funfact}</div>}

          {(step === 0) & helpModeInsurgent ? (
            <HelpVideo
              file="CharacterCarousel.mp4"
              endAction={() => {
                this.props.deactivateHelp('helpModeInsurgent');
                setTimeout(() => this.props.chooseFunFact(), 1000);
              }}
            />
          ) : null}

          {(step === 1) & helpModeOutfit ? (
            <HelpVideo
              file="Clothing.mp4"
              endAction={() => {
                this.props.deactivateHelp('helpModeOutfit');
                setTimeout(() => this.props.chooseFunFact(), 1000);
              }}
            />
          ) : null}

          {(step === 4) & helpModeAccessories ? (
            <HelpVideo
              file="WeaponComposin.mp4"
              endAction={() => {
                this.props.deactivateHelp('helpModeAccessories');
                setTimeout(() => this.props.chooseFunFact(), 1000);
              }}
            />
          ) : null}

          {current}
        </Transition>

        <style jsx>
          {`
            div.exit {
              position: absolute;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background: rgba(0, 0, 0, 0.5);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 1000000;
            }

            div.exit-dialog {
              background: black;
              padding: 2rem;
            }

            div.exit-buttons {
              display: flex;
              justify-content: center;
            }

            p.exit-title {
              font-family: SourceSans, sans-serif;
              font-size: 2rem;
              text-align: center;
              margin-bottom: 2rem;
            }

            div.canvas-funfact {
              position: absolute;
              top: 2rem;
              left: 2rem;
              background: black;
              padding: 1rem;
              z-index: 10000;
              width: 20rem;
              font-family: SourceSans, serif;
              font-size: 1.5rem;
            }
          `}
        </style>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
