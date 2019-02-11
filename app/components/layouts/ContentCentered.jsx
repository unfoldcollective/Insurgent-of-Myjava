import React from 'react';

const ContentCentered = ({ children }) => {
  return (
    <div className="content-centered">
      {React.Children.map(children, (c, i) => (
        <div key={`content_item_${i}`} className="content-item">
          {c}
        </div>
      ))}

      <style jsx>{`
        div.content-centered {
          display: flex;
          height: 100vh;
          justify-content: center;
        }

        div.content-item {
          flex-basis: 33.333%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export { ContentCentered };
