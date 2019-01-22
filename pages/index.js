import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { _s } from '../utils';

function mapStateToProps(state) {
  const { data } = state;
  return {
    data
  };
}

//Component
class Index extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <main>
        <header>
          <h1>{_s('TITLE', data)}</h1>
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

export default connect(mapStateToProps)(Index);
