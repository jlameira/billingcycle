import React from 'react';
import { menuItem as MenuItem } from './menuItem';
import { menuTree as MenuTree } from './menuTree';

export const myMenu: React.FC = () => {
  return (
    <ul className="sidebar-menu">
      <MenuItem path="/" label="Dashboard" icon="dashboard" />
      <MenuTree label="Cadastro" icon="edit">
        <MenuItem
          path="/billingCycles"
          label="Ciclo de Pagamentos"
          icon="usd"
        />
      </MenuTree>
    </ul>
  );
};
