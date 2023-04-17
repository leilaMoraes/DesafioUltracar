import React from 'react';
import { Switch, Route } from 'react-router-dom';
import InitialPage from './Pages/InitialPage';

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/" component={ InitialPage } />
    </Switch>
  );
}