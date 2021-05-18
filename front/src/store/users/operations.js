import {
    LOAD_USERS_REQUEST,
    LOAD_USERS_SUCCESS,
    LOAD_USERS_FAILURE,
    UPDATE_SUBSCRIBE_SUCCESS,
    UPDATE_SUBSCRIBERS
} from './types';
import axios from "axios";
import {sendRequestForUpdateSub, setUsers, updateSubscribers} from "./actions";
import {requestHeaders} from "../../helpers/requests_helper";


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
        dispatch({type: LOAD_USERS_SUCCESS, payload: false})
      return res;
    })
    .catch(error => {
      dispatch({type: LOAD_USERS_FAILURE, payload: error})
    })
}

export const updateSubDB = (e, userId, ownId) => (dispatch) => {
    console.log(e.target.value);
    if (e.target.value === "Підписатись"){
        e.target.value = "Відписатись"
    } else if (e.target.value === "Відписатись"){
        e.target.value = "Підписатись"
    }


    axios({
        method: 'POST',
        url: '/updatesub',
        data: `id=${+userId}&ownId=${+ownId}`,
        headers: requestHeaders
    }).then( res => {
        dispatch(sendRequestForUpdateSub());
        return res;
    }).then( res => {
        if(res) {
            dispatch({type: UPDATE_SUBSCRIBE_SUCCESS})

        }
    })
        .catch(err => {
            console.log(err);

        });
};