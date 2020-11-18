import React from 'react';
import './App.css';
import Dashboard from "./js/components/dashboard/Dashboard";
import SignIn from "./js/components/auth/SignIn.jsx";
import {Provider} from 'react-redux'
import store from "./js/store";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import DialogCustom from "./js/components/dialog/DialogCustom";
import i18n from "./js/i18n/i18n";
import Container from "@material-ui/core/Container";
import ForgotPassword from "./js/components/auth/ForgotPassword";
import SignUp from "./js/components/auth/SignUp";
import Page404 from "./js/components/common/Page404";
import HomePage from "./js/components/common/HomePage";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Switch>

                    <Route exact path='/signin' component={SignIn}/>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/reset_password:token?' component={ForgotPassword}/>
                    <Route exact path='/signup' component={SignUp}/>
                    <Route  component={Page404}/>

                </Switch>
            </Provider>
        </BrowserRouter>

    );
}

export default App;
