import React from 'react';
import Link from 'next/link';

//Component
class Index extends React.Component {
  static getInitialProps({ query: { id } }) {
    return { insurgentId: id };
  }

  render() {
    return (
      <main>
        <header>
          <h1>Insurgent finished</h1>
          <h2>id: {this.props.insurgentId}</h2>
          <nav>
            <Link href="/">
              <a>Back to index</a>
            </Link>
          </nav>
        </header>
      </main>
    );
  }
}

export default Index;
