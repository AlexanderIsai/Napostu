import React from 'react';
import useStyles from './AppStyles';

import {useEffect} from 'react';
import {connect} from 'react-redux';

import {getUsers} from "./store/users/operations";
import Loading from "./components/Loading/Loading";

import {Header} from './components/Header/Header';
// import AppRoutes from './routes/AppRoutes';
import Body from "./components/Body/Body";


const App = (props) => {
  const {getUsers, users, isLoading} = props;

  let id, userActive;
  useEffect(() => {
    getUsers();
    console.log("USERS : ", users)
  }, [getUsers]);


  // useEffect(() => {
  //   id = users.findIndex(obj => obj.id === "01");
  //   console.log("userActive ID : ", id);
  //   console.log("userActive : ", users[id]);
  //   userActive = users[id];
  //   console.log("userActive email : ", userActive.email);
  // }, []);



  // Кнопка для проверки компонента ErrorBoundary - потестите посмотрите компонент ErrorBoundary,
  // если замечаний нет - удаляем проверку
  const [error, setError] = React.useState(false);
  const handleClick = () => {
    setError(true);
  };
  if (error) throw new Error();
  // __________________________________________________


  // ----- если с сервера прилетел users undefined -----
  if (!props.users[0]) {
    // throw new Error();
    console.log("!!!!!!!!!")
  } else {
    console.log("users from redux state: ", users);

    id = users.findIndex(obj => obj.id === "01");
    console.log("userActive ID : ", id);
    console.log("userActive : ", users[id]);
    userActive = users[id];
    console.log("userActive email : ", userActive.email);

  }

  const classes = useStyles();

  if (isLoading) {
    return (<Loading/>)
  }

  return (
    <div className={classes.root}>
      <Header />
      {/*<div style={{background: " \"linear-gradient(90deg, rgba(240,241,242,1) 0%, \" +\n" +*/}
      {/*    "        \"rgba(253,253,253,1) 25%, rgba(255,255,255,1) 50%, rgba(254,254,254,1) 75%, \" +\n" +*/}
      {/*    "        \"rgba(240,241,242,1) 100%)\"", height: "36px", position: "sticky", top: "0px"}}></div>*/}


      <Body userActive ={userActive}/>

      {/*<AppRoutes />*/}

      {/* Кнопка для проверки компонента ErrorBoundary - если замечаний нет - удаляем проверку*/}
      {/*<button onClick={handleClick}>Throw Error</button>*/}
      {/*____________________________________________________*/}

    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    isLoading: state.users.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
