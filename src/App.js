import React from 'react';
import './App.css';
import Dashboard from "./js/components/dashboard/Dashboard";
import SignIn from "./js/components/auth/SignIn.jsx";
import { Provider} from 'react-redux'
import store from "./js/store";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import DialogCustom from "./js/components/dialog/DialogCustom";
import i18n from "./js/i18n/i18n";
import Container from "@material-ui/core/Container";
import ForgotPassword from "./js/components/auth/ForgotPassword";
import SignUp from "./js/components/auth/SignUp";
function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Provider store={store}>
                  <Route exact path ='/signin' component={SignIn} />
                  <Route exact path ='/' component={Dashboard} />
                  <Route path ='/reset_password:token?' component={ForgotPassword} />
                  <Route path ='/signup' component={SignUp} />
              </Provider>
          </Switch>
      </BrowserRouter>

  );
}

export default App;
