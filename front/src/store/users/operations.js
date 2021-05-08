import {LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE} from './types';
import axios from "axios";
import {setUsers} from "./actions";

const pathUser = `/userfeed`;

export const getUsers = () => (dispatch, getState) => {
  dispatch({type: LOAD_USERS_REQUEST})

  axios(`${pathUser}`)
    .then(res => {
      const data = res.data;    // console.log("LOAD_USERS_SUCCESS: ", data);
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
