import {SET_USERS} from './types';

export const setUsers = (data) => {
  return ({type: SET_USERS, payload: data})
}