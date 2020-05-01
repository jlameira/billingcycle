/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

const header: React.FC = () => {
  return (
    <header className="main-header">
      <a href="/#/" className="logo">
        <span className="logo-mini">
          <b>CC</b>
        </span>
        <span className="logo-lg">
          <i className="fa fa-money"></i>
          <b> Control </b>Cash
        </span>
      </a>
      <nav className="navbar navbar-static-top">
        <a href="/#/" className="sidebar-toggle" data-toggle="offcanvas"></a>
      </nav>
    </header>
  );
};

export default header;
