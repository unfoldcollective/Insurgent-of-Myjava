import React from 'react';

const Full = ({ children }) => {
  return (
    <div className="container">
      <section className="content">{children}</section>

      <style jsx>{`
        div.container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        section.content {
          color: red;
        }
      `}</style>
    </div>
  );
};

export { Full };
