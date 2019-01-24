import React from 'react';

const Full = ({ children }) => {
  return (
    <div className="full-layout">
      <section className="content">{children}</section>

      <style jsx>{`
        div.full-layout {
          display: flex;
          justify-content: center;
          height: 100vh;
        }

        section.content {
          background: lightblue;
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
};

export { Full };
