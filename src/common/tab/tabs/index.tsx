import React from 'react';
import Props from '../../model/Props';

const Tabs = (props: Props) => {
  return <div className="nav-tabs-custom">{props.children}</div>;
};

export default Tabs;
