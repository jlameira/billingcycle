import React from 'react';
import { myMenu as MyMenu } from './myMenu';

export const sidebar: React.FC = () => {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <MyMenu />
      </section>
    </aside>
  );
};
