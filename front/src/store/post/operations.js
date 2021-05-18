import axios from "axios";
import {requestHeaders} from "../../helpers/requests_helper";
import {UPDATE_LIKE_COUNTER_REQUEST, UPDATE_LIKE_COUNTER_REQUEST_SUCCESS} from "./types";


export const updateLikeCounterBD = (postId, userAct) => (dispatch) => {
  axios({
    method: 'POST',
    url: '/updatelike',
    data: `id=${postId}&userAct=${userAct}`,
    headers: requestHeaders
  }).then( res => {
    dispatch({type: UPDATE_LIKE_COUNTER_REQUEST})
    return res;
  }).then( res => {
    if(res) {
      dispatch({type: UPDATE_LIKE_COUNTER_REQUEST_SUCCESS})
    }
  })
    .catch(err => {
      console.log(err);
    });
};