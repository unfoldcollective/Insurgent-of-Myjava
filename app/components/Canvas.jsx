import React, { Component } from 'react';
import Error from 'next/error';

import { connect } from 'react-redux';

import { _s } from '../utils';

import { Context, Insurgent, Outfit, Rack, Accesories } from './steps';

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
    const { step } = this.props.canvas;

    const stepComponents = {
      0: <Context text={_s('CONTEXT_1', this.props.data, true)} />,
      1: <Insurgent />,
      2: <Outfit />,
      3: <Context text={_s('CONTEXT_2', this.props.data, true)} />,
      4: <Rack />,
      5: <Accesories />
    };

    return stepComponents[step] || <Error statusCode={500} />;
  }
}

export default connect(mapStateToProps)(Canvas);
