import {LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE, UPDATE_SUBSCRIBE_SUCCESS, SET_USERS} from './types';
import axios from "axios";
import {sendRequestForUpdateSub, setUsers} from "./actions";
import {requestHeaders} from "../../helpers/requests_helper";

const pathUser = `/userfeed`;

export const getUsers = () => (dispatch, getState) => {
  dispatch({type: LOAD_USERS_REQUEST})

  axios(`${pathUser}`)
    .then(res => {
      const data = res.data;
      dispatch({type: LOAD_USERS_SUCCESS})
      return data;
    })
    .then(res => {
      dispatch(setUsers(res));
      return res;
    })
    .catch(error => {
      dispatch({type: LOAD_USERS_FAILURE, payload: error})
    })
};


export const updateSubDB = (userId, ownId) => (dispatch) => {
  axios({
    method: 'POST',
    url: '/updatesub',
    data: `id=${userId}&ownId=${ownId}`,
    headers: requestHeaders
  }).then(res => {
    dispatch(sendRequestForUpdateSub());
    return res;
  }).then(res => {
    if (res) {
      dispatch({type: UPDATE_SUBSCRIBE_SUCCESS})
    }
  })
    .catch(err => {
      console.log(err);

    })
};
