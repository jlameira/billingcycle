import { ContenHeader } from 'common/template/ContenHeader';
import { ValueBox } from 'common/widget/ValueBox';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { DashboardModel } from './model/dashboardModel';
import { getSummary } from './reducer/dashboardActions';
import { Content, Row } from './style';
import { bindActionCreators } from 'redux';

interface DashboardType {
  dashboard: DashboardModel;
}

const Dashboard: React.FC = (props: any) => {
  const { summary } = props;

  useEffect(() => {
    props.getSummary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [0]);

  return (
    <div>
      <ContenHeader title="Dashboard" small="Versão 1.0" />
      <Content>
        <Row>
          <ValueBox
            cols="12 4"
            color="green"
            icon="bank"
            value={`R$ ${summary.credit}`}
            text="Total Credits"
          />
          <ValueBox
            cols="12 4"
            color="red"
            icon="credit-card"
            value={`R$ ${summary.debt}`}
            text="Total Debits"
          />
          <ValueBox
            cols="12 4"
            color="blue"
            icon="money"
            value={`R$ ${summary.credit - summary.debt}`}
            text="Consolidated Amount"
          />
        </Row>
      </Content>
    </div>
  );
};
const mapStateProps = (state: any) => ({
  summary: state.dashboard.summary,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ getSummary }, dispatch);

export default connect(mapStateProps, mapDispatchToProps)(Dashboard);
