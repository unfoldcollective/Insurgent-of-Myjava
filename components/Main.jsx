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

        body {
          overflow: hidden;
        }
      `}</style>
    </main>
  );
};

export default Main;
