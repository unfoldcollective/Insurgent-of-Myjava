import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { advanceStep } from '../../actions';

import { _s } from '../../utils';

import { Full } from '../layouts';
import Step from '../Step.jsx';
import Cta from '../Cta.jsx';

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
        <Step>
          <article className="context">
            <section className="context-content">
              <p dangerouslySetInnerHTML={this.props.text} />
            </section>
            <aside className="context-navigation">
              <Cta className="big" action={() => this.props.advanceStep()}>
                {_s('CONTINUE', this.props.data)}
              </Cta>
            </aside>
            <style jsx>{`
              article.context {
                height: 100vh;
                display: flex;
                flex-direction: column;
                z-index: 20;
              }

              section.context-content {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-grow: 1;
              }

              section.context-content p {
                font-size: 2rem;
                margin: 0 25%;
                text-align: center;
              }

              aside.context-navigation {
                display: flex;
                justify-content: flex-end;
                padding: 2rem;
              }
            `}</style>
          </article>
        </Step>
      </Full>
    );
  }
}

const ConnectedContext = connect(
  mapStateToProps,
  mapDispatchToProps
)(Context);

export { ConnectedContext as Context };
