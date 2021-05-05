import React from 'react';
import './Body.scss';
import useStyles from './BodyStyles';

import AppRoutes from "../../routes/AppRoutes";

const Body = (props) => {
  const {userActive} = props;

  const classes = useStyles();
  return (
    // <>
      <div className={classes.wrapper}>
        <AppRoutes userActive ={userActive}/>
      </div>
    // </>
  );
}

export default Body;