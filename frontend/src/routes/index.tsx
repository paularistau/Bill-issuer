import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom';
import { Payments } from '../pages/Payments';
import { Debits } from '../pages/Debits';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/payments">
          <Payments />
        </Route>
        <Route path="/">
          <Debits />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
