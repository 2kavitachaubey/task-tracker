import React from "react";

// Wraps All pages
const Layout = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="layout-header">
        <h1 className="heading-primary">Task Tracker</h1>
        <p className="heading-secondary">Stay Organized, Stay Ahead.</p>
      </div>
      {children}
    </div>
  );
};

export default Layout;
