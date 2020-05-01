import React, { useEffect } from 'react';
import { ContenHeader } from 'common/template/ContenHeader';
import { Content } from 'Dashboard/style';
import Tabs from 'common/tab/tabs';
import TabsHeader from 'common/tab/tabsHeader';
import TabsContent from 'common/tab/tabsContent';
import TabHeader from 'common/tab/tabHeader';
import TabContent from 'common/tab/tabContent';
import { selectTab, showTabs } from 'common/tab/tabActions';
import { useDispatch } from 'react-redux';

export const BillingCycle: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectTab('tabList'));
    dispatch(showTabs('tabList', 'tabCreate', 'tabUpdate', 'tabDelete'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ContenHeader title="Ciclos de Pagamento" small="Cadastro" />
      <Content>
        <Tabs>
          <TabsHeader>
            <TabHeader label="Listar" icon="bars" target="tabList" />
            <TabHeader label="Incluir" icon="plus" target="tabCreate" />
            <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
            <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
          </TabsHeader>
          <TabsContent>
            <TabContent id="tabList">
              <h1>Lista</h1>
            </TabContent>
            <TabContent id="tabCreate">
              <h1>Create</h1>
            </TabContent>
            <TabContent id="tabUpdate">
              <h1>Update</h1>
            </TabContent>
            <TabContent id="tabDelete">
              <h1>Delete</h1>
            </TabContent>
          </TabsContent>
        </Tabs>
      </Content>
    </div>
  );
};
