import axios from 'axios';
import { requestHeaders } from '../../helpers/requests_helper';
import { SET_USER_ACTIVE } from './types';

export const authenticate = (email, password) => (dispatch) => {
    axios({
        method: 'post',
        url: '/login',
        data: `email=${email}&password=${password}`,
        headers: requestHeaders
      })
      .then(res => {
         dispatch({type: SET_USER_ACTIVE, payload: res.data.user})
         localStorage.setItem('token', res.data.user.token);
        //  console.log(requestHeaders);
        //   console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
}

export const handleReload = (token) => (dispatch) => {
  // console.log('toke in handlereload --- ', token);
  axios({
    method: 'post',
    url: '/reload',
    data: `token=${token}`,
    headers: requestHeaders
  })
  .then(res => {
     dispatch({type: SET_USER_ACTIVE, payload: res.data.user})
  })
  .catch(err => {
    console.log(err);
  });
}
