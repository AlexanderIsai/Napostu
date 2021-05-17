import React from 'react';
import useStyles from './AppStyles';
import {connect} from 'react-redux';
import {useEffect} from 'react';

import Loading from "./components/Loading/Loading";
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';
import {getUsers} from "./store/users/operations";
import {getPosts} from "./store/posts/operations";
import {getComments} from "./store/comments/operations";


const App = (props) => {
  const {isLoading, getUsers, getPosts, getComments} = props;

  useEffect(() => {
    getUsers()
    getPosts()
    getComments()
  }, [getUsers, getPosts, getComments]);


  const classes = useStyles();
  if (isLoading) {
    return (<Loading />)
  }

  return (
    <div className={classes.root}>
      <Header />
      <AppRoutes />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.users.isLoading,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
    getPosts: () => dispatch(getPosts()),
    getComments: () => dispatch(getComments())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);