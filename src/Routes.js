import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DoneServices from './Pages/DoneServices';
import EmployeePage from './Pages/EmployeePage';
import NewCustomer from './Pages/NewCustomer';
import QrCode from './Pages/QrCode';
import ServicesInProgress from './Pages/ServicesInProgress';
import Login from './Pages/Login';
import NewService from './Pages/NewService';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/employee_page" component={ EmployeePage } />
      <Route exact path="/new_customer" component={ NewCustomer } />
      <Route exact path="/qr_code" component={ QrCode } />
      <Route exact path="/new_service" component={ NewService } />
      <Route exact path="/done_services" component={ DoneServices } />
      <Route exact path="/services_in_progress" component={ ServicesInProgress } />
    </Switch>
  );
}
