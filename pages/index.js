import React from 'react';
import Link from 'next/link';

//Component
class Index extends React.Component {
  render() {
    return (
      <main>
        <header>
          <h1>Insurgent composer</h1>
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

export default Index;
