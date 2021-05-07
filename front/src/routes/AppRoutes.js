import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import { connect } from "react-redux";

import MainPage from '../pages/MainPage/MainPage.js';
import UserPage from '../pages/UserPage/UserPage.js';
import Page404 from '../pages/Page404/Page404.js';
import SignIn from "../pages/LoginPage/LoginPage.js";


const AppRoutes = (props) => {

  const { userActive } = props.auth;

  return (
    <div className="app-routes">
      <Switch>
        <Redirect exact from="/" to="/main"/>
        <Route exact path="/login" component={SignIn}/>
        <ProtectedRoute authenticated={userActive} exact path="/main" component={MainPage}/>
        <ProtectedRoute authenticated={userActive} exact path="/api/users/:userId" component={UserPage}/>
        <Route path="*" component={Page404}/>
      </Switch>
    </div>
  );
};

const ProtectedRoute = ({authenticated, ...rest}) => {
  if (authenticated) {
    return <Route {...rest} />
  }
  return <Redirect to='/login'/>
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(AppRoutes);
