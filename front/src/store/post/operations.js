import axios from "axios";
import {requestHeaders} from "../../helpers/requests_helper";
import {sendRequestForUpdateLikeCounter} from "./actions";
import {UPDATE_LIKE_COUNTER_SUCCESS} from "./types";


export const updateLikeCounterBD = (postId) => (dispatch) => {
  axios({
    method: 'POST',
    url: '/updatelike',
    data: `id=${postId}`,
    headers: requestHeaders
  }).then( res => {
    dispatch(sendRequestForUpdateLikeCounter());
    return res;
  }).then( res => {
    if(res) {
      dispatch({type: UPDATE_LIKE_COUNTER_SUCCESS})
    }
  })
    .catch(err => {
      console.log(err);

    });
};