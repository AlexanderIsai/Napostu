import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import MainPage from '../pages/MainPage/MainPage';
import UserPage from '../pages/UserPage/UserPage.js';
import Page404 from '../pages/Page404/Page404.js';


const AppRoutes = (props) => {
  const {userActive} = props;

  return (
    <div className="app-routes">
      <Switch>
        <Redirect exact from="/" to="/main"/>
        <Route exact
               path="/main"
               render={(routerProps) => (
                 <MainPage {...routerProps} userActive={userActive}/>
               )}
        />
        {/*<Route exact path="/main" component={MainPage}/>*/}

        <Route exact path="/users/:userId" component={UserPage}/>
        <Route path="*" component={Page404}/>
      </Switch>
    </div>
  );
};

export default AppRoutes;
