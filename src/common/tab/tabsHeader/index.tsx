import React from 'react';
import Props from '../../model/Props';

const TabsHeader = (props: Props) => (
  <ul className="nav nav-tabs">{props.children}</ul>
);

export default TabsHeader;
