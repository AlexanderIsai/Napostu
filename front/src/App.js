import React from 'react';
import useStyles from './AppStyles';

import {useEffect} from 'react';
import {connect} from 'react-redux';

import {getUsers} from "./store/users/operations";

import Loading from "./components/Loading/Loading";

// <<<<<<< HEAD
// import {Header} from './components/Header/Header';
// import AppRoutes from './routes/AppRoutes';
import Body from "./components/Body/Body";
// =======
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';
import {getPosts} from "./store/posts/operations";
import {getComments} from "./store/comments/operations";

// >>>>>>> dev


const App = (props) => {
  const {users, isLoading, posts, getUsers, getPosts, getComments, comments} = props;

  useEffect(() => {
    getUsers()
    getPosts()
    getComments()
  }, [getUsers, getPosts, getComments]);





  // Кнопка для проверки компонента ErrorBoundary - потестите посмотрите компонент ErrorBoundary,
  // если замечаний нет - удаляем проверку
  const [error, setError] = React.useState(false);
  const handleClick = () => {
    setError(true);
  };
  if (error) throw new Error();
  // __________________________________________________


  // ----- если с сервера прилетел users undefined -----
  if (!users) throw new Error();
  // console.log("users from redux state: ", users);
  // console.log("posts from redux state: ", posts);
  // console.log("comments from redux state: ", comments);




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
    comments: state.comments.comments
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
