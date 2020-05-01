import React from 'react';

export const ContenHeader: React.FC<any> = (props) => {
  return (
    <div>
      <section className="content-header">
        <h1>
          {props.title}
          <small>{props.small}</small>
        </h1>
      </section>
    </div>
  );
};
