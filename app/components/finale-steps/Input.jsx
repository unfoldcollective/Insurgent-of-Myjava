import React from 'react';
import Keyboard from '../Keyboard.jsx';
import Cta from '../Cta.jsx';

const Input = ({ children, nextAction, required }) => {
  return (
    <article className="input-overlay">
      <header className="input-header">{children}</header>
      <Keyboard action={nextAction} required={required} />

      {!required ? (
        <div className="input-skip">
          <Cta action={nextAction} className="big">
            Skip
          </Cta>
        </div>
      ) : null}

      <style jsx>
        {`
          article.input-overlay {
            position: absolute;
            z-index: 1000000;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            background: rgba(0, 0, 0, 0.5);
          }

          header.input-header {
            text-align: center;
            margin-bottom: 2rem;
          }

          div.input-skip {
            position: absolute;
            right: 5vw;
            bottom: 5vh;
          }
        `}
      </style>
    </article>
  );
};

export { Input };
