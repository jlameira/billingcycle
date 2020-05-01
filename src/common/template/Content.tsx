import React from 'react';

export const Content: React.FC<any> = (props) => {
  return <section className="content">{props.children}</section>;
};
