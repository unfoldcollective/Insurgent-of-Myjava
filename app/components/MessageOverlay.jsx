import React from 'react';

const MessageOverlay = ({ message }) => {

  return (
    <div className="message-overlay">
      <p className="message">{message}</p>
      <style jsx>{`
        div.message-overlay {
          position: absolute;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          z-index: 10000000;
        }

        p.message {
          font-family: SourceSans, sans-serif;
          max-width: 50rem;
          margin: 2rem 0;
          text-align: center;
          font-size: 2rem;
        }
      `}</style>
    </div>
  );
};

export default MessageOverlay;
