import React from 'react';
import './Body.scss';
import useStyles from './BodyStyles';

import AppRoutes from "../../routes/AppRoutes";
import {getUsers} from "../../store/users/operations";
import {connect} from "react-redux";
import MainPage from "../../pages/MainPage/MainPage";

const Body = (props) => {
  const {userActive} = props;
  console.log("userActive (from Body.js) : ", userActive);

  const classes = useStyles();
  return (
    <>
    {/*<div className={classes.wrapper}>*/}

      {/*<AppRoutes userActive ={userActive}/>*/}

    {/*</div>*/}
    </>
  );
}


const mapStateToProps = (state) => {
  return {
    isLoading: state.users.isLoading,
    users: state.users.users,
    userActive: state.auth.userActive,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Body);