import React from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';


const UserPage = () => {

  const params = useParams();
  const {userId} = params;
  console.log("userId: ", userId);

  useEffect(() => {
    axios(`/api/users/${userId}`)
      .then(res => {
        console.log("user from http://localhost:3000/users/userId (userId -> 01 или -> 02):", res.data);
      })
  }, [userId]);

  return (
    <h1>USER PAGE</h1>
  )
}

export default UserPage;