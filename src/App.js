import React from 'react';
import './App.css';
import Dashboard from "./js/components/dashboard/Dashboard";
import SignIn from "./js/components/auth/SignIn";
import { Provider} from 'react-redux'
import store from "./js/store";
import {BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Provider store={store}>
                  <Route exact path ='/signin' component={SignIn} />
                  <Route exact path ='/' component={Dashboard} />
              </Provider>
          </Switch>
      </BrowserRouter>

  );
}

export default App;
