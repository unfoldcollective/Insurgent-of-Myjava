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
          width: 100vw;
          height: 100vh;
        }
      `}</style>
    </main>
  );
};

export default Main;
