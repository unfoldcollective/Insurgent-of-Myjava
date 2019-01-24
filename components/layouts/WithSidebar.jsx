import React from 'react';

const WithSidebar = ({ sidebar, children }) => {
  return (
    <div className="sidebar-layout">
      <section className="content">{children}</section>
      <aside className="sidebar">{sidebar}</aside>

      <style jsx>{`
        div.sidebar-layout {
          display: flex;
          height: 100vh;
        }

        section.content {
          flex-basis: 75%;
          background: lightblue;
        }

        aside.sidebar {
          flex-basis: 25%;
          background: lightcoral;
        }
      `}</style>
    </div>
  );
};

export { WithSidebar };
