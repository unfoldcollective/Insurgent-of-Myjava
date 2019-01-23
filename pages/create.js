import React from 'react';
import Link from 'next/link';

import Canvas from '../components/Canvas.jsx';

//Component
class Create extends React.Component {
  render() {
    return (
      <main>
        <Canvas />
        <p>
          <Link href="/">
            <a>Start</a>
          </Link>
        </p>
      </main>
    );
  }
}

export default Create;
