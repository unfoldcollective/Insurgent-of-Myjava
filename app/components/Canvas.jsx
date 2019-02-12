import React, { Component } from 'react';
import Error from 'next/error';
import Router from 'next/router';

import MessageOverlay from './MessageOverlay.jsx';

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
    const { step, id, error, saving } = this.props.canvas;

    if (id) Router.push(`/finish/${id}`);

    const stepComponents = {
      0: <Context text={_s('CONTEXT_1', this.props.data, true)} />,
      1: <Insurgent />,
      2: <Outfit />,
      3: <Context text={_s('CONTEXT_2', this.props.data, true)} />,
      4: <Rack />,
      5: <Accesories />
    };

    const current = stepComponents[step];

    if (error || !current) return <Error statusCode={500} />;

    return (
      <div className="create">
        {saving && <MessageOverlay message="Saving..." />}
        {current}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Canvas);
