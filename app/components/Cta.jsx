import React from 'react';
import Router from 'next/router';

const Cta = ({ href, action, children, className, active }) => {
  return (
    <button
      className={`cta ${className ? className : ''} ${active ? 'current' : ''}`}
      onClick={() => (href ? Router.push(href) : action())}
    >
      {children}

      <style jsx>
        {`
          button.cta {
            font-family: SourceSans;
            color: #e6e1dc;
            background: transparent;
            border: none;
            border-color: transparent;
            border-style: solid;
            border-width: 2px;
            text-transform: uppercase;
            font-size: 1.5rem;
            margin: 0 0.5rem;
            outline: none;
          }

          button.cta.big {
            border-color: #e6e1dc;

            font-size: 2rem;
            border-width: 3px;
            padding: 0.5rem 1rem;
          }

          button.cta.current {
            border-color: #e6e1dc;
            border-width: 0;
            border-bottom-width: 2px;
          }
        `}
      </style>
    </button>
  );
};

export default Cta;
