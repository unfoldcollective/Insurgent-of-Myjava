import React from 'react';

const Main = ({ children }) => {
  return (
    <main className="root-layout">
      {children}

      <style jsx global>{`
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
