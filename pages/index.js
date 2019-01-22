import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { _s } from '../utils';
import { switchLanguage } from '../actions';

function mapStateToProps(state) {
  const { data } = state;
  return {
    data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ switchLanguage }, dispatch);
}

//Component
class Index extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <main>
        <header>
          <h1>{_s('TITLE', data)}</h1>
          <h2>{_s('SUBTITLE', data)}</h2>
          <button onClick={() => this.props.switchLanguage('en')}>en</button>
          <button onClick={() => this.props.switchLanguage('sk')}>sk</button>
          <nav>
            <Link href="/create">
              <a>Create insurgent</a>
            </Link>
          </nav>
        </header>
      </main>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
