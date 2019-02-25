import React from 'react';

const HelpVideo = ({ file, endAction }) => {
  return (
    <div className="canvas-help" onClick={() => endAction()}>
      <video
        src={`/static/videos/${file}`}
        onEnded={() => endAction()}
        autoPlay
      />

      <style jsx>
        {`
          div.canvas-help {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 100000;
            background: rgba(0, 0, 0, 0.5);
          }

          video {
            max-width: 60vw;
          }
        `}
      </style>
    </div>
  );
};

export default HelpVideo;
