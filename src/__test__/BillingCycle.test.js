import { BillingCycle } from 'billingCycle/billingCycle';
import TabHeader from 'common/tab/tabHeader';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; //ES6 modules
import TabContent from 'common/tab/tabContent';

const middlewares = [];
const mockStore = configureStore(middlewares);

configure({ adapter: new Adapter() });

fdescribe('Dashboard', () => {
  let wrapper;
  const summary = { credit: 10, debt: 5 };
  const initialState = {
    tab: { selected: '', visible: false },
  };
  const store = mockStore(initialState);
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <BillingCycle />
      </Provider>
    );
  });
  it('Show four render component TabHeader', () => {
    expect(wrapper.find(TabHeader)).toHaveLength(4);
  });
  it('Show value of the first component TabHeader', () => {
    const TabHeaderComponent = wrapper.find(TabHeader).at(0);
    expect(TabHeaderComponent.props().label).toBe('Listar');
  });
  it('Show value of the second component TabHeader', () => {
    const TabHeaderComponent = wrapper.find(TabHeader).at(1);
    expect(TabHeaderComponent.props().label).toBe('Incluir');
  });
  it('Show value of the third component TabHeader', () => {
    const TabHeaderComponent = wrapper.find(TabHeader).at(2);
    expect(TabHeaderComponent.props().label).toBe('Alterar');
  });
  it('Show value of the fourth component TabHeader', () => {
    const TabHeaderComponent = wrapper.find(TabHeader).at(3);
    expect(TabHeaderComponent.props().label).toBe('Excluir');
  });

  it('Show four render component TabContent', () => {
    expect(wrapper.find(TabContent)).toHaveLength(4);
  });
});
