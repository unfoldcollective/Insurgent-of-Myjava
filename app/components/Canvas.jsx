import React, { Component } from 'react';
import Error from 'next/error';
import Router from 'next/router';

import MessageOverlay from './MessageOverlay.jsx';
import Transition from './Transition.jsx';

import { connect } from 'react-redux';

import { _s } from '../utils';

import { Context, Insurgent, Outfit, Rack, Accesories } from './canvas-steps';

function mapStateToProps(state) {
  const { canvas, data } = state;
  return {
    canvas,
    data
  };
}

class Canvas extends Component {
  constructor() {
    super();
  }

  render() {
    const { step, id, error, saving } = this.props.canvas;

    if (id) Router.push(`/finish/${id}`);

    const stepComponents = {
      0: <Insurgent />,
      1: <Outfit />,
      2: (
        <Context
          title={_s('CONTEXT_1_TITLE', this.props.data)}
          text={_s('CONTEXT_1_INTRO', this.props.data, true)}
        />
      ),
      3: <Rack />,
      4: <Accesories />
    };

    const current = stepComponents[step];

    if (error || !current) return <Error statusCode={500} />;

    return (
      <div className="create">
        {saving && <MessageOverlay message="Saving..." />}
        <Transition step={`c_${step}`}>{current}</Transition>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Canvas);
