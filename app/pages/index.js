import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { _s } from '../utils';
import { switchLanguage, resetCanvas } from '../actions';

import { Full } from '../components/layouts';
import Cta from '../components/Cta.jsx';

function mapStateToProps(state) {
  const { data } = state;
  return {
    data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ switchLanguage, resetCanvas }, dispatch);
}

//Component
class Index extends React.Component {
  componentDidMount() {
    this.props.resetCanvas();
  }

  render() {
    const { data } = this.props;

    return (
      <Fragment>
        <Full>
          <article className="index">
            <header className="index-header">
              <nav className="index-language">
                <Cta
                  active={this.props.data.lang === 'en'}
                  action={() => this.props.switchLanguage('en')}
                >
                  en
                </Cta>
                <Cta
                  active={this.props.data.lang === 'sk'}
                  action={() => this.props.switchLanguage('sk')}
                >
                  sk
                </Cta>
              </nav>

              <h1 className="index-title">{_s('TITLE', data)}</h1>
              <p
                dangerouslySetInnerHTML={_s('INTRO', data, true)}
                className="index-intro"
              />
              <nav className="index-nav">
                <ul className="index-nav-list">
                  <li>
                    <Cta className="big" href="/create">
                      {_s('CREATE', data)}
                    </Cta>
                  </li>
                  <li>
                    <Cta active={true} href="/gallery">
                      <a>{_s('GALLERY', data)}</a>
                    </Cta>
                  </li>
                </ul>
              </nav>
            </header>
          </article>
        </Full>
        <style jsx>{`
          article.index {
            background-image: url('/static/frontpage.jpg');
            background-size: cover;
          }

          header.index-header {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            height: 100vh;
            justify-content: center;
          }

          nav.index-language {
            display: flex;
            justify-content: flex-end;
            padding: 2rem;
            margin-bottom: 10rem;
          }

          h1.index-title {
            margin-bottom: 6rem;
            font-size: 4rem;
            text-align: center;
            font-weight: normal;
          }

          p.index-intro {
            margin-bottom: 12rem;
            padding: 0 25%;
            font-size: 2rem;
            text-align: center;
          }

          nav.index-nav {
            flex-grow: 1;
          }

          ul.index-nav-list {
            display: flex;
            flex-direction: column;
            align-items: center;
            list-style: none;
          }

          ul.index-nav-list li:nth-child(1) {
            margin-bottom: 3rem;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
