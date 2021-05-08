import React from 'react';
import useStyles from './AppStyles';

import {useEffect} from 'react';
import {connect} from 'react-redux';

import {getUsers} from "./store/users/operations";
import {getPosts} from "./store/posts/operations";

import Loading from "./components/Loading/Loading";

// <<<<<<< HEAD
// import {Header} from './components/Header/Header';
// import AppRoutes from './routes/AppRoutes';
import Body from "./components/Body/Body";
// =======
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';

// >>>>>>> dev


const App = (props) => {
  const {isLoading, getUsers, getPosts, users, posts} = props;

  useEffect(() => {
    getUsers();                // console.log("USERS (from App.js useEffect) : ", users);
    getPosts();                // console.log("POSTS (from App.js useEffect) : ", posts);
  }, [getUsers, getPosts]);


  // ----- если с сервера прилетел users undefined -----
  // let ind, userActive;
  if (!props.users[0]) {
    console.log("No users from server");    // throw new Error();
  } else {
    console.log("users from redux state: ", users);
    console.log("posts from redux state: ", posts);
    // ind = users.findIndex(obj => obj._id === 1);
    // console.log("userActive ID : ", ind);
    // console.log("userActive : ", users[ind]);
    // userActive = users[ind];
    // console.log("userActive email : ", userActive.email);
  }

  const classes = useStyles();

  if (isLoading) {
    return (<Loading/>)
  }

  return (
    <div className={classes.root}>
      <Header />

      {/*<Body userActive = {userActive} />*/}
      <Body />

      <AppRoutes />

    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    isLoading: state.users.isLoading,
    users: state.users.users,
    posts: state.posts.posts,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
    getPosts: () => dispatch(getPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
