import {SEND_UPDATE_SUBSCRIBE_REQUEST, SET_USERS} from './types';

export const setUsers = (data) => {
  return ({type: SET_USERS, payload: data})
}

export const sendRequestForUpdateSub = () => {
  return ({type: SEND_UPDATE_SUBSCRIBE_REQUEST});
}