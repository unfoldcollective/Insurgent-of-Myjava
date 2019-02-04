import React from 'react';

const Main = ({ children }) => {
  return (
    <main className="root-layout">
      {children}

      <style jsx global>{`
        @font-face {
          font-family: 'Marlene';
          src: url('/static/fonts/WF-031857-010432-001542.eot');
          src: url('/static/fonts/WF-031857-010432-001542.eot?#iefix')
              format('embedded-opentype'),
            url('/static/fonts/WF-031857-010432-001542.woff') format('woff'),
            url('/static/fonts/WF-031857-010432-001542.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'SourceSans';
          src: url('/static/fonts/SourceSansPro-SemiBold.eot');
          src: url('/static/fonts/SourceSansPro-SemiBold.eot?#iefix')
              format('embedded-opentype'),
            url('/static/fonts/SourceSansPro-SemiBold.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }

        html {
          -moz-osx-font-smoothing: grayscale;
          font-smoothing: antialiased;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        button {
          border: none;
        }

        body {
          overflow: hidden;
          position: relative;
          width: 100vw;
          height: 100vh;
          font-family: Marlene, serif;
          background: black;
          color: #e6e1dc;
        }

        main {
          max-width: 1920px;
          margin: 0 auto;
        }
      `}</style>
    </main>
  );
};

export { Main };
