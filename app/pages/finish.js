import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

//Component
class Finish extends React.Component {
  static async getInitialProps({ ctx, res, query: { id } }) {
    const request = await fetch(`${baseUrl}/api/${id}`);

    const insurgent = await request.json();

    if (insurgent.finished) {
      if (res) {
        res.writeHead(302, {
          Location: '/gallery'
        });
        res.end();
      } else {
        Router.push('/gallery');
      }
    }

    return { insurgent };
  }

  render() {
    return (
      <main>
        <header>
          <h1>Insurgent finished</h1>
          <h2>id: {this.props.insurgent._id}</h2>
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

export default Finish;
