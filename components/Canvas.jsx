import React, { Component } from 'react';
import Error from 'next/error';

import { connect } from 'react-redux';

import Step from './Step.jsx';
import { Context, Insurgent, Outfit, Weapon, Accesories } from './steps';

function mapStateToProps(state) {
  const { canvas } = state;
  return {
    canvas
  };
}

const stepComponents = {
  0: <Context />,
  1: <Insurgent />,
  2: <Outfit />,
  3: <Context />,
  4: <Weapon />,
  5: <Accesories />
};

class Canvas extends Component {
  constructor() {
    super();
  }

  render() {
    const { step } = this.props.canvas;
    return <Step>{stepComponents[step] || <Error statusCode={500} />}</Step>;
  }
}

export default connect(mapStateToProps)(Canvas);
