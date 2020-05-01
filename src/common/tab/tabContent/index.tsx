import React from 'react';
import { useSelector } from 'react-redux';
import Props from 'common/model/Props';
import If from 'common/operator/If';

interface PropsTabContent extends Props {
  id: any;
}

const TabContent = ({ id, children }: PropsTabContent) => {
  const tab = useSelector((state: any) => state.tab);
  const selected = tab.selected === id;
  const visible: boolean = tab.visible[id];

  return (
    <If test={visible}>
      <div id={id} className={`tab-pane ${selected ? 'active' : ''}`}>
        {children}
      </div>
    </If>
  );
};

export default TabContent;
