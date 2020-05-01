import { ContenHeader } from 'common/template/ContenHeader';
import { ValueBox } from 'common/widget/ValueBox';
import Dashboard from 'Dashboard';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; //ES6 modules

const middlewares = [];
const mockStore = configureStore(middlewares);

configure({ adapter: new Adapter() });

describe('Dashboard', () => {
  let wrapper;
  const summary = { credit: 10, debt: 5 };
  const initialState = { dashboard: { summary: { credit: 10, debt: 5 } } };
  const store = mockStore(initialState);
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Dashboard {...summary} />
      </Provider>
    );
  });
  it('Show render component one ContenHeader', () => {
    expect(wrapper.find(ContenHeader)).toHaveLength(1);
  });
  it('Show render component three ValueBox', () => {
    expect(wrapper.find(ValueBox)).toHaveLength(3);
  });
  it('Show value of the first component ValueBox', () => {
    const ValueBoxComponent = wrapper.find(ValueBox).at(0);
    expect(ValueBoxComponent.props().value).toBe('R$ 10');
  });

  it('Show value of the second component ValueBox', () => {
    const ValueBoxComponent = wrapper.find(ValueBox).at(1);
    expect(ValueBoxComponent.props().value).toBe('R$ 5');
  });

  it('Show value of the third component ValueBox', () => {
    const ValueBoxComponent = wrapper.find(ValueBox).at(2);
    expect(ValueBoxComponent.props().value).toBe('R$ 5');
  });
});
