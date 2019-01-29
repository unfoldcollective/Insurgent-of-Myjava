import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { _s } from '../utils';
import { switchLanguage, resetCanvas } from '../actions';

import { Full } from '../components/layouts';

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
      <>
        <Full>
          <article className="index">
            <header>
              <button onClick={() => this.props.switchLanguage('en')}>
                en
              </button>
              <button onClick={() => this.props.switchLanguage('sk')}>
                sk
              </button>
              <h1>{_s('TITLE', data)}</h1>
              <h2>{_s('SUBTITLE', data)}</h2>
              <p dangerouslySetInnerHTML={_s('INTRO', data, true)} />
              <nav>
                <ul>
                  <li>
                    <Link href="/create">
                      <a>Create insurgent</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery">
                      <a>Gallery</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>
          </article>
        </Full>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
