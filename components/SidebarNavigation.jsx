import React from 'react';
import Router from 'next/router';

const SidebarNavigation = ({ advanceStep, activateHelp }) => {
  return (
    <>
      <ul>
        <li>
          <button onClick={() => Router.push('/')}>Home</button>
        </li>
        <li>
          <button onClick={() => advanceStep()}>Next</button>
        </li>
        <li>
          <button onClick={() => activateHelp()}>Help</button>
        </li>

        <style jsx>{`
          ul {
            list-style: none;
            display: flex;
          }
        `}</style>
      </ul>
    </>
  );
};

export default SidebarNavigation;
