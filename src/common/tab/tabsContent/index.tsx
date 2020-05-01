import React from 'react';
import Props from '../../model/Props';

const TabsContent = (props: Props) => {
  return <div className="tab-content"> {props.children} </div>;
};

export default TabsContent;
