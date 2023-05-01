import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Payments } from '../pages/Payments';
import { Debts } from '../pages/Debts';
import Layout from '../layout';

function Routes() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Redirect
            to={{
              pathname: '/debts',
              state: { from: '/' },
            }}
          />
          <Route exact path="/debts" component={Debts} />
          <Route exact path="/payments" component={Payments} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default Routes;
