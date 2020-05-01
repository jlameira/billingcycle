/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

export const menuTree: React.FC<any> = (props) => {
  return (
    <li className="treeview">
      <a href="">
        <i className={`fa fa-${props.icon}`}></i>
        {props.label}
        <i className="fa fa-angle-left pull-right"></i>
      </a>
      <ul className="treeview-menu">{props.children}</ul>
    </li>
  );
};
