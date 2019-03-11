import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { advanceStep, chooseFunFact } from '../../actions';
import TimeoutCta from '../TimeoutCta.jsx';

import { _s } from '../../utils';

import { Full } from '../layouts';
import Step from '../Step.jsx';

function mapStateToProps(state) {
  const { data, canvas } = state;
  return {
    data,
    canvas
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ advanceStep, chooseFunFact }, dispatch);
}

//Component
class Context extends React.Component {
  render() {
    return (
      <Full>
        <Step>
          <article className="context">
            <section className="context-content">
              <h1 className="context-title">{this.props.title}</h1>
              <p dangerouslySetInnerHTML={this.props.text} />
            </section>
            <aside className="context-navigation">
              <TimeoutCta
                timeout={20000}
                action={() => {
                  this.props.advanceStep();
                  this.props.chooseFunFact();
                }}
              >
                {_s('CONTINUE', this.props.data)}
              </TimeoutCta>
            </aside>
            <style jsx>{`
              article.context {
                height: 100vh;
                display: flex;
                flex-direction: column;
                z-index: 20;
              }

              h1.context-title {
                font-size: 3rem;
                margin-bottom: 3rem;
              }

              section.context-content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex-grow: 1;
              }

              section.context-content p {
                font-size: 2rem;
                margin: 0 25%;
                line-height: 150%;
                text-align: center;
              }

              aside.context-navigation {
                position: fixed;
                right: 5vw;
                bottom: 5vh;
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
