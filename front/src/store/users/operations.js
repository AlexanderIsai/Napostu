import {LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE} from './types';
import axios from "axios";
import {setUsers} from "./actions";

const path = `/api/users`;

export const getUsers = () => (dispatch, getState) => {
  dispatch({type: LOAD_USERS_REQUEST})

  axios(`${path}`)
    .then(res => {
      const data = res.data;       // console.log(data);
      dispatch({type: LOAD_USERS_SUCCESS, payload: data})
      return data;
    })
    .then(res => {
      dispatch(setUsers(res));
      return res;
    })
    .catch(error => {
      dispatch({type: LOAD_USERS_FAILURE, payload: error})
    })
}
