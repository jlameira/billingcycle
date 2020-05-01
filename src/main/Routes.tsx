import { BillingCycle } from 'billingCycle/billingCycle';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from 'Dashboard';

export default () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/billingCycles" component={BillingCycle} />
    <Redirect from="*" to="/" />
  </Switch>
);
