import React, { ReactNode } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';
import PivotPage from '../../ui/pages/pivotPage';
import AddUserPage from '../../ui/pages/addUserPage';
import EditUserPage from '../../ui/pages/editUserPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';


export const renderRoutes = () => {
  const renderComponent = (Component): ReactNode => {
    return (<Component />);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/pivot-index" />} />
          <Route
            path="/pivot-index"
            render={() => renderComponent(PivotPage)}
          />
          <Route
            path="/addUser"
            render={() => renderComponent(AddUserPage)}
          />
          <Route
            path="/editUser"
            render={() => renderComponent(EditUserPage)}
          />
          <Route path="*" render={() => <div> not found </div>} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
