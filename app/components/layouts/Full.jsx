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
          flex-grow: 1;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export { Full };
