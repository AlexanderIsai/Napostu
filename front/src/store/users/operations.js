import {LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE} from './types';
import axios from "axios";
import {setUsers} from "./actions";
import {useParams} from "react-router-dom";

const path = `/userfeed`;

export const getUsers = () => (dispatch, getState) => {
  dispatch({type: LOAD_USERS_REQUEST})

  axios(`${path}`)
    .then(res => {
      const data = res.data;

      return data;
    })
    .then(res => {
      dispatch(setUsers(res));
        dispatch({type: LOAD_USERS_SUCCESS, payload: false})
      return res;
    })
    .catch(error => {
      dispatch({type: LOAD_USERS_FAILURE, payload: error})
    })
}
export const getUser =() => (dispatch) => {
    const params = useParams();
    const {userId} = params;
    axios(`${path}`)
        .then(res => {
            res.data.forEach(user => {
                if (user._id == userId) {
                    console.log(user);
                    return user
                }
            })
        })
}
