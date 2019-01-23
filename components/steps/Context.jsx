import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { advanceStep } from '../../actions';

import { Full } from '../layouts';

function mapStateToProps(state) {
  const { data, canvas } = state;
  return {
    data,
    canvas
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ advanceStep }, dispatch);
}

//Component
class Context extends React.Component {
  render() {
    return (
      <Full>
        <section className="content">
          <p dangerouslySetInnerHTML={this.props.text} />
          <button onClick={() => this.props.advanceStep()}>Continue</button>
        </section>
      </Full>
    );
  }
}

const ConnectedContext = connect(
  mapStateToProps,
  mapDispatchToProps
)(Context);

export { ConnectedContext as Context };
