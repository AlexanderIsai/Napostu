import React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';

import {getUsers} from "./store/users/operations";
import Loading from "./components/Loading/Loading";

import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';


const App = (props) => {
  const {getUsers, users, isLoading} = props;

  useEffect(() => {
    getUsers();
  }, [getUsers]);


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
  console.log("users from redux state: ", users);


  if (isLoading) {
    return (<Loading/>)
  }

  return (
    <div className="App">
      <Header/>
      <AppRoutes/>

      {/* Кнопка для проверки компонента ErrorBoundary - если замечаний нет - удаляем проверку*/}
      <button onClick={handleClick}>Throw Error</button>
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
