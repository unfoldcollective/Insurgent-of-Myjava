import React, { Component } from 'react';
import Error from 'next/error';
import Router from 'next/router';

import Loader from './Loader.jsx';
import Transition from './Transition.jsx';
import HelpVideo from './canvas-steps/parts/HelpVideo.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { chooseFunFact, activateHelp, deactivateHelp } from '../actions';

import { _s } from '../utils';

import { Context, Insurgent, Outfit, Rack, Accesories } from './canvas-steps';

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
      deactivateHelp
    },
    dispatch
  );
}

class Canvas extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.chooseFunFact();
  }

  render() {
    const {
      step,
      id,
      error,
      saving,
      funfact,
      helpModeInsurgent,
      helpModeOutfit,
      helpModeAccessories
    } = this.props.canvas;

    if (id) Router.push(`/finish/${id}`);

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
        {saving && <Loader />}

        <Transition step={`c_${step}`}>
          {funfact && <div className="canvas-funfact">{funfact}</div>}

          {(step === 0) & helpModeInsurgent ? (
            <HelpVideo
              file="CharacterCarousel.mp4"
              endAction={() => this.props.deactivateHelp('helpModeInsurgent')}
            />
          ) : null}

          {(step === 1) & helpModeOutfit ? (
            <HelpVideo
              file="Clothing.mp4"
              endAction={() => this.props.deactivateHelp('helpModeOutfit')}
            />
          ) : null}

          {(step === 4) & helpModeAccessories ? (
            <HelpVideo
              file="WeaponComposin.mp4"
              endAction={() => this.props.deactivateHelp('helpModeAccessories')}
            />
          ) : null}

          {current}
        </Transition>

        <style jsx>
          {`
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
