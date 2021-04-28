import React from 'react';
import axios from 'axios';
import {useEffect} from 'react';
import {Header} from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';


function App() {

  useEffect(() => {
    axios(`/api/users`)
      .then(res => {
        console.log("users from http://localhost:3000/main:", res.data);
      })
  }, [])

  return (
    <div className="App">
      <Header/>
      <AppRoutes/>
    </div>
  );
}

export default App;
