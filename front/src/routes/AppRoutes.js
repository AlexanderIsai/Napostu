import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import MainPage from '../pages/MainPage/MainPage.js';
import UserPage from '../pages/UserPage/UserPage.js';
import Page404 from '../pages/Page404/Page404.js';
import SignIn from "../pages/LoginPage/LoginPage.js";


const AppRoutes = () => {
  return (
    <div className="app-routes">
      <Switch>
        <Redirect exact from="/" to="/main"/>
        <Route exact path="/login" component={SignIn}/>
        <Route exact path="/main" component={MainPage}/>
        <Route exact path="/users/:userId" component={UserPage}/>
        <Route path="*" component={Page404}/>
      </Switch>
    </div>
  );
};

export default AppRoutes;
