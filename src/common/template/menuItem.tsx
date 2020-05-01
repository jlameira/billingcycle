import React from 'react';
import { Link } from 'react-router-dom';

export const menuItem: React.FC<any> = (props) => {
  return (
    <li>
      <Link to={props.path}>
        <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
      </Link>
    </li>
  );
};
