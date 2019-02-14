import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

import Finale from '../components/Finale.jsx';

//Component
class Finish extends React.Component {
  static async getInitialProps({ req, res, query: { id } }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';

    const request = await fetch(`${baseUrl}/api/${id}`);

    const insurgent = await request.json();

    if (insurgent.finished) {
      const dest = `/gallery/${insurgent._id}`;
      if (res) {
        res.writeHead(302, {
          Location: dest
        });
        res.end();
      } else {
        Router.push(dest);
      }
    }

    return { insurgent };
  }

  render() {
    return <Finale insurgent={this.props.insurgent} />;
  }
}

export default Finish;
