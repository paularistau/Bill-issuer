import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Payments } from '../pages/Payments';
import { Debts } from '../pages/Debts';
import Layout from '../layout';
import { PaymentCompleted } from '../components/payment';
import { CustomRouter } from './customRouter';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function Routes() {
  return (
    // <CustomRouter location={history.location} history={history}>
    <Switch>
      <Layout>
        <Route exact path="/" render={() => <Redirect to="/debts" />} />
        <Route exact path="/debts" component={Debts} />
        <Route exact path="/payments" component={Payments} />
        <Route exact path="/payments/:id" component={PaymentCompleted} />
      </Layout>
    </Switch>
    // </CustomRouter>
  );
}

export default Routes;
